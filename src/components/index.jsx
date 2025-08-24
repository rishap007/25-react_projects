import React, { useState } from 'react'
import data from './data';
import './style.css';

const Accordian = () => {

    const [selected, setSelected] = useState(null); 
    function handleSingleSelection(getDataById){
        // console.log(getDataById);
        setSelected(getDataById === selected ? null : getDataById);
    }

  return (
    <div className='wrapper'>
        <div className='accordian'>
            {data && data.length > 0 ? data.map((dataItem => (
                <div className='item' key={dataItem.id}>
                    <div onClick={()=> handleSingleSelection(dataItem.id)} className='title'>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ?
                        <div className='content'>{dataItem.answer}</div>
                        : null
                    }
                </div>
            ))
        ): (<div>No data found</div>)}
        </div>
    </div>
  )
}

export default Accordian