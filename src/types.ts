import type { ReactElement } from "react"

export type TimelineItem = {
    date: Date
    title: ReactElement
    description: ReactElement
    images?: ReactElement[]
    type: 'professional' | 'personal' | 'achievement' | 'music'
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
    label: ReactElement
    link: URL
}

export type Project = {
    title: string
    description: string
    link: URL
    demo: ReactElement
    tags: string[]
}