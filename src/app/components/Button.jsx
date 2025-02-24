export const Button = ({
  onClick,
  children,
  type = "button",
  className = "",
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`w-full bg-brown-600 text-white py-2 rounded-full hover:bg-brown-600 transition duration-150 font-semibold ${className}`}
  >
    {children}
  </button>
);
