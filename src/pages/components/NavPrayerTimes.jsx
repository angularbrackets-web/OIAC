export default function NavPrayerTimes(){
    return(
        <div className="bg-azureWeb text-pakistanGreen text-xs w-screen ">
            <div className="2xl:container 2xl:mx-auto px-8 flex  py-1 space-x-5">
                <h5>Iqama Times</h5>
                <div className="flex rounded-md border border-persianGreen">
                    <div className="bg-persianGreen text-white px-2 rounded-l-md items-center justify-center"><label>Fajr</label></div>
                    <div className="px-2 flex space-x-2"><label>04:00 AM</label><label className="font-bold">05:00 AM</label></div>                    
                </div>
                <div className="flex rounded-md border border-persianGreen">
                    <div className="bg-persianGreen text-white px-2 rounded-l-md"><label>Dhuhr</label></div>
                    <div className="px-2 flex space-x-2"><label>01:30 PM</label><label className="font-bold">02:00 PM</label></div>                    
                </div>
                <div className="flex rounded-md border border-persianGreen">
                    <div className="bg-persianGreen text-white px-2 rounded-l-md"><label>Asr</label></div>
                    <div className="px-2 flex space-x-2"><label>05:30 PM</label><label className="font-bold">06:00 PM</label></div>                    
                </div>
                <div className="flex rounded-md border border-persianGreen">
                    <div className="bg-persianGreen text-white px-2 rounded-l-md"><label>Maghrib</label></div>
                    <div className="px-2 flex space-x-2"><label>09:20 PM</label><label className="font-bold">09:30 PM</label></div>                    
                </div>
                <div className="flex rounded-md border border-persianGreen">
                    <div className="bg-persianGreen text-white px-2 rounded-l-md"><label>Isha</label></div>
                    <div className="px-2 flex space-x-2"><label>10:30 PM</label><label className="font-bold">10:40 PM</label></div>                    
                </div>
            </div>
        </div>
    )
}