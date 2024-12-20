import Footer from "@/Components/Pages/Footer";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import { BiCategory } from "react-icons/bi";

export default function HomeLayout({ user, children, header }) {
    return (
        <div className="container mx-auto">
            <div className="container mx-auto px-4 sm:px-8">
                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}
            </div>

            {/* Navbar */}
            <nav className="navbar bg-base-100 px-4 py-8 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <button
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a href="/">Blog</a>
                            </li>
                            <li>
                                <Link>About</Link>
                            </li>
                            <li>
                                {user ? (
                                    <h1>{user.name}</h1>
                                ) : (
                                    <Link>Sign In</Link>
                                )}
                            </li>
                        </ul>
                    </div>
                    <Link href="/">
                        <h1 className="px-10 text-3xl">Blog</h1>
                    </Link>
                    <form
                        action="#"
                        method="GET"
                        className="hidden lg:block relative lg:pl-10"
                    >
                        <label htmlFor="topbar-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative lg:w-80">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-1 lg:w-4 lg:h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    {" "}
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />{" "}
                                </svg>
                            </div>
                            <input
                                type="text"
                                name="email"
                                id="topbar-search"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Search"
                            />
                        </div>
                    </form>
                </div>
                <div className="navbar-end hidden lg:flex  text-lg">
                    <ul className="menu menu-horizontal px-2">
                        <li>
                            <Link href="/#blog">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                                    />
                                </svg>
                                <h1 className="text-lg">Blog</h1>
                            </Link>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    <div className="flex justify-center items-center gap-1">
                                        <BiCategory className="size-6" />
                                        <h1 className=" text-lg">Category</h1>
                                    </div>
                                </summary>
                                {}
                                <ul className="p-2">
                                    <li>
                                        <Link>Kategori 1</Link>
                                    </li>
                                    <li>
                                        <Link>Kategori 2</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                </svg>
                                <h1 className=" text-lg">About</h1>
                            </Link>
                        </li>

                        <li>
                            {user ? (
                                <Link href="/admin">
                                    <button
                                        className="avatar tooltip tooltip-bottom"
                                        data-tip={user.name}
                                    >
                                        <div className="w-9 rounded-full">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </button>

                                    {/* <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-auto p-2 shadow">
                                        <li>
                                            <Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Link>
                                        </li>
                                    </ul> */}
                                </Link>
                            ) : (
                                <Link
                                    href="/login"
                                    className="relative bottom-2"
                                >
                                    <PrimaryButton className="  btn btn-md ">
                                        Sign In
                                    </PrimaryButton>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>

            <main>{children}</main>
            <Footer />
        </div>
    );
}
