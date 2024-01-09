import { useState } from 'react';
import './HomePage.css';
import ContactForm from './ContactForm';
import Inbox from './Inbox/Inbox';
import { MessageI } from '../../services/interfaces/MessageI';
import { ArticleI } from '../../services/interfaces/ArticleI';

export default function HomePage() {

    const [messages, setMessages] = useState<MessageI[]>([]);
    let storedMessages = JSON.parse(localStorage.getItem("messages") || "[]");

    let articles: ArticleI[] = sortArticlesByDate(JSON.parse(localStorage.getItem("articles") || "[]"));

    function sortArticlesByDate(articles: ArticleI[]) {
        return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    function handleSubmitMessage(message: MessageI): void {
        storedMessages.push(message);
        localStorage.setItem("messages", JSON.stringify(storedMessages));

        setMessages([message, ...messages]);
    }

    return (
        <>
            <h1>Alt Blog</h1>

            <div className="contact-container">
                <Inbox messages={storedMessages} />

                <ContactForm handleSubmitMessage={handleSubmitMessage} />
            </div>

            {articles[0] &&
                <>
                    <h2>Le dernier article</h2>

                    <div className="article">
                        <img height={200} src={articles[0].image} alt="" />
                        <div>
                            <h3>{articles[0].title} - {new Date(articles[0].date)?.toLocaleString("fr-FR", { "dateStyle": "full", "timeStyle": "medium" })}</h3>
                            <p>{articles[0].description}</p>
                        </div>
                    </div>
                </>
            }
        </>
    )
}