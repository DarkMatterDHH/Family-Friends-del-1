const History = ({ history }) => {
  return (
    <article className="mt-6">
      <h2 className="text-lg font-semibold">Breed history</h2>
      <p className="mt-2 text-neutral-600">
        {history || "No breed history is available for this breed."}
      </p>
    </article>
  );
};

export default History;
