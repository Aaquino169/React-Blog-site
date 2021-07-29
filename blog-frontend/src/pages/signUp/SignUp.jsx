import './signUp.css'

export default function SignUp() {
    return (
        <div className="signUp">
            <span className="signUpTitle">Register New User</span>
            <form className="signUpForm">
                <label htmlFor="">Email</label>
                <input type="text"/>
                <label htmlFor="">Username</label>
                <input type="text"/>
                <label htmlFor="">Password</label>
                <input type="password"/>
                <button className="signUpButton">Register</button>    
            </form>
            <button className="signUpLoginButton">Login</button>
        </div>
    )
}
