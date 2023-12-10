'use client'
import SidePanel from "@/app/Components/sidepanel";

export default function Page() {
    return (
        <div>
            <SidePanel>
                <div>
                    <h1 className="font-bold text-3xl text-gray-900">
                        Create Database
                    </h1>
                </div>
                <div className="flex">
                    <form>
                        <div className="sm:col-span-4 flex-col">
                            <div className="">
                                <label htmlFor="server" className="block text-md mt-6 font-medium leading-6 text-gray-900">
                                    Choose a database engine
                                </label>

                                <div class="flex items-center mt-4 mb-4 py-4 ps-2 border border-gray-200 rounded dark:border-blue-700">
                                    <input 
                                        id="mongodb" 
                                        type="radio" 
                                        value=""
                                        name="database" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    />
                                    <label for="mongodb" class="flex items-center ms-2 text-sm font-medium text-gray-900 dark:text-blue-800">
                                      <img class="h-8" src="/assets/images/mongodb-logo-icon.png" alt="mongodb-img"/>MongoDB
                                    </label>
                                </div>
                                <div class="flex items-center mt-4 mb-4 py-4 ps-2 border border-gray-200 rounded dark:border-blue-700">
                                    <input 
                                        id="postgresql" 
                                        type="radio" 
                                        value="" 
                                        name="database" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    />
                                    <label for="postgresql" class="flex items-center ms-2 text-sm font-medium text-gray-900 dark:text-blue-800">
                                    <img class="h-8 px-1 pr-2" src="/assets/images/postgresql-logo-icon.png" alt="postgresql-img"/>PostgreSQL
                                    </label>
                                </div>
                                <div class="flex items-center mt-4 mb-4 py-4 ps-2 border border-gray-200 rounded dark:border-blue-700">
                                    <input 
                                        id="mysql" 
                                        type="radio" 
                                        value="" 
                                        name="database" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    />
                                    <label for="mysql" class="flex items-center ms-2 text-sm font-medium text-gray-900 dark:text-blue-800">
                                        <img class="h-8 px-1 pr-2" src="/assets/images/mysql-logo-icon.png" alt="mysql-img"/>MySQL
                                    </label>
                                </div>
                                <div class="flex items-center mt-4 mb-4 py-4 ps-2 border border-gray-200 rounded dark:border-blue-700">
                                    <input 
                                        id="redis" 
                                        type="radio" 
                                        value="" 
                                        name="database" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    />
                                    <label for="redis" class="flex items-center ms-2 text-sm font-medium text-gray-900 dark:text-blue-800">
                                        <img class="h-8" src="/assets/images/redis-logo-icon.png" alt="redis-img"/>Redis
                                    </label>
                                </div>

                            </div>
                            <div className="mb-4">
                                <label htmlFor="dbname" className="block text-md font-medium mt-10 leading-6 text-gray-900">
                                    Choose a unique database name
                                </label>
                                <label htmlFor="dbname" className="block text-sm font-small leading-6 text-gray-600">
                                    Names must be in lowercase. They can be between 3 and 30 characters long and may contain dashes.
                                </label>
                                <div className="flex rounded-md shadow-sm ring-1 mt-3 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="dbname"
                                        id="dbname"
                                        required
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="eg: db-mongodb"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="tags" className="block text-md font-medium mt-10 leading-6 text-gray-900">
                                    Tags
                                </label>
                                <label htmlFor="tags" className="block text-sm font-small leading-6 text-gray-600">
                                    May contain letters, numbers, colons, dashes, and underscores.
                                </label>
                                <div className="flex rounded-md shadow-sm ring-1 mt-3 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="tags"
                                        id="tags"
                                        required
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Enter tag name"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="gap-x-6 mr-60">
                            <button type="submit" className="rounded-md bg-indigo-600 mt-8 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Create Database
                            </button>
                            <button type="button" className="text-sm font-semibold ml-10 mt-5 leading-6 text-gray-900">
                                Cancel
                            </button>
                        </div>
                    </form>
                    <div className="ml-64">
                        <video className="w-200 h-100">
                            <source src="/assets/videos/docker_gif.webm" />
                        </video>
                    </div>
                </div>
            </SidePanel>
        </div>
    );
}

