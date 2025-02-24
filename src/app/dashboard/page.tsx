"use client";

import Header from "../components/dashboard/Header";
import NavBar from "../components/dashboard/Navbar";
import Destaques from "../components/dashboard/Destaques";
import Itens from "../components/dashboard/Itens";
import Lojas from "../components/dashboard/Lojas";
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
