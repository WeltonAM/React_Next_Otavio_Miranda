import { useState, useEffect, useRef } from 'react'

const useMyHook = (cb, delay = 1000) => {
    const savedCb = useRef();

    useEffect(() => {
        savedCb.current = cb;
    }, [cb])

    useEffect(() => {
        const interval = setInterval(() => {
            savedCb.current()
        }, delay);

        return () => clearInterval(interval);
    }, [delay])
}

const Main = () => {
    const [counter, setCounter] = useState(0);
    const [delay, setDelay] = useState(1000);
    const [incrementor, setIncrementor] = useState(100);

    useMyHook(() => setCounter((c) => c + 1), delay);

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <h4>Delay: {delay}</h4>
            <input type="number" value={incrementor} onChange={(e) => setIncrementor(Number(e.target.value))} />
            <button onClick={() => setDelay((d) => d + incrementor)}>+{incrementor}</button>
            <button onClick={() => setDelay((d) => d - incrementor)}>-{incrementor}</button>
        </div>
    )
}

export default Main