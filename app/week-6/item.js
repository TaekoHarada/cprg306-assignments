export default function Item({ id, name, quantity, category }) {
  return (
    <main>
      <div className="flex flex-wrap">
        <div className="mx-5">
          Name:<span className="font-bold text-xl"> {name}</span>
        </div>
        <div className="mx-5">
          Quantity:<span className="font-bold text-xl"> {quantity}</span>
        </div>
        <div className="mx-5">
          Category: <span className="font-bold text-xl"> {category}</span>
        </div>
      </div>
    </main>
  );
}
