import { useLoaderData } from "react-router-dom";
import RunningCampaign from "./RunningCampaign";
import About from "./About";
import Target from "./Target";
import Slider from "./Slider";

const Home = () => {
    const campaigns = useLoaderData();
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <RunningCampaign campaigns={campaigns}></RunningCampaign>
            <Target></Target>
        </div>
    )
}

export default Home;