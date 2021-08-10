import "./css/Main.css"


export default function MainPage( { history } ) {
    return (
        <>
            <span className="sagak">
                Hello    
            </span>
            <span className="sagak">
                Hello    
            </span>
            <span className="sagak">
                Hello    
            </span>
            <span className="sagak">
                Hello    
            </span>
            <span className="sagak">
                Hello    
            </span>
            <br></br>
            <span className="sagak">
                Hello    
            </span>
            <span className="sagak">
                Hello    
            </span>
            <span className="sagak">
                Hello    
            </span>
            <span className="sagak">
                Hello    
            </span>
            <br></br>
            <span className="sagak">
                Hello    
            </span>
            <span className="sagak">
                Hello    
            </span>
            <span className="sagak">
                Hello    
            </span>
            <br></br>
            <button className="btnmove" onClick={() => history.push('/other')}>OtherPage 이동</button>
        </>
    )
}
