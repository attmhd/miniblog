import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { router } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import Alert from "@/Components/Alert";

export default function Form({ auth, articles, category }) {
    console.log(articles.category_id);
    const page = usePage();
    const currentUrl = page.url;
    const editor = useRef(null);
    const [open, setOpen] = useState(false);

    const [update, setUpdate] = useState({
        title: articles.title,
        description: articles.description,
        category_id: articles.category_id,
    });
    const { data, setData, errors } = useForm({
        title: "",
        user_id: auth.user.id,
        description: "",
        category_id: category.id,
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
            title: e.target.value,
        });
    };

    const handleCat = (e) => {
        data.category_id = parseInt(e.target.value, 20);
        setData({ ...data, selectId });
    };

    const handleChangeUpdate = (e) => {
        setUpdate({
            ...update,
            title: e.target.value,
        });
    };

    const handleUpdateCat = (e) => {
        update.category_id = parseInt(e.target.value, 20);
        setUpdate({ ...update, selectId });
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
        console.log(data);

        setData({
            title: "",
            description: "",
            category_id: "",
        });
    };

    const updateArticle = (e) => {
        e.preventDefault();
        router.post(`/admin/artikel/${articles.id}`, {
            _method: "patch",
            title: update.title,
            description: update.description,
            category_id: update.category_id,
        });

        console.log(update);

        setUpdate({
            title: "",
            description: "",
            category_id: "",
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
                                <div
                                    className={`sm:col-span-2 ${
                                        currentUrl != "/admin/artikel/new" &&
                                        "hidden"
                                    }`}
                                >
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Author
                                    </label>
                                    <input
                                        type="text"
                                        name="author"
                                        id="author"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder={data.user_id}
                                        required=""
                                        disabled
                                        onChange={
                                            currentUrl ==
                                                "/admin/artikel/new" &&
                                            handleChanges
                                        }
                                        value={
                                            currentUrl ==
                                                "/admin/artikel/new" &&
                                            data.user_id
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
                                    <select
                                        className="select select-bordered w-full"
                                        name="category_id"
                                        value={
                                            currentUrl == "/admin/artikel/new"
                                                ? data.category_id
                                                : update.category_id
                                        }
                                        onChange={
                                            currentUrl == "/admin/artikel/new"
                                                ? handleCat
                                                : handleUpdateCat
                                        }
                                    >
                                        <option disabled selected>
                                            Choose categories name
                                        </option>
                                        {category.map((items, i) => (
                                            <option key={i}>
                                                {items.id} - {items.name}
                                            </option>
                                        ))}
                                    </select>
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
