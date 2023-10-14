import Stars from '../assets/5star.png'
function Opinion(props){
    return(
        <>
        <div className="opinion">
            <span className="bold">{props.person}</span>
            <img src={Stars} alt="5 stars" width={100} />
                <blockquote>
                    ,,{props.value}"
                </blockquote>
        </div>
        </>
    )
}


export default Opinion