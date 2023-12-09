'use client'
export default function DetailsForm() {
    return (
        <form>
            <h2 className="text-base text-lg flex justify-center mt-20 font-bold leading-7 text-gray-900">Details Form</h2>
            <div className="sm:col-span-4 flex flex-col items-center">
                <div className="mt-4 mb-10">
                    <label htmlFor="server" className="block text-lg font-medium leading-6 text-gray-900">
                        Server
                    </label>
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            name="server"
                            id="server"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="eg:localhost"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="port" className="block text-lg font-medium leading-6 text-gray-900">
                        Port
                    </label>
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            name="port"
                            id="port"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="eg:3000"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-0 flex items-center justify-end gap-x-6 mr-60">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Save
                </button>
            </div>
        </form>
    );
}

