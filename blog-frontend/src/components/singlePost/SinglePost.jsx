import "./singlePost.css"
import img from "../img/postImg.jpg"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostContainer">
                <img src={img} alt="" className="singlePostImg"/>
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Alex</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis mollitia culpa laudantium ex quasi illo itaque at atque reiciendis, placeat libero cupiditate, similique, dolor provident minima tenetur praesentium error repellendus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis mollitia culpa laudantium ex quasi illo itaque at atque reiciendis, placeat libero cupiditate, similique, dolor provident minima tenetur praesentium error repellendus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis mollitia culpa laudantium ex quasi illo itaque at atque reiciendis, placeat libero cupiditate, similique, dolor provident minima tenetur praesentium error repellendus!</p>
            </div>
        </div>
    )
}
