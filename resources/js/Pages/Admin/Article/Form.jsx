import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { router } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import Alert from "@/Components/Alert";

export default function Form({ auth, articles, category }) {
    // console.log(articles.category_id);
    const page = usePage();
    const currentUrl = page.url;
    const editor = useRef(null);
    const [open, setOpen] = useState(false);

    const [data, setData] = useState({
        user_id: auth.user.id,
        title: articles.title,
        description: articles.description,
        content: articles.content,
        category_id: articles.category_id,
    });

    const showAlert = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 2000);
    };

    const handleChangeCategory = (e) => {
        const selectcat = parseInt(e.target.value);
        setData((prevData) => ({
            ...prevData,
            category_id: selectcat,
        }));
    };

    const handleChangeContent = (content) => {
        setData({
            ...data,
            content: content,
        });
    };

    const addArticle = (e) => {
        e.preventDefault();
        router.post("/admin/artikel/new", data);

        setData({
            title: "",
            description: "",
            category_id: "",
            content: "",
        });
    };

    const updateArticle = (e) => {
        e.preventDefault();
        router.post(`/admin/artikel/${articles.id}`, {
            _method: "patch",
            title: data.title,
            description: data.description,
            category_id: data.category_id,
            content: data.content,
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
                                        htmlFor="title"
                                        className="block mb-2 text-sm fon
                                        t-medium text-gray-900 dark:text-white"
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
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                title: e.target.value,
                                            })
                                        }
                                        value={data.title}
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="description"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        name="description"
                                        id="description"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Article's description"
                                        required=""
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                description: e.target.value,
                                            })
                                        }
                                        value={data.description}
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="category"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Category
                                    </label>
                                    <select
                                        className="select select-bordered w-full"
                                        value={data.category_id}
                                        onChange={handleChangeCategory}
                                    >
                                        <option disabled selected>
                                            Choose categories name
                                        </option>
                                        {category.map((items, i) => (
                                            <option key={i} value={items.id}>
                                                {items.id} - {items.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="content"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Content
                                    </label>
                                    <JoditEditor
                                        ref={editor}
                                        value={data.content}
                                        onChange={(newContent) =>
                                            handleChangeContent(newContent)
                                        }
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className=" mt-7 btn btn-primary"
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
