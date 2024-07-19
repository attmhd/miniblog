import AdminLayout from "@/Layouts/AdminLayout";
import { MdOutlinePostAdd } from "react-icons/md";
import { Head, Link } from "@inertiajs/react";
import { IoEyeOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { GoTrash } from "react-icons/go";

export default function Category({ auth }) {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Category" />

            <span className="font-semibold text-2xl">All Categories</span>
            <div className="flex justify-end">
                <Link className="btn bg-black" href="/admin/artikel/new">
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
                            <th>Title</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>20 Agustus 2022</td>
                            <td>Quality Control Specialist</td>

                            <td>
                                <div className=" flex align-middle justify-between items-center">
                                    <div className="tooltip" data-tip="View">
                                        <Link>
                                            <IoEyeOutline />
                                        </Link>
                                    </div>
                                    <div className="tooltip" data-tip="Edit">
                                        <Link>
                                            <LuPencil />
                                        </Link>
                                    </div>
                                    <div className="tooltip" data-tip="Delete">
                                        <Link>
                                            <GoTrash color="red" />
                                        </Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>20 Agustus 2022</td>
                            <td>Quality Control Specialist</td>

                            <td>
                                <div className=" flex align-middle justify-between items-center">
                                    <div className="tooltip" data-tip="View">
                                        <Link>
                                            <IoEyeOutline />
                                        </Link>
                                    </div>
                                    <div className="tooltip" data-tip="Edit">
                                        <Link>
                                            <LuPencil />
                                        </Link>
                                    </div>
                                    <div className="tooltip" data-tip="Delete">
                                        <Link>
                                            <GoTrash color="red" />
                                        </Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>20 Agustus 2022</td>
                            <td>Quality Control Specialist</td>

                            <td>
                                <div className=" flex align-middle justify-between items-center">
                                    <div className="tooltip" data-tip="View">
                                        <Link>
                                            <IoEyeOutline />
                                        </Link>
                                    </div>
                                    <div className="tooltip" data-tip="Edit">
                                        <Link>
                                            <LuPencil />
                                        </Link>
                                    </div>
                                    <div className="tooltip" data-tip="Delete">
                                        <Link>
                                            <GoTrash color="red" />
                                        </Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-end">
                <div className="join">
                    <button className="join-item btn">1</button>
                    <button className="join-item btn btn-active">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                </div>
            </div>
        </AdminLayout>
    );
}
