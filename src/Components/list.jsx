export default function List({children,className}){
    return(
       <>
       <ul>
         <li className={className}>{children}</li>
       </ul>
       </> 
    )
}