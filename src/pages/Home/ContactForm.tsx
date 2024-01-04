import { ChangeEvent, FormEvent, useState } from "react";
import { MessageI } from "../../services/interfaces/MessageI";

interface MessageProp {
    handleSubmitMessage: (message: MessageI) => void;
}

export default function ContactForm(props: MessageProp) {

    const { handleSubmitMessage } = props;

    const [formData, setFormData] = useState<MessageI>({
        id: Math.floor(Math.random() * 100),
        name: "",
        subject: "",
        content: "",
    })

    function handleChange(evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = evt.target;
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        console.log("HandleSubmit : ", formData);

        handleSubmitMessage(formData);

        // Clear form data after submit
        setFormData({
            id: Math.floor(Math.random() * 100),
            name: "",
            subject: "",
            content: "",
        });
    }

    return (
        <>
            <form className="contact" onSubmit={(evt) => handleSubmit(evt)} >
                <label htmlFor="name">Nom</label>

                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={(evt) => handleChange(evt)}
                />

                <label htmlFor="subject">Sujet</label>

                <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={(evt) => handleChange(evt)}
                />

                <label htmlFor="content">Message</label>
                <textarea
                    name="content"
                    id="content"
                    value={formData.content}
                    onChange={(evt) => handleChange(evt)}
                ></textarea>

                <input
                    type="submit"
                    value="Envoyer"
                    className="btn btn-secondary"
                />
            </form>
        </>
    )
}
