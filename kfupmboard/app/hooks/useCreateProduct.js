const useCreateProduct = async (details) => {
    
    console.log(details.id);
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
    console.log("data");
    return data;

}

export default useCreateProduct;