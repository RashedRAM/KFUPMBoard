"use client"

import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Context = createContext();

//This provider will return user infgormation
const Provider = ({children}) => {
    const router = useRouter();

    const [user, setUser] = useState(null);
    const [id, setId] = useState(null);
    const [email, setEmail] = useState(null);   
    const [name, setName] = useState(null);
    const [picture, setPicture] = useState(null);

    const supabaseClient = createClientComponentClient();

    const getCurrentSession = async () => {
        const res = await supabaseClient.auth.getSession();
        //check if there is a session then return it
        if (res && res.data.session) {
            return res.data.session;
        }

        //if not clear the user
        clearUser();
        return null;
    }

    const getCurrentUser = async () => {
        if(id) return; //check if information is already available if so return

        //get all data of the user
        const res = await supabaseClient.auth.getUser();
        if(res && res.data.user){

            const theUser = res.data.user;

            setUser(theUser);
            setId(theUser.id);
            setEmail(theUser.email);
            setName(theUser.identities[0].identity_data.name);
            setPicture(theUser.identities[0].identity_data.picture);
        }
    }

    useEffect(() => {
        const isUser = async () => {
            const currentSession = await getCurrentSession();
            if(currentSession){
                await getCurrentUser();
            }

        }
        isUser();
    }, [])

    //sign out the user
    const signOut = async () => {
        await supabaseClient.auth.signOut();
        clearUser();
        router.push('/');
    }

    //clear user info
    const clearUser = () => {
        setUser(null);
        setId(null);
        setEmail(null);
        setName(null);
        setPicture(null);
    }

    const exposed = { user, id, email, name, picture, signOut };

    return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export const useUser = () => useContext(Context);
export default Provider;