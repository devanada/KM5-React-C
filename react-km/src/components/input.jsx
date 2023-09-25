import React from "react";
import clsx from "clsx";

/**
 *
 * @param {{
 * label: string,
 * onChange: Function,
 * type: string,
 * placeholder: string,
 * value: string,
 * defaultValue: string
 * register: Function,
 * name: string,
 * error: string
 * accept: string
 * }} props Props for the component
 */
function Input(props) {
  const {
    label,
    onChange,
    type,
    placeholder,
    value,
    defaultValue,
    register,
    name,
    error,
    accept,
  } = props;

  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        className={clsx(
          "border-2 p-2 rounded-md border-red-500",
          !error && "!border-blue-800"
        )}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        accept={accept}
        {...(register ? register(name) : {})}
      />
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

/**
 *
 * @param {{
 * label: string,
 * onChange:
 * function,
 * placeholder: string,
 * value: string,
 * options: Array,
 * register: Function,
 * name: string,
 * error: string
 * }} props Props for the component
 */
function Select(props) {
  const {
    label,
    placeholder,
    value,
    onChange,
    options = [],
    register,
    name,
    error,
  } = props;

  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <select
        className="border-2 rounded-md"
        onChange={onChange}
        value={value}
        {...(register ? register(name) : {})}
      >
        <option disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

/**
 *
 * @param {{
 * label: string,
 * onChange: Function,
 * type: string,
 * placeholder: string,
 * value: string,
 * defaultValue: string,
 * register: Function,
 * name: string,
 * error: string
 * }} props Props for the component
 */
function TextArea(props) {
  const {
    label,
    onChange,
    type,
    placeholder,
    value,
    defaultValue,
    register,
    name,
    error,
  } = props;

  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <textarea
        className={clsx(
          "border-2 p-2 rounded-md border-red-500",
          !error && "!border-blue-800"
        )}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        {...(register ? register(name) : {})}
      />
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

/**
 *
 * @param {{
 * label: string,
 * onChange: Function,
 * value: string,
 * register: Function,
 * name: string,
 * error: string
 * }} props Props for the component
 */
function Radio(props) {
  const { label, onChange, value, register, name } = props;

  return (
    <>
      <input
        type="radio"
        value={value}
        onChange={onChange}
        {...(register ? register(name) : {})}
      />
      <label>{label}</label>
    </>
  );
}

export { Input, Select, TextArea, Radio }; // named export
// export default Input // export default
