import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateCampaign = () => {
    const navigate = useNavigate()
    const [dates, setDates] = useState(null)
    const [option, setOption] = useState(null)
    const campaign = useLoaderData();
    const { _id, image, title, name, email, number, desc, campaign_type, date } = campaign

    const handleUpdateCampaign = e => {
        e.preventDefault()
        const image = e.target.image.value;
        const title = e.target.title.value;
        const number = e.target.number.value;
        const desc = e.target.desc.value;
        const campaign_type = option;
        const date = dates
        const newCampaign = { image, title, campaign_type, date, number, desc }

        fetch(`http://localhost:5000/update-campaign/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    navigate('/my-campaign')
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Updated Successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })

    }
    return (
        <div className="container mx-auto px-5 sm:px-28">
            <div className="bg-purple-100 mx-auto shadow-lg border-purple-200 border rounded-lg my-8">
                <form onSubmit={handleUpdateCampaign} className="sm:px-8 px-5 py-4">
                    <h3 className="text-2xl  font-semibold mb-5 font-mono text-gray-600 text-center">Update Campaign</h3>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <input defaultValue={image} type="text" name="image" placeholder="Image URL" className="input w-full input-bordered col-span-2 sm:col-span-1 border-purple-200 rounded" required />
                        <input defaultValue={title} type="text" name="title" placeholder="Campaign Title" className="input w-full input-bordered col-span-2 sm:col-span-1 border-purple-200 rounded" required />
                        <select defaultValue={campaign_type} onChange={(e) => setOption(e.target.value)} className="select col-span-2 sm:col-span-1 select-primary rounded border-purple-200 w-full text-gray-400">
                            <option value='defOption' disabled>Campaign Type</option>
                            <option value='personal-issue'>Personal Issue</option>
                            <option value='startup'>Startup</option>
                            <option value='business'>Business</option>
                            <option value='creative-ideas'>Creative Ideas</option>
                        </select>
                        <input defaultValue={date} onChange={(e) => setDates(e.target.value)} type="date" className="input col-span-2 sm:col-span-1 w-full input-bordered border-purple-200 rounded text-gray-400" required />
                        <input disabled value={name} type="text" name="name" placeholder="User Name" className="input w-full col-span-2 sm:col-span-1 input-bordered border-purple-200 rounded" required />
                        <input disabled value={email} type="email" name="email" placeholder="User Email" className="input w-full col-span-2 sm:col-span-1 input-bordered border-purple-200 rounded" required />
                        <input defaultValue={number} type="number" name="number" placeholder="Donation amount" className="input w-full input-bordered border-purple-200 rounded col-span-2" required />
                        <textarea defaultValue={desc} name="desc" rows={5} className="w-full px-3 py-2 col-span-2 border rounded border-purple-200" placeholder="Description"></textarea>
                        <input type="submit" value='Update' className="btn col-span-2 bg-purple-600 hover:bg-purple-600 w-full text-white" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateCampaign;