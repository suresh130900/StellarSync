'use client'

import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
    Cog6ToothIcon,
    UsersIcon,
    XMarkIcon,
}
from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import currencyRupeeIcon from "@heroicons/react/20/solid/esm/CurrencyRupeeIcon";
import cloudIcon from "@heroicons/react/20/solid/esm/CloudIcon";
import QuestionMarkIcon from '@/app/Components/Create_Dropdown';
import HomePage from "@/app/Pages/HomePage";
import Create_dropdown from "@/app/Components/Create_Dropdown";

const navigation = [
    { name: 'Billing', href: '#', icon: currencyRupeeIcon, current: true },
    { name: 'Support', href: '#', icon: UsersIcon, current: false },
    { name: 'API', href: '#', icon: cloudIcon, current: false },
    // { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    // { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
    { id: 1, name: 'Cloudways', href: '#',initial: 'C', icon: cloudIcon, current: false},
    { id: 2, name: 'SnapShooter', href: '#', initial: 'S', current: false },
    { id: 3, name: 'Marketplace', href: '#', initial: 'M', current: false },
    { id: 4, name: 'Product Docs', href: '#', initial: 'P', current: false },
    { id: 5, name: "What's New", href: "#", initial: 'W', current: false}
]
const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full">
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0">
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    {/* Sidebar component, swap this element with another sidebar if you like */}
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                                        <div className="flex h-16 shrink-0 items-center">
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                                alt="Your Company"/>
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <h1 className="text-md font-semibold text-white mb-4 ">PROJECTS</h1>
                                                    <ul className="flex flex-col space-y-3 mb-8">
                                                        <div className="flex">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                                            </svg>
                                                            <li><a href="#" className="text-white font-semibold text-sm hover:underline ml-3">First-Project</a></li>
                                                        </div>
                                                        <div className="flex">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="white"
                                                                width="20"
                                                                height="20">
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M12 4v16m8-8H4"/>
                                                            </svg>
                                                            <li><a href="#" className="text-white font-semibold text-sm hover:underline ml-3">New Project</a></li>
                                                        </div>
                                                    </ul>
                                                    <h1 className="text-md font-semibold text-white mb-4 ">MANAGE</h1>
                                                    <ul className="flex flex-col space-y-3 mb-9">
                                                        <li><a href="#" className="text-white font-semibold text-sm hover:underline">Apps</a></li>
                                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Droplets</a></li>
                                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Functions</a></li>
                                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Kubernetes</a></li>
                                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Volumes Block Storage</a></li>
                                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Databases</a></li>
                                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Spaces Object Storage</a></li>
                                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Container Registry</a></li>
                                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Images</a></li>
                                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Networking</a></li>
                                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Monitoring</a></li>
                                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Add-Ons</a></li>
                                                    </ul>
                                                    <ul role="list" className="-mx-2 space-y-1">
                                                        {navigation.map((item) => (
                                                            <li key={item.name}>
                                                                <a
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        item.current
                                                                            ? 'bg-indigo-700 text-white'
                                                                            : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )}>
                                                                    <item.icon
                                                                        className={classNames(
                                                                            item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                                                                            'h-6 w-6 shrink-0'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="text-xs font-semibold leading-6 text-indigo-200">Your teams</div>
                                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                                        {teams.map((team) => (
                                                            <li key={team.name}>
                                                                <a
                                                                    href={team.href}
                                                                    className={classNames(
                                                                        team.current
                                                                            ? 'bg-indigo-700 text-white'
                                                                            : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )}>
                                                                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                                                        {team.initial}
                                                                      </span>
                                                                    <span className="truncate">{team.name}</span>
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li className="mt-auto">
                                                    <a
                                                        href="#"
                                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white">
                                                        <Cog6ToothIcon
                                                            className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                                                            aria-hidden="true"/>
                                                        Settings
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                alt="Your Company"
                            />
                        </div>

                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <h1 className="text-md font-semibold text-white mb-4 ">PROJECTS</h1>
                                    <ul className="flex flex-col space-y-3 mb-8">
                                        <div className="flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                            </svg>
                                            <li><a href="#" className="text-white font-semibold text-sm hover:underline ml-3">First-Project</a></li>
                                        </div>
                                        <div className="flex">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="white"
                                                width="20"
                                                height="20">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 4v16m8-8H4"/>
                                            </svg>
                                            <li><a href="#" className="text-white font-semibold text-sm hover:underline ml-3">New Project</a></li>
                                        </div>
                                    </ul>
                                    <h1 className="text-md font-semibold text-white mb-4 ">MANAGE</h1>
                                    <ul className="flex flex-col space-y-3 mb-9">
                                        <li><a href="#" className="text-white font-semibold text-sm hover:underline">Apps</a></li>
                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Droplets</a></li>
                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Functions</a></li>
                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Kubernetes</a></li>
                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Volumes Block Storage</a></li>
                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Databases</a></li>
                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Spaces Object Storage</a></li>
                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Container Registry</a></li>
                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Images</a></li>
                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Networking</a></li>
                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Monitoring</a></li>
                                        <li><a href="#" className="text-white font-semibold text-sm  hover:underline">Add-Ons</a></li>
                                    </ul>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-indigo-700 text-white'
                                                            : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                    <item.icon
                                                        className={classNames(
                                                            item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                                                            'h-6 w-6 shrink-0'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>

                                </li>
                                <li>
                                    <div className="text-xs font-semibold leading-6 text-indigo-200">Your teams</div>
                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                        {teams.map((team) => (
                                            <li key={team.name}>
                                                <a
                                                    href={team.href}
                                                    className={classNames(
                                                        team.current
                                                            ? 'bg-indigo-700 text-white'
                                                            : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                                    {team.initial}
                                                  </span>
                                                    <span className="truncate">{team.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="mt-auto">
                                    <a
                                        href="#"
                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white">
                                        <Cog6ToothIcon
                                            className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                                            aria-hidden="true"/>
                                        Settings
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-72">
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Separator */}
                        <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            <form className="relative flex flex-1" action="#" method="GET">
                                <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <MagnifyingGlassIcon
                                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                                    aria-hidden="true"/>
                                <input
                                    id="search-field"
                                    className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                    placeholder="Search..."
                                    type="search"
                                    name="search"/>
                            </form>
                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">View Support</span>
                                    <QuestionMarkIcon className="h-6 w-6" aria-hidden= "true"/>
                                </button>
                                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Separator */}
                                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative">
                                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full bg-gray-50"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""/>
                                        <span className="hidden lg:flex lg:items-center">
                                          <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                                            Tom Cook
                                              <div>
                                                   <span className="ml-4 text-sm font-medium leading-6 text-gray-900" aria-hidden="true">
                                                        Estimated Cost: $0.00
                                                   </span>
                                              </div>
                                          </span>
                                          <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                active ? 'bg-gray-50' : '',
                                                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                                                            )}>
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8 ml-10">
                            {/* Your content */}
                            <HomePage />
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
