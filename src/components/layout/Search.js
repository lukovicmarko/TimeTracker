import React from 'react'

function Search() {
    return (
        <form action="#" className="search">
            <input
                type="text"
                className="shadow-none search__input"
                placeholder="Search"
            />
            <button className="search__button">
                <img src="images/icons/search.png" alt="" className="search__icon" />
            </button>
        </form>

    )
}

export default Search
