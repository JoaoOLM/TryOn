import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string;
}

export const ProductHeader: React.FC<HeaderProps> = ({ title }) => {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full bg-white-900 shadow-md z-50 px-4 sm:px-8 md:px-16">
      <div className="flex items-center justify-between py-3">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <span className="material-icons">arrow_back</span>
          <span className="hidden sm:inline text-xs sm:text-sm font-medium">
            Voltar
          </span>
        </button>
        <h1 className="text-base sm:text-lg font-semibold text-gray-800">
          {title}
        </h1>
        <button className="relative flex items-center text-gray-700 hover:text-gray-900 focus:ring-2 focus:ring-gray-300">
          <span className="material-icons">shopping_cart</span>
        </button>
      </div>
    </header>
  );
};
