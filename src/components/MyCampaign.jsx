import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const MyCampaign = () => {
    const { user } = useContext(AuthContext);
    const [campaigns, setCampaigns] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/my-campaign/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCampaigns(data)
            })
    }, [user.email])

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/all-campaign/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remainingCampaign = campaigns.filter(campaign => campaign._id !== _id)
                                setCampaigns(remainingCampaign)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                })
                            }
                        })
                }
            })
    }

    return (
        <div className="container mx-auto px-5 xl:px-32 my-10">
            <div className="overflow-x-auto border-[2px] border-gray-400">
                {
                    campaigns.length === 0 ?
                        <h2 className="text-center text-3xl text-error font-semibold">You did not add any campaign!!</h2> :
                        <table className="table xl:table-lg">
                            <thead className="bg-gray-700 text-gray-200 text-[0.9rem]">
                                <tr>
                                    <th>ID</th>
                                    <th>Username</th>
                                    <th className="hidden sm:table-cell">User Email</th>
                                    <th className="hidden lg:table-cell">Campaign Title</th>
                                    <th>Campaign Type</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    campaigns.map((campaign, idx) => <tr className="border border-gray-300" key={campaign._id}>
                                        <th>{idx + 1}</th>
                                        <td>{campaign.name}</td>
                                        <td className="hidden sm:table-cell">{campaign.email}</td>
                                        <td className="hidden lg:table-cell">{campaign.title}</td>
                                        <td>{campaign.campaign_type}</td>
                                        <td>{campaign.date}</td>
                                        <td>
                                            <button><Link to={`/update-campaign/${campaign._id}`}><MdEdit className="text-xl sm:text-2xl sm:me-4" /></Link></button>
                                            <button onClick={() => handleDelete(campaign._id)}>
                                                <RxCross2 className="text-xl sm:text-2xl" />
                                            </button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                }
            </div>
        </div>
    )
}

export default MyCampaign;