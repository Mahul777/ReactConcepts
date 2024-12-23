// Function to render a custom React-like element into a specified container
function customRender(reactElement, container) {
  // // Create a new DOM element based on the type specified in the reactElement
  // const domElement = document.createElement(reactElement.type);  //creating DOM element from reactElement but directly it not given its value so we ask its type

  // // Set the inner HTML of the created DOM element to the children of the reactElement
  // domElement.innerHTML = reactElement.children;

  // // Set the 'href' attribute of the DOM element to the value from the reactElement props
  // domElement.setAttribute('href', reactElement.props.href);

  // // Set the 'target' attribute of the DOM element to the value from the reactElement props
  // domElement.setAttribute('target', reactElement.props.target);

  // // Append the created DOM element to the specified container in the DOM
  // container.appendChild(domElement);

  //The above code is not good because If you need to add more attributes (like class, id, etc.), you would have to modify the function each time. This makes the code harder to maintain.
  // Create a new DOM element based on the type specified in the reactElement
  const domElement = document.createElement(reactElement.type);

  // Set the inner HTML of the created DOM element to the children of the reactElement
  domElement.innerHTML = reactElement.children;

  // Loop through all properties in the reactElement's props
  for (const prop in reactElement.props) {
    // Skip the 'children' prop as it's already set in innerHTML
    if (prop === "children") continue;

    // Set each prop as an attribute on the DOM element
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Append the created DOM element to the specified container in the DOM
  container.appendChild(domElement);
}

const reactElement =
  //React try to make a tree
  {
    type: "a", //type of element\
    props: {
      href: "https://google.com",
      target: "_blank",
    },
    children: "Click me to visit google", //properties of element which is a object
  };

const mainContainer = document.querySelector("#root");

// now we need to render like <a/> tag so we see how react how show it
//now we need a method add reactElement in root
customRender(reactElement, mainContainer);
