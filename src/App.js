import React, {useState} from 'react';
import './App.css';
import Menu from './components/Menu';
import items from './components/Data';
import Categories from './components/Categories';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterCat={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}


export default App;
