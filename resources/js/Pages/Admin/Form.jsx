import AdminLayout from "@/Layouts/AdminLayout";
import { Link, useForm } from "@inertiajs/react";
import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { router } from "@inertiajs/react";

export default function Form({ auth, userId }) {
    const editor = useRef(null);
    const { data, setData } = useForm({
        title: "",
        description: "",
    });
    const [content, setContent] = useState("");

    const handleChanges = (e) => {
        setData({
            ...data,
            title: e.target.value,
        });
    };

    const addArticle = (e) => {
        e.preventDefault();
        // router.post("/admin/artikel/new", data);
        console.log(data);
        console.log(content);
    };
    const config = useMemo(() => ({
        readonly: false,
    }));
    return (
        <AdminLayout user={auth.user}>
            {" "}
            <section className="bg-white dark:bg-gray-900">
                <div className="">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                        {userId == "new" ? "Add a new " : "Update "}Article
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
                                    value={data.title}
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    for="description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                {/* <textarea
                                        onChange={handleChanges}
                                        name="description"
                                        value={data.description}
                                        rows="8"
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Article description here"
                                    ></textarea> */}
                                <JoditEditor
                                    ref={editor}
                                    config={config}
                                    // onChange={(newContent) =>
                                    //     setContent(newContent)
                                    // }
                                    value={data.description}
                                />
                            </div>
                        </div>
                        <button type="submit" class=" mt-7 btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </section>
        </AdminLayout>
    );
}
