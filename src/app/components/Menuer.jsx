import { FiHome } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";

const Menuer = () => {
  return (
    <footer>
      <nav className="fixed bottom-0 left-0 right-0 z-10 flex items-center justify-center bg-white p-4 shadow-md">
        <ul className="grid grid-cols-4 w-full max-w-md">
          <li>
            <button
              type="button"
              aria-label="Hjem"
              className="rounded-full p-2 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <FiHome aria-hidden="true" size={22} />
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Favoritter"
              className="rounded-full p-2 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <CiStar aria-hidden="true" size={22} />
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Beskeder"
              className="rounded-full p-2 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <IoChatbubbleOutline aria-hidden="true" size={22} />
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Profil"
              className="rounded-full p-2 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <MdOutlinePersonOutline aria-hidden="true" size={22} />
            </button>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Menuer;
