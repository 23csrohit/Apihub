import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ChatBotIcon, CloseIcon, SendIcon } from './icons';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hello! I'm the API Hub assistant. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '' || isLoading) return;

    const userMessage: Message = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are a helpful assistant for a website called API Hub, which is a platform for developers to find and use APIs. Be helpful and concise. User question: "${inputValue}"`,
      });
      
      const botMessage: Message = { sender: 'bot', text: response.text };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Gemini API error:', error);
      const errorMessage: Message = { sender: 'bot', text: "Sorry, I'm having trouble connecting. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 bg-api-blue text-white rounded-full p-4 shadow-lg hover:bg-api-blue-800 focus:outline-none focus:ring-2 focus:ring-api-blue focus:ring-offset-2 transition-transform duration-300 transform ${isOpen ? 'scale-0' : 'scale-100'}`}
        aria-label="Toggle Chat"
      >
        <ChatBotIcon className="h-8 w-8" />
      </button>

      <div className={`fixed bottom-8 right-8 w-[calc(100vw-4rem)] max-w-md h-[70vh] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <header className="bg-api-blue text-white p-4 flex justify-between items-center rounded-t-2xl">
          <h3 className="text-xl font-semibold">AI Assistant</h3>
          <button onClick={() => setIsOpen(false)} className="hover:opacity-75" aria-label="Close Chat">
            <CloseIcon className="h-6 w-6" />
          </button>
        </header>

        <main className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-sm rounded-lg px-4 py-2 ${msg.sender === 'user' ? 'bg-api-orange text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 rounded-lg px-4 py-2 rounded-bl-none">
                   <div className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-75"></span>
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></span>
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-300"></span>
                   </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </main>

        <footer className="p-4 border-t border-gray-200">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-api-blue"
              disabled={isLoading}
              aria-label="Chat input"
            />
            <button type="submit" className="bg-api-orange text-white rounded-full p-3 hover:bg-api-orange-600 disabled:bg-gray-400 transition-colors" disabled={isLoading || inputValue.trim() === ''} aria-label="Send Message">
              <SendIcon className="h-5 w-5" />
            </button>
          </form>
        </footer>
      </div>
    </>
  );
};

export default Chatbot;