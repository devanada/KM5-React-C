import React from "react";

/**
 *
 * @param {{
 * label: string,
 * onClick: Function,
 * type: string
 * }} props Props for the component
 */
export default function Button(props) {
  const { label, onClick, type } = props;

  return (
    <button
      className="p-3 bg-neutral-500 rounded-xl px-6 text-white font-bold"
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
}
