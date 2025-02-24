export default function NavBar() {
  return (
    <nav className="flex justify-around bg-[#fff8f6] text-brown-600 font-medium shadow-md">
      <button className="py-2 border-b-2 border-brown-600 w-1/3 text-center">
        Todos
      </button>
      <button className="py-2 text-gray-400 hover:text-brown-600 w-1/3 text-center">
        Promoções
      </button>
      <button className="py-2 text-gray-400 hover:text-brown-600 w-1/3 text-center">
        Lojas
      </button>
    </nav>
  );
}
