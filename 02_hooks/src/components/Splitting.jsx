import { Suspense, useState, lazy } from 'react';

const loadComponent = () => {
    return import('./LazyComponent.jsx');
};

const LazyComponent = lazy(loadComponent);

const Splitting = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button 
                onClick={() => setShow((s) => !s)}
                onMouseOver={loadComponent}
            >
                Show component
            </button>
            <Suspense fallback={<p>Loading...</p>}>
                {show && <LazyComponent />}
            </Suspense>
        </div>
    )
}

export default Splitting