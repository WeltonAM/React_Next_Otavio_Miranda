import { useCounterContext } from '../../contexts/CounterContext';

export const Heading = ({ text }) => {
    // eslint-disable-next-line no-unused-vars
    const [state, actions] = useCounterContext();

    return (
        <h1>{state.counter}</h1>
    )
}
