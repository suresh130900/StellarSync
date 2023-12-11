
'use client'

import Link from "next/link";

export default function Login() {
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
