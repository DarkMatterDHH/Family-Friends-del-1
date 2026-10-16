import { FiBell } from "react-icons/fi";

const Logo = () => {
  return (
    <header className="flex items-center justify-between bg-peach p-4">
      <h1 className="text-xl font-bold">FamilyFriends</h1>

      <button
        type="button"
        aria-label="Notifikationer"
        className="rounded-full p-2 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <FiBell aria-hidden="true" size={22} />
      </button>
    </header>
  );
};

export default Logo;
