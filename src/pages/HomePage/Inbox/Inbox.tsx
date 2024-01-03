import { Message } from "../../../services/interfaces/Message";
import './Inbox.css';

interface PropMessage {
    messages: Message[];
}

export default function Inbox(props: PropMessage) {

    const { messages } = props;

    return (
        <>
            <div>
                {messages &&
                    messages.map((message: Message, index: number) => (
                        <div className="message" key={index}>
                            <p> {message.name} - {message.subject} - {message.content} </p> <button>Voir</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
