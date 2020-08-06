import React from 'react'

function Button(props) {
    return (
        <a className={props.className} >{props.children}</a>
    )
}

export default Button