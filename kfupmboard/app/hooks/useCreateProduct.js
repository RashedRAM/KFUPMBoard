const useCreateProduct = async (details) => {
    
    //this will send a post request to the server to create a new product
    const response = await fetch('/api/product/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: details.id,
            title: details.title,
            description: details.description,
            building: parseInt(details.building),
            url: details.url,
            number: details.number,
            user_id: details.user_id,
        }),
    });

    
    const data = await response.json();

    return data;

}

export default useCreateProduct;