"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Itens() {
  const router = useRouter();

  return (
    <section className="mt-6 px-4">
      <h2 className="text-lg text-black-700 font-bold mb-2">Itens</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-[#fff8f6] p-2 rounded-lg shadow-sm hover:cursor-pointer"
            onClick={() => router.push("/produto")}
          >
            <Image
              src="/dashboard/produto.jpg"
              alt="Produto"
              width={200}
              height={150}
              className="rounded-md mb-2 object-cover h-32 w-full"
            />
            <p className="text-sm font-medium text-gray-800">
              Camisa verde gola curta
            </p>
            <p className="text-brown-600 text-xs font-semibold">$900,00</p>
            <p className="text-xs text-gray-500">Street Wear</p>
          </div>
        ))}
      </div>
    </section>
  );
}
