const Input = (props) => {
  const { type, placeholder, name, value, onChange } = props;

  return (
    <input
      type={type}
      className="text-sm border rounded-lg w-full py-2 px-3 border-[#9AA580] text-black placeholder-opacity-50"
      placeholder={placeholder}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
