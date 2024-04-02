import MyButton from "../Components/button";
import Image from "../Components/image";
import List from "../Components/list";

export default function SectionInfo(){
    return(
        <div className="wrapper">
             <div className="one">
                    <h2>Hotel, car & experiences</h2>
                    <p>Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels</p>
                    <MyButton>{"Start your Search"}</MyButton>
                    <div className="listitm">
                        <List className={"firstListItem"}>{"Stays"}</List>
                        <List>{"Experinces"}</List>
                        <List>{"Cars"}</List>
                        <List>{"Flights"}</List>
                    </div>
             </div>
             <div className="two">
                <Image src={'https://chisfis-template.vercel.app/static/media/hero-right.ee78c0ffae92062cbe4e.png'} className={"sectionImg"}/>
             </div>
        </div>
    )
}