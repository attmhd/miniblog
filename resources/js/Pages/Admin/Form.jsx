import AdminLayout from "@/Layouts/AdminLayout";
import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { router } from "@inertiajs/react";

import InputError from "@/Components/InputError";
import Alert from "@/Components/Alert";

export default function Form({ auth, articles }) {
    const page = usePage();
    const currentUrl = page.url;
    console.log(currentUrl);
    console.log(articles);
    const editor = useRef(null);
    const [open, setOpen] = useState(false);
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

    return (
        <>
            {open && <Alert />}

            <AdminLayout user={auth.user}>
                <section className="bg-white dark:bg-gray-900">
                    <div className="">
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                            {currentUrl == "/admin/artikel/new"
                                ? "Add new "
                                : "Update"}{" "}
                            Article
                        </h2>
                        <form onSubmit={addArticle}>
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
                                        onChange={handleChanges}
                                        value={
                                            currentUrl == "/admin/artikel/new"
                                                ? data.title
                                                : articles.title
                                        }
                                    />
                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
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
                                                : articles.description
                                        }
                                        onChange={(newContent) =>
                                            handleContent(newContent)
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
