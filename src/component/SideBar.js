import "./css/Main.css";
import {IoLogoGoogle} from "react-icons/io5";
import {GrFacebook} from "react-icons/gr";
import {GrYoutube} from "react-icons/gr";
import {GrInstagram} from "react-icons/gr";
import {GrTwitter} from "react-icons/gr";
import {HiArrowCircleRight} from "react-icons/hi";

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
                <div className="sidemenuTitle">
                    <h1>Side Menu </h1>
                </div>
                <div className="sidemenu">
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
                <div className="sideundermenu">
                    <ul>
                        <li><a href="https://www.google.co.kr/" target="_blank"> <IoLogoGoogle className="icon01" size="28" /> </a></li>
                        <li><a href="https://ko-kr.facebook.com/" target="_blank"> <GrFacebook className="icon02" size="28" /> </a></li>
                        <li><a href="https://www.youtube.com/" target="_blank"> <GrYoutube className="icon03" size="28" /> </a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"> <GrInstagram className="icon04" size="28" /> </a></li>
                        <li><a href="https://twitter.com/?lang=ko" target="_blank"> <GrTwitter className="icon05" size="28" /> </a></li>
                    </ul>
                    <a href="#"> 
                        <div className="signup">
                         Sign up for Newsletter <HiArrowCircleRight className="icon06" size="20" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}