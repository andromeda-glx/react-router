import { useEffect, useState } from "react";

function useFetchData(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    function fetchData(aUrl) {        
        setIsLoading(true);
        fetch(aUrl)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => setError(e))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);    

    return {data, error, isLoading};
}

export default useFetchData;
