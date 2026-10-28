import Image from "next/image";
import Link from "next/link";
import Description from "./components/Description";
import History from "./components/History";
import Temperament from "./components/Temperament";
import Fav from "../../components/Fav";
import Menuer from "../../components/Menuer";
import { MdArrowBackIosNew } from "react-icons/md";

export default async function DetailView({ searchParams }) {
  const { id } = await searchParams;
  let description = "";
  let history = "";
  let temperament = "";
  let breedName = "Dog breed";
  let origin = "";
  let image = "/dummydog.jpg";

  if (typeof id === "string" && /^\d+$/.test(id)) {
    try {
      const response = await fetch(
        `https://api.thedogapi.com/v1/breeds/${encodeURIComponent(id)}`,
        {
          headers: {
            "x-api-key": process.env.API_KEY,
          },
          cache: "no-store",
        },
      );

      if (response.ok) {
        const breed = await response.json();
        breedName = breed.name || breedName;
        origin = breed.origin || "";
        image = breed.image?.url || image;
        description = breed.description || "";
        history = breed.history || "";
        temperament = breed.temperament || "";
      }
    } catch {
      // The description component displays a fallback if the API is unavailable.
    }
  }

  return (
    <main className="mx-auto w-full max-w-2xl p-6 pb-28">
      <h1 className="mb-6 text-2xl font-bold">Breed details</h1>
      <div className="relative mb-6 overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={`Photo of ${breedName}`}
          width={800}
          height={572}
          className="aspect-[1.4] w-full object-cover"
          priority
        />
        <Link
          href="/"
          aria-label="Back to breed list"
          className="absolute left-3 top-3 z-10 rounded-full bg-white/90 p-2 text-neutral-800 shadow-sm transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <MdArrowBackIosNew aria-hidden="true" size={20} />
        </Link>
        {typeof id === "string" && /^\d+$/.test(id) && (
          <Fav id={Number(id)} image={image} name={breedName} origin={origin} />
        )}
      </div>
      <h2 className="mb-3 text-xl font-semibold">{breedName}</h2>
      <Temperament temperament={temperament} />
      <Description description={description} />
      <History history={history} />
      <Menuer />
    </main>
  );
}
