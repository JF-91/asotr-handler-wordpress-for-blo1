interface gqlParams {
    query: string;
    variables?: object;
}

export async function wpquery({ query, variables }: gqlParams) {
    try {
        const res = await fetch('http://localhost/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, variables })
        });
        const json = await res.json();
        return json.data;
    
    
    } catch (error)
    {
        console.log('hay un error con la query' + error);
    }
}