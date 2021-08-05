import "./css/Main.css"

export default function SideBar() {
    return (
        <div className="SideMenu">
            <input type="checkbox" id="menuicon" />
            <label for="menuicon">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div className="sidebar">
                <div className ="sidemenu">
                <ul>
                    <li><a href="#">Fashion</a></li>
                    <li><a href="#">Fashion Shows</a></li>
                    <li><a href="#">Culture</a></li>
                    <li><a href="#">Magazine</a></li>
                    <li><a href="#">Met Gala</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="" target="_blank">Subscribe</a></li>
                </ul>
                
                <ul>
                    <li><a href="#">Promotions</a></li>
                    <li><a href="#">Vogue Archive</a></li>
                    <li><a href="#">Open Market</a></li>
                    <li><a href="#">Log In</a> | <a href="#">Register</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}