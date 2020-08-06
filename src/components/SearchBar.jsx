import React from 'react'

function SearchBar(props) {
    return (
    <div className="input-group my-3">
        <input className={`${props.fullWidth ? 'form-control' : ''}`} type="text" name={props.name} placeholder={props.placeholderText} />
        <button className='btn btn-dark' type="button">{props.submitText}</button>
    </div>
    )
}

SearchBar.defaultProps = {
    name: 'search',
    placeholderText: 'Search',
    submitText: 'Submit',
    fullWidth: false
}

export default SearchBar