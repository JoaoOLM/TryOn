import Image from "next/image";

export default function Destaques() {
  const imagens = [
    "/dashboard/renner.jpeg",
    "/dashboard/centauro.png",
    "/dashboard/riachuelo.png",
  ];

  return (
    <section className="mt-4 px-4">
      <h2 className="text-lg text-black-700 font-bold mb-2">Destaques</h2>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory custom-scrollbar scroll-smooth">
        {imagens.map((src, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%]"
          >
            <Image
              src={src}
              alt={`Imagem ${index + 1}`}
              width={400}
              height={200}
              className="w-full h-36 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
