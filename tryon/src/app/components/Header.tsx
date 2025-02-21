export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between bg-[#fff8f6] shadow-md sticky top-0 z-10">
      <div className="flex items-center space-x-2">
        <span className="material-icons text-black-700">account_circle</span>
      </div>

      <div className="flex items-center truncate">
        <button>
          <p className="font-medium text-black-700 truncate">
            Alameda dos Miosótis, 3000
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
