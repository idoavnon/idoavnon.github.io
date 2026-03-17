import {
  Card,
  CardAction,
  CardContent,
  CardDescription,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { ChevronLeft, ChevronDown } from 'lucide-react'

import { useState } from 'react'

import * as types from '@/types'

export default function Project({title, tags, link, description, demo}: types.Project) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {title}                    
                </CardTitle>                
                <CardDescription>
                    {tags.map((tag) => {return (
                        <Badge className='m-1' key={tag}>{tag}</Badge>
                    )})}
                </CardDescription>                
                <CardAction>
                    <Button variant='outline' asChild>
                        <a target='_blank' href={link.href}>Open</a>
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                {description}
                <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}                
                >          
                    <CollapsibleTrigger asChild className='transition-normal'>    
                        <div className='flex flex-row'>
                            Demo {isOpen ? <ChevronDown/> : <ChevronLeft/>}
                        </div>                
                    </CollapsibleTrigger>                    
                    <CollapsibleContent className='text-wrap'>
                        <img src={demo} alt="loading..."/>
                    </CollapsibleContent>                        
                </Collapsible>
            </CardContent>
        </Card>
    )
}