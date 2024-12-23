// Importing React and the useId hook from React
import React, { useId } from 'react';

// Defining the InputBox component, which takes several props
function InputBox({
    label,                // Label for the input box
    amount,               // Current value of the amount input
    onAmountChange,       // Function to handle changes to the amount input
    onCurrencyChange,     // Function to handle changes to the currency selection
    currencyOptions = [],  // Array of available currency options
    selectCurrency = "usd", // Default selected currency
    amountDisable = false, // Flag to disable the amount input field
    currencyDisable = false, // Flag to disable the currency selector
    className = "",       // Additional classes for styling the container
}) {
    // Generate a unique ID for the amount input using useId for accessibility
    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Container for the amount input */}
            <div className="w-1/2">
                {/* Label for the amount input, associated with its unique ID */}
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}  // Display the label passed via props
                </label>
                {/* Input field for entering the amount */}
                <input
                    id={amountInputId} // Assigning the unique ID to the input field for accessibility
                    className="outline-none w-full bg-transparent py-1.5" // Styling the input
                    type="number" // Setting the input type to number for numerical values
                    placeholder="Amount" // Placeholder text displayed when the input is empty
                    disabled={amountDisable} // Disabling the input if amountDisable is true
                    value={amount} // Controlled input value, sourced from props
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // Handling changes to the input
                />
            </div>
            {/* Container for the currency selector dropdown */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p> {/* Label for the currency selector */}
                {/* Dropdown selector for currency options */}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" // Styling the select element
                    value={selectCurrency} // Controlled value for the selected currency
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // Handling changes to the currency selection
                    disabled={currencyDisable} // Disabling the selector if currencyDisable is true
                >
                    {/* Mapping through currencyOptions to create option elements */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}> {/* Unique key for each option */}
                            {currency} {/* Displaying the currency option */}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

// Exporting the InputBox component for use in other parts of the application
export default InputBox;


// Summary of Key Features:
// Component Definition: The InputBox component is a functional component that takes various props to customize its behavior and appearance.
// useId Hook: Generates a unique ID for the amount input, ensuring that the label is correctly associated with it for accessibility.
// Controlled Components: The input and select elements are controlled components, which means their values are controlled by the parent component via props.
// Dynamic Options: The currency selector dynamically generates its options based on the currencyOptions array passed as a prop.
// Disabling Inputs: Both the amount input and currency selector can be disabled based on the respective flags (amountDisable and currencyDisable).
// Styling: The component uses Tailwind CSS classes for styling, ensuring a clean and responsive design.