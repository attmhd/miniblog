import { FaRegCheckCircle } from "react-icons/fa";

export default function Alert({ message }) {
    return (
        <div className="toast toast-top toast-center z-50">
            <div className="alert alert-success">
                <FaRegCheckCircle size={20} />
                <span>{message}</span>
            </div>
        </div>
    );
}
