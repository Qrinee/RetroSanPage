function HeadAndDesc(props){
    return(
        <div className='first'>
            <h1 className="heading" style={{margin: 0}}>{props.title}</h1>
            <p className="adress" style={{fontSize: 15}}>{props.desc}</p>
        </div>
    )
}

export default HeadAndDesc