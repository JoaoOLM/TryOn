import Image from "next/image";

export const Avatar = () => (
  <div className="flex justify-center mb-6">
    <Image
      src="/login/moss.png"
      alt="Avatar"
      width={96}
      height={96}
      className="rounded-full object-cover"
    />
  </div>
);
