import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, name, type, placeholder, value, onChange } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputForm;
