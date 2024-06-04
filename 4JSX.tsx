import React from "react";
const elem: JSX.Element = <div>a</div>;
const elem2: JSX.Element = <div>
    <span>a</span>
</div>;
const elem3: JSX.Element = <div tabIndex={0}>
    <span>{1+2}</span>
</div>;
const elem4: JSX.Element = React.createElement('div', {tabIndex: 0}, 1 + 2);
