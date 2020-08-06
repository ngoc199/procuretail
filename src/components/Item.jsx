import { getDefaultNormalizer } from '@testing-library/react'
import React, { useState } from 'react'

import './Item.css'

function Item(props) {
    const [quantity, setQuantity] = useState(0)

    const updateQuantity = (evt) => {
        let value = evt.target.value
        if (value >= 0) {
            setQuantity(value)
        }
        evt.preventDefault()
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="item border my-3 py-3 px-1 text-center">
            <h4 className="font-weight-normal">{props.name}</h4>
            <h3 className="font-weight-bold"><i className="fa fa-rupee-sign"></i> {props.amount}</h3>
            <div className="quantity-control w-100 d-flex flex-row justify-content-between align-items-center">
                <button className="btn btn-outline-primary btn-sm" onClick={decreaseQuantity}><i className="fa fa-minus"></i></button>
                <input className='w-50 text-center' type="number" name="quantity" value={quantity} onChange={updateQuantity} />
                <button className='btn btn-outline-primary btn-sm' onClick={increaseQuantity}><i className="fa fa-plus"></i></button>
            </div>
        </div>
    )
}

Item.defaultProps = {
    name: 'Item',
    amount: 0,
}

export default Item