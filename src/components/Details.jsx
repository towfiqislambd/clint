import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2'

const Details = () => {
    const details = useLoaderData();
    const { user } = useContext(AuthContext)
    const displayName = user.displayName;
    const email = user.email
    const { title, image, description, status, category } = details

    const handleDonate = () => {
        const donatedUser = { title, image, description, status, category, displayName, email }

        fetch('http://localhost:5000/donated-campaign', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(donatedUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Donation Completed",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }
    return (
        <div className="container mx-auto px-5">
            {
                details && <div className="lg:px-52">
                    <div className="border items-center p-3 md:p-6 rounded-lg border-gray-200 shadow grid grid-cols-12 gap-4 sm:gap-7 my-10">
                        <img src={details.image} className="w-full  rounded-lg col-span-4" />
                        <div className="col-span-8">
                            <h3 className="text-lg font-semibold mb-1 sm:mb-2">{details.title}</h3>
                            <p className="text-gray-500 text-sm sm:text-base mb-3">{details.description}</p>
                            <div className="justify-between flex items-center mb-5">
                                <p className="text-gray-500 font-medium text-sm sm:text-base cursor-pointer">Category: <span className="font-normal text-gray-500">{details.category}</span></p>
                                <p className="font-medium text-gray-500">Status: <span className="px-3 text-gray-700 mr-4 font-medium cursor-pointer py-1 rounded-full text-xs sm:text-sm bg-purple-300">{details.status}</span></p>
                            </div>
                            <Link onClick={handleDonate} className="bg-purple-600 transition-all hover:bg-transparent border border-purple-600 hover:text-purple-600 text-white px-5 py-[7px] rounded font-medium text-sm">Donate Now</Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Details;