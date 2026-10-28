import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoriteStore = create(
  persist(
    (set) => ({
      favorites: [],

      toggleFavorite: (breed) =>
        set((state) => {
          // Ensure favorites is always an array.
          const favorites = Array.isArray(state.favorites)
            ? state.favorites
            : [];

          const alreadyFavorite = favorites.some(
            (favorite) => String(favorite.id) === String(breed.id),
          );

          return {
            favorites: alreadyFavorite
              ? favorites.filter(
                  (favorite) => String(favorite.id) !== String(breed.id),
                )
              : [...favorites, breed],
          };
        }),
    }),
    {
      name: "family-friends-favorites",

      // Validate persisted data when restoring the store.
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...(persistedState && typeof persistedState === "object"
          ? persistedState
          : {}),
        favorites: Array.isArray(persistedState?.favorites)
          ? persistedState.favorites
          : [],
      }),
    },
  ),
);
