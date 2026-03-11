import type { ReactElement } from "react"

export type TimelineItem = {
    date: Date
    title: ReactElement
    description: ReactElement
    type: 'professional' | 'personal' | 'achievement'
}

export type Writing = {
    date: Date
    title: string
    blurb: string
    link: URL
    time: number
    type: 'poetry' | 'prose' | 'essay'
}

export type Video = {
    date: Date
    title: string
    blurb: string
    link: URL
}

export type HeaderLink = {
    label: string
    link: URL
}