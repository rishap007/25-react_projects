import React, { useState } from 'react'
import data from './data';
import './style.css';

const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getDataById) {
        setSelected(getDataById === selected ? null : getDataById);
    }

    function handleMultiSelection(getDataById) {
        let cpymultiple = [...multiple]
        const indexOfCurrentId = cpymultiple.indexOf(getDataById);
        console.log(indexOfCurrentId)
        if (indexOfCurrentId === -1) cpymultiple.push(getDataById);
        else cpymultiple.splice(indexOfCurrentId, 1);

        setMultiple(cpymultiple);   
         

    }
    console.log(selected, multiple);

    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} className='buton_css'>
                Enable Multi_Selection
            </button>
            <div className='accordian'>
                {data && data.length > 0 ? data.map((dataItem => (
                    <div className='item' key={dataItem.id}>
                        <div onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className='title'>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ? 
                            multiple.indexOf(dataItem.id) !== -1 && 
                            <div className='cotent'>{dataItem.answer}</div> :
                                selected === dataItem.id && <div className='content'>{dataItem.answer}</div>
                        }
                    </div>
                ))
                ) : (<div>No data found</div>)}
            </div>
        </div>
    )
}

export default Accordian