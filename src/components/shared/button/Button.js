
export const Button = ({ className, buttonName}) => {
  return (
    <button
      className={`cool-link border border-white h-10  text-white font-semibold hover:border-0 mr-2 mb-2 transition delay-150 transform ${className}`}
    //   style={{ width: "170px" }}
    >
      {buttonName}
    </button>
  );
};

