import { Calendar, Briefcase, ChevronLeft, ChevronDown, Trophy } from 'lucide-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from 'react'
import * as types from '@/types' 

export default function TimelineItem({date, title, description, type}: types.TimelineItem) {
    const [isOpen, setIsOpen] = useState(false)

    const icon = (
        type === 'personal' ? <Calendar/> :
        type === 'professional' ? <Briefcase/> :
        <Trophy/>
    )

    return (
        <div className='flex flex-row justify-between border-2 rounded-full border-dotted p-5'>
            {date.toDateString()}
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
                    <CollapsibleContent className='text-wrap'>
                        {description}
                    </CollapsibleContent>    
                </div>
            </Collapsible>

        </div>
    )
            
}