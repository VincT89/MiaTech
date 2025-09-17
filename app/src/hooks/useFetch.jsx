import { useState, useEffect } from "react";

function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let montato = true;
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Errore nella fetch");
				}
				const json = await response.json();
				if (montato) {
					setData(json);
					setLoading(false);
				}
			} catch (error) {
				if (montato) {
					setError(error);
					setLoading(false);
				}
			}
		};
		fetchData();
		return () => {
			montato = false;
		};
	}, [url]);

	return { data, loading, error };
}

export default useFetch;
