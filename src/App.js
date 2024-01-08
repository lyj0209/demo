import './App.css';
import Form from "./Form";
import Logo from "./Logo";
import Stats from "./Stats";
import { useLocalStorageState } from './useLocalStorageState';


import PackingList from "./PackingList";


function App() {
  


  const [items, setItems] = useLocalStorageState([], "items");
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;


  function handleAddItems(item) {

    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }
  

  return (
    <div className="app">
      <Logo currentDate={formattedDate}/>
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
            <Stats items={items} />

    </div>
  );
}

export default App;
