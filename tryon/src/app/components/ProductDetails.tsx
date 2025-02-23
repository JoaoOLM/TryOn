import { useState } from "react";
import Image from "next/image";

interface ProductDetailsProps {
  name: string;
  description: string;
  imageUrl: string;
  rating?: number;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  description,
  imageUrl,
  rating = 4.5,
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const sizes = ["P", "M", "G", "GG"];
  const colors = ["red", "black", "yellow"];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 mb-10">
      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 lg:gap-16 mt-10 sm:mt-20 px-4 sm:px-0">
        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={400}
          className="rounded-3xl"
        />

        <div className="flex flex-col items-start gap-6 sm:gap-8 pt-4">
          <div>
            <h3 className="text-sm sm:text-sm text-gray-500">
              Conjunto de moletom
            </h3>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold text-gray-800">
                {name}
              </h1>
              <span className="text-yellow-400 text-sm sm:text-sm font-semibold">
                ★ {rating}
              </span>
            </div>
            <p className="text-sm sm:text-sm text-gray-600 mt-2 max-w-[400px]">
              {description}
            </p>
          </div>

          {/* Seletor de Tamanho */}
          <div>
            <h2 className="font-medium text-gray-700 mb-2">
              Escolha o tamanho
            </h2>
            <div className="flex gap-2 sm:gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`border px-4 py-2 text-gray-700 rounded-lg focus:ring-2 focus:ring-black-700 transition duration-200 ${
                    selectedSize === size
                      ? "bg-black-700 text-white-900"
                      : "hover:bg-black-700 hover:scale-105"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Seletor de Cor */}
          <div>
            <h2 className="font-medium text-gray-700 mb-2">Escolha a cor</h2>
            <div className="flex items-center gap-4 sm:gap-6">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full transition duration-200 ${
                    selectedColor === color
                      ? "border-4 border-white-900"
                      : "hover:scale-110"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="w-full sm:w-auto py-4 sm:py-3 px-6 bg-gray-100 rounded-lg text-gray-800 font-medium hover:bg-gray-200">
              Adicionar ao Carrinho
            </button>
            <button className="w-full sm:w-auto py-4 sm:py-3 px-6 bg-red-600 rounded-lg text-white font-medium hover:bg-red-700">
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
