
import React from 'react';
import { Review } from '@/data/mock-data';
import StarRating from './StarRating';

interface ReviewSectionProps {
  reviews: Review[];
  averageRating: number;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews, averageRating }) => {
  return (
    <section className="my-16">
      <h2 className="section-title">Customer Reviews</h2>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <StarRating rating={averageRating} />
          <span className="text-lg font-medium">{averageRating.toFixed(1)}</span>
          <span className="text-gray-500">({reviews.length} reviews)</span>
        </div>
      </div>
      
      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-8">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-medium">{review.user}</h3>
                <div className="flex items-center gap-2">
                  <StarRating rating={review.rating} />
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-2">{review.comment}</p>
            <div className="flex items-center mt-3">
              <button className="text-sm text-gray-500 hover:text-beauty-700 flex items-center gap-1">
                <span>Helpful ({review.helpful})</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
