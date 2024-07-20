import AdminLayout from "@/Layouts/AdminLayout";
import { MdOutlinePostAdd } from "react-icons/md";
import { Head, Link } from "@inertiajs/react";
import { IoEyeOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { GoTrash } from "react-icons/go";
import { useState } from "react";

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

export default function AdminArticle({ auth, articles }) {
    console.log(articles.links);
    const currentPage = articles.current_page;
    const lastPage = articles.last_page;
    console.log(currentPage);

    const [open, setOpen] = useState(true);
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <>
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
                            {articles.data.map((article, index) => {
                                return (
                                    <tr key={index} className="hover">
                                        <th>{article.id}</th>
                                        <td>
                                            {formatDate(article.created_at)}{" "}
                                        </td>
                                        <td>{article.title}</td>
                                        <td>Kategori</td>
                                        <td>
                                            <div className=" flex justify-start gap-4">
                                                <div
                                                    className="tooltip"
                                                    data-tip="View"
                                                >
                                                    <Link
                                                        href={`/detail/${article.id}`}
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
                                                        href={`/admin/artikel/id=${article.id}`}
                                                    >
                                                        <LuPencil size={15} />
                                                    </Link>
                                                </div>
                                                <div
                                                    className="tooltip"
                                                    data-tip="Delete"
                                                >
                                                    <button
                                                        onClick={handleOpen}
                                                    >
                                                        <GoTrash
                                                            color="red"
                                                            size={16}
                                                        />
                                                    </button>
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
                            return (
                                <div key={i}>
                                    <Link
                                        href={link.url}
                                        className={`join-item btn ${
                                            link.active ? "btn-active" : ""
                                        } ${
                                            i == 0 &&
                                            currentPage == 1 &&
                                            "hidden"
                                        } ${
                                            i == lastPage + 1 &&
                                            currentPage == 4 &&
                                            "hidden"
                                        } `}
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
