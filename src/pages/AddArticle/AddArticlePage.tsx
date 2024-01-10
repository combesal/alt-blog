import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ArticleI } from '../../services/interfaces/ArticleI';
import './AddArticlePage.css';

interface PropForm {
    handleSubmitArticle: (article: ArticleI) => void;
}

export default function AddArticlePage(props: PropForm) {

    const { handleSubmitArticle } = props;

    const navigate = useNavigate();

    const article = {
        id: Math.floor(Math.random() * 100),
        author: "",
        title: "",
        description: "",
        image: "https://images.pexels.com/photos/4627679/pexels-photo-4627679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        date: new Date(),
    };

    const articleSchema = Yup.object({
        author: Yup.string()
            .required("L'auteur est obligatoire"),
        title: Yup.string().required("Le titre est obligatoire"),
        description: Yup.string().required("La description est obligatoire"),
    });

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: article,
        validationSchema: articleSchema,
        onSubmit: (values) => {
            console.log(values);
            handleSubmitArticle(values);
            navigate('/blog');
        },
    });

    return (
        <>
            <h1>Ajouter un article</h1>

            <form className="add-article" onSubmit={handleSubmit} >
                <label htmlFor="author">Nom auteur</label>

                <input
                    type="text"
                    name="author"
                    id="author"
                    onChange={handleChange}
                    value={values.author}
                />
                {errors.author && <small>{errors.author}</small>}

                <label htmlFor="title">Titre</label>

                <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={handleChange}
                    value={values.title}
                />
                {errors.title && <small>{errors.title}</small>}

                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    onChange={handleChange}
                    value={values.description}
                ></textarea>
                {errors.description && <small>{errors.description}</small>}

                <input
                    type="submit"
                    value="Envoyer"
                    className="btn btn-secondary"
                />
            </form>
        </>
    )
}
