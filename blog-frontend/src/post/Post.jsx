import "./post.css"
import postImg from "../img/postImg.jpg"

export default function Post() {
    return (
        <div className="post">
            post
            <img className="postImage" src={postImg} alt="" />
            <div className="postInfo">
                <div className="postCatagory">
                    <span className="postCatagory">Tech</span>
                    <span className="postCatagory">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">Date</span>
                <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste nihil corporis vitae amet? Est quis quae corrupti non provident, doloremque unde quisquam eaque possimus quas doloribus explicabo minus libero.</p>
            </div>
        </div>
    )
}
