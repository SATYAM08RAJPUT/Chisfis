import MyButton from "../Components/button";
import Icons from "../Components/icons";
import useTheme from "./useTheme";

export default function SignIn(){   
    const [theme, toggleTheme] = useTheme();

    return(
        <div className="rightSide">
            <div className="rightItems">
            {/* <Icons className={"fa fa-sun-o"} onclick={toggleTheme}/> */}
            <div onClick={toggleTheme} className="changetoggle">{theme === "light" ? "☀️" : "🌙"}</div>
            {/* <Icons {theme ===light ? className={"fa fa-sun-o"} :} onclick={toggleTheme} /> */}
            {/* {theme === "light" ? "🌙" : "☀️"} */}
            {/* <button onclick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button> */}
            <Icons className={"fa fa-search"}/>
            <MyButton>{"Sign-up"}</MyButton>
            </div>
        </div>
    )
}