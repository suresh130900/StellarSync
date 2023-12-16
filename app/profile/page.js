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
                <div className="container mx-auto mt-10 text-center">
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
                            <input
                                type="password"
                                className="border p-2"
                                placeholder="Confirm your new password"
                            />
                        </div>
                    )}
                </div>
            </SidePanel>
        </div>
    );
}