import { useEffect, useState } from 'react';
import './HomePage.css';
import ContactForm from './ContactForm';
import Inbox from './Inbox/Inbox';
import { MessageI } from '../../services/interfaces/MessageI';

export default function HomePage() {

    const [messages, setMessages] = useState<MessageI[]>(() => {
        const savedMessages = localStorage.getItem("messages");
        if(savedMessages) {
            const allMessages: MessageI[] = JSON.parse(savedMessages);
            return allMessages;
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("messages", JSON.stringify(messages));
      }, [messages]);

    function handleSubmitMessage(message: MessageI): void {
        setMessages([message, ...messages]);
    }

    return (
        <>
            <h1>Alt Blog</h1>

            <div className="contact-container">
                <Inbox messages={messages} />

                <ContactForm handleSubmitMessage={handleSubmitMessage} />
            </div>

            <h2>Le dernier article</h2>
        </>
    )
}