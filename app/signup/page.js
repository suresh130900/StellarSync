
'use client'

import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/navigation'
import React from "react";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Cookies from 'js-cookie';


    const App = () => {
        const [name, setName] = React.useState(null);
        const [email, setEmail] = React.useState(null);
        const [password, setPassword] = React.useState(null);
        const [confirmPassword, setConfirmPassword] = React.useState(null);
        const [open, setOpen] = useState(false)

        const [errors, setErrors] = useState({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            ApiError: '',
        });
        //const [isFormValid, setIsFormValid] = useState(false);

        const router = useRouter();

        const newErrors = { ...errors };
        const validateForm = () => {
            let isValid = true;

            // Validate username
            if (!name || name.trim() === '') {
                newErrors.name = 'name is required';
                isValid = false;
            } else {
                newErrors.name = '';
            }

            // Validate password
            if (!password || password.trim() === '') {
                newErrors.password = 'Password is required';
                isValid = false;
            } else {
                newErrors.password = '';
            }

            // Validate email
            if (!email || email.trim() === '') {
                newErrors.email = 'Email is required';
                isValid = false;
            } else if (
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            ) {
                newErrors.email = 'Invalid email address';
                isValid = false;
            } else {
                newErrors.email = '';
            }

            //validating confirm password
            if(!confirmPassword || confirmPassword.trim() === ''){
                newErrors.confirmPassword = 'Please Confirm Password';
                isValid = false
            }
            else if(confirmPassword !== password){
                newErrors.confirmPassword = 'Password Does not Match';
                isValid = false
            }
            setErrors(newErrors);
            return isValid;
        };

        const handleSubmit = () => {
            //try {
                if (validateForm()) {
                    const options = {
                        method: 'POST',
                        url: 'https://apistellarsync.foxlo.tech/api/customer/signup',
                        headers: {'Content-Type': 'application/json'},
                        data: {name: name, emailId: email, password: password}
                    };
                    axios.request(options).then(function (response) {
                        const data = JSON.parse(JSON.stringify(response.data))
                        //console.log(response.status)
                        if (response.status === 201 && data.error === false) {
                            Cookies.set("signupCookie", data.token, {secure: true, expires: 365});
                            router.push("/homepage");
                            console.log("This is me printing the token: ", data.token)
                        }
                        else {
                            console.log("there are some error in APi calling and the status code is: ", response.status)
                        }
                    }).catch(function (error){
                        if (error.response.status === 400) {
                            console.log("Customer Already Exits");
                            setOpen(true);
                            newErrors.ApiError = "Customer Already Exits";
                        }
                       console.error(error)
                    });
                } else {
                    console.log('Form has errors. Please correct them.');
                }
        };

        return (
            <>
                <div style={{backgroundImage: `url('/assets/images/Clouds.png')`}}
                     className="min-h-full justify-center px-6 py-12 lg:px-8">
                    <div className="flex justify-center">
                        <div className="bg-gray-200 rounded-l-3xl hidden md:block">
                            <div className="h-64 w-96 justify-center ml-10">
                                <h1 className="text-3xl font-semibold mt-10 text-gray-800 flex justify-start">
                                    Try StellarSync
                                </h1>
                                <ul className="mt-3 text-md text-gray-600">
                                    <li className="flex justify-start">DataBase Hosting</li>
                                    <li className="flex justify-start">Docker Container Hosting</li>
                                    <li className="flex justify-start">Authentication Service</li>
                                    <li className="flex justify-start">API Creation Service</li>
                                </ul>
                            </div>
                            <div className="h-96 w-96 rounded-l-3xl"
                                 style={{backgroundImage: `url('/assets/images/Humans.png')`}}></div>
                        </div>
                        <div className="bg-gray-50 md:rounded-r-3xl">
                            <div className="md:h-44 h-fit w-96 md:ml-10 ml-0 md:mr-10 mr-0">
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-7">
                                    <div className="flex justify-center mr-10">
                                        <img
                                            className="md:h-10 h-10 md:w-10 mt-4 w-10"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt="Your Company"
                                        />
                                        <h2 className="md:mt-4 mt-4 md:ml-5 ml-2 md:text-3xl text-md font-bold leading-9 tracking-tight text-gray-900">
                                            Stellar Sync
                                        </h2>
                                    </div>
                                    <h2 className="mt-2 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
                                        Create your account
                                    </h2>
                                    <div className="flex flex-1 items-center px-2 justify-center">
                                        <h1 className="md:text-md text-sm text-gray-900">Already have an Account?</h1>
                                        <Link href="/login"
                                              className="text-blue-500 font-mono md:text-md text-sm mt-1 underline justify-end">Sign
                                            In</Link>
                                    </div>
                                </div>
                                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                                    <div className="space-y-6">
                                        <div>
                                            <label htmlFor="name"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                Full name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    required
                                                    onChange={(e) => {
                                                        setName(e.target.value)
                                                        console.log(name)
                                                    }}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="   Enter a Name"
                                                />
                                                {errors.name && <p className="text-red-600">{errors.name}</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                Email address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    required
                                                    //value={email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value)
                                                        console.log(email)
                                                    }}
                                                    placeholder="   Enter your Email Address"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                                {errors.email && <p  className="text-red-600">{errors.email}</p>}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password"
                                                       className="block text-sm font-medium leading-6 text-gray-900">
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
                                                    //value={password}
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
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="confirmPassword"
                                                       className="block text-sm font-medium leading-6 text-gray-900">
                                                    Confirm Password
                                                </label>
                                            </div>
                                            <div className="mt-2">
                                                <input
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    required
                                                    //value={confirmPassword}
                                                    onChange={(e) => {
                                                        setConfirmPassword(e.target.value)
                                                        console.log(confirmPassword)
                                                    }}
                                                    placeholder="   Create a Password"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                                {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword}</p>}
                                            </div>
                                        </div>
                                        <div>
                                            {/*{errors.ApiError && <p className="text-red-600">{errors.ApiError}</p>}*/}

                                            {/* This is to display the error in a Modal*/}
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
                                                                                   The username already exits, please login by clicking the below button
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
                                                                                router.push('/login')
                                                                            }
                                                                        }
                                                                        >
                                                                            Go to Login Page
                                                                        </button>
                                                                    </div>
                                                                </Dialog.Panel>
                                                            </Transition.Child>
                                                        </div>
                                                    </div>
                                                </Dialog>
                                            </Transition.Root>
                                            <button
                                                onClick={handleSubmit}
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
    export default App;
// }