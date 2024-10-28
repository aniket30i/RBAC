import { useState } from "react";
import { useContext } from "react";
import Context from "../context/context";

const CustomDropdown = ({ options, defaultOp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOp);

  const { setUserType } = useContext(Context);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setUserType(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex w-full justify-between rounded-2xl bg-white border border-gray-300 px-4 py-2 text-gray-700 shadow-sm text-lg font-semibold hover:bg-orange-300 focus:outline-none"
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
              className="cursor-pointer px-4 py-2 hover:bg-orange-300 rounded-lg"
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
