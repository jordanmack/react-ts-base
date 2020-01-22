"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";

function wrap(text: string)
{
	return <div style={{border: "1px solid red"}}>{text}</div>;
}

document.addEventListener("DOMContentLoaded", function(event)
{
	ReactDOM.render(wrap("Hello World from React and Typescript!"), document.getElementById("root"));
});
