import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Settings({ auth }) {
    return (
        <>
            {/* {open && (
                <Alert
                    message={`Kategori berhasil ${
                        currentUrl == "/admin/category/new"
                            ? "dibuat."
                            : "diupdate."
                    }`}
                />
            )} */}
            <Head title="Settings" />

            <AdminLayout user={auth.user}>
                <section className="bg-white dark:bg-gray-900">
                    <div className="">
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                            {/* {currentUrl == "/admin/category/new"
                                ? "Add new "
                                : "Update"}{" "} */}
                            Profile Settings
                        </h2>
                        <form
                        // onSubmit={
                        //     currentUrl == "/admin/category/new"
                        //         ? addCategory
                        //         : updateCategory
                        // }
                        >
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-2">
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Your name"
                                        required=""
                                        // onChange={
                                        //     currentUrl == "/admin/artikel/new"
                                        //         ? handleChanges
                                        //         : handleUpdateChanges
                                        // }
                                        // value={
                                        //     currentUrl == "/admin/artikel/new"
                                        //         ? data.name
                                        //         : update.name
                                        // }
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Your email"
                                        required=""
                                        // onChange={
                                        //     currentUrl == "/admin/artikel/new"
                                        //         ? handleChanges
                                        //         : handleUpdateChanges
                                        // }
                                        // value={
                                        //     currentUrl == "/admin/artikel/new"
                                        //         ? data.name
                                        //         : update.name
                                        // }
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Photo
                                    </label>
                                    <input
                                        type="file"
                                        className="file-input file-input-bordered w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Your password"
                                        required=""
                                        // onChange={
                                        //     currentUrl == "/admin/artikel/new"
                                        //         ? handleChanges
                                        //         : handleUpdateChanges
                                        // }
                                        // value={
                                        //     currentUrl == "/admin/artikel/new"
                                        //         ? data.name
                                        //         : update.name
                                        // }
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                class=" mt-7 btn btn-primary"
                                // onClick={showAlert}
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
