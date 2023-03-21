import { useContext } from 'react'
import { GlobalContext } from '../contexts/AppContext';

const H1 = () => {
    const theContext = useContext(GlobalContext);

    const { initialState: { title, counter } } = theContext;

    return (
        <h1>{title} {counter}</h1>
    )
}

export default H1