import hifzImage from '../../images/OIAC-Hifz-Program.webp'


export default function LatestPosts(){
    return(
        <div className="w-screen mx-auto">
            <div className="2xl:container 2xl:mx-auto px-8 py-2">
                <h1 className="text-4xl">Latest Posts</h1>
                <div className=" flex flex-wrap items-start justify-between content-stretch mt-5">
                    <div className="border border-black-100 rounded-md w-full md:w-[50%] lg:w-[33%] h-[700px]">
                        <div>
                            <img className="rounded-md h-[500px]" src={hifzImage} alt="OIAC Hifz Program"></img>
                        </div>
                        <div className="p-5">
                            <h4 className="text-2xl">After School Hifz Program</h4>
                            <ul>
                                <li>Three Classes per week</li>
                                <li>Kids will be taught Islamic Etiquettes and Adab</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border border-black-100 rounded-md w-full md:w-[50%] lg:w-[33%] h-[700px]">
                        <div>
                            <img className="rounded-md h-[500px]" src="/images/OIAC-KARATE-scaled.webp" alt="Karate Class"></img>
                        </div>
                        <div className="p-5">
                            <h4 className="text-2xl">Karate Class</h4>
                            <ul>
                                <li>Ages - 6 years and up</li>
                                <li>$100 per month</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border border-black-100 rounded-md w-full md:w-[50%] lg:w-[33%] h-[700px]">
                        <div>
                            <img className="rounded-md h-[500px]" src="/images/OIAC-Quran-Intensive-1.webp" alt="Quran Summer Camp"></img>
                        </div>
                        <div className="p-5">
                            <h4 className="text-2xl">Summer Quran Intensive Camp</h4>
                            <ul>
                                <li>Quran Memorization with proper Tajweed</li>
                                <li>Full month of July and August</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}