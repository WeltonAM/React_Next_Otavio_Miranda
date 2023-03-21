import { useContext } from 'react';
import { GlobalContext } from '../contexts/AppContext';

const P = () => {
    const theContext = useContext(GlobalContext);

    const { initialState: { body, counter }, setInitialState } = theContext;

    return (
        <p onClick={() => setInitialState((s) => ({...s, counter: s.counter + 1 }))}>
            {body} {counter}
        </p>
    )
}

export default P