import { useReducer } from 'react';
import { globalState } from '../contexts/AppContext/data';

const Section = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'change':
                return { ...state, title: 'Changed!' };
            case 'invert':
                const { title } = state;
                return { ...state, title: title.split('').reverse().join('') };
            case 'date':
                const { body } = state;
                return { ...state, body: action.payload };
            default:
                break;
        }
        return { ...state }
    }

    const [state, dispatch] = useReducer(reducer, globalState);

    return (
        <div>
            <h1>
                {state.title}
            </h1>

            <p>
                {state.body}
            </p>

            <button onClick={() => dispatch({ type: 'change' })}>Change title</button>
            <button onClick={() => dispatch({ type: 'invert' })}>Invert title</button>
            <button onClick={() => dispatch({ type: 'date', payload: new Date().toLocaleString() })}>Date</button>
        </div>
    )
}

export default Section