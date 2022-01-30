import React from "react";
import SingleItem from "./SingleItem";

const pencil = {
  id: 1,
  name: "Pencils",
  description: "NO.2 pencil",
  price: "1.99",
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
class ItemList extends React.Component {
  render() {
    return (
      <>
        <div className="item-list">
          <SingleItem item={pencil} />
        </div>
      </>
    );
  }
}

export default ItemList;
