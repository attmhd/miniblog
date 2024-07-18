import AdminLayout from "@/Layouts/AdminLayout";

export default function AdminDashboard({ auth }) {
    return (
        <AdminLayout user={auth.user}>
            <div className="p-4 sm:ml-64 mt-32">
                <div className="stats shadow-md">
                    <div className="stat place-items-center">
                        <div className="stat-title">Arrticles</div>
                        <div className="stat-value">31</div>
                        <div className="stat-desc">
                            From January 1st to February 1st
                        </div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Views</div>
                        <div className="stat-value text-secondary">4,200</div>
                        <div className="stat-desc text-secondary">
                            ↗︎ 40 (2%)
                        </div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
