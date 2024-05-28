export default function Item({ name, quantity, category }) {
  return (
    <main>
      <div>
        <div>Name: {name}</div>
        <div>Quantity: {quantity}</div>
        <div>Category: {category}</div>
      </div>
    </main>
  );
}
