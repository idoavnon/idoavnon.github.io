import {
  Card,
  CardAction,
  CardContent,
  CardDescription,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"

import * as types from '@/types'

export default function Writing({title, date, time, type, link, blurb}: types.Writing) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {title}                    
                </CardTitle>                
                <CardDescription>{date.toDateString()}</CardDescription>
                <Badge>{type}</Badge>
                <Badge variant='secondary'>{'~' + time + ' minute read'}</Badge>
                <CardAction>
                    <Button variant='outline' asChild>
                        <a href={link.href}>Open</a>
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                {blurb}
            </CardContent>
        </Card>
    )
}