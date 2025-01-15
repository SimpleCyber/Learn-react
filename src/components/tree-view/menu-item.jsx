import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa'

import "./styles.css"



export default function MenuItem({item}){

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
    function handleToggleChildren(getCurrentLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel],
        })
    }

    return (
        <div className="menu-container">
            <li>
                <div className="menu-item">
                    <p>
                        {item.label}
                    </p>

                    {
                        item && item.children && item.children.length ? 
                        <span onClick={() => handleToggleChildren(item.label)}>{
                            displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />
                        }</span>:null
                    }
                </div>
                
                <div className="menu-children">
                    {
                        item && item.children && item.children.length > 0 && 
                        displayCurrentChildren[item.label] ? (
                            <div className="nested-menu">
                                <MenuList list={item.children} />
                            </div>
                        ) : null
                    }
                </div>
                
            </li>
        </div>
    )
}