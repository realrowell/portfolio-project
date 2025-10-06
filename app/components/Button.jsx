import "@fontsource/poppins/700.css";

var sectionStyle = {
    poppinsBold: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "700",
    },
}

export default function Button({ children, onClick, variant = "primary", className = "" }) {
  const baseStyles =
    "px-6 py-3 rounded-2xl font-semibold transition-all duration-300";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-x",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={sectionStyle.poppinsBold}
    >
      {children}
    </button>
  );
}
