
const Button = ({ onClick, isActive, name, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${isActive ? "text-red" : ""} ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
