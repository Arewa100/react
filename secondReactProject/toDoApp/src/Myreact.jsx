import React from "react";

function Login({items}) {
  return (
    React.createElement(
        "ul",
        {className: "myItems" },
        items.map((individualItem, index) =>
          React.createElement("li", {key: index}, individualItem)  
        )
      )
  )
};

export default Login;