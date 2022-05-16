import React, { useState, useEffect } from 'react';
import useTimer from "easytimer-react-hook"
import Timer from 'easytimer.js';

function App() {

    const [Timer, isTargetAchieved] = useTimer({
        countdown: true,
        startValues: {
            minutes: 5,

        },
    })

    function start() {
        Timer.start()
    }
    function stop() {
        Timer.stop()
    }
    function pause() {
        Timer.pause()
    }
    function reset() {
        Timer.reset()
    }


    return (
        <div className="App">
            <div>{Timer.getTimeValues().toString()}</div>

            <button onClick={(() => start())}>Start</button>
            <button onClick={(() => stop())}>Stop</button>
            <button onClick={(() => pause())}>Pause</button>
            <button onClick={(() => reset())}>Reset</button>

        </div>

    );
}

export default App;
