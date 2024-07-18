import AdminLayout from "@/Layouts/AdminLayout";
import { MdOutlinePostAdd } from "react-icons/md";
import { Link } from "@inertiajs/react";

export default function AdminArticle({ auth }) {
    return (
        <AdminLayout user={auth.user}>
            <div className="p-4 sm:ml-64 mt-32">
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
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
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
            </div>
        </AdminLayout>
    );
}
