import Image from "next/image";

export default function Lojas() {
  return (
    <section className="mt-6 px-4 mb-20">
      <h2 className="text-lg text-black-700 font-bold mb-2">Lojas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-10">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-[#fff8f6] p-2 rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-2">
              <Image
                src="/dashboard/loja.jpg"
                alt="Loja"
                width={50}
                height={50}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-800">Street Wear</p>
                <p className="text-sm text-gray-500">Loja de roupas</p>
              </div>
            </div>
            <button className="text-brown-600 font-medium">Ver</button>
          </div>
        ))}
      </div>
    </section>
  );
}
