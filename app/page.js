'use client'

import Login from "@/app/login/page";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";
import React from "react";

export default function Index(){
    const signupCookies = Cookies.get("signupCookie");
    const loginCookies = Cookies.get("loginCookie");
    const router = useRouter();

    React.useEffect(() => {
        if (signupCookies || loginCookies) {
            router.push('/homepage'); // Redirect to the homepage if the token exists
        }
    }, []);


    return(
        <div>
            <Login />
        </div>
    );
}