import { useState, useRef, useEffect } from "react";

// Custom CSS untuk scrollbar yang cantik
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f8f9fa;
    border-radius: 10px;
    margin: 4px 0;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #9AA580 0%, #8a9570 100%);
    border-radius: 10px;
    border: 1px solid #f8f9fa;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #8a9570 0%, #7a8560 100%);
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.2);
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:active {
    background: linear-gradient(180deg, #7a8560 0%, #6a7550 100%);
  }
  
  .custom-scrollbar::-webkit-scrollbar-corner {
    background: #f8f9fa;
  }
`;

// Inject CSS ke head
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = scrollbarStyles;
  if (!document.head.querySelector('style[data-scrollbar="custom"]')) {
    styleElement.setAttribute("data-scrollbar", "custom");
    document.head.appendChild(styleElement);
  }
}

const SearchableSelect = ({
  name,
  value,
  onChange = () => {},
  options = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Filter options based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredOptions(options);
    } else {
      const filtered = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
    setHighlightedIndex(-1);
  }, [searchTerm, options]);

  // Get display value
  const getDisplayValue = () => {
    if (value) {
      const selectedOption = options.find((option) => option.value === value);
      return selectedOption ? selectedOption.label : "";
    }
    return "";
  };

  // Handle input change
  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    setIsOpen(true);

    // If input is cleared, reset selection
    if (newSearchTerm === "") {
      onChange({ target: { name, value: "" } });
    }
  };

  // Handle option selection
  const handleOptionSelect = (option) => {
    onChange({ target: { name, value: option.value } });
    setSearchTerm("");
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  // Handle input focus
  const handleInputFocus = () => {
    setIsOpen(true);
    setSearchTerm("");
  };

  // Handle input blur
  const handleInputBlur = () => {
    // Delay to allow option click to register
    setTimeout(() => {
      setIsOpen(false);
      setSearchTerm("");
      setHighlightedIndex(-1);
    }, 200);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        setIsOpen(true);
        e.preventDefault();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
          handleOptionSelect(filteredOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setSearchTerm("");
        setHighlightedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  // Clear selection
  const handleClear = () => {
    onChange({ target: { name, value: "" } });
    setSearchTerm("");
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          className="appearance-none border border-[#9AA580] text-sm rounded-lg w-full py-2 px-4 pr-10 text-black focus:outline-none focus:ring-2 focus:ring-[#9AA580] focus:border-transparent"
          value={isOpen ? searchTerm : getDisplayValue()}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          placeholder={`Semua ${name.charAt(0).toUpperCase() + name.slice(1)}`}
          autoComplete="off"
        />

        <div className="absolute inset-y-0 right-0 flex items-center">
          {value && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 mr-1 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          <div className="pointer-events-none pr-3 flex items-center">
            <svg
              className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 w-full mt-1 bg-white border border-[#9AA580] rounded-lg shadow-lg max-h-60 overflow-y-auto custom-scrollbar"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#9AA580 #f8f9fa",
          }}
        >
          {filteredOptions.length === 0 ? (
            <div className="px-4 py-2 text-gray-500 text-sm">
              Tidak ada hasil ditemukan
            </div>
          ) : (
            <>
              {/* "Semua" option */}
              <div
                className={`px-4 py-2 cursor-pointer text-sm hover:bg-gray-100 ${
                  highlightedIndex === -1 ? "bg-gray-100" : ""
                }`}
                onClick={() =>
                  handleOptionSelect({
                    value: "",
                    label: `Semua ${
                      name.charAt(0).toUpperCase() + name.slice(1)
                    }`,
                  })
                }
              >
                Semua {name.charAt(0).toUpperCase() + name.slice(1)}
              </div>

              {filteredOptions.map((option, index) => (
                <div
                  key={option.value}
                  className={`px-4 py-2 cursor-pointer text-sm hover:bg-gray-100 ${
                    highlightedIndex === index ? "bg-gray-100" : ""
                  } ${
                    value === option.value ? "bg-blue-50 text-blue-600" : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.label}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

// Komponen SelectInput asli (tetap tersedia untuk backward compatibility)
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

export default SearchableSelect;
export { SelectInput };
