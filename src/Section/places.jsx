import HeadingPoint from "../Components/heading";
import Icons from "../Components/icons";
import Image from "../Components/image";
import List from "../Components/list";
import ParaGraph from "../Components/paraGraph";


export default function Places(){
    return(
        <div className="placeInfo">
          <div className="places">
            <h1>Featured places to stay</h1>
            <p className="placeTitle">Popular places to stay that Chisfis recommends for you</p>
            <div className="cityNames">
                    <List>{"New York"}</List>
                    <List>{"Tokyo"}</List>
                    <List>{"Paris"}</List>
                    <List>{"London"}</List>
            </div>
            <div className="badrooms">
                <div className="roomnumbers">
                <Image src={"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlOF9waG90b2dyYXBoeV9vZl9zY2FuZGluYXZpYW5fc3R5bGVfY296eV9tb2Rlcm5fYl9kYmM1NDA2Yy0zZTA0LTQzNzMtYWVhYi1iNjhkOTVkZjc5MTJfMS5qcGc.jpg"} className={"bed"}/>
                <ParaGraph className={"bedAvailableInfo"}>{"Entire Cabin-10 Bads"}</ParaGraph>
                <HeadingPoint level={2}>{"Bed-Room"}</HeadingPoint>
                <span><ParaGraph>{"1 Anzinger Count"}</ParaGraph></span>
                </div>
                <div className="roomnumbers">
                <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qCDHsH3-CuLbKXRx5S8clKH7Cx9b4fhGLl4AWmXSmA&s"} className={"bed"}/>
                <ParaGraph>{"Entire Cabin-10 Bads"}</ParaGraph>
                <HeadingPoint level={2}>{"Bed-Room"}</HeadingPoint>
                <span><ParaGraph>{"1 Anzinger Count"}</ParaGraph></span>
                </div>
                <div className="roomnumbers">
                <Image src={"https://5.imimg.com/data5/PL/XG/OQ/SELLER-42874186/8-500x500.jpg"} className={"bed"}/>
                <ParaGraph>{"Entire Cabin-10 Bads"}</ParaGraph>
                <HeadingPoint level={3}>{"Bed-Room"}</HeadingPoint>
                <span><ParaGraph>{"1 Anzinger Count"}</ParaGraph></span>
                </div>
                <div className="roomnumbers">
                <Image src={"https://5.imimg.com/data5/PL/XG/OQ/SELLER-42874186/8-500x500.jpg"} className={"bed"}/>
                <ParaGraph>{"Entire Cabin-10 Bads"}</ParaGraph>
                <HeadingPoint level={2}>{"Bed-Room"}</HeadingPoint>
                <span><ParaGraph>{"1 Anzinger Count"}</ParaGraph></span>
                </div>
                <div className="roomnumbers">
                <Image src={"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlOF9waG90b2dyYXBoeV9vZl9zY2FuZGluYXZpYW5fc3R5bGVfY296eV9tb2Rlcm5fYl9kYmM1NDA2Yy0zZTA0LTQzNzMtYWVhYi1iNjhkOTVkZjc5MTJfMS5qcGc.jpg"} className={"bed"}/>
                <ParaGraph className={"bedAvailableInfo"}>{"Entire Cabin-10 Bads"}</ParaGraph>
                <HeadingPoint level={2}>{"Bed-Room"}</HeadingPoint>
                <span><ParaGraph>{"1 Anzinger Count"}</ParaGraph></span>
                </div>
                <div className="roomnumbers">
                <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qCDHsH3-CuLbKXRx5S8clKH7Cx9b4fhGLl4AWmXSmA&s"} className={"bed"}/>
                <ParaGraph>{"Entire Cabin-10 Bads"}</ParaGraph>
                <HeadingPoint level={2}>{"Bed-Room"}</HeadingPoint>
                <span><ParaGraph>{"1 Anzinger Count"}</ParaGraph></span>
                </div>
                <div className="roomnumbers">
                <Image src={"https://5.imimg.com/data5/PL/XG/OQ/SELLER-42874186/8-500x500.jpg"} className={"bed"}/>
                <ParaGraph>{"Entire Cabin-10 Bads"}</ParaGraph>
                <HeadingPoint level={3}>{"Bed-Room"}</HeadingPoint>
                <span><ParaGraph>{"1 Anzinger Count"}</ParaGraph></span>
                </div>
                <div className="roomnumbers">
                <Image src={"https://5.imimg.com/data5/PL/XG/OQ/SELLER-42874186/8-500x500.jpg"} className={"bed"}/>
                <ParaGraph>{"Entire Cabin-10 Bads"}</ParaGraph>
                <HeadingPoint level={2}>{"Bed-Room"}</HeadingPoint>
                <span><ParaGraph>{"1 Anzinger Count"}</ParaGraph></span>
                </div>
            </div>
         </div>
        </div>
   
    )
}