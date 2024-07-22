import AdminLayout from "@/Layouts/AdminLayout";
import { MdOutlinePostAdd } from "react-icons/md";
import { Head, Link, useForm } from "@inertiajs/react";
import { IoEyeOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { GoTrash } from "react-icons/go";
import { useState } from "react";
import DeleteModal from "@/Components/DeleteModal";
import Alert from "@/Components/Alert";

function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${padZero(date.getDate())}-${padZero(
        date.getMonth() + 1
    )}-${date.getFullYear()}`;
    return formattedDate;
}

function padZero(value) {
    return String(value).padStart(2, "0");
}

export default function AdminArticle({ auth, articles }) {
    console.log(articles.links.length);
    const currentPage = articles.current_page;
    const lastPage = articles.last_page;
    const dataLen = articles.links.length - 1;

    const [open, setOpen] = useState(false);
    const [idProps, setIdProps] = useState([
        {
            id: null,
        },
    ]);
    const [openAlert, setOpenAlert] = useState(false);

    const handleOpen = (id) => {
        setOpen(true);
        setIdProps({
            id: id,
        });
    };

    return (
        <>
            {openAlert && <Alert message="Artikel berhasil dihapus." />}
            <AdminLayout user={auth.user}>
                <Head title="Artikel" />

                <span className="font-semibold text-2xl">All Articles</span>
                <div className="flex justify-end">
                    <Link className="btn bg-black" href="/admin/artikel/new">
                        <span className="text-white">Add Article</span>
                        <MdOutlinePostAdd className="h-6 w-6" color="white" />
                    </Link>
                </div>
                <div className="overflow-x-auto border mt-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.data.map((item, index) => {
                                return (
                                    <tr key={index} className="hover">
                                        <th>{item.id}</th>
                                        <td>{formatDate(item.created_at)} </td>
                                        <td>{item.title}</td>
                                        <td>Kategori</td>
                                        <td>
                                            <div className=" flex justify-start gap-4">
                                                <div
                                                    className="tooltip"
                                                    data-tip="View"
                                                >
                                                    <Link
                                                        href={`/detail/${item.id}`}
                                                    >
                                                        <IoEyeOutline
                                                            size={18}
                                                        />
                                                    </Link>
                                                </div>
                                                <div
                                                    className="tooltip"
                                                    data-tip="Edit"
                                                >
                                                    <Link
                                                        href={`/admin/artikel/${item.id}/edit`}
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
                                                            url={
                                                                "/admin/artikel/"
                                                            }
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
                        {articles.links.map((link, i) => {
                            const classNames = [
                                "join-item",
                                "btn",
                                link.active ? "btn-active" : "",
                            ];

                            if (
                                (i === 0 && currentPage === 1) ||
                                (i === dataLen && currentPage === lastPage)
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
        </>
    );
}
