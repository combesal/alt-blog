import { useEffect, useState } from 'react';
import './HomePage.css';
import ContactForm from './ContactForm';
import Inbox from './Inbox/Inbox';
import { MessageI } from '../../services/interfaces/MessageI';
import { ArticleI } from '../../services/interfaces/ArticleI';

export default function HomePage() {

    let articleList = localStorage.getItem("articles");
    let latestArticle: ArticleI = {
        author: "",
        title: "",
        description: "",
        image: "",
    };

    if (articleList) {
        articleList = JSON.parse(articleList);
        latestArticle = articleList![0]; // ERROR : Type 'string' is not assignable to type 'ArticleI'
        useEffect(() => {
            localStorage.setItem("latestArticle", JSON.stringify(latestArticle));
        }, [latestArticle]);
    }

    const [messages, setMessages] = useState<MessageI[]>(() => {
        const savedMessages = localStorage.getItem("messages");
        if (savedMessages) {
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

            <div className="article">
                <img height={200} src={latestArticle.image} alt="" />
                <div>
                    <h3>{latestArticle.title}</h3>
                    <p>{latestArticle.description}</p>
                </div>
            </div>
        </>
    )
}