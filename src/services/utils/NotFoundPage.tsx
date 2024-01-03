import { Link } from "react-router-dom";


export default function NotFoundPage() {


    return (
        <>
            <h1> 404 ERROR - PAGE NOT FOUND </h1>

            <Link to="/">Retourner à l'accueil</Link>
        </>
    )
}