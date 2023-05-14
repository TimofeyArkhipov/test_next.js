import { useEffect } from "react";

export default function useLocalStorage (key) {
    useEffect(()=>{

        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key))
        } else {
            return {}
        }
        
    }, [])


}

