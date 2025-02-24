import { Avatar } from "./components/login/Avatar";
import { Form } from "./components/login/Form";
import { Footer } from "./components/login/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-white">
      <div className="flex flex-col items-center w-full justify-center flex-1">
        <Avatar />
        <h1 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Bem-vindo ao TryOn!
        </h1>
        <p className="text-center text-gray-500 mb-6">Prove e aprove</p>
        <Form />
      </div>
      <Footer />
    </div>
  );
}
