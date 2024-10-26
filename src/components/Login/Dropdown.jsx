import { useState } from "react";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Choose a role");

  const options = ["Admin", "User"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex w-64 justify-between rounded-lg bg-white border border-gray-300 px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none"
        >
          {selectedOption}
          <span className="ml-2">&#x25BC;</span>
        </button>
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-64 rounded-lg bg-white border border-gray-300 shadow-lg duration-500">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-200 rounded-lg"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
