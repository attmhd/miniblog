import AdminLayout from "@/Layouts/AdminLayout";
import { MdOutlinePostAdd } from "react-icons/md";
import { Head, Link } from "@inertiajs/react";
import { LuPencil } from "react-icons/lu";
import { GoTrash } from "react-icons/go";
import DeleteModal from "@/Components/DeleteModal";
import { useState } from "react";

export default function Category({ auth, category }) {
    const lenCategory = category.links.length - 1;
    const currentPage = category.current_page;
    const lastPage = category.last_page;
    const [open, setOpen] = useState(false);
    const [idProps, setIdProps] = useState([
        {
            id: null,
        },
    ]);
    // const [openAlert, setOpenAlert] = useState(false);

    const handleOpen = (id) => {
        setOpen(true);
        setIdProps({
            id: id,
        });
    };
    return (
        <AdminLayout user={auth.user}>
            <Head title="Category" />

            <span className="font-semibold text-2xl">All Categories</span>
            <div className="flex justify-end">
                <Link className="btn bg-black" href="/admin/category/new">
                    <span className="text-white">Add Category</span>
                    <MdOutlinePostAdd className="h-6 w-6" color="white" />
                </Link>
            </div>
            <div className="overflow-x-auto border mt-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.data.map((item, index) => {
                            return (
                                <tr key={index} className="hover">
                                    <th>{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>
                                        <div className=" flex justify-start gap-4">
                                            <div
                                                className="tooltip"
                                                data-tip="Edit"
                                            >
                                                <Link
                                                    href={`/admin/category/${item.id}/edit`}
                                                >
                                                    <LuPencil size={15} />
                                                </Link>
                                            </div>
                                            <div
                                                className="tooltip"
                                                data-tip="Delete"
                                            >
                                                <button
                                                    onClick={() =>
                                                        handleOpen(item.id)
                                                    }
                                                >
                                                    <GoTrash
                                                        color="red"
                                                        size={16}
                                                    />
                                                </button>
                                                {open && (
                                                    <DeleteModal
                                                        setOpen={setOpen}
                                                        idProps={idProps}
                                                        url={"/admin/category/"}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-end">
                <div className="join">
                    {category.links.map((link, i) => {
                        const classNames = [
                            "join-item",
                            "btn",
                            link.active ? "btn-active" : "",
                        ];

                        if (
                            (i === 0 && currentPage === 1) ||
                            (i === lenCategory && currentPage === lastPage)
                        ) {
                            classNames.push("hidden");
                        }

                        return (
                            <div key={i}>
                                <Link
                                    href={link.url}
                                    className={classNames.join(" ")}
                                >
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AdminLayout>
    );
}
