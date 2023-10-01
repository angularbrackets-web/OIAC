export default function Volunteer(){
    return(
        <div className="w-screen mx-auto">
            <div className="2xl:container 2xl:mx-auto px-8 py-2">
                <div className="px-20 py-20 bg-gray-600 text-gray-100 rounded-3xl w-full flex flex-wrap space-x-2 md:space-x-6 lg:space-x-12">
                    <div className="hidden md:block md:w-[40%] flex-shrink-0">
                        <img className="resize-none rounded-3xl h-[600px] w-[450px] object-cover" src="/images/volunteer.jpg" alt="Donate"></img>
                    </div>
                    <div className="w-full md:w-[50%]">
                        <h4 className="text-4xl mb-10">Volunteer with us</h4>
                        <p className="mb-3">We encourage you to share your experience and time to one of our many Projects in our Masjid.</p>
                        <p className="mb-3">Please fill in your details and let us get back to you.</p>
                        <p className="mb-16">Jazakumullah Khair.</p>
                        
                        <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="volunteer-name">
                                        Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="volunteer-name" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="volunteer-phone">
                                        Phone
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="volunteer-phone" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="volunteer-email">
                                        Email
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="volunteer-email" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="volunteer-expertise">
                                        Your Expertise
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="volunteer-expertise" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="volunteer-message">
                                        Message
                                    </label>
                                    <textarea className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="volunteer-message" />
                                </div>
                            </div>
                            <button class="bg-emerald-500 hover:bg-emerald-700 text-white text-lg font-bold py-4 px-10 rounded">
                                Submit
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}