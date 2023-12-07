/* eslint-disable react/prop-types */
function Button({ children }) {
  return (
    <button className="px-5 py-3 bg-green-950 rounded-sm text-white">
      {children}
    </button>
  );
}

export default Button;
