import HeadingPoint from "../Components/heading";
import Image from "../Components/image";
import ParaGraph from "../Components/paraGraph";

export default function HowWork(){
    return(
        <>
        <div className="howwork">
            <HeadingPoint level={1}>{"How it work"}</HeadingPoint>
            <ParaGraph>{"Keep calm & travel on"}</ParaGraph>
        </div>
    
        <Image src={"https://chisfis-template.vercel.app/static/media/VectorHIW.2a56b4d0aa5690494df25bc0b2bb3bf6.svg"} className={"dotline"}/>
        <div className="work">
            <div>
                <Image src={"https://chisfis-template.vercel.app/static/media/HIW1.bbef046fd6951afd08a7.png"}/>
                <HeadingPoint level={3}>{"Book & relax"}</HeadingPoint>
                <ParaGraph>{"Let each trip be an inspirational journey, each room a peaceful space"}</ParaGraph>
            </div>
            <div>
                <Image src={"https://chisfis-template.vercel.app/static/media/HIW2.f68577684c76e764a351.png"}/>
                <HeadingPoint level={3}>{"Smart checklist"}</HeadingPoint>
                <ParaGraph>{"Let each trip be an inspirational journey, each room a peaceful space"}</ParaGraph>
            </div>
            <div>
                <Image src={"https://chisfis-template.vercel.app/static/media/HIW3.b650d652a9db697619b9.png"}/>
                <HeadingPoint level={3}>{"Save more"}</HeadingPoint>
                <ParaGraph>{"Let each trip be an inspirational journey, each room a peaceful space"}</ParaGraph>
            </div>
        </div>
        </>
    
    )
}