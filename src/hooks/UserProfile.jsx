import { useState, useEffect } from "react";
import API from "../apis/services";

const userProfile = (id = null) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] =  useState(null);

    const fetchProfile = async() =>{
        setLoading(true)
        
        try{
            const endpoint = id ? `/user/profile/${id}/` : `/user/profile/`;
            const response = await API.get(endpoint);
            if(response.data.success){
                setProfile(response.data.profile)
            }
        }
        catch(err){
            setError(err)
        }
        setLoading(false);
    };

    useEffect(() =>{
        fetchProfile();
    }, [id])
        
    return {profile, loading, error}
}

export default userProfile