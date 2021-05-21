
import {useState} from 'react'

export default function Header({ selected }){
    const [toggle, setToggle] = useState(false)

    return(
        <div className="max-h-screen bg-dark w-[400px] border-r-[0.2px] border-gray-700">
            {/* Header Nav */}
            <div className="flex w-full h-[56px] bg-dark-lighter justify-between items-center px-5">
                <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden">
                    <img src="/images/avatar.jpeg" className="object-cover w-full h-full"/>
                </div>
                <span className="flex justify-center items-center text-gray-400 space-x-5">
                    <div className="relative cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        <div className="absolute w-3 h-3 bg-dark-lighter top-0 -right-1 rounded-full flex justify-center items-center">
                            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div onClick={()=>setToggle(!toggle)} className={`${toggle && 'bg-gray-700'} cursor-pointer rounded-full p-1 relative group`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`rounded-full h-5 w-5`} viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                        <ul className={`${!toggle && 'hidden'} absolute w-[180px] shadow-all bg-dark-lighter top-8 right-0 py-2 z-10 text-white text-sm`}>
                            <li className="hover:bg-dark cursor-pointer pl-5 py-2">New group</li>
                            <li className="hover:bg-dark cursor-pointer pl-5 py-2">Create a room</li>
                            <li className="hover:bg-dark cursor-pointer pl-5 py-2">Profile</li>
                            <li className="hover:bg-dark cursor-pointer pl-5 py-2">Archive</li>
                            <li className="hover:bg-dark cursor-pointer pl-5 py-2">Starred</li>
                            <li className="hover:bg-dark cursor-pointer pl-5 py-2">Settings</li>
                            <li className="hover:bg-dark cursor-pointer pl-5 py-2">Logout</li>
                        </ul>
                    </div>
                </span>
            </div>
            {/* User List */}
            <div className="w-full h-full overflow-hidden">
                <div className="px-3 py-2 border-b-[0.2px] border-gray-700">
                    <div className="w-full h-full relative">
                        <input 
                            type="text" 
                            className="rounded-2xl bg-dark-lighter w-full h-[35px] pl-14 text-sm text-white focus:outline-none"
                            placeholder="Search or start new chat"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="bg-dark overflow-y-auto h-[80%] box-content">
                    { Array(5).fill().map((v,k)=>(
                       <UserItem key={k} selected={selected}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

const UserItem  = ({ selected })=>{
    return(
        <div onClick={()=>selected(true)} className="flex items-center cursor-pointer space-x-2 px-2 group hover:bg-dark-lighter">
            <div className="w-12 h-12 bg-gray-400 rounded-full overflow-hidden">
                <img src="/images/avatar.jpeg" className="object-cover w-full h-full"/>
            </div>
            <div className="flex flex-1 space-y-1 flex-col flex-shrink-0 h-[60px] border-b-[0.2px] border-gray-700 py-1 text-gray-400 box-content justify-center">
                <div className="flex justify-between items-center text-white">
                    <p>BiG LOosers </p>
                    <p className="text-sm">yesterday</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm truncate">Moussa Couliby a changé le profil</p>
                    <span className="flex space-x-1 items-end transition delay-300 ease-in-out duration-500">
                        <p className="bg-green-400 p-[10px] w-5 h-5 flex font-bold justify-center items-center text-xs rounded-full text-black">1</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-7 hidden group-hover:flex" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}
