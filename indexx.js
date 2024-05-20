import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


const client = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
          }
    }
});

<QueryClientProvider client={client}>
    <App />
</QueryClientProvider>


// ---------------------------------------------

import (useQuery) from '@tanstack/react-query'
// data: catData --> use full when you have more api to call
const {data, isLoading, isError, refetch
} = useQuery(["cat"], () => {
    return fetch("https://api.thecatapi.com/v1/images/search").then((res) => res.json());
}); 

//show Loading... until data is not undefined
if(isLoading) {
    return <div>Loading...</div>;
}
if(isError) {
    return <div>Error...</div>;
}


(
   <>
     <div>{data?.fact}</div>
    <button onClick={refetch}></button>
    if you have added new person to the list now you should also have get updated list
   </>
)

