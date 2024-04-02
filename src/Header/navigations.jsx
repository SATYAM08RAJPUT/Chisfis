import Attribute from "../Components/attribute";
import Icons from "../Components/icons";
export default function Navigation(){
    return(
        <div className="middleSide">
            <div className="midleatribute">
                <Attribute>{"Home"}  <Icons className={"fa fa-angle-down"}/></Attribute>
                <div className="hide">
                   <h4>Online Booking</h4>
                   <p>Real Estimate</p>
                   <p>Home-3</p>
                </div>
                <Attribute>{"Five Columns"} <Icons className={"fa fa-angle-down"}/></Attribute>
                <div className="hideColums">
                   <h4>Company</h4>
                   <p>App Name</p>
                   <p>City</p>
                   <p>Construction</p>
                   <p>Country</p>
                </div>
                <Attribute>{"Listing Page"} <Icons className={"fa fa-angle-down"}/></Attribute>
                <div className="hidepage">
                   <p>Stay Listing<Icons className={"fa fa-angle-down"}/></p>
                   <p>Experinces Listing<Icons className={"fa fa-angle-down"}/></p>
                   <p>Cars Listing<Icons className={"fa fa-angle-down"}/></p>
                   <p>Real Estate Listings<Icons className={"fa fa-angle-down"}/></p>
                   <p>Flights Listing<Icons className={"fa fa-angle-down"}/></p>
                </div>
                <Attribute>{"Templates"} <Icons className={"fa fa-angle-down"}/></Attribute>
                <div className="hidetemplate">
                   <p>Add Listing<Icons className={"fa fa-angle-down"}/></p>
                   <p>Check Out</p>
                   <p>Pay Done</p>
                   <p>Author Page</p>
                   <p>Account Page</p>
                </div>
                <Attribute>{"Other pages"} <Icons className={"fa fa-angle-down"}/></Attribute>
                <div className="hideother">
                   <p>Blog Page</p>
                   <p>Blog Single</p>
                   <p>About</p>
                   <p>Contact Us</p>
                   <p>Log-in</p>
                   <p>Signup</p>
                   <p>Subscription</p>
                </div>
            </div>
        </div>
  
    )
}

