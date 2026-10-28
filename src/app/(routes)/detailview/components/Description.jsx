const Description = ({ description }) => {
  return (
    <article>
      <h2 className="text-lg font-semibold">Breed description</h2>
      <p className="mt-2 text-neutral-600">
        {description || "No description is available for this breed."}
      </p>
    </article>
  );
};

export default Description;
