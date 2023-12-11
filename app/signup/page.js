
'use client'

import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/navigation'
import React, {useEffect, useState} from "react";

// export default function Signup() {
    // const [signup, setSignup] = React.useState(null);
    // const [name, setName] = React.useState(null);
    // const [email, setEmail] = React.useState(null);
    // const [password, setPassword] = React.useState(null);
    // const [errors, setErrors] = React.useState({});
    // const [isFormValid, setIsFormValid] = React.useState(false);
    // const router = useRouter()
    //
    // const App = () => {
    //         const [name, setName] = useState('');
    //         const [email, setEmail] = useState('');
    //         const [password, setPassword] = useState('');
    //         const [errors, setErrors] = useState({});
    //         const [isFormValid, setIsFormValid] = useState(false);
    //     useEffect(() => {
    //             validateForm();
    //         }, [name, email, password]);
    //         const validateForm = () => {
    //             let errors = {};
    //
    //             if (!name) {
    //                 errors.name = 'Name is required.';
    //             }
    //         }
    //             if (!email) {
    //                 errors.email = 'Email is required.';
    //             } else if (!/\S+@\S+\.\S+/.test(email)) {
    //                 errors.email = 'Email is invalid.';
    //             }
    //
    //             if (!password) {
    //                 errors.password = 'Password is required.';
    //             } else if (password.length < 6) {
    //                 errors.password = 'Password must be at least 6 characters.';
    //             }
    //
    //             setErrors(errors);
    //             setIsFormValid(Object.keys(errors).length === 0);
    //     };
    //
    //     function createSignup() {
    //
    //     const options = {
    //         method: 'POST',
    //         url: 'https://apistellarsync.foxlo.tech/api/customer/signup',
    //         headers: {'Content-Type': 'application/json'},
    //         data: {name: name, emailId: email, password: password}
    //     };
    //
    //     axios.request(options).then(function (response) {
    //         const data = JSON.parse(JSON.stringify(response.data))
    //         console.log(data.error)
    //         if (data.error === false)
    //         {
    //             router.push("/homepage");
    //         }
    //         else if(data.error === true) {
    //             console.log("Customer Already Exits");
    //         }
    //         console.log(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }

    const App = () => {
        const [name, setName] = React.useState(null);
        const [email, setEmail] = React.useState(null);
        const [password, setPassword] = React.useState(null);
        // const [formData, setFormData] = useState({
        //     name: '',
        //     email: '',
        //     password: '',
        // });
        const [errors, setErrors] = useState({
            name: '',
            email: '',
            password: '',
        });
        const [isFormValid, setIsFormValid] = useState(false);

        const router = useRouter();

        const validateForm = () => {
            let isValid = true;
            const newErrors = { ...errors };

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

            setErrors(newErrors);
            return isValid;
        };


        // useEffect(() => {
        //     validateForm();
        // }, [name, email, password]);
        // Validate form
        // const validateForm = () => {
        //     let errors = {};
        //
        //     if (!name) {
        //         errors.name = 'Name is required.';
        //     }
        //
        //     if (!email) {
        //         errors.email = 'Email is required.';
        //     } else if (!/\S+@\S+\.\S+/.test(email)) {
        //         errors.email = 'Email is invalid.';
        //     }
        //
        //     if (!password) {
        //         errors.password = 'Password is required.';
        //     } else if (password.length < 6) {
        //         errors.password = 'Password must be at least 6 characters.';
        //     }
        //
        //     setErrors(errors);
        //     setIsFormValid(Object.keys(errors).length === 0);
        // };
        // Submit
        const handleSubmit = (e) => {
            if (validateForm()) {
                const options = {
                    method: 'POST',
                    url: 'https://apistellarsync.foxlo.tech/api/customer/signup',
                    headers: {'Content-Type': 'application/json'},
                    data: {name: name, emailId: email, password: password}
                };
                axios.request(options).then(function (response) {
                    const data = JSON.parse(JSON.stringify(response.data))
                    console.log(data.error)
                    if (data.error === false) {
                        router.push("/homepage");
                    } else if (data.error === true) {
                        console.log("Customer Already Exits");
                    }
                    console.log(response.data);
                }).catch(function (error) {
                    console.error(error);
                });
            } else {
                console.log('Form has errors. Please correct them.');
            }
        };
        // const handleChange = (e) => {
        //     const { name, value } = e.target;
        //
        //     // Avoid directly logging or stringifying the entire event object
        //     console.log(`Updating ${name} with value:`, value);
        //
        //     setFormData({
        //         ...formData,
        //         [name]: value,
        //     });
        // };

        return (
            <>
                <div style={{backgroundImage: `url('/assets/images/Clouds.png')`}}
                     className="min-h-full justify-center px-6 py-12 lg:px-8">
                    <div className="flex justify-center">
                        <div className="bg-gray-200 rounded-l-3xl hidden md:block">
                            <div className="h-44 w-96 justify-center ml-10">
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
                                        <h2 className="md:mt-5 mt-5 md:ml-5 ml-2 md:text-3xl text-md font-bold leading-9 tracking-tight text-gray-900">
                                            Stellar Sync
                                        </h2>
                                    </div>
                                    <h2 className="mt-4 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
                                        Create your account
                                    </h2>
                                    <div className="flex flex-1 items-center px-2 justify-center">
                                        <h1 className="md:text-md text-sm text-gray-900">Already have an Account?</h1>
                                        <Link href="/login"
                                              className="text-blue-500 font-mono md:text-md text-sm mt-1 underline justify-end">Sign
                                            In</Link>
                                    </div>
                                </div>
                                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                                                    // value={name}
                                                    // onChange={handleChange}
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
                                                    value={email}
                                                    // onChange={handleChange}
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
                                                    value={password}
                                                    // onChange={handleChange}
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