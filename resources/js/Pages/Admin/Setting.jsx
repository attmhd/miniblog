import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Settings({ auth }) {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Setting" />
            tst Setting
        </AdminLayout>
    );
}
