'use client'
import SidePanel from "@/app/Components/sidepanel";
import FeatureListDockerForm from "@/app/Components/FeatureListDockerForm";
import {CheckIcon} from "@heroicons/react/20/solid";
import React from "react";

export default function Page() {
    const [image, setImage] = React.useState("");
    const [port, setPort] = React.useState();
    const [errors, setErrors] = React.useState({
        image: "",
        port: "",
    });

    const handleClick = () => {
        console.log("In handle click");
        const errorMessage = {image: "", port: ""}

        if(!image.trim()){
            errorMessage.image = "Please enter a valid image";
        }
        if(isNaN(port) || port < 0 || port > 65535 || !port.trim()){
            errorMessage.port = "Please enter a valid port";
        }
        
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...errorMessage
        }));

        if(!Object.values(errorMessage).some((error) => error !== "")){
            console.log(image, port);            //TODO: replace with axios call
        }
    }

    return (
        <div>
            <SidePanel>
                <div className="h-[70%] w-full rounded-xl"
                     style={{backgroundImage: `url('/assets/images/simonLess.jpg')`}}>
                    <div className="flex md:p-16 p-10">
                        <div className="mt-5">
                            <h1 className="font-bold text-4xl text-indigo-950">
                                Host Your Docker Image for rapid deployment
                            </h1>
                            <h2 className="font-semibold text-xl text-indigo-950 mr-10 mt-10">
                                Experience seamless deployment on your preferred port, unlocking simplicity, speed, and
                                flexibility.
                            </h2>
                        </div>
                        <div className="bg-gray-100 h-72 w-[50%] rounded-xl p-7">
                            <div className="flex ">
                                <CheckIcon className="h-6 w-6 text-blue-700"></CheckIcon>
                                <h1 className="text-gray-700 font-medium ml-3">
                                    Free to Start
                                </h1>
                            </div>
                            <div className="flex mt-4">
                                <CheckIcon className="h-6 w-6 text-blue-700"></CheckIcon>
                                <h1 className="text-gray-700 font-medium ml-3">
                                    Secured and Private
                                </h1>
                            </div>
                            <div className="flex mt-4">
                                <CheckIcon className="h-6 w-6 text-blue-700"></CheckIcon>
                                <h1 className="text-gray-700 font-medium ml-3">
                                    Transparent pricing
                                </h1>
                            </div>
                            <div className="flex mt-4">
                                <CheckIcon className="h-6 w-6 text-blue-700"></CheckIcon>
                                <h1 className="text-gray-700 font-medium ml-3">
                                    Port Freedom
                                </h1>
                            </div>
                            <button
                                type="button"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 w-full mt-10 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-16">
                    <h1 className="font-semibold text-2xl text-gray-700">
                        Key Features
                    </h1>
                    <div className="mt-10">
                        <FeatureListDockerForm/>
                    </div>
                    <div>
                        <h2 className="flex font-semibold text-lg text-gray-800 mt-8">
                            All we need is Your Docker Image and a Port
                        </h2>
                        <div className="sm:col-span-4 flex-col w-[50%]">
                            <div className="">
                                <label htmlFor="server"
                                       className="block text-md mt-3 font-medium leading-6 text-gray-900">
                                    Image
                                </label>
                                <div
                                    className="flex rounded-md shadow-sm ring-1 mt-3 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <input
                                        type="text"
                                        name="image"
                                        id="image"
                                        value={image}
                                        onChange={(event) => {
                                            setImage(event.target.value);
                                        }}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                                        placeholder="  eg:localhost"
                                    />
                                </div>
                                <span className="text-red-500">{errors.image}</span>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="port"
                                       className="block text-md font-medium mt-6 leading-6 text-gray-900">
                                    Port
                                </label>
                                <div
                                    className="flex rounded-md shadow-sm ring-1 mt-3 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <input
                                        type="number"
                                        name="port"
                                        id="port"
                                        value={port}
                                        onChange={(event) => {
                                            setPort(event.target.value);
                                        }}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                                        placeholder="  eg:localhost"
                                    />
                                </div>
                                <span className="text-red-500">{errors.port}</span>
                            </div>
                            <button type="submit"
                                    className="rounded-md mt-10 w-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={handleClick}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                {/*    <div className="ml-64">*/}
                {/*        <video className="w-200 h-100">*/}
                {/*            <source src="/assets/videos/docker_gif.webm"/>*/}
                {/*        </video>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </SidePanel>
        </div>
    );
}

