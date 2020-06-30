import React, { useEffect, useState } from 'react';

const useFetchGraphQL = (text, variables) => {
	const [response, setResponse] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

    const fetchData = async () => {
		setIsLoading(true);

		try {
			const res = await fetch('/api', {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				  query: text,
				  variables,
				}),
			});
			const resJson = await res.json();

			setResponse(resJson);
			setIsLoading(false);
		} catch (error) {
			setError(error);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

    return { response, error, isLoading };
};
  
export default useFetchGraphQL;