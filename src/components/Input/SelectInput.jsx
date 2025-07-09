const SelectInput = ({ name, value, onChange = () => {}, options = [] }) => {
  return (
    <div className="relative w-full">
      <select
        className="appearance-none border border-[#9AA580] text-sm rounded-lg w-full py-2 px-4 pr-10 text-black"
        value={value}
        onChange={onChange}
        name={name}
      >
        <option value="">
          Semua {name.charAt(0).toUpperCase() + name.slice(1)}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg
          className="w-4 h-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default SelectInput;
