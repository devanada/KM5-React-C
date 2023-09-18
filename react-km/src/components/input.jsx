import React from "react";

function Input(props) {
  const { label, onChange, type, placeholder, value, defaultValue } = props;

  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        className="border-2 rounded-md"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

function Select(props) {
  const { label, placeholder, value, onChange, options = [] } = props;

  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <select className="border-2 rounded-md" onChange={onChange} value={value}>
        <option disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function TextArea(props) {
  const { label, onChange, type, placeholder, value, defaultValue } = props;

  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <textarea
        className="border-2 rounded-md"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

function Radio(props) {
  const { label, onChange, value } = props;

  return (
    <>
      <input type="radio" value={value} onChange={onChange} />
      <label>{label}</label>
    </>
  );
}

export { Input, Select, TextArea, Radio }; // named export
// export default Input // export default
