import React from 'react';
import * as moment from 'moment';

function Header() {
    const now = moment().format("dddd, MMM M");
    return (
        <div className="header">
            <div className="header__date">
                <p>Good morning, Marko!</p>
                <p className="date">{now}</p>
            </div>
        </div>
    )
}

export default Header
