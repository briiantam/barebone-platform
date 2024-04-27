import { useState } from "react";

interface CheckboxProps {
  id: string;
  label: string;
  subLabel?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  subLabel,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={handleChange}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-l leading-6">
        <label htmlFor={id} className="text-gray-900">
          <span className="font-medium">{label}</span>
          {subLabel && (
            <>
              {" "}
              <span className="text-gray-500">{subLabel}</span>
            </>
          )}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
