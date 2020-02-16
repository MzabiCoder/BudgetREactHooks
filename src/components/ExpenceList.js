import React,{Fragment} from 'react'
import Item from './ExpenceItem'
import {MdDelete} from 'react-icons/md'

const ExpenceList = ({ expenses }) => {
    return (
        <Fragment>
            <ul className="list"> 
                {expenses.map(exp => (
                 <Item exp={exp} key={exp.id} /> 
            ))}
            </ul>
            {expenses.length > 0 && <button className="btn">
            Clear expenses
            <MdDelete className="btn-icons"/>
            </button>}
        </Fragment>
    )
}

export default ExpenceList
