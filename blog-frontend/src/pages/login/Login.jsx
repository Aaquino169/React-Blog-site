import './login.css'

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label htmlFor="">Email</label>
                <input type="text"/>
                <label htmlFor="">Password</label>
                <input type="password"/>
                <button className="loginButton">Login</button>    
            </form>
            <button className="loginSignUpButton">Sign Up</button>
        </div>
    )
}
