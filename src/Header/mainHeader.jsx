import Logo from "./logo";
import Navigation from "./navigations";
import SignIn from "./sign";
export default function Header(){
    return(
        <header className="theme">
            <Logo />
            <Navigation />
            <SignIn />
        </header>
    )
}