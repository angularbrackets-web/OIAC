export default function NavJummahTimes(){
    return (
        <div className="bg-nonPhotoBlue text-pakistanGreen text-md py-2">
            <div className="2xl:container 2xl:mx-auto px-8 flex  py-1   space-x-5">
                <h5>Jummah Times</h5>
                <div className="flex rounded-md border border-mindaro3">
                    <div className="bg-biceBlue text-white px-2 rounded-l-md"><label>Jummah 1</label></div>
                    <div className="px-2"><label>02:00 PM</label></div>                    
                </div>
                <div className="flex rounded-md border border-mindaro3">
                    <div className="bg-biceBlue text-white px-2 rounded-l-md"><label>Jummah 2</label></div>
                    <div className="px-2"><label>03:00 PM</label></div>                    
                </div>
            </div>
        </div>
    )
}