import { useState } from 'react';
import { Article } from '../../services/interfaces/Article';
import './AddArticlePage.css';

export default function AddArticlePage() {


    const [form, setForm] = useState<Article>({
        author: "",
        title: "",
        description: "",
    })

    function handleSubmit(evt: any) {
        evt.preventDefault();
        console.log("HandleSubmit : ", form)
    }

    function handleChange(evt: any) {
        const { name, value } = evt.target;
        setForm({ ...form, [name]: value })
    }


    return (
        <>
            <h1>Formulaire pour ajouter un article</h1>

            <form onSubmit={(evt) => handleSubmit(evt)} >
                <label htmlFor="author">Nom auteur</label>

                <input
                    type="text"
                    name="author"
                    id="author"
                    onChange={(evt) => handleChange(evt)}
                />

                <label htmlFor="title">Titre:</label>

                <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={(evt) => handleChange(evt)}
                />

                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
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
