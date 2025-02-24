export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#fff8f6] shadow-md">
      <div className="flex justify-around py-2 text-gray-400">
        <button className="flex flex-col items-center text-brown-600  hover:text-brown-600">
          <span className="material-icons">home</span>
          <span className="text-xs mt-2">Home</span>
        </button>

        <button className="flex flex-col items-center  hover:text-brown-600">
          <span className="material-icons">shopping_cart</span>
          <span className="text-xs mt-2">Pedidos</span>
        </button>

        <button className="flex flex-col items-center relative hover:text-brown-600">
          <span className="material-icons">notifications</span>
          <span className="text-xs mt-2">Notificações</span>
          <span className="absolute -top-1 -right-2 bg-red-600 text-white rounded-full text-xs px-1 font-bold">
            3
          </span>
        </button>
      </div>
    </footer>
  );
}
