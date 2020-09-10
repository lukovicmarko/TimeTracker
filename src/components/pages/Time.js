import React from 'react';
import Header from '../layout/Header';

function Time() {
    return (
        <div className="time">
            <Header />
            <div className="time__information">
                <div className="time__information-timer">
                    <div className="quantity">
                        <div>
                            -
                        </div>
                        <div>
                            1.00
                        </div>
                        <div>
                            +
                        </div>
                    </div>
                    <button className="timer-button">Start Timer</button>
                </div>
                <div className="time__information-clock">
                    <h1>00:00</h1>
                </div>
                <div className="time__information-timer">
                    marko
                </div>
            </div>
        </div>
    );
}

export default Time;