import React, { useState } from 'react';

interface Review {
  id: string;
  driverName: string;
  rating: number;
  comment: string;
  date: string;
}

const mockReviews: Review[] = [
  { id: 'R-001', driverName: 'Ramesh Kumar', rating: 4.8, comment: 'Safe driver, punctual and courteous.', date: '2025-10-25' },
  { id: 'R-002', driverName: 'Sonal Verma', rating: 4.5, comment: 'Good handling in city traffic, helpful.', date: '2025-10-28' },
  { id: 'R-003', driverName: 'Amit Patel', rating: 4.2, comment: 'Reliable but needs improvement on documentation.', date: '2025-11-01' },
];

const DriverReview: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(mockReviews);
  const [name, setName] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState('');

  const handleAdd = () => {
    if (!name.trim() || !comment.trim()) return;
    const newReview: Review = {
      id: `R-${Math.floor(Math.random() * 900) + 100}`,
      driverName: name.trim(),
      rating,
      comment: comment.trim(),
      date: new Date().toISOString().slice(0, 10),
    };
    setReviews(prev => [newReview, ...prev]);
    setName('');
    setRating(5);
    setComment('');
  };

  const handleRemove = (id: string) => {
    setReviews(prev => prev.filter(r => r.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Driver Reviews</h3>
        <p className="text-sm text-gray-500">See ratings and feedback from recent trips</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="lg:col-span-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
          <h4 className="text-lg font-semibold mb-3">Add a Review</h4>
          <input
            type="text"
            placeholder="Driver name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-3 px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className="mb-3">
            <label className="text-sm text-gray-600 block mb-1">Rating: {rating.toFixed(1)}</label>
            <input
              type="range"
              min={1}
              max={5}
              step={0.1}
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <textarea
            placeholder="Write feedback..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full mb-3 px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows={4}
          />
          <button
            onClick={handleAdd}
            className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg"
          >
            Submit Review
          </button>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((r) => (
              <div key={r.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-800">{r.driverName}</h5>
                    <p className="text-sm text-gray-500">{r.date} • <span className="font-semibold">{r.rating.toFixed(1)}</span> ⭐</p>
                  </div>
                  <button onClick={() => handleRemove(r.id)} className="text-sm text-red-500 hover:underline">Remove</button>
                </div>
                <p className="mt-3 text-gray-600">{r.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverReview;
