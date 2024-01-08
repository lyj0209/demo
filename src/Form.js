import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("normal");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity("normal");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Let's start today's tasks 📅</h3>
      <select
  value={quantity}
  onChange={(e) => setQuantity(e.target.value)}
>
  <option value="normal">Normal</option>
  <option value="urgent">Urgent</option>
</select>
      <input
        type="text"
        placeholder="I'm gonna..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
