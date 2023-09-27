export default function Button(props) {
  const { label } = props;
  return (
    <button
      className="p-3 bg-neutral-500 rounded-xl px-6 text-white font-bold"
      {...props}
    >
      {label}
    </button>
  );
}
