import './header.css'
import HeaderImg from "../img/1713248.jpg"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={HeaderImg} alt="" />
        </div>
    )
}
