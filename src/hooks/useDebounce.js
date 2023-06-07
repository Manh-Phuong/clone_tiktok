import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [state, setState] = useState(value)
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setState(value)
        }, delay)
    return () => clearTimeout(timeOut)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
    return state || '';
}

export default useDebounce;