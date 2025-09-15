import React from "react";
const elem = React.createElement("div", null, "a");
const elem2 = React.createElement("div", null,
    React.createElement("span", null, "a"));
const elem3 = React.createElement("div", { tabIndex: 0 },
    React.createElement("span", null, 1 + 2));
const elem4 = React.createElement('div', { tabIndex: 0 }, 1 + 2);
