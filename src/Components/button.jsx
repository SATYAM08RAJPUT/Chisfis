export default function MyButton({children,className}){
    return(
        <button onClick={onclick} className={className}>{children}</button>
    )
}