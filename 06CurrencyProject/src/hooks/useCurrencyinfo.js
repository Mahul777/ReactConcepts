// Importing necessary hooks from React
import { useEffect, useState } from "react";

// Custom hook to fetch currency information based on the provided currency code
function useCurrencyInfo(currency) {
    // Setting up state to store the fetched currency data
    const [data, setData] = useState({});

    // useEffect to run side effects, in this case fetching data
    useEffect(() => {
        // Fetching currency data from the API
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json()) // Parsing the response to JSON
            .then((res) => setData(res[currency])); // Updating state with the fetched currency data //it's finding the information related to the currency you requested.if currency == inr then it will find data related to inr and if currency == usd then it will find data related to usd
        
        // Logging the current state of data (for debugging purposes)
        console.log(data);
    }, [currency]); // The effect depends on the currency value; it will run again if currency changes

    // Logging the current state of data (for debugging purposes)
    console.log(data);

    // Returning the currency data
    return data;
}

// Exporting the custom hook for use in other components
export default useCurrencyInfo;



//  * In the useCurrencyInfo custom hook, we want to ensure that the API call is made only when the hook is used, not immediately upon initialization. This requires the use of useEffect to handle the loading behavior.

// *"When we call an API, the response is typically in string format, so we need to convert it into JSON first."

// *"Now we need to determine what to return from the `useCurrencyInfo` function. If we return `setData`, we won't have access to the fetched data itself. If we create an array to return both `data` and `setData`, we lose direct access to the currency value. Therefore, we should only return `data` to ensure we have access to the fetched currency information."