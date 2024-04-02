import Discovery from "./discovery";
import Heading from "./headingofSection";
import HowWork from "./howWork";
import Loading from "./loading";
import Location from "./location";
import Places from "./places";
import SectionInfo from "./section";

export default function Section(){
    return(
        <section className="sectionConatiner">
            <SectionInfo />
            <Location />
            <Heading />
            <Places />
            <Loading />
            <HowWork />
            <Discovery />
        </section>
    )
}