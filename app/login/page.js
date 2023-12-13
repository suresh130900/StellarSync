
'use client'

import Link from "next/link";
import axios from "axios";
import React from "react";
import { Fragment, useState } from 'react'
import {useRouter} from "next/navigation";
import Cookies from 'js-cookie';
import {Dialog, Transition} from "@headlessui/react";

export default function Login() {

    const [loginEmail, setLoginEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [open, setOpen] = useState(false);
    const [passOpen, setPassOpen] = useState(false)

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

    const inputData = {
        emailId: loginEmail,
        password: password,
        //token: Cookies.get('myJwtToken'),
    };

    const [errors, setErrors] = useState({
        loginEmail: '',
        password: '',
        ApiError: '',
    });

    const newErrors = { ...errors };

    const validateLogin = () => {
        let isValid = true;

        // Validate email
        if (!loginEmail || loginEmail.trim() === '') {
            newErrors.loginEmail = 'Email is required';
            isValid = false;
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail)
        ) {
            newErrors.loginEmail = 'Invalid email address';
            isValid = false;
        } else {
            newErrors.loginEmail = '';
        }

        // Validate password
        if (!password || password.trim() === '') {
            newErrors.password = 'Password is required';
            isValid = false;
        } else {
            newErrors.password = '';
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmitLogin = async () => {
        const apiUrl = 'https://apistellarsync.foxlo.tech/api/customer/login';

        try {
            if(validateLogin()){
                //console.log(Cookies.get('myJwtToken'));
                const response = await axios.post(apiUrl, inputData);
                //console.log('API Response:', response.data);
                const data = JSON.parse(JSON.stringify(response.data))
                //console.log(data.error)
                if(data.error === false){
                    router.push('/homepage');
                    Cookies.set("loginCookie", data.token, {secure: true, expires : 365});
                    //console.log(data.token);
                    console.log("You can go on the next page")
                }
                else {
                    console.log("Something is wrong");
                }
            }
            else {
                console.log("The form has some errors")
            }
            // Handle the response as needed
        } catch (error) {
            if(error.response.status === 404){
                setOpen(true);
                newErrors.ApiError = "Customer Does Not Exits";
                console.log("Customer Does Not Exits");
                console.error(error);
            }
            else if(error.response.status === 403){
                setPassOpen(true);
                newErrors.ApiError = "Password in Wrong"
                console.log(error.response.data.error);

                console.log("PASSWORD FAILED");
            }
            else if(error.response.status === 498) {
                console.log(error.response.data.error);
                console.log("Invalid Token");
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
                                                onChange={(e) => {
                                                    setLoginEmail(e.target.value)
                                                    console.log(loginEmail)
                                                }}
                                                placeholder="   Enter your Email Address"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            {errors.loginEmail && <p className="text-red-600">{errors.loginEmail}</p>}
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
                                                onChange={(e) => {
                                                    setPassword(e.target.value)
                                                    console.log(password)
                                                }}
                                                placeholder="   Create a Password"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            {errors.password && <p className="text-red-600">{errors.password}</p>}
                                        </div>
                                    </div>
                                    <Transition.Root show={open} as={Fragment}>
                                        <Dialog as="div" className="relative z-10" onClose={setOpen}>
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0"
                                                enterTo="opacity-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                            </Transition.Child>

                                            <div className="fixed inset-0 z-10 overflow-y-auto">
                                                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                    <Transition.Child
                                                        as={Fragment}
                                                        enter="ease-out duration-300"
                                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                        leave="ease-in duration-200"
                                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                    >
                                                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                                            <div>
                                                                <div className="mt-3 text-center sm:mt-5">
                                                                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                                        {errors.ApiError}
                                                                    </Dialog.Title>
                                                                    <div className="mt-2">
                                                                        <p className="text-sm text-gray-500">
                                                                            The username does not exits, please SignUp by clicking the below button
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mt-5 sm:mt-6">
                                                                <button
                                                                    type="button"
                                                                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                    onClick={
                                                                        () => {
                                                                            setOpen(false);
                                                                            router.push('/signup');
                                                                        }
                                                                    }
                                                                >
                                                                    Go to SignUp Page
                                                                </button>
                                                            </div>
                                                        </Dialog.Panel>
                                                    </Transition.Child>
                                                </div>
                                            </div>
                                        </Dialog>
                                    </Transition.Root>
                                    <div>
                                        <Transition.Root show={passOpen} as={Fragment}>
                                            <Dialog as="div" className="relative z-10" onClose={setPassOpen}>
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0"
                                                    enterTo="opacity-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                                </Transition.Child>

                                                <div className="fixed inset-0 z-10 overflow-y-auto">
                                                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                        <Transition.Child
                                                            as={Fragment}
                                                            enter="ease-out duration-300"
                                                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                            leave="ease-in duration-200"
                                                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                        >
                                                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                                                <div>
                                                                    <div className="mt-3 text-center sm:mt-5">
                                                                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                                            {errors.ApiError}
                                                                        </Dialog.Title>
                                                                        <div className="mt-2">
                                                                            <p className="text-sm text-gray-500">
                                                                                The Password entered is incorrect, Please try again
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-5 sm:mt-6">
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                        onClick={
                                                                            () => {
                                                                                setPassOpen(false);
                                                                                // router.push('/login')
                                                                            }
                                                                        }
                                                                    >
                                                                        Go Back
                                                                    </button>
                                                                </div>
                                                            </Dialog.Panel>
                                                        </Transition.Child>
                                                    </div>
                                                </div>
                                            </Dialog>
                                        </Transition.Root>
                                    </div>
                                    <div>
                                        <button
                                            onClick={handleSubmitLogin}
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Login
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
