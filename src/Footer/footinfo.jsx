import Icons from "../Components/icons";
import Image from "../Components/image";
export default function Footer(){
    return(
        <div className="footer">
            <div className="onefoot">
                <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/FIS_logo.svg/2394px-FIS_logo.svg.png"}/>
                {/* <h3>Developered By-Satyam Rajput(Software Developer)</h3> */}
                <div><Icons className={"fa fa-facebook"}/> FackBook</div>
               <div><Icons className={"fa fa-twitter"}/> Twitter</div> 
               <div><Icons className={"fa fa-youtube-play"}/> FackBook</div>
               <div><Icons className={"fa fa-instagram"}/> Twitter</div> 
            </div>
            <div className="onefoot">
                <h3>Getting started</h3>
                <div>Installation</div>
               <div>Release Notes</div> 
               <div>Upgrade Guide</div>
               <div>Browser Support</div> 
               <div>Editor Support</div> 
            </div>
            <div className="onefoot">
                <h3>Explore</h3>
                <div>Design features</div>
               <div>Prototyping</div> 
               <div>Design systems</div>
               <div>Pricing</div> 
               <div>Security</div> 
            </div>
            <div className="onefoot">
                <h3>Resources</h3>
                <div>Best practices</div>
               <div>Support</div> 
               <div>Developers</div>
               <div>Learn design</div> 
               <div>Releases</div> 
            </div>
            <div className="onefoot">
                <h3>Community</h3>
                <div>Discussion Forums</div>
               <div>Code of Conduct</div> 
               <div>Community Resources</div>
               <div>Contributing</div> 
               <div>Concurrent Mode</div> 
            </div>
        </div>
    )
}