import { FaCheck } from "react-icons/fa6";

export default function Alert({ message }) {
    return (
        <div className="toast toast-top toast-center z-50">
            <div className="alert alert-success">
                <span>{message}</span>
                <FaCheck />
            </div>
        </div>
    );
}
