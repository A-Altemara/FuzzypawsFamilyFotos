//This is the header bar
import logo from "./picture/logo.jfif"

export default function DisplayHeader() {

    return (
        <div class="header">
            <p class="Title">FuzzyPaws Family Fotos</p>
            <img class="logo_image" src={logo} alt="Picture of Sumi and Thor" />
            <div class="login_credentials">
                <p class="login">login</p>
                <p class="password">password</p>
            </div>
        </div>
    )
}