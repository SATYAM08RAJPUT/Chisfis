import Image from "../Components/image";

export default function Heading(){
    return(
        <>
            <div className="heading">
                <h1>Heading of sections</h1>
                <p>Descriptions for sections</p>
            </div>
            <div className="sectionImg">
                <div className="cityName">
                    <Image src={"https://fullsuitcase.com/wp-content/uploads/2022/05/One-day-in-New-York-USA-NYC-day-trip-itinerary-960x640.jpg.webp"}/>
                    <div>
                    <h2>New York</h2>
                    <p>188,288 Properties</p>
                    </div>
                </div>
                <div className="cityName">
                    <Image src={"https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg"}/>
                    <h2>Paris</h2>
                    <p>188,288 Properties</p>
                </div>
                <div className="cityName">
                    <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQncMiGb3NbkfCH-w2OTk8UTJwgaCP9zJztyp8eQDipkQ&s"}/>
                    <h2>London</h2>
                    <p>188,288 Properties</p>
                </div>
                <div className="cityName">
                    <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQncMiGb3NbkfCH-w2OTk8UTJwgaCP9zJztyp8eQDipkQ&s"}/>
                    <h2>London</h2>
                    <p>188,288 Properties</p>
                </div>
                <div className="cityName">
                    <Image src={"https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg"}/>
                    <h2>Paris</h2>
                    <p>188,288 Properties</p>
                </div>
            </div>
            <div className="addSection">
                <div className="firstSection">
                <Image src={"https://chisfis-template.vercel.app/static/media/our-features.d69027726b5a972c1b17.png"}/>
                </div>
                <div className="secondSection">
                    <p>BENNEFITS</p>
                    <h2>Happening cities</h2>
                        <div className="firstAdvertising">
                            <p className="para">Advertising</p>
                            <h3>Cost-effective advertising</h3>
                            <p className="sectionPara">With a free listing, you can advertise your rental with no upfront costs</p>
                    </div>
                        <div className="firstAdvertising">
                            <p className="para">Exposure</p>
                            <h3>Reach millions with Chisfis</h3>
                            <p className="sectionPara">Millions of people are searching for unique places to stay around the world</p>
                    </div>
                    <div className="firstAdvertising">
                            <p className="para">Secure</p>
                            <h3>Secure and simple</h3>
                            <p className="sectionPara">A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online</p>
                    </div>
                </div>
            </div>
        </>
    )
}