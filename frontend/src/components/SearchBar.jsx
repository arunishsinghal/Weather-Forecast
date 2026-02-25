import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-8">
      <input
        type="text"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="
          px-4 py-2
          rounded-lg
          bg-slate-800
          text-white
          placeholder-gray-400
          border border-slate-600
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
        "
      />

      <button
        type="submit"
        className="
          px-6 py-2
          rounded-lg
          bg-indigo-600
          hover:bg-indigo-700
          transition
          font-semibold
        "
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;