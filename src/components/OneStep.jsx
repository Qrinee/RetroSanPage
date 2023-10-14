
function OneStep(props){
    return(
        <div className="step">
            <img src={props.image} alt="one step" height={80} />
            <h3 className="step-title">{props.title}</h3>
            <p className="step-desc">{props.desc}</p>
        </div>
    )
}


export default OneStep