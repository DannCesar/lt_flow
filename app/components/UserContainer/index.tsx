import {CircleUserRoundIcon} from 'lucide-react'
export default function UserContainer(){
    return(
        <div className='flex items-center font-light  text-white gap-3'>
            <CircleUserRoundIcon  width={28} height={28}/>
            <span>Daniel Cesar</span>
        </div>
    )
}