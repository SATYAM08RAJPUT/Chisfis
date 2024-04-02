import Icons from "../Components/icons";
import Input from "../Components/input";

export default function Location(){
    return(
        <div className="locations">
                <div className="date">
                    <Icons className={"fa fa-map-marker"}/>
                <div>
                    <h3>Location</h3>
                    <p>Where are you going?</p>
                </div>
                </div>
                    <div className="date">
                    <Icons className={"fa fa-calendar"} />
                <div>
                    <h3>  <Input type={"date"} className={"dateinput"}/></h3>
                    <p>Check in - Check out</p>
                   
                </div>
                {/* <Input type={"date"} className={"dateinput"}/> */}
                </div>
                    <div className="date">
                    <Icons className={"fa fa-user-plus"}/>
                <div>
                    <h3>04 Guests</h3>
                    <p>Guests</p>
                </div>
                </div>
                <div className="date">
                    <div className="searchdark">
                    <Icons className={"fa fa-search"} />    
                    </div>
                </div>
        </div>
    )
}