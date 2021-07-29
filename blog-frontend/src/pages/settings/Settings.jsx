import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Img from '../../components/img/profileImg.jpg'

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsContainer">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account Info</span>
                    <span className="settingsDelete">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Image</label>
                    <div className="settingsProfileImg">
                        <img src={Img} alt="" />
                        <label htmlFor="fileInput">
                        <i class="settingsProfileImgIcon fas fa-file-image"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Alex" />
                    <label>Email</label>
                    <input type="text" placeholder="Alex@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
