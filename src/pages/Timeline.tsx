import TimelineItem from '@/components/TimelineItem'
import * as constants from '@/constants'


export default function Timeline() {

    return (
        <div className='flex flex-col w-300 justify-center items-stretch'>
            {constants.timelineEvents.map((event, i) => {return (
                <TimelineItem 
                date={event.date}
                title={event.title}
                description={event.description}
                type={event.type}
                key={i}
                />
            )})}            
        </div>
        
    )
}