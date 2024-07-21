import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { router } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import Alert from "@/Components/Alert";

export default function Form({ auth, articles, category }) {
    console.log(category);
    const page = usePage();
    const currentUrl = page.url;
    const editor = useRef(null);
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState({
        title: articles.title,
        description: articles.description,
    });
    const { data, setData, errors } = useForm({
        title: "",
        description: "",
    });

    const showAlert = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 2000);
    };

    const handleChanges = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeUpdate = (e) => {
        setUpdate({
            ...update,
            title: e.target.value,
        });
    };

    const handleUpdateContent = (datas) => {
        setUpdate({
            ...update,
            description: datas,
        });
    };

    const handleContent = (datas) => {
        setData({
            ...data,
            description: datas,
        });
    };

    const addArticle = (e) => {
        e.preventDefault();
        router.post("/admin/artikel/new", data);

        setData({
            title: "",
            description: "",
        });
    };

    const updateArticle = (e) => {
        e.preventDefault();
        router.post(`/admin/artikel/${articles.id}`, {
            _method: "patch",
            title: update.title,
            description: update.description,
        });

        setUpdate({
            title: "",
            description: "",
        });
    };

    return (
        <>
            {open && (
                <Alert
                    message={`Artikel berhasil ${
                        currentUrl == "/admin/artikel/new"
                            ? "dibuat."
                            : "diupdate."
                    }`}
                />
            )}

            <Head title="Artikel" />
            <AdminLayout user={auth.user}>
                <section className="bg-white dark:bg-gray-900">
                    <div className="">
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                            {currentUrl == "/admin/artikel/new"
                                ? "Add new "
                                : "Update"}{" "}
                            Article
                        </h2>
                        <form
                            onSubmit={
                                currentUrl == "/admin/artikel/new"
                                    ? addArticle
                                    : updateArticle
                            }
                        >
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-2">
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Article's title"
                                        required=""
                                        onChange={
                                            currentUrl == "/admin/artikel/new"
                                                ? handleChanges
                                                : handleChangeUpdate
                                        }
                                        value={
                                            currentUrl == "/admin/artikel/new"
                                                ? data.title
                                                : update.title
                                        }
                                    />
                                    {/* <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    /> */}
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Category
                                    </label>
                                    <div className="flex justify-between gap-2">
                                        <input
                                            type="text"
                                            name="cat"
                                            id="title"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Categories name"
                                            required=""
                                        />
                                        <button
                                            id="dropdownDefaultButton"
                                            data-dropdown-toggle="dropdown"
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            type="button"
                                        >
                                            <svg
                                                className="w-2.5 h-2.5 "
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="m1 1 4 4 4-4"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="flex justify-end">
                                        {/* Dropdown menu */}
                                        <div
                                            id="dropdown"
                                            className="z-10 mt-4  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                        >
                                            <ul
                                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="dropdownDefaultButton"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Dashboard
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Settings
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Earnings
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        Sign out
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        for="description"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Description
                                    </label>
                                    <JoditEditor
                                        ref={editor}
                                        value={
                                            currentUrl == "/admin/artikel/new"
                                                ? data.description
                                                : update.description
                                        }
                                        onChange={(newContent) =>
                                            currentUrl == "/admin/artikel/new"
                                                ? handleContent(newContent)
                                                : handleUpdateContent(
                                                      newContent
                                                  )
                                        }
                                    />
                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                class=" mt-7 btn btn-primary"
                                onClick={showAlert}
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </section>
            </AdminLayout>
        </>
    );
}
