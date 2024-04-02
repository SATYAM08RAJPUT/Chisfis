export default function Icons({className,onclick}){
    return( 
        <>
        <i className={className} aria-hidden="true" onClick={onclick} ></i>
        </> 
    )
}