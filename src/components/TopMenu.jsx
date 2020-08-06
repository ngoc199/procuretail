import React, { useState } from 'react'

import './TopMenu.css'

function TopMenu(props) {
    const [date, setDate] = useState(new Date())
    const [avatar, setAvatar] = useState('images/default-avatar.png')
    
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }
    let dateString = date.toLocaleDateString('en-US', options)

    return (
        <div className='container-fluid d-flex flex-row justify-content-between align-items-center bg-white'>
            <div className="left">
                <h5 className='d-inline-block mr-3'>{dateString}</h5>
                <select name="region">
                    <option value="HSR layout">HSR layout</option>
                    <option value="HSR layout">HSR layout</option>
                    <option value="HSR layout">HSR layout</option>
                    <option value="HSR layout">HSR layout</option>
                </select>
            </div>
            <div className="right">
                <img src={avatar} alt="avatar" className="border-circle" id='avatar' />
            </div>
    </div>
    )
}

export default TopMenu