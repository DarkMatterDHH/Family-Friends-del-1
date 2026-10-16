import Image from "next/image";

const BreedCard = ({ image, name, origin }) => {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="aspect-[1.4] w-full object-cover"
      />

      <div className="p-2.5">
        <h3 className="font-semibold leading-tight text-neutral-800">{name}</h3>
        <p className="mt-1 text-sm leading-tight text-neutral-400">{origin}</p>
      </div>
    </article>
  );
};

export default BreedCard;

// sfc
