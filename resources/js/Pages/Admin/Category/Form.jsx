import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { router } from "@inertiajs/react";

import Alert from "@/Components/Alert";

export default function Form({ auth, category }) {
    const page = usePage();
    const currentUrl = page.url;
    const [open, setOpen] = useState(false);
    const { data, setData, errors, processing } = useForm({
        name: category.name,
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
    const addCategory = (e) => {
        e.preventDefault();
        router.post("/admin/category/new", {
            name: data.name,
        });
    };

    const updateCategory = (e) => {
        e.preventDefault();
        router.post(`/admin/category/${category.id}`, {
            _method: "patch",
            name: data.name,
        });
    };

    return (
        <>
            {open && (
                <Alert
                    message={`Kategori berhasil ${
                        currentUrl == "/admin/category/new"
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
                            {currentUrl == "/admin/category/new"
                                ? "Add new "
                                : "Update"}{" "}
                            Category
                        </h2>
                        <form
                            onSubmit={
                                currentUrl == "/admin/category/new"
                                    ? addCategory
                                    : updateCategory
                            }
                        >
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-2">
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Categories name"
                                        required=""
                                        onChange={handleChanges}
                                        value={data.name}
                                    />
                                </div>

                                <div className="sm:col-span-2"></div>
                            </div>
                            <button
                                type="submit"
                                className=" mt-7 btn btn-primary"
                                onClick={showAlert}
                                disabled={processing}
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
