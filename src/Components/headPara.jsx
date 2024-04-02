import HeadingPoint from "./heading";
import ParaGraph from "./paraGraph";

export default function HeadPara({className,children}){
    return(
        <div className={className}>
        {children}
        </div>
    )
}