'use client'

import SidePanel from "@/app/Components/sidepanel";
import React from "react";
import {useState } from 'react'

export default function profile(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedOption, setSelectedOption] = React.useState(null);

    return(
        <div>
            <SidePanel>
                <div className="container mt-10">
                    <h1 className="text-3xl font-semibold mb-5">Update Information</h1>

                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio text-indigo-600"
                                value="name"
                                checked={selectedOption === 'name'}
                                onChange={() => setSelectedOption('name')}
                            />
                            <span className="ml-2">Update Name</span>
                        </label>
                    </div>

                    {selectedOption === 'name' && (
                        <div className="mb-4">
                            <input
                                type="text"
                                className="border p-2"
                                placeholder="Enter your new name"
                            />
                        </div>
                    )}

                    <div>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio text-indigo-600"
                                value="password"
                                checked={selectedOption === 'password'}
                                onChange={() => setSelectedOption('password')}
                            />
                            <span className="ml-2">Update Password</span>
                        </label>
                    </div>

                    {selectedOption === 'password' && (
                        <div className="mt-4">
                            <input
                                type="password"
                                className="border p-2 mb-2"
                                placeholder="Enter your new password"
                            />
                            <br/>
                            <input
                                type="password"
                                className="border p-2"
                                placeholder="Confirm your new password"
                            />
                        </div>
                    )}

                    <div className="gap-x-6 mr-60">
                        <button type="submit" className="rounded-md bg-indigo-600 mt-8 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Submit
                        </button>
                        <button type="button" className="text-sm font-semibold ml-10 mt-5 leading-6 text-gray-900">
                            Cancel
                        </button>
                    </div>
                </div>
            </SidePanel>
        </div>
    );
}