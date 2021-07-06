import './sidebar.css'
import SidebarImg from "../img/1904225.jpg"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className='sidebarImg' src={SidebarImg} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur inventore iste dolorum laborum odio, magnam impedit cupiditate architecto animi sequi a laudantium, quibusdam praesentium corporis asperiores veritatis aliquid, tenetur et!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATAGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Games</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Films/Shows</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                </div>
            </div>
        </div>
    )
}
