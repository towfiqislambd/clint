import { Link, useLoaderData } from "react-router-dom";

const AllCampaign = () => {
    const campaigns = useLoaderData();
    return (
        <div className="overflow-x-auto container mx-auto px-20 my-10">
            <table className="table border-[2px] border-purple-500 table-lg	">
                <thead className="bg-purple-600 text-gray-200 text-[0.9rem]">
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>User Email</th>
                        <th>Campaign Type</th>
                        <th>Donation Amount</th>
                        <th>Date</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        campaigns.map((campaign, idx) => <tr className="border border-purple-300" key={campaign._id}>
                            <th>{idx + 1}</th>
                            <td>{campaign.name}</td>
                            <td>{campaign.email}</td>
                            <td>{campaign.campaign_type}</td>
                            <td>{campaign.number}</td>
                            <td>{campaign.date}</td>
                            <td>
                            <Link to={`/all-campaign/${campaign._id}`} className="bg-purple-300 transition-all rounded-full hover:bg-transparent border px-3 py-1 font-medium text-[13px] text-gray-700 hover:border-purple-500 hover:text-purple-700">View More</Link>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllCampaign;