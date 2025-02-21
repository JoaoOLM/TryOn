"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Code: Home page
export default function Home() {
  const router = useRouter();
  return (
    <body className="flex flex-col justify-between min-h-screen bg-white">
      <div className="flex flex-col items-center w-full justify-center flex-1">
        <div className="flex justify-center mb-6">
          <Image
            src="/login/moss.png"
            alt="Avatar"
            width={96}
            height={96}
            className="rounded-full object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Bem-vindo ao TryOn!
        </h1>
        <p className="text-center text-gray-500 mb-6">Prove e aprove</p>

        <form className="w-80">
          <div className="mb-4 ">
            <label
              id="Email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Insira o seu email"
            />
          </div>

          <div className="mb-4 ">
            <label
              id="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Insira a sua senha"
            />
          </div>

          <div className="mb-4">
            <button
              type="button"
              onClick={() => router.push("/dashboard")}
              className="w-full bg-brown-600 text-white py-2 rounded-full hover:bg-brown-500 transition duration-150"
            >
              Entrar
            </button>
          </div>

          <p className="text-center text-sm font-bold text-gray-800">
            Esqueceu a senha?
            <a href="#" className="text-brown-600 hover:underline">
              Clique aqui
            </a>
          </p>
        </form>
      </div>
      <footer className="text-center text-sm font-bold text-gray-800 pb-6">
        Ainda não tem uma conta?
        <a href="#" className="text-brown-600 hover:underline">
          Cadastre-se!
        </a>
      </footer>
    </body>
  );
}
