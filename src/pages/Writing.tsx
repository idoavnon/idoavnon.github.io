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

import * as constants from '@/constants'
import * as types from '@/types'

export default function Writing() {
    const writings = constants.writings.map((writing: types.Writing, index) => {return (
        <Card key={index}>
            <CardHeader>
                <CardTitle>
                    {writing.title}                    
                </CardTitle>                
                <CardDescription>{writing.date.toDateString()}</CardDescription>
                <Badge>{writing.type}</Badge>
                <Badge variant='secondary'>{'~' + writing.time + ' minute read'}</Badge>
                <CardAction>
                    <Button variant='outline' asChild>
                        <a href={writing.link.href}>Download</a>
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                {writing.blurb}
            </CardContent>
        </Card>
    )})
    return (
        <div>
            {writings}
        </div>
    )
}