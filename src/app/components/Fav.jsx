"use client";

import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavoriteStore } from "../store/favoriteStore";

const Fav = ({ id, image, name, origin }) => {
  const [hasHydrated, setHasHydrated] = useState(false);
  const favorites = useFavoriteStore((state) => state.favorites);
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const isFavorite =
    hasHydrated &&
    favorites.some((favorite) => String(favorite.id) === String(id));

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const favoriteBreed = {
    id,
    name,
    origin,
    image: image || "/dummydog.jpg",
  };

  return (
    <button
      type="button"
      aria-label={`${isFavorite ? "Remove" : "Add"} ${name} ${isFavorite ? "from" : "to"} favorites`}
      aria-pressed={isFavorite}
      onClick={() => toggleFavorite(favoriteBreed)}
      className="absolute right-2 top-2 rounded-full bg-white/90 p-2 text-rose-500 shadow-sm transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {isFavorite ? (
        <FaHeart aria-hidden="true" />
      ) : (
        <FaRegHeart aria-hidden="true" />
      )}
    </button>
  );
};

export default Fav;
