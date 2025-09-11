export default function Stats({ items }) {
  if (items.length === 0)
    return <p className="stats">Start adding items to list 🚗</p>;

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to GO ✈️"
          : `You need ${numItems} items and packed ${packedItems} (${percentage}%)items`}
      </em>
    </footer>
  );
}
