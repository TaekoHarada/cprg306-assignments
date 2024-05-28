export default function Item({ name, quantity, category }) {
  return (
    <main>
      <div>
        <div>
          Name:<span className="font-bold text-xl"> {name}</span>
        </div>
        <div>
          Quantity:<span className="font-bold text-xl"> {quantity}</span>
        </div>
        <div>
          Category: <span className="font-bold text-xl"> {category}</span>
        </div>
      </div>
    </main>
  );
}
