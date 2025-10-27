import { useEffect, useState } from "react";
import api from "../lib/api";
import { useDispatch } from "react-redux";


/**
 * Custom hook to get data from server
 * @param {string} path
 * @param {object} options
 * @param {string|null} options.selector
 * @param {function} options.action
 * @param {any} options.cache
 * @param {any} options.enableCache
 * @returns 
 */
const useFecth = (path, options = { selector: null, action: () => {}, cache: null, enableCache: true }) => {
    options = { selector: null, action: () => {}, cache: null, enableCache: true, ...options };

    const dispatch = useDispatch();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        if (!loading) setLoading(true);
        if (error) setError(null);

        if (options.enableCache && options.cache !== null && ((Array.isArray(options.cache) && options.cache.length > 0) || (typeof options.cache === "object" && Object.values(options.cache).length > 0))) {
            setData(options.cache);
            setLoading(false);
            return;
        }

        try {
            const response = await api.get(path);
            setData(options.selector ? response.data[options.selector] : response.data);

            if (options.action && typeof options.action === "function") {
                dispatch(options.action(options.selector ? response.data[options.selector] : response.data));
            }
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [path]);

    return {
        data, loading, error, reload: fetchData,
    }
}

export default useFecth;