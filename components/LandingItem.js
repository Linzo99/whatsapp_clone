import Image from 'next/image'

export default function LandingItem(){
    return(
        <div className="min-h-screen bg-dark-lighter flex-1 flex text-white">
            <div className="w-full h-full flex justify-center pt-20">
                <div className="inline max-w-lg text-center space-y-3">
                    <Image src='/images/home.jpg' width={250} height={250}/>
                    <div className="space-y-3 text-gray-400">
                        <p className="font-bold text-3xl">Keep your phone connected</p>
                        <p className="text-sm">WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}