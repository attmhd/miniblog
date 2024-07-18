import AdminLayout from "@/Layouts/AdminLayout";
import { Link, useForm } from "@inertiajs/react";
import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { router } from "@inertiajs/react";

export default function Form({ auth, userId }) {
    const editor = useRef(null);
    const [content, setContent] = useState("");
    const { data, setData } = useForm({
        title: "",
        description: "",
    });

    const addArticle = (e) => {
        e.preventDefault();
        router.post("/admin/artikel", data);
    };
    const config = useMemo(() => ({
        readonly: false,
    }));
    return (
        <AdminLayout user={auth.user}>
            <div className="p-4 sm:ml-64 mt-32">
                {" "}
                <section className="bg-white dark:bg-gray-900">
                    <div className="">
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                            Add a {userId == "new" ? "new " : "update "}Article
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
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
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
                                        id="desc"
                                        name="desc"
                                        rows="8"
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Article description here"
                                    ></textarea> */}
                                    <JoditEditor
                                        ref={editor}
                                        value={data.description}
                                        config={config}
                                        tabIndex={1} // tabIndex of textarea
                                        // preferred to use only this option to update the content for performance reasons
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <button type="submit" class=" mt-7 btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
}
