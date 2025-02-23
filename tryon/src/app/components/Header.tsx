import React, { useState, useEffect } from 'react';

export default function Header() {
  const [location, setLocation] = useState('Carregando localização...');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocationName(latitude, longitude);
        },
        (error) => {
          console.error('Erro ao obter localização:', error);
          setLocation('Localização não disponível');
        }
      );
    } else {
      setLocation('Geolocalização não suportada pelo navegador');
    }
  }, []);

  const fetchLocationName = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
      );
      const data = await response.json();
      if (data.address) {
        const { road, suburb, city, state } = data.address;
        const streetName = road || 'Rua desconhecida';
        const cityName = city || suburb || 'Cidade desconhecida';
        setLocation(`${streetName}, ${cityName}, ${state}`);
      } else {
        setLocation('Localização desconhecida');
      }
    } catch (error) {
      console.error('Erro ao buscar nome da localização:', error);
      setLocation('Erro ao carregar localização');
    }
  };

  return (
    <header className="p-4 flex items-center justify-between bg-[#fff8f6] shadow-md sticky top-0 z-10">
      <div className="flex items-center space-x-2">
        <span className="material-icons text-black-700">account_circle</span>
      </div>

      <div className="flex items-center truncate">
        <button>
          <p className="font-medium text-black-700 truncate">
            {location}
          </p>
        </button>
        <span className="material-icons text-black-700">arrow_drop_down</span>
      </div>

      <div>
        <button>
          <span className="material-icons text-black-700">search</span>
        </button>
      </div>
    </header>
  );
}