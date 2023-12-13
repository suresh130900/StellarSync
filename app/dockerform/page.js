'use client'
import SidePanel from "@/app/Components/sidepanel";
import {CheckIcon} from "@heroicons/react/20/solid";

export default function Page() {
    return (
        <div>
            <SidePanel>
                <div className="h-[70%] w-full rounded-xl" style={{backgroundImage: `url('/assets/images/simonLess.jpg')`}}>
                    <div className="flex md:p-16 p-10">
                        <div className="">
                            <h1 className="font-bold text-4xl text-indigo-950">
                                Host Your Docker Image for rapid deployment
                            </h1>
                            <h2 className="font-bold text-xl text-indigo-950 mt-10">
                                Build container images
                            </h2>
                        </div>
                        <div className="bg-gray-100 h-96 w-[50%] rounded-xl p-6">
                            <div className="flex ">
                                <CheckIcon className="h-5 w-5 text-indigo-500"></CheckIcon>
                                <h1>
                                    hello world
                                </h1>
                            </div>
                            <div className="flex ">
                                <CheckIcon className="h-5 w-5 text-indigo-500"></CheckIcon>
                                <h1>
                                    hello world
                                </h1>
                            </div>
                            <div className="flex ">
                                <CheckIcon className="h-5 w-5 text-indigo-500"></CheckIcon>
                                <h1>
                                    hello world
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="flex">*/}
                {/*<form>*/}
                {/*    <h2 className="flex font-semibold leading-7 text-sm text-gray-900 mt-8">All we need is Your Docker Image and a Port</h2>*/}
                {/*    <div className="sm:col-span-4 flex-col">*/}
                {/*        <div className="">*/}
                {/*            <label htmlFor="server" className="block text-md mt-3 font-medium leading-6 text-gray-900">*/}
                {/*                Server*/}
                {/*            </label>*/}
                {/*            <div className="flex rounded-md shadow-sm ring-1 mt-3 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">*/}
                {/*                <input*/}
                {/*                    type="text"*/}
                {/*                    name="server"*/}
                {/*                    id="server"*/}
                {/*                    required*/}
                {/*                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"*/}
                {/*                    placeholder="  eg:localhost"*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="mb-4">*/}
                {/*            <label htmlFor="port" className="block text-md font-medium mt-6 leading-6 text-gray-900">*/}
                {/*                Port*/}
                {/*            </label>*/}
                {/*            <div className="flex rounded-md shadow-sm ring-1 mt-3 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">*/}
                {/*                <input*/}
                {/*                    type="number"*/}
                {/*                    name="port"*/}
                {/*                    id="port"*/}
                {/*                    required*/}
                {/*                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"*/}
                {/*                    placeholder="  eg:localhost"*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="gap-x-6 mr-60">*/}
                {/*        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">*/}
                {/*            Save*/}
                {/*        </button>*/}
                {/*        <button type="button" className="text-sm font-semibold ml-10 mt-5 leading-6 text-gray-900">*/}
                {/*            Cancel*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</form>*/}
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

