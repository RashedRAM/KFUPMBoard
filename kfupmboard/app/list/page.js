"use client"


import MainLayout from "../layouts/MainLayout"
import TextInput from "../components/TextInput"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useUser } from "../context/user"
import { useEffect, useState } from "react"
import useIsLoading from "../hooks/useIsLoading"
import useCreateProduct from "../hooks/useCreateProduct"
import { toast } from "react-toastify"
import ClientOnly from "../components/ClientOnly"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


// page for creating an item
export default function List() {

    //connect to supabase and get the user info
    const router = useRouter();
    const { user } = useUser();
    const supabase = createClientComponentClient();

    const [id, setId] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [building, setBuilding] = useState('');
    //this url is a placeholder for the image
    let url ='https://picsum.photos/id/7';
    const [number, setNumber] = useState('');
    const [isCreatingItem, setIsCreatingItem] = useState(false);
    const [error, setError] = useState('');

    const showError = (type) => {
        if (Object.entries(error).length > 0 && error?.type == type) {
            return error.message;
        }
        return ''
    }

    //get the product
    const getProduct = async () => {
        if(user?.id == null || user?.id == undefined) {
            useIsLoading(false);
            return
        }

        useIsLoading(false);
        
    }

    //when pahe is loaded get the product
    useEffect(() => {
        useIsLoading(true);
        getProduct();
    }, [user])

    // Cant upload photo if the photo name is in the database
    //function for uploading the image
    async function uploadImage (event) {
        console.log("file")
        let file = event.target.files[0];
        console.log("file")
        console.log(file)
        const { data, error} = await supabase
            .storage
            .from("Images")
            .upload(file.name ,file)
        if(data){
            //if succuful put the url of the image to the url
            const { data } = supabase
            .storage
            .from('Images')
            .getPublicUrl(file.name)
            console.log(data)
            url = data.publicUrl +"?"

        }
        else{
            console.log(error)
        }
    }

    //set the variables from what they attain from result
    const createProduct = (result) => {
        setId(result.id);
        setTitle(result.title);
        setDescription(result.description);
        setBuilding(result.building);
        // setUrl(result.url);
        setNumber(result.number);
        // setUser_id(result.user_id);
    }

    const validate = () => {
        setError({});
        let isError = false;

        //display error if the fields are not filled
        if(!title){
            setError({type: 'title', message: 'Title is required'});
            isError = true;
        } else if(!description){
            setError({type: 'description', message: 'Description is required'});
            isError = true;
        } else if(!building){
            setError({type: 'building', message: 'Building is required'});
            isError = true;
        } else if(!number){
            setError({type: 'number', message: 'Number is required'});
            isError = true;
        }

        return isError;

    }

    //submits all the data the user entered
    const submit = async (event) => {
        event.preventDefault();
        let isError = validate();

        if(isError){
            toast.error(error.message, { autoClose: 3000})
            return
        }

        try{
            setIsCreatingItem(true);
            
            const user_id = user.id;
        
            const response = await useCreateProduct({
                title,
                description,
                building,
                url,
                number,
                user_id
            });
            
            

            createProduct(response);
            setIsCreatingItem(false);

            toast.success('Item listed successfully', { autoClose: 3000});

            router.push(`/success`);

        } catch (error) {
            setIsCreatingItem(false);
            console.log(error);
            alert (error);
        }
    }

    //the ui
    return (

        <MainLayout>
            <div
                id="ListPage"
                className="mt-4 max-w-[600px] mx-auto px-2"
            >
                <div className="mx-auto bg-white rounded-lg p-3">

                <div className="text-xl text-bold mb-2">Item Details</div>
                <form onSubmit = {submit}>
                    <div className="mb-4">
                        <ClientOnly>
                            <TextInput
                            className="w-full"
                            string={title}
                            placeholder="item name"
                            onUpdate={setTitle}
                            error = {showError('title')}
                            
                            />

                        </ClientOnly>
                    </div>

                    <div className="mb-4">
                        <ClientOnly>
                            <TextInput
                            className="w-full"
                            string={description}
                            placeholder="item description"
                            onUpdate={setDescription}
                            error = {showError('description')}
                            
                            />

                        </ClientOnly>
                    </div>

                    <div className="mb-4">
                        <ClientOnly>
                            <TextInput
                            className="w-full"
                            string={building}
                            placeholder="building Number"
                            onUpdate={setBuilding}
                            error = {showError('building')}
                            
                            />

                        </ClientOnly>
                    </div>

                    <div className="mb-4">
                        <ClientOnly>
                            <TextInput
                            className="w-full"
                            string={number}
                            placeholder="phone number"
                            onUpdate={setNumber}
                            error = {showError('number')}
                            
                            />

                        </ClientOnly>
                    </div>

                    
                    <div className="mb-4">
                        <ClientOnly>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                Upload Image
                            </label>
                            <input
                                type="file"
                                onChange = {(e) => uploadImage(e)}
                                id="image"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </ClientOnly>
                    </div>
                    
                    
                    <button 
                            type = "submit"
                            disabled = {isCreatingItem}
                            className={`
                                mt-6
                                w-full 
                                text-white 
                                text-lg 
                                font-semibold 
                                p-3 
                                rounded
                                ${isCreatingItem ? 'bg-blue-800' : 'bg-blue-600'}
                                `}
                    >
                        {!isCreatingItem ?
                            <div>List Item</div>
                            : <div className="flex items-center justify-center gap-2">
                                <aiOutlineLoading3Quarters className="animate-spin"/>
                                Please wait...

                                </div>}
                        
                    </button>
                    

                    

                </form>

                </div>

            </div>
            
        </MainLayout>

    )
}