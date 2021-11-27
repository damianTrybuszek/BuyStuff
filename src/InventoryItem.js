import './App.css';

function InventoryItem(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <hr></hr>
      <p>{props.price}</p>
    </div>
  );
}

export default InventoryItem;