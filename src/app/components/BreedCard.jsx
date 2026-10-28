import Image from "next/image";
import Link from "next/link";
import Fav from "./Fav";

function BreedCardItem({ id, image, name, origin }) {
  const imageSrc = image || "/dummydog.jpg";

  return (
    <article className="relative overflow-hidden rounded-2xl bg-white shadow-sm">
      <Link
        href={`/detailview?id=${encodeURIComponent(id)}`}
        className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-label={`View details for ${name}`}
      >
        <Image
          src={imageSrc}
          alt={name ? `Photo of ${name}` : "Dog breed"}
          width={400}
          height={286}
          className="aspect-[1.4] w-full object-cover"
        />
        <div className="p-2.5">
          <h3 className="font-semibold leading-tight text-neutral-800">
            {name}
          </h3>
          <p className="mt-1 text-sm leading-tight text-neutral-400">
            {origin || "Origin unknown"}
          </p>
        </div>
      </Link>
      <Fav id={id} image={image} name={name} origin={origin} />
    </article>
  );
}

export default async function BreedCard({ searchParams }) {
  const { query = "" } = await searchParams;
  const url = query
    ? `https://api.thedogapi.com/v1/breeds/search?q=${query}`
    : "https://api.thedogapi.com/v1/breeds";

  const response = await fetch(url, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });

  const breeds = await response.json();

  const columns = [
    breeds.filter((_, index) => index % 2 === 0),
    breeds.filter((_, index) => index % 2 !== 0),
  ];

  return (
    <main className="grid grid-cols-2 gap-4 px-3 pb-24">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-4">
          {column.map((breed) => (
            <BreedCardItem
              key={breed.id}
              id={breed.id}
              image={breed.image?.url}
              name={breed.name}
              origin={breed.origin}
            />
          ))}
        </div>
      ))}
      {breeds.length === 0 && (
        <p className="col-span-2 py-8 text-center text-neutral-500">
          No breeds found.
        </p>
      )}
    </main>
  );
}

// const BreedCard = ({ image, name, origin }) => {
//   return (
//     <fetchBreeds />
//     // <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
//     //   <Image
//     //     src={image}
//     //     alt={name}
//     //     width={200}
//     //     height={200}
//     //     className="aspect-[1.4] w-full object-cover"
//     //   />

//     //   <div className="p-2.5">
//     //     <h3 className="font-semibold leading-tight text-neutral-800">{name}</h3>
//     //     <p className="mt-1 text-sm leading-tight text-neutral-400">{origin}</p>
//     //   </div>
//     // </article>
//   );
// };

// export default BreedCard;

// sfc
