'use client'
import Services_List from "@/app/Components/Services_List";
import SidePanel from "@/app/Components/sidepanel";

export default function HomePage() {
    return(
        <div>
            <SidePanel >
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="md:w-24 w-24 h-24 md:ml-0 -ml-10">
                    <path d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z" />
                    <path fillRule="evenodd" d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clipRule="evenodd" />
                </svg>
                <div className= "mut-4 ml-5 md:mt-4 mt-3">
                    <h1 className="md:text-2xl text-md">First-Project</h1>
                    <h2 className="md:text-md text-sm mt-2 font-light">Update your project information under Settings</h2>
                </div>
                <div className="mt-5 md:ml-[40%] ml-0">
                <button type="submit"
                    className="inline-flex md:h-10 h-10 md:w-44 w-28 items-center rounded-md px-3 py-2 bg-gray-100 text-sm font-semibold text-white shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6 hidden md:block">
                            <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                        </svg>
                        <h1 className="mt-0.5 text-md font-semibold text-black ml-2">More Resources</h1>
                    </div>
                </button>
                </div>
            </div>
            <div className="mt-5">
                <span className="isolate inline-flex rounded-md shadow-sm">
                    <button
                        type="button"
                        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:z-10">
                        Resources
                    </button>
                    <button
                        type="button"
                        className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:z-10">
                        Activity
                    </button>
                    <button
                        type="button"
                        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:z-10">
                        Settings
                    </button>
                </span>
            </div>
            <div className="md:ml-3 -ml-8">
                <h1 className="text-md font-semibold mt-3">Domains(1)</h1>
                <button
                    type="button"
                    className="rounded-md bg-white md:w-full sm:w-full px-3.5 mt-3 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <div className="flex">
                        <h3 className="text-sm">foxlo.tech</h3>
                        <h2 className="text-sm font-light md:ml-64 ml-3">1 A / 2 CNAME / 2 MX / 3 NS / 1 SOA / 1 SRV / 2 TXT</h2>
                        <h2 className="md:ml-96 ml-3">...</h2>
                    </div>
                </button>
            </div>
            <div className="md:ml-3 -ml-8 mt-10">
                <h1 className="font-semibold">Create Something New</h1>
                <Services_List />
            </div>
            </SidePanel>
        </div>
    );
}