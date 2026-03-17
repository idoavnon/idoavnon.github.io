import TimelineItem from '@/components/TimelineItem'
import * as constants from '@/constants'


export default function Timeline() {

    return (
        <div className='flex flex-col justify-center items-stretch gap-5'>
            {constants.timelineEvents.map((event, index) => {return (
                <TimelineItem key={index}
                {...event}
                />
            )})}            
        </div>        
    )
}