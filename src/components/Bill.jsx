import React, { useState } from 'react'

function Bill(props) {

    let itemList = props.itemList

    let total = 0
    itemList.map(item => {
        total += item.amount
    })

    const renderBillDetail = () => {
        return itemList.forEach(item => {
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.amount}</td>
                </tr>
            )
        })
    }

    return (
        <div className='bg-white vh-100 d-flex flex-column justify-content-between align-items-start'>
            <div className='container'>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <h4 className="font-weight-bold">Billing Items {itemList.length}</h4>
                    <button className={`btn text-primary font-weight-bold ${itemList.length == 0 ? 'd-none' : ''}`}>Clear</button>
                </div>
                <table>
                    <th>
                        <td>Items</td>
                        <td>Qty</td>
                        <td>Amt</td>
                    </th>
                    {renderBillDetail}
                </table>
            </div>
            <div className="container">
                <p>Home delivery order? <a href="/">Click here</a></p>
    <button className={`btn btn-block btn-lg mb-3 ${total == 0 ? 'btn-secondary' : 'btn-primary'}`} disabled={total === 0}>Total Amount <i className="fa fa-rupee-sign"></i> {total}</button>
            </div>
        </div>
    )
}

Bill.defaultProps = {
    className: ''
}

export default Bill