export default function Item({ item, onSelect }) {
  return (
    <main onClick={() => onSelect(item)} className="cursor-pointer">
      <div className="flex flex-wrap">
        <div className="mx-5">
          Name:<span className="font-bold text-xl"> {item.name}</span>
        </div>
        <div className="mx-5">
          Quantity:<span className="font-bold text-xl"> {item.quantity}</span>
        </div>
        <div className="mx-5">
          Category: <span className="font-bold text-xl"> {item.category}</span>
        </div>
      </div>
    </main>
  );
}
