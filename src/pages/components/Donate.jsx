export default function Donate(){
    return (
        <div className="w-screen mx-auto">
            <div className="2xl:container 2xl:mx-auto px-8 py-2">
                <div className="px-20 py-20 bg-blue-950 text-gray-100 rounded-3xl w-full flex flex-wrap space-x-2 md:space-x-12 lg:space-x-24">
                    <div className="w-full md:w-[40%] lg:w-[50%] xl:w-[60%]">
                        <h4 className="text-4xl mb-10">Donate</h4>
                        <p className="mb-3">Help us to improve our services and to offer much more to our community by donating generously.</p>
                        <p className="mb-3">Your donations big or small makes a significant impact.</p>
                        <p className="mb-16">Jazakumullah Khair for your continous donations and support.</p>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-4 px-10 rounded">
                            Donate
                        </button>
                    </div>
                    <div className="hidden md:block flex-shrink-0">
                    <img className="resize-none rounded-3xl h-[400px]" src="/images/Donate.jpg" alt="Donate"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}