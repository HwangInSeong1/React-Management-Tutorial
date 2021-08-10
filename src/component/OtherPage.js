import "./css/Main.css"


export default function OtherPage( { history } ) {
    return (
            <>
            <span className="circle">1</span>
            <span className="circle">2</span>
            <span className="circle">3</span>
            <span className="circle">4</span>
            <span className="circle">5</span>
            <span className="circle">6</span>
            <br></br>
            <span className="circle">7</span>
            <span className="circle">8</span>
            <span className="circle">9</span>
            <span className="circle">10</span>
            <span className="circle">11</span>
            <br></br>
            <span className="circle">12</span>
            <span className="circle">13</span>
            <span className="circle">14</span>
            <br></br>    
            <button className="btnmove" onClick={() => history.push('/main')}>MainPage 이동</button>
            </>
    )
}