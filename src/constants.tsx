import * as types from "./types";

export const timelineEvents: types.TimelineItem[]= [
    {
        date: new Date(2019, 7, 1), 
        title:<p>I begin my year of service</p>, 
        description:<p>I decide to begin what is called שנת שירות ('schnat sherut'), or year of service. I volunteer in schools, after school programs, and youth groups in <a target="_blank" href='https://en.wikipedia.org/wiki/Haifa'>Haifa</a>.</p>, 
        type: 'professional'
    },
    {
        date: new Date(2019, 5, 23), 
        title:<p>I graduate!</p>, 
        description:<p>I send off the Roosevelt High School class of 2019 with my biggest public speaking event to date: a valedictorian speech at Memorial Stadium</p>, 
        type: 'achievement'
    },
    {
        date: new Date(2009, 8, 1), 
        title:<p>I start playing violin</p>, 
        description:<p>As per the mandatory music program in Seattle Public Schools, I start taking weekly violin lessons</p>, 
        type: 'personal'
    },
    {
        date: new Date(2004, 7, 1), 
        title: <p>I move to Seattle</p>, 
        description: <p>My family and I move to Seattle following my mom's fellowship program at the University of Washington</p>, 
        type: 'personal'
    },
    {
        date: new Date(2000, 11, 19), 
        title: <p>I am born!</p>, 
        description: <p>I am born in the Meir Medical Center in what is now known as <a target='_blank' href='https://en.wikipedia.org/wiki/Kafr_Saba'>Kfar Saba</a></p>, 
        type: 'personal'
    },        
]

export const writings: types.Writing[] = [
    {
        date: new Date(2026, 1, 10),
        title: 'In the Aeroplane Over the Sea, Tattoos, and DBT',
        blurb: 'A short piece about my first (and currently only) tattoo! Note the content warning',
        link: new URL('https://drive.google.com/uc?export=download&id=1vPW7cqNBn6tuAnxR1CZF0dBKPOvUHQ-H'),
        time: 10,
        type: 'essay'
    }
] 