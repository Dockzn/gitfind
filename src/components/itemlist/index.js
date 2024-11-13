import "./style.css";

function ItemList({tittle, description}) {
  return (
    <div className="item-list">
      <strong>{tittle}</strong>
      <p>{description}</p>
      <hr/>
    </div>
  )
}

export default ItemList;