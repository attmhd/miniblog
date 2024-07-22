import { VscError } from "react-icons/vsc";

export default function ErrorAlert({ message }) {
    return (
        <div className="toast toast-top toast-center z-50">
            <div className="alert alert-error">
                <VscError size={20} />
                <span>{message}</span>
            </div>
        </div>
    );
}
