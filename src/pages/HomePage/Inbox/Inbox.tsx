import { MessageI } from "../../../services/interfaces/MessageI";
import './Inbox.css';

interface PropMessage {
    messages: MessageI[];
}

export default function Inbox(props: PropMessage) {

    const { messages } = props;

    return (
        <>
            <div>
                {messages &&
                    messages.map((message: MessageI, index: number) => (
                        <div className="message" key={index}>
                            <p> {message.name} - {message.subject} - {message.content} </p> <button>Voir</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
