import { useContext,useState } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from "./AuthProvider";

const AddNewCampaign = () => {
    const { user } = useContext(AuthContext);
    const [dates, setDates] = useState(null)
    const [option, setOption] = useState(null)

    const handleNewCampaign = e => {
        e.preventDefault()
        const image = e.target.image.value;
        const title = e.target.title.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const desc = e.target.desc.value;
        const campaign_type = option;
        const date = dates
        const newCampaign = { image, title, campaign_type, date, name, email, number, desc }

        fetch('http://localhost:5000/all-campaign', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Added Successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })

    }
    return (
        <div className="container mx-auto px-5 sm:px-28">
            <div className="bg-purple-100 mx-auto shadow-lg border-purple-200 border rounded-lg my-8">
                <form onSubmit={handleNewCampaign} className="px-5 sm:px-8 py-4">
                    <h3 className="text-2xl  font-semibold mb-5 font-mono text-gray-600 text-center">Add New Campaign</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" name="image" placeholder="Image URL" className="input w-full input-bordered border-purple-200 rounded col-span-2 sm:col-span-1" required />
                        <input type="text" name="title" placeholder="Campaign Title" className="input w-full input-bordered border-purple-200 rounded col-span-2 sm:col-span-1" required />
                        <select defaultValue='defOption' onChange={(e) => setOption(e.target.value)} className="select select-primary rounded border-purple-200 w-full col-span-2 sm:col-span-1 text-gray-400">
                            <option value='defOption' disabled>Campaign Type</option>
                            <option value='personal-issue'>Personal Issue</option>
                            <option value='startup'>Startup</option>
                            <option value='business'>Business</option>
                            <option value='creative-ideas'>Creative Ideas</option>
                        </select>
                        {/* <input onChange={(e) => setDates(e.target.value)} type="date" className="input col-span-2 sm:col-span-1 w-full input-bordered border-purple-200 rounded text-gray-400" required /> */}

                        <input type="text" onChange={(e) => setDates(e.target.value)} onFocus={e => e.target.type = 'date'} onBlur={e => e.target.type = 'text'} placeholder='mm/dd/yyyy (Deadline)' className="input col-span-2 sm:col-span-1 w-full input-bordered border-purple-200 rounded text-gray-400" required />


                        <input disabled value={user?.displayName} type="text" name="name" placeholder="User Name" className="input w-full input-bordered col-span-2 sm:col-span-1 border-purple-200 rounded" required />
                        <input disabled value={user?.email} type="email" name="email" placeholder="User Email" className="input w-full input-bordered col-span-2 sm:col-span-1 border-purple-200 rounded" required />
                        <input type="number" name="number" placeholder="Donation amount" className="input w-full input-bordered border-purple-200 rounded col-span-2" required />
                        <textarea name="desc" rows={5} className="w-full px-3 py-2 col-span-2 border rounded border-purple-200" placeholder="Description"></textarea>
                        <input type="submit" value='Add' className="btn col-span-2 bg-purple-600 hover:bg-purple-600 w-full text-white" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddNewCampaign;