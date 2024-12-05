import Campaign from "./Campaign";

const RunningCampaign = ({ campaigns }) => {
    return (
        <div className="container mx-auto px-5 my-20">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold font-mono text-gray-800 mb-4">Our Running Campaign</h2>
                <p className="md:w-1/2 mx-auto text-gray-600">There are many people which includes homeless, disaster victims, underprivileged and children in need of clothing. We cannot do so much for them but try</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    campaigns.map((campaign, idx) => <Campaign key={idx} campaign={campaign}></Campaign>)
                }
            </div>
        </div>
    )
}

export default RunningCampaign;