export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some tasks to your to-do list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Well done! Enjoy your leisure time~ 🌷"
          : ` 💼 You have ${numItems} tasks on your list, and you already done ${numPacked}/${numItems}`}
      </em>
    </footer>
  );
}
