import { ChangeEvent, FormEvent, useState } from "react";
import { Message } from "../../services/interfaces/Message";

interface MessageProp {
    handleSubmitMessage: (message: Message) => void;
}

export default function ContactForm(props: MessageProp) {

    const { handleSubmitMessage } = props;

    const [formData, setFormData] = useState<Message>({
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
        
        resetForm();
    }

    const resetForm = () => {
        setFormData({name: "", subject: "", content: ""});
    }

    return (
        <>
            <form onSubmit={(evt) => handleSubmit(evt)} >
                <label htmlFor="name">Nom</label>

                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(evt) => handleChange(evt)}
                />

                <label htmlFor="subject">Subject</label>

                <input
                    type="text"
                    name="subject"
                    id="subject"
                    onChange={(evt) => handleChange(evt)}
                />

                <label htmlFor="content">Message</label>
                <textarea
                    name="content"
                    id="content"
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
