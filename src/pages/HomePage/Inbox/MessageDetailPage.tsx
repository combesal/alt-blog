import { useLocation } from "react-router-dom";
import { MessageI } from "../../../services/interfaces/MessageI";

export default function MessageDetailPage() {

    const location = useLocation();
    const message: MessageI = location.state.message;

    return (
        <>
            <h2> De : {message.name}</h2>
            <h2> Sujet : {message.subject}</h2>
            <p>{message.content}</p>

        </>
    )
}
