import React,{useState} from 'react'
import {MdSend} from 'react-icons/md'

const ExpenseForm = () => {

   
    return (
        <form action="">
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">Charge</label>
                    <input type="text" name="charge" id="charge" className="form-control"  placeholder="exp rent"/>
                </div>

                <div className="form-group">
                <label htmlFor="charge">Amount</label>
                <input type="text"   name="amount"  id="amount" className="form-control"  placeholder="exp amount"/>
            </div>
            </div>
            <button type="submit" className="btn">
            submit
            <MdSend className="btn-icon"/>
            </button>
        </form>
    )
}

export default ExpenseForm