import MyButton from "../Components/button";
import Icons from "../Components/icons";

export default function Loading(){
return (
    <div className="loadingsection">
        <MyButton className={"loading"}><Icons className={"fa fa-spinner fa-spin"}/>  {"Show me More"}</MyButton>
    </div>
)
}