
'use client'

import Link from "next/link";
import axios from "axios";
import React from "react";
import {useRouter} from "next/navigation";

export default function Login() {

    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const router = useRouter();
    // const handleSubmitLogin = () => {
    //     try{
    //         const options = {
    //             method: 'POST',
    //             url: 'https://apistellarsync.foxlo.tech/api/customer/login',
    //             headers: {'Content-Type': 'application/json'},
    //             data: {
    //                 emailId: 'Example@gmail.com',
    //                 password: 'test',
    //                 token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsSWQiOiJFeGFtcGxlQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MDIyOTY1NDUsImV4cCI6MTczMzg1NDE0NX0.zUr98smXMXvqXlijTNq3OjuxHe1Jsh9PGfvLHKDtM-w'
    //             }
    //         };
    //         axios.request(options).then(function (response) {
    //             const data = JSON.parse(JSON.stringify(response.data))
    //             if(response.status === 201 && data.error === false){
    //                 router.push('/homepage');
    //                 console.log(response.data);
    //             }
    //             else if(response.status === 400 && data.error === true){
    //                 console.log("Something is wrong");
    //             }
    //         }).catch(function (error) {
    //             console.error(error);
    //         });
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    const handleSubmitLogin = async () => {
        const apiUrl = 'https://apistellarsync.foxlo.tech/api/customer/login';

        const inputData = {
            emailId: 'Example@gmail.com',
            password: 'test',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsSWQiOiJFeGFtcGxlQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MDIyOTY1NDUsImV4cCI6MTczMzg1NDE0NX0.zUr98smXMXvqXlijTNq3OjuxHe1Jsh9PGfvLHKDtM-w',
        };

        try {
            const response = await axios.post(apiUrl, inputData);
            console.log('API Response:', response.data);
            const data = JSON.parse(JSON.stringify(response.data))
            console.log(data.error)
            if(data.error === false && response.status === 201){
                console.log("You can go on the next page")
            }
            else {
                console.log("Something is wrong");
            }
            // Handle the response as needed
        } catch (error) {
            if(error.response.status === 400){
                console.log("Api error");
            }
            else if(error.response.status === 403){
                console.log("PASSWORD FAILED");
            }
            else{
                console.error('API Request Error:', error);
            }
            // Handle errors as needed
        }
    };

    return(
        <>
            <div style={{backgroundImage: `url('/assets/images/Clouds.png')`}}
                 className="min-h-full justify-center px-6 py-12 lg:px-8">
                <div className="flex justify-center">
                    <div className="bg-gray-200 rounded-l-3xl hidden md:block">
                        <div className="h-44 w-96 justify-center ml-10">
                            <h1 className="text-3xl font-semibold mt-10 text-gray-800 flex justify-start">
                                Hello,
                            </h1>
                            <h1 className="text-3xl font-semibold text-gray-800 flex justify-start">
                                Welcome Back
                            </h1>
                        </div>
                        <div className="h-96 w-96 rounded-l-3xl" style={{backgroundImage: `url('/assets/images/Login_image.svg')`}}></div>
                    </div>

                    <div className="bg-gray-50 md:rounded-r-3xl">
                        <div className="md:h-44 h-fit w-96 md:ml-10 ml-0 md:mr-10 mr-0">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-5">
                                <div className="flex justify-center mr-10">
                                    <img
                                        className="md:h-10 h-10 md:w-10 mt-4 w-10"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                    <h2 className="md:mt-5 mt-5 md:ml-5 ml-2 md:text-3xl text-md font-bold leading-9 tracking-tight text-gray-900">
                                        Stellar Sync
                                    </h2>
                                </div>
                                <h2 className="mt-4 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
                                    Login into your account
                                </h2>
                                <div className="flex flex-1 items-center px-2 justify-center">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <h1 className="md:text-md text-sm text-gray-900 mr-3">Don't have an Account?</h1>
                                    <Link href="/signup" className="text-blue-500 font-mono md:text-md text-sm mt-1 underline justify-end">Sign Up</Link>
                                </div>
                            </div>
                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                placeholder="   Enter your Email Address"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                Password
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                placeholder="   Create a Password"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            onClick={handleSubmitLogin}
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
