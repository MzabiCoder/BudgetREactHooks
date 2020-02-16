import React from 'react'
import {MdEdit,MdDelete} from 'react-icons/md'

 const ExpenceItem = ({exp:{charge,amount}}) => {
     return (
         <li className="item">
        <div className="info">
            <span className="expense">{charge}</span>
                 <span className="amount">${amount}</span>     
             </div>
             <div>
             <button className="edit-btn" aria-label="edit button">
             <MdEdit/>
             </button>

             <button className="clear-btn" aria-label="edit button">
             <MdDelete/>
             </button>
             </div>
             </li>
    )
}

export default ExpenceItem
