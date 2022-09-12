import React, { useState } from 'react'

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () =>{
        if(!inputData){
       }else{
        setItems([...items, inputData]);
        setInputData('');
    }
    }

    const deleteItem = (id) =>{
        const updatedData = items.filter((ele, ind)=>{
            return ind !== id;
        });
        setItems(updatedData);
    }

    const removeAll = () =>{
        setItems([]);
    }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
            <figure>
                <figcaption>Add Your List Here.</figcaption>
            </figure>
            <div className="addItems">
                <input type="text"  placeholder='Add Items'
                    value={inputData} 
                    onChange={(e)=>setInputData(e.target.value)}
                />
                <i className='fa fa-plus add-btn' title='Add Items' onClick={addItem}></i>
            </div>
            <div className="showItems">
            {
                items.map((ele,ind)=>{
                    return(
                        <>
                    <div className="eachItem" key={ind}>
                    <h3>{ele}</h3>
                    <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={() => deleteItem(ind)}></i>
                </div>
                </>
                    )
                })
            }
                
                {/* //Clear All Button */}
                <div className="showItems">
                    <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo
