import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../../services/interfaces/Article';
import './AddArticlePage.css';

interface PropForm {
    handleSubmitArticle: (article:Article) => void;
}

export default function AddArticlePage(props: PropForm) {
    
    const { handleSubmitArticle } = props;

    const navigate = useNavigate();

    const [formData, setFormData] = useState<Article>({
        author: "",
        title: "",
        description: "",
    })

    function handleSubmit(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        console.log("HandleSubmit : ", formData)

        handleSubmitArticle(formData);

        navigate('/blog');
    }

    function handleChange(evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = evt.target;
        setFormData({ ...formData, [name]: value })
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

                <label htmlFor="title">Titre</label>

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
