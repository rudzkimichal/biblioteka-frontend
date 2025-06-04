import { useQuery } from '@tanstack/react-query';

export const useFetchItems = () => {
    const getItems = async () => {
        const response = await fetch('http://localhost:8080/api/v1/all');

        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }

        return response.json();
    };

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['items'],
        queryFn: getItems,
        refetchOnWindowFocus: false,
        retry: false,
    });

    return { data, isPending, isError, error };
};