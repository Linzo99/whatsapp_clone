import LandingItem from './LandingItem'
import ChatItem from './ChatItem'

export default function Main({ selection }){
    if(!selection)
        return(
            <LandingItem/>
        )
    return(
        <ChatItem/>
    )
}

