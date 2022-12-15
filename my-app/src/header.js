//This is the header bar
import logo from "./picture/logo.jfif"

export default function DisplayHeader() {

    return (
        <div className="header">
            <p className="Title">FuzzyPaws Family Fotos</p>
            <img className="logo_image" src={logo} alt="Picture of Sumi and Thor" />
            <div className="login_credentials">
                <p className="login">login</p>
                <p className="password">password</p>
            </div>
        </div>
    )
}