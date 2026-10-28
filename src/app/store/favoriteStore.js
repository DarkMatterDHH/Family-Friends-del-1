import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoriteStore = create(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (breed) =>
        set((state) => ({
          favorites: state.favorites.some(
            (favorite) => String(favorite.id) === String(breed.id),
          )
            ? state.favorites.filter(
                (favorite) => String(favorite.id) !== String(breed.id),
              )
            : [...state.favorites, breed],
        })),
    }),
    { name: "family-friends-favorites" },
  ),
);
