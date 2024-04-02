
import HeadingPoint from "../Components/heading"
import Image from "../Components/image"
import ParaGraph from "../Components/paraGraph"


export default function Discovery(){
    return(
        <>
          <div className="howwork">
            <HeadingPoint level={1}>{"Suggestions for discovery"}</HeadingPoint>
            <ParaGraph>{"Popular places to stay that Chisfis recommends for you"}</ParaGraph>
        </div>
        <div className="icesHouse" >
                <div>
                    <Image src={"https://static.vecteezy.com/system/resources/previews/032/245/131/large_2x/a-small-house-sits-on-the-ice-in-the-middle-of-a-lake-ai-generated-free-photo.jpg"}/>
                </div>
                <div>
                    <Image src={"https://thumbs.dreamstime.com/z/small-ice-house-igloo-background-beautiful-winter-landscape-134908977.jpg"}/>
                </div>
                <div>
                    <Image src={"https://static.vecteezy.com/system/resources/previews/032/252/400/large_2x/a-small-house-sits-on-top-of-an-iceberg-ai-generated-free-photo.jpg"}/>
                </div>
                <div>
                    <Image src={"https://static.vecteezy.com/system/resources/previews/032/252/134/large_2x/a-small-house-sits-on-the-ice-in-front-of-a-snowy-mountain-ai-generated-free-photo.jpg"}/>
                </div>
                <div>
                    <Image src={"https://static.vecteezy.com/system/resources/previews/032/252/134/large_2x/a-small-house-sits-on-the-ice-in-front-of-a-snowy-mountain-ai-generated-free-photo.jpg"}/>
                </div>
        </div>
        </>
    )
}