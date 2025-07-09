import Label from "./Label";
import SelectInput from "./SelectInput";

const SelectForm = ({ label, name, value, onChange, options }) => {
  return (
    <div className="mb-6 w-full">
      <Label htmlFor={name}>{label}</Label>
      <SelectInput
        name={name}
        value={value}
        onChange={onChange}
        options={options}
      />
    </div>
  );
};

export default SelectForm;
