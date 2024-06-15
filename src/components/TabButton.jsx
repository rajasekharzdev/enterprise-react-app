import "./TabButton.css";
export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onSelect={onSelect}>{children}</button>
    </li>
  );
}
