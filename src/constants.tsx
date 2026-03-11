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
        blurb: 'A short piece about my first (and currently only) tattoo which I wrote for a writer\'s circle. Note the content warning',
        link: new URL('https://drive.google.com/uc?export=download&id=1vPW7cqNBn6tuAnxR1CZF0dBKPOvUHQ-H'),
        time: 10,
        type: 'essay'
    },
    {
        date: new Date(2025, 11, 27),
        title: 'Building a Life Worth Living',
        blurb: 'A piece exploring my relationship with DBT and some of its most fundamental teachings',
        link: new URL('https://drive.google.com/uc?export=download&id=1jIHx6BdmVcmqCV1UOBumoFse4LJNUO4Q'),
        time: 5,
        type: 'essay'
    },
    {
        date: new Date(2025, 11, 8),
        title: 'Two Coffeeshop Poems',
        blurb: 'A couple of short poems about my dreams of opening a coffeeshop. My first (and most likely non-successful) attempt at rhyming!',
        link: new URL('https://drive.google.com/uc?export=download&id=1S6Szwz-jhM2zX5qWBaseZcJGlFij_FUI'),
        time: 3,
        type: 'poetry'
    },
    {
        date: new Date(2025, 10, 8),
        title: 'Untitled Poem',
        blurb: 'A short poem about self-love',
        link: new URL('https://drive.google.com/uc?export=download&id=1CpqTmDUt43tzZ0yEsxCdylgcb5eoyQ4v'),
        time: 1,
        type: 'poetry'
    },
    {
        date: new Date(2025, 9, 26),
        title: 'Untitled Story',
        blurb: 'A spooky story. SPOILER: this was actually a dream I had!',
        link: new URL('https://drive.google.com/uc?export=download&id=1_8yQm3jLqQFsX0lywhzGGE_mMxM1bwwu'),
        time: 4,
        type: 'prose'
    }
]

export const headerLinks: types.HeaderLink[] = [
    {
        label: 'linkedIn',
        link: new URL('https://www.linkedin.com/in/ido-avnon/')
    },
    // {
    //     label: 'resume',
    //     link: new URL('google.com')
    // },
    {
        label: 'email',
        link: new URL('mailto:avnonido@gmail.com')
    }
]