import {useState} from 'react'
export default function ChatItem(){
    const [toggle, setToggle] = useState(false)
    return(
        <div className="h-screen flex-1 flex flex-col text-white">
            <header className="h-[56px] space-x-2 w-full bg-dark-lighter flex justify-center items-center pl-3 pr-5 text-gray-300">
                <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden">
                    <img src="/images/avatar.jpeg" className="object-cover w-full h-full"/>
                </div>
                <div className="flex-1">
                    <span className="text-white">BiG LOoser</span>
                </div>
                <span className="flex space-x-3 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <div onClick={()=>setToggle(!toggle)} className={`${toggle && 'bg-gray-700'} cursor-pointer rounded-full p-1 relative group`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`rounded-full h-5 w-5`} viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                        <ul className={`${!toggle && 'hidden'} absolute w-[180px] shadow-all bg-dark-lighter top-8 right-0 py-2 z-10 text-white text-sm`}>
                            <li className="hover:bg-dark cursor-pointer pl-5 py-2">Select Messages</li>
                            <li className="hover:bg-dark cursor-pointer pl-5 py-2">Mute Notifications</li>
                            <li className="hover:bg-dark cursor-pointer pl-5 py-2">Clear Messages</li>
                            <li className="hover:bg-dark cursor-pointer pl-5 py-2">Exit group</li>
                        </ul>
                    </div>
                </span>
            </header>
            <div className="flex-1 bg-[#0d1418] bg-chat bg-blend-overlay overflow-y-auto">
            </div>
            <footer className="min-h-[62px] bg-dark w-full flex space-x-3 justify-center items-center px-5 text-gray-500">
                <span className="flex justify-center items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                </span>
                <input className="flex-1 focus:outline-none rounded-2xl h-[38px] bg-dark-lighter pl-10 text-white" placeholder="Type a message"/>
                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-10 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                </svg>
            </footer>
        </div>

    )
}