'use client';
import '../utils/style/index.css'
import React from "react";

export default function Navbar() {
    return (
        <>
            <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                        <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                            <div className="flex-shrink-0 flex items-center">
                                <a href="#">
                                    <img className="block h-8 w-auto"
                                         src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                                         alt="Workflow"/>
                                </a>
                            </div>
                        </div>
                        <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                            <div
                                className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                                <div className="w-full">
                                    <label htmlFor="search" className="sr-only">Search</label>
                                    <div className="relative">
                                        <div
                                            className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                        </div>
                                        <input id="search" name="search"
                                               className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                               placeholder="Search" type="search"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                            <button type="button"
                                    className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    aria-expanded="false">
                                <span className="sr-only">Open menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                            <a href="#"
                               className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                </svg>
                            </a>

                            <div className="flex-shrink-0 relative ml-5">
                                <div>
                                    <button type="button"
                                            className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full"
                                             src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                             alt=""/>
                                    </button>
                                </div>

                                <div
                                    className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
                                    >
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700" role="menuitem"
                                        id="user-menu-item-0">Your Profile</a>

                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700" role="menuitem"
                                        id="user-menu-item-1">Settings</a>

                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700" role="menuitem"
                                        id="user-menu-item-2">Sign out</a>
                                </div>
                            </div>

                            <a href="#"
                               className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> New
                                Project </a>
                        </div>
                    </div>
                </div>

                <nav className="lg:hidden" aria-label="Global">
                    <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                        <a href="#" aria-current="page"
                           className="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium">Dashboard</a>

                        <a href="#"
                           className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium">Calendar</a>

                        <a href="#"
                           className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium">Teams</a>

                        <a href="#"
                           className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium">Directory</a>
                    </div>
                    <div className="border-t border-gray-200 pt-4 pb-3">
                        <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full"
                                     src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-gray-800">Chelsea Hagon</div>
                                <div className="text-sm font-medium text-gray-500">chelseahagon@example.com</div>
                            </div>
                            <button type="button"
                                    className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                </svg>
                            </button>
                        </div>
                        <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                            <a href="#"
                               className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Your
                                Profile</a>

                            <a href="#"
                               className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Settings</a>

                            <a href="#"
                               className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Sign
                                out</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}