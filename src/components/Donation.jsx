const Donation = ({ donatedUser }) => {
    return (
            <div className="lg:px-52">
                <div className="border items-center p-3 md:p-6 rounded-lg border-gray-200 shadow grid grid-cols-12 gap-4 sm:gap-7 my-5">
                    <img src={donatedUser.image} className="w-full max-h-72 rounded-lg col-span-4" />
                    <div className="col-span-8">
                        <p className="bg-purple-300 rounded-full px-4 py-1 text-gray-600 inline text-sm font-medium">{donatedUser.displayName}</p>
                        <h3 className="text-lg font-semibold mt-2 mb-1 sm:mb-2">{donatedUser.title}</h3>
                        <p className="text-gray-500 text-sm sm:text-base mb-3">{donatedUser.description || donatedUser.desc}</p>
                        <div className="justify-between flex items-center mb-5">
                            <p className="text-gray-500 font-medium text-sm sm:text-base cursor-pointer">Category: <span className="font-normal text-gray-500">{donatedUser.category || donatedUser.campaign_type}</span></p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Donation;