import { useNavigate } from 'react-router-dom';
import { MessageI } from "../../../services/interfaces/MessageI";
import './Inbox.css';

interface PropMessage {
    messages: MessageI[];
}

export default function Inbox(props: PropMessage) {

    const navigate = useNavigate();

    const { messages } = props;

    function handleClickView(id: number): void {
        let message = messages.find(m => m.id === id);
        
        navigate(`/inbox/${id}`, {state: {message}});
    }

    return (
        <>
            <div>
                {messages &&
                    messages.map((message: MessageI, index: number) => (
                        <div className="message" key={index}>
                            <p> {message.name} - {message.subject} - {message.content} </p> <button onClick={() => handleClickView(message.id)}>Voir</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
