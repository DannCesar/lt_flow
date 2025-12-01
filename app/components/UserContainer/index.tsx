import {CircleUserRoundIcon} from 'lucide-react'
export default function UserContainer(){
    return(
        <div className='flex items-center font-light text-white gap-3'>
            <CircleUserRoundIcon  width={32} height={32}/>
            <span>Daniel Cesar</span>
        </div>
    )
}