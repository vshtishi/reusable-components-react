import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    if (!name) {
      showAlert(true, "danger", "Please enter ingredient");
    } else if (!quantity) {
      showAlert(true, "danger", "Please enter quantity");
    } else if (name && quantity && isEditing) {
      setList(list.map((item)=> {

      })
    } else {
      showAlert(true, "success", "Ingredient added successfully");
      const newIngredient = {
        id: new Date().getTime().toString(),
        title: name,
        quantity,
      };
      setList([...list, newIngredient]);
      setName("");
      setQuantity("");
    }
    e.preventDefault();
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty ingredient list");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "ingredient removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
    setQuantity(specificItem.quantity)
  };

  return (
    <section className="section-center">
      <form className="recipe-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Recipe</h3>
        <div className="form-control">
          <input
            type="text"
            className="recipe"
            placeholder="e.g eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="recipe"
            placeholder="e.g 1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="recipe-container">
        <Recipe items={list} removeItem={removeItem} editItem={editItem} />
        {list.length > 0 && (
          <button className="clear-btn" onClick={clearList}>
            clear ingredients
          </button>
        )}
      </div>
    </section>
  );
}

export default App;
