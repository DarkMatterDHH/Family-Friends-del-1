const temperamentColors = [
  "bg-sky-200 text-sky-700",
  "bg-rose-200 text-rose-700",
  "bg-lime-200 text-lime-700",
  "bg-amber-200 text-amber-700",
];

const Temperament = ({ temperament }) => {
  const traits = Array.isArray(temperament)
    ? temperament
    : typeof temperament === "string"
      ? temperament.split(",").map((trait) => trait.trim())
      : [];

  return (
    <section className="mb-6" aria-label="Breed temperament">
      <div className="flex flex-wrap gap-2">
        {traits.length > 0 ? (
          traits.map((trait, index) => (
            <span
              key={`${trait}-${index}`}
              className={`rounded-full px-3 py-1 text-xs font-medium ${temperamentColors[index % temperamentColors.length]}`}
            >
              {trait}
            </span>
          ))
        ) : (
          <p className="text-sm text-neutral-500">
            No temperament information is available for this breed.
          </p>
        )}
      </div>
    </section>
  );
};

export default Temperament;
