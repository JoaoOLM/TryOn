"use client"; // Certifique-se de que o componente está rodando no cliente

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../Input";
import { Button } from "../Button";

// Mock da base de usuários
const MOCK_USERS = [
  { email: "usuario@teste.com", password: "123456" },
  { email: "admin@teste.com", password: "admin123" },
];

// Simulação de delay da API
const mockApiCall = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const normalizedEmail = data.email.trim().toLowerCase();
      const normalizedPassword = data.password.trim();

      const user = MOCK_USERS.find(
        (u) =>
          u.email.toLowerCase() === normalizedEmail &&
          u.password === normalizedPassword
      );

      if (user) {
        resolve({ success: true, token: "mock-jwt-token" });
      } else {
        reject(new Error("Credenciais inválidas"));
      }
    }, 1000); // 1 segundo de delay
  });
};

export const Form = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setError(""); // Limpa erro ao digitar
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Tentando login com:", formData); // Depuração

      const response = await mockApiCall(formData);

      console.log("Login bem-sucedido!", response); // Depuração

      // Simula salvamento do token no localStorage
      localStorage.setItem("token", response.token);

      // Redireciona para dashboard
      router.push("/dashboard");
    } catch (err) {
      console.error("Erro no login:", err); // Depuração
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="w-80" onSubmit={handleSubmit}>
      <Input
        label="Email"
        type="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Insira o seu email"
        required
      />
      <Input
        label="Senha"
        type="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Insira a sua senha"
        required
      />
      {error && (
        <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
      )}
      <div className="mb-4">
        <Button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 rounded-md text-white font-semibold ${
            loading ? "bg-brown-600" : "bg-brown-600 hover:bg-brown-600"
          }`}
        >
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </div>
      <p className="text-center text-sm font-bold text-gray-800">
        Esqueceu a senha?
        <a href="#" className="text-brown-600 hover:underline ml-1">
          Clique aqui
        </a>
      </p>
    </form>
  );
};

export default Form;
