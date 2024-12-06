import { Link, useLoaderData } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useState } from "react";

const AllCampaign = () => {
    const campaigns = useLoaderData();
    const [sortedData, setSortedData] = useState(campaigns)
    const handleSort = () => {
        fetch('http://localhost:5000/all-campaign/sortedData')
            .then(res => res.json())
            .then(data => {
                setSortedData(data)
            })
    }
    return (
        <div className="container mx-auto px-5 xl:px-20 mt-5 mb-10">
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mb-5">
                <p className="text-2xl font-bold text-gray-700">All Campaign List</p>
                <button onClick={handleSort} className="bg-gray-700 text-sm text-white rounded font-medium block w-[180px] sm:w-48 sm:h-10 h-8">Sort By Donation Amount</button>
            </div>
            <div className="overflow-x-auto border-[2px] border-purple-500">
                <table className="table xl:table-lg">
                    <thead className="bg-purple-600 text-gray-200 text-[0.9rem]">
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th className="hidden lg:table-cell">User Email</th>
                            <th>Campaign Type</th>
                            <th className="hidden md:table-cell">Donation</th>
                            <th>Date</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sortedData.map((campaign, idx) => <tr className="border border-purple-300" key={campaign._id}>
                                <th>{idx + 1}</th>
                                <td>{campaign.name}</td>
                                <td className="hidden lg:table-cell">{campaign.email}</td>
                                <td>{campaign.campaign_type}</td>
                                <td className="hidden md:table-cell">{campaign.number}</td>
                                <td>{campaign.date}</td>
                                <td>
                                    <Link to={`/all-campaign/${campaign._id}`} className="md:hidden"><MdOutlineRemoveRedEye className="text-lg" /></Link>
                                    <Link to={`/all-campaign/${campaign._id}`} className="bg-purple-300 transition-all rounded-full hover:bg-transparent border px-3 py-1 font-medium text-[13px] text-gray-700 hover:border-purple-500 hover:text-purple-700 hidden md:inline-block">View More</Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllCampaign;