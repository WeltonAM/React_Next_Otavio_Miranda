import { useState, useRef, useEffect } from 'react'

const Input = () => {

    const [value, setValue] = useState('');
    const input = useRef(null);

    const handleClick = () => {
        setValue('Hello');
    }

    useEffect(() => {
        input.current.focus();
    })

    return (
        <div>
            <input 
                ref={input}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Input