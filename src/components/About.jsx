import aboutImg from "../assets/about.jpg"
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 container mx-auto px-5 items-center">
            <img src={aboutImg} className="border rounded-lg mx-auto" />
            <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-800">About Us</h3>
                <p className="text-gray-700">There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but if our one set of clothes covers naked body of one person that will be more than enough. Because when we do good things for others, it makes us feel good and happy and good things come to us also.</p>
                <p className="text-gray-700">The happiness on their face so was heartwarming even though I did not gave them new clothes but the happiness on their face was worth seeing, it was at peek and the most important lesson of my life I learned there was: always share and take care of people as much as I can, I usually don’t do sharing because I think if I will share my favorite food or burger , I wouldn’t completely enjoy the taste</p>
                <Link to='/donation-campaigns' className="bg-purple-600 transition-all hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white px-10 py-2 rounded font-medium mt-6 inline-block">Explore More</Link>
            </div>
        </div>
    )
}

export default About;