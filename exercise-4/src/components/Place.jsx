export default function Place(place) {
  const {
    place: {
      id,
      title,
      image: { src, alt },
    },
  } = place;
  return (
    <li key={id} className="place-item">
      <button>
        <img src={src} alt={alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}
