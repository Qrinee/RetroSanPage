import { Link } from "react-router-dom"

function ErrorPage(){
    return(
        <>
        <div className="block">
            <h1 className="heading" style={{margin: 0}}>
                404
            </h1>
            <p className="adress">Nie znaleziono strony.</p>
            <p>Upewnij się, że wpisany przez ciebie adres URL jest poprawny.</p>
            <Link to="/test" className="default">Powrót do strony głównej</Link>
            </div>
        </>
    )
}

export default ErrorPage