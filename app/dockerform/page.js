'use client'
import SidePanel from "@/app/Components/sidepanel";

export default function Page() {
    return (
        <div>
            <SidePanel>
                <form>
                    <h2 className="flex font-bold leading-7 text-3xl text-gray-900">Docker Form</h2>
                    <div className="sm:col-span-4 flex-col">
                        <div className="mt-10 mb-10">
                            <label htmlFor="server" className="block text-lg font-semibold leading-6 text-gray-900">
                                Server
                            </label>
                            <div className="flex rounded-md shadow-sm ring-1 mt-3 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="server"
                                    id="server"
                                    required
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="eg:localhost"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="port" className="block text-lg font-semibold leading-6 text-gray-900">
                                Port
                            </label>
                            <div className="flex rounded-md shadow-sm ring-1 mt-3 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="port"
                                    id="port"
                                    required
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="eg:3000"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="gap-x-6 mr-60">
                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Save
                        </button>
                        <button type="button" className="text-sm font-semibold ml-10 mt-5 leading-6 text-gray-900">
                            Cancel
                        </button>
                    </div>
                </form>
            </SidePanel>
        </div>
    );
}

