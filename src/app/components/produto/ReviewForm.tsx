"use client";

import { useState } from "react";

interface Review {
  name: string;
  comment: string;
  rating: number;
}

interface ReviewFormProps {
  onSubmit: (review: Review) => void;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment || rating === 0) return;
    onSubmit({ name, comment, rating });
    setName("");
    setComment("");
    setRating(0);
  };

  return (
    <div className="mt-8 max-w-screen-lg mx-auto">
      <h3 className="text-lg font-semibold text-gray-800">
        Deixe sua avaliação
      </h3>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg text-black-700"
          required
        />
        <textarea
          placeholder="Escreva sua avaliação"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg text-black-700"
          rows={4}
          required
        />
        <div className="flex items-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`text-2xl ${
                rating >= star ? "text-yellow-400" : "text-gray-300"
              } transition duration-200`}
            >
              ★
            </button>
          ))}
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white-900 px-6 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Enviar Avaliação
        </button>
      </form>
    </div>
  );
};
