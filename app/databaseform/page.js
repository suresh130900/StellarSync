'use client'
import SidePanel from "@/app/Components/sidepanel";
import Image from 'next/image';
import React from "react";

export default function Page() {
    const [selectedDatabase, setSelectedDatabase] = React.useState("");
    const [dbName, setDbName] = React.useState("");
    const [tags, setTags] = React.useState("");
    const [errors, setErrors] = React.useState({
        selectedDatabase: "",
        dbName: "",
        tags: ""
    });

    const handleClick = () => {
        console.log("In handle click");                             //DEBUGGING
        const errorMessage = {selectedDatabase: "", dbName: "", tags: ""};

        if(selectedDatabase === ""){
            errorMessage.selectedDatabase = "Please select a database";
        }
        if(!dbName.trim()){
            errorMessage.dbName = "Please enter a database name";
        }
        if(!tags.trim()){
            errorMessage.tags = "Please enter a tag name";
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            ...errorMessage
        }));

        if(!Object.values(errorMessage).some((error) => error !== "")){
            console.log(selectedDatabase, dbName, tags);            //TODO: replace with axios call
        }
    }

    return (
        <div>
            <SidePanel>
                <div>
                    <h1 className="font-bold text-3xl text-gray-900">
                        Create Database
                    </h1>
                </div>
                <div className="flex">
                        <div className="sm:col-span-4 flex-col">
                            <div className="">
                                <label htmlFor="server" className="block text-md mt-6 font-medium leading-6 text-gray-900">
                                    Choose a database engine
                                    <span className="text-red-500 ml-6">{errors.selectedDatabase}</span>
                                </label>
                                

                                <div className="flex items-center mt-4 mb-4 py-4 ps-2 border border-gray-200 rounded dark:border-blue-700">
                                    <input 
                                        id="mongodb" 
                                        type="radio" 
                                        value="mongodb"
                                        name="database" 
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        onChange={(event) => {
                                            setSelectedDatabase(event.target.value);
                                        }}
                                        required
                                    />
                                    <label htmlFor="mongodb" className="flex items-center ms-2 text-sm font-medium text-gray-900 dark:text-blue-800">
                                      <Image src="/assets/images/mongodb-logo-icon.png" height={40} width={40} alt="mongodb-img"/>MongoDB
                                    </label>
                                </div>
                                <div className="flex items-center mt-4 mb-4 py-4 ps-2 border border-gray-200 rounded dark:border-blue-700">
                                    <input 
                                        id="postgresql" 
                                        type="radio" 
                                        value="postgresql"
                                        name="database" 
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        onChange={(event) => {
                                            setSelectedDatabase(event.target.value);
                                        }}
                                        required
                                    />
                                    <label htmlFor="postgresql" className="flex items-center ms-2 text-sm font-medium text-gray-900 dark:text-blue-800">
                                    <Image height={40} width={40} src="/assets/images/postgresql-logo-icon.png" alt="postgresql-img"/>PostgreSQL
                                    </label>
                                </div>
                                <div className="flex items-center mt-4 mb-4 py-4 ps-2 border border-gray-200 rounded dark:border-blue-700">
                                    <input 
                                        id="mysql" 
                                        type="radio" 
                                        value="mysql"
                                        name="database" 
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        onChange={(event) => {
                                            setSelectedDatabase(event.target.value);
                                        }}
                                        required
                                    />
                                    <label htmlFor="mysql" className="flex items-center ms-2 text-sm font-medium text-gray-900 dark:text-blue-800">
                                        <Image height={40} width={40} src="/assets/images/mysql-logo-icon.png" alt="mysql-img"/>MySQL
                                    </label>
                                </div>
                                <div className="flex items-center mt-4 mb-4 py-4 ps-2 border border-gray-200 rounded dark:border-blue-700">
                                    <input 
                                        id="redis" 
                                        type="radio" 
                                        value="redis"
                                        name="database" 
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        onChange={(event) => {
                                            setSelectedDatabase(event.target.value);
                                        }}
                                        required
                                    />
                                    <label htmlFor="redis" className="flex items-center ms-2 text-sm font-medium text-gray-900 dark:text-blue-800">
                                        <Image height={50} width={50} src="/assets/images/redis-logo-icon.png" alt="redis-img"/>Redis
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
                                        value={dbName}
                                        onChange={(event) => {
                                            setDbName(event.target.value);
                                        }}
                                        required
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="eg: db-mongodb"
                                    />
                                </div>
                                <span className="text-red-500">{errors.dbName}</span>
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
                                        value={tags}
                                        onChange={(event) => {
                                            setTags(event.target.value);
                                        }}
                                        required
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Enter tag name"
                                    />
                                </div>
                                <span className="text-red-500">{errors.tags}</span>
                            </div>
                            <div className="gap-x-6 mr-60">
                                <button type="submit" className="rounded-md bg-indigo-600 mt-8 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleClick}>
                                    Create Database
                                </button>
                                <button type="button" className="text-sm font-semibold ml-10 mt-5 leading-6 text-gray-900">
                                    Cancel
                                </button>
                            </div>
                        </div>
                        
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

