"use client";

interface Review {
  name: string;
  comment: string;
  rating: number;
}

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className="mt-10 max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800">Avaliações</h2>

      {/* Lista de Avaliações */}
      <div className="mt-6 space-y-6">
        {reviews.length === 0 ? (
          <p className="text-gray-500">Ainda não há avaliações.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.name}
                </h3>
                <span className="text-yellow-400 font-bold">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
