export default function Welcome(){
    return(
        <div className="w-screen mx-auto">
            <div className="2xl:container 2xl:mx-auto px-8 py-2 grid grid-cols-1 content-stretch mt-5">
                <div className=""><h4 className="font-bold text-cyan-600">Welcome To</h4></div>
                <div className=""><h1 className="text-6xl font-bold text-blue-950">Omar Ibn Al Khattab Centre</h1></div>
                <div className="mt-5"><h3 className="text-lg text-sky-600">Striving to serve the best interests of Islam and the Muslims of Edmonton</h3></div>
                <div className="mt-5"><h6 className="text-emerald-500">6005 103A St NW, Edmonton</h6></div>
            </div>

            <div className="2xl:container 2xl:mx-auto px-8 py-2 flex flex-wrap items-start">
                <div className="bg-emerald-50 border border-emerald-200 rounded-md px-2 py-1 my-1 mr-3">5 DAILY PRAYERS</div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-md px-2 py-1 my-1 mr-3">COUNSELLING WITH OUR IMAM ABOUT LIFE RELATED ISSUES</div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-md px-2 py-1 my-1 mr-3">PRAYER AREA FOR SISTERS WITH SEPARATE ENTERANCE</div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-md px-2 py-1 my-1 mr-3">VARIOUS SOCIAL ACTIVITIES</div>
            </div>        
        </div>
    )
}