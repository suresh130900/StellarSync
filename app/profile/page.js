'use client'

import SidePanel from "@/app/Components/sidepanel";
import React from "react";
import {useState } from 'react'

export default function profile(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [errors, setErrors] = React.useState({
        name: "",
        password: "",
        confirmPassword: "",
        general: ""
    });

    const handleClick = () => {
        console.log("In handle click");                             //DEBUGGING
        const errorMessage = {name: "", password: "", confirmPassword: "", general: ""};

        if(selectedOption === null){
            errorMessage.general = "Please select an option";
        }
        if(selectedOption === 'name' && !name.trim()){
            errorMessage.name = "Name cannot be empty";
        }
        if(selectedOption === 'password'){
            if(!password.trim()){
                errorMessage.password = "Password cannot be empty";
            }
            if(!confirmPassword.trim()){
                errorMessage.confirmPassword = "Please confirm your password"
            }
            if(password !== confirmPassword){
                errorMessage.confirmPassword = "Passwords do not match"
            }
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            ...errorMessage
        }));


        if(!Object.values(errorMessage).some((error) => error !== "")){
            console.log("name: ", name);                            //TODO: replace with axios call
            console.log("password: ", password);                    //TODO: replace with axios call
            console.log("confirm password: ", confirmPassword);     //TODO: replace with axios call
        }
    }

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
                                onChange={() => {
                                    setSelectedOption('name');
                                    setPassword("");
                                    setConfirmPassword("");
                                    setErrors((prevErrors) => ({
                                        ...prevErrors,
                                        password: "",
                                        confirmPassword: ""
                                    }));
                                }}
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
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value);
                                    setErrors((prevErrors) => ({
                                        ...prevErrors,
                                        name: ""
                                    }));
                                }}
                            />
                            <span className="text-red-500 ml-4">{errors.name}</span>
                        </div>
                    )}

                    <div>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio text-indigo-600"
                                value="password"
                                checked={selectedOption === 'password'}
                                onChange={() => {
                                    setSelectedOption('password');
                                    setName("");
                                    setErrors((prevErrors) => ({
                                        ...prevErrors,
                                        name: ""
                                    }));
                                }}
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
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                    setErrors((prevErrors) => ({
                                        ...prevErrors,
                                        password: ""
                                    }));
                                }}
                            />
                            <span className="text-red-500 ml-4">{errors.password}</span>
                            <br />
                            <input
                                type="password"
                                className="border p-2"
                                placeholder="Confirm your new password"
                                value={confirmPassword}
                                onChange={(event) => {
                                    setConfirmPassword(event.target.value);
                                    setErrors((prevErrors) => ({
                                        ...prevErrors,
                                        confirmPassword: ""
                                    }));
                                }}
                            />
                            <span className="text-red-500 ml-4">{errors.confirmPassword}</span>
                        </div>
                    )}

                    <div className="gap-x-6 mr-60">
                        <button type="submit" className="rounded-md bg-indigo-600 mt-8 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleClick}>
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