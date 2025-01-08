// Single selection

import { useState } from "react";
import accordionData from "./data";
import "./styles.css";

// Multiple selection




export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const [buttonName, setButtonName] = useState("Enable Multi Selection");


  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexofCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexofCurrentId, 1);
    setMultiple(cpyMultiple);
  }

  function toggleSelectionMode() {
    setEnableMultiSelection(!enableMultiSelection);
    setButtonName(enableMultiSelection ? "Enable Multi Selection" : "Enable Single Selection");
  }

  console.log(selected, multiple);



  return (
    <div className="wrapper">
      {/* button  */}
      <button onClick={() => {setEnableMultiSelection(!enableMultiSelection) ; toggleSelectionMode()}}>
        {buttonName}
      </button>
      <div className="accordion">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.title}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.content}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.content}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
