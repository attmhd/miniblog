import { FaCheck } from "react-icons/fa6";

export default function Alert() {
    return (
        <div className="toast toast-top toast-center z-50">
            <div className="alert alert-success">
                <span>Artikel berhasil dibuat.</span>
                <FaCheck />
            </div>
        </div>
    );
}
