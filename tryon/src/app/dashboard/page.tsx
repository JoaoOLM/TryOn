"use client";

import Header from "../components/Header";
import NavBar from "../components/Navbar";
import Destaques from "../components/Destaques";
import Itens from "../components/Itens";
import Lojas from "../components/Lojas";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <NavBar />
      <Destaques />
      <Itens />
      <Lojas />
      <Footer />
    </div>
  );
}
