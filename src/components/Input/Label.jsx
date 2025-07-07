const Label = (props) => {
  const { children, htmlFor } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-slate-700 text-sm font-bold"
    >
      {children}
    </label>
  );
};

export default Label;
