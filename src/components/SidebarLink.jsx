import React from 'react'

function SidebarLink(props) {
    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <i className={props.icon}></i>
            </div>
            <a href="#" className={props.className}>{props.content}</a>
        </div>
    )
}

SidebarLink.defaultProps = {
    content: 'Default Content',
    icon: '',
    className: 'nav-link'
}

export default SidebarLink