import React, {useState} from "react";

// const appClass = isOn ? "App dark" : "App light";


function Item({ name, category }) {
  
  const [isAdded, setIsAdded] = useState(false)

  function handleClick () {
    setIsAdded(!isAdded)
  }

  return (
    <li className={isAdded? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={isAdded? 'remove' : 'add'}
        onClick = {handleClick}>{isAdded ? "Remove from cart" : "Add to cart"}
      </button>
    </li>
  );
}

export default Item;
