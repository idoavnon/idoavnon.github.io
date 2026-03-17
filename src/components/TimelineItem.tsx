import { Calendar, Briefcase, ChevronLeft, ChevronDown, Trophy, Music } from 'lucide-react'
import {
  Collapsible,  
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from 'react'
import * as types from '@/types' 

export default function TimelineItem({date, title, description, images, type}: types.TimelineItem) {
    const [isOpen, setIsOpen] = useState(false)

    const icon = (
        type === 'personal' ? <Calendar/> :
        type === 'professional' ? <Briefcase/> :
        type === 'music' ? <Music/> :
        <Trophy/>
    )    

    return (
        <div className='border-3 border-dashed '>
            <div className='flex flex-row justify-between p-5'>
                <div className='w-50'>
                    {date.toDateString()}
                </div>
                {icon}
                <Collapsible
                    open={isOpen}
                    onOpenChange={setIsOpen}                
                >
                    <div className='w-100'>
                        <div className='flex flex-row justify-end'>
                            {title}               
                            <CollapsibleTrigger asChild className='transition-normal'>                    
                                {isOpen ? <ChevronDown/> : <ChevronLeft/>}
                            </CollapsibleTrigger>
                        </div>                      
                    </div>
                </Collapsible>
            </div>
            {isOpen ? <div className='p-5'>
                {description}
                {images?.length ? 
                <div className='flex flex-row gap-3'>
                    {images.map((image, index) => {                    
                        return (
                        <div key={index} className='w-30'>
                            {image}
                        </div>)
                    })}
                </div>: null}
            </div> : null}
        </div>
    )
            
}