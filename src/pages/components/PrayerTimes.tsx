export default function PrayerTimes(){
    return (
        <div className="w-screen mx-auto">
            <div className="2xl:container 2xl:mx-auto px-8 py-2">
                <div className="p-5 bg-emerald-300 rounded-3xl">
                    <div className="m-2 mb-4">
                    <h4 className="text-3xl m-2">Prayer Times</h4>
                    </div>
                    
                    <table className="w-full">
                        <thead className="bg-emerald-100">
                            <tr className="border-b-2 border-emerald-200">
                                <th className="w-20 p-10 font-semibold tracking-wide text-left rounded-tl-2xl text-3xl text-emerald-800">Salaat</th>
                                <th className="w-20 p-10 font-semibold tracking-wide text-left text-3xl text-emerald-800">Adhan</th>
                                <th className="w-20 p-10 font-semibold tracking-wide text-left rounded-tr-2xl text-3xl text-emerald-800">Iqama</th>
                            </tr>
                        </thead>
                        <tbody className="bg-emerald-100 text-emerald-600">
                            <tr className="border-b border-emerald-200">
                                <td className="px-10 whitespace-nowrap text-left">
                                    <h6 className="text-3xl text-semibold text-emerald-800">Fajr</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl">05:30 AM</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl">06:30 AM</h6>
                                </td>
                            </tr>
                            <tr className="border-b border-emerald-200">
                            <td className="px-10 whitespace-nowrap text-left">
                                    <h6 className="text-3xl text-semibold text-emerald-800">Sunrise</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl">05:30 AM</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl"></h6>
                                </td>
                            </tr>
                            <tr className="border-b border-emerald-200">
                            <td className="px-10 whitespace-nowrap text-left">
                                    <h6 className="text-3xl text-semibold text-emerald-800">Dhuhr</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl">05:30 AM</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl">06:30 AM</h6>
                                </td>
                            </tr>
                            <tr className="border-b border-emerald-200">
                            <td className="px-10 whitespace-nowrap text-left">
                                    <h6 className="text-3xl text-semibold text-emerald-800">Asr</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl">05:30 AM</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl">06:30 AM</h6>
                                </td>
                            </tr>
                            <tr className="border-b border-emerald-200">
                            <td className="px-10 whitespace-nowrap text-left">
                                    <h6 className="text-3xl text-semibold text-emerald-800">Maghrib</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl">05:30 AM</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl">06:30 AM</h6>
                                </td>
                            </tr>
                            <tr className="border-b border-emerald-200">
                            <td className="px-10 whitespace-nowrap text-left">
                                    <h6 className="text-3xl text-semibold text-emerald-800">Isha</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl">05:30 AM</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl">06:30 AM</h6>
                                </td>
                            </tr>
                            <tr className="border-b border-emerald-200">
                            <td className="px-10 whitespace-nowrap text-left">
                                    <h6 className="text-3xl text-semibold text-emerald-800">Jummah 1</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl">05:30 AM</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl">06:30 AM</h6>
                                </td>
                            </tr>
                            <tr className="border-b border-emerald-200">
                            <td className="px-10 whitespace-nowrap text-left">
                                    <h6 className="text-3xl text-semibold text-emerald-800">Jummah 2</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl">05:30 AM</h6>
                                </td>
                                <td className="px-10 whitespace-nowrap text-left w-[33%]">
                                    <h6 className="text-xl">06:30 AM</h6>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3} className="rounded-b-2xl">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}