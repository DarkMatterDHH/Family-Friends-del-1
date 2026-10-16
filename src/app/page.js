import Link from "next/link";
import Logo from "./components/Logo";
import BreedCard from "./components/BreedCard";
import "./globals.css";
import SearchBar from "./components/Search";
import Menuer from "./components/Menuer";

const breeds = [
  {
    id: 1,
    image: "/dummydog.jpg",
    name: "Affenpinscher",
    origin: "Northern, Germany",
  },
  {
    id: 2,
    image: "/dummydog.jpg",
    name: "Afghan Hound",
    origin: "Afghanistan",
  },
  {
    id: 3,
    image: "/dummydog.jpg",
    name: "Airedale Terrier",
    origin: "England",
  },
  { id: 4, image: "/dummydog.jpg", name: "Akita", origin: "Japan" },
];
const leftColumn = breeds.filter((_, index) => index % 2 === 0);
const rightColumn = breeds.filter((_, index) => index % 2 !== 0);

export default function ListView() {
  return (
    <>
      <Logo />
      <SearchBar />
      <h2>ListView</h2>
      <Link href="/detailview">Go to DetailView</Link>
      <div className="grid grid-cols-2 gap-4 px-3">
        {[leftColumn, rightColumn].map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-4">
            {column.map((breed) => (
              <BreedCard
                key={breed.id}
                image={breed.image}
                name={breed.name}
                origin={breed.origin}
              />
            ))}
          </div>
        ))}
      </div>
      <Menuer />
    </>
  );
}
