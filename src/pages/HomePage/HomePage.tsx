import { useState } from 'react';
import './HomePage.css';
import ContactForm from './ContactForm';
import Inbox from './Inbox/Inbox';
import { Message } from '../../services/interfaces/Message';
export default function HomePage() {

    const [messages, setMessages] = useState<Message[]>([]);

    function handleSubmitMessage(message: Message): void {
        setMessages([message, ...messages]);
    }

    return (
        <>
            <h1>Home Page</h1>

            <div className="contact-container">
                <Inbox messages={messages} />

                <ContactForm handleSubmitMessage={handleSubmitMessage} />
            </div>
            <div>Article</div>
        </>
    )
}