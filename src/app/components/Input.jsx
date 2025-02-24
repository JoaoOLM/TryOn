export const Input = ({
  label,
  id,
  type,
  value,
  onChange,
  placeholder,
  required,
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 font-medium mb-1">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 text-black-700"
    />
  </div>
);
