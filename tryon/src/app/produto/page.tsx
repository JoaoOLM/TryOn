"use client";
import { useState, useEffect } from "react";
import { ProductHeader } from "../components/ProductHeader";
import { ProductDetails } from "../components/ProductDetails";
import { ReviewForm } from "../components/ReviewForm";
import { ReviewList } from "../components/ReviewList";
import Footer from "../components/Footer";

interface Review {
  name: string;
  comment: string;
  rating: number;
}

export default function ProductPage() {
  const [reviews, setReviews] = useState<Review[]>([]);

  // Carregar avaliações do localStorage quando a página for carregada
  useEffect(() => {
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    } else {
      // Se não houver dados, define um review inicial
      setReviews([
        {
          name: "Gustavo Honda",
          comment: "Produto de extrema qualidade, recomendo a todos",
          rating: 5,
        },
      ]);
    }
  }, []);

  // Função para adicionar novas avaliações e salvar no localStorage
  const handleAddReview = (review: Review) => {
    const updatedReviews = [...reviews, review];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };

  return (
    <div>
      <ProductHeader title="Detalhes do Produto" />
      <ProductDetails
        name="Casaco com gola e Calça moletom"
        description="Lorem ipsum dolor sit amet consectetur. Feugiat id aliquam volutpat facilisis senectus mauris ac sagittis. Metus sed sem nulla sed vitae."
        imageUrl="/produto.jpg"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10 pb-20">
        <ReviewList reviews={reviews} />
        <ReviewForm onSubmit={handleAddReview} />
      </div>
      <Footer />
    </div>
  );
}
