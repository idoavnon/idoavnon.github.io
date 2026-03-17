import * as types from "./types";
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import gmail from './assets/gmail.svg'
import lecture from './assets/lecture.jpeg'
import recital from './assets/recital.jpeg'
import eagle from './assets/eagle.jpeg'
import heron from './assets/heron.jpeg'
import ducklings from './assets/ducklings.jpeg'
import facebook_scraper from './assets/facebook_scraper_demo.gif'
import network_visualization from './assets/network_visualization.gif'



export const timelineEvents: types.TimelineItem[]= [
    {
        date: new Date(2025, 7, 29),
        title: <p>Community Jamcital!</p>,
        description:
        <p>
            Rather than doing a solo senior recital, I host a community jamcital, inviting friends and family to play along with me in my parent's home
        </p>,
        type: 'music' 
    },
    {
        date: new Date(2025, 5, 7),
        title:<p>I finish my masters!</p>,
        description:
        <p>
            I recieve my MS in Computer Science as part of the 'BS/MS' program at the University of Washington, 
        </p>,
        type: 'achievement'
    },
    {
        date: new Date(2024, 7, 1),
        title:<p>Lecturing my first course</p>,
        description:
        <p>
            After more than 10 quarters as a teaching assistant, I get to lecture CSE 122: Introduction to Programming II, writing my own assessments and culminating project! 
        </p>,
        images: [
            <img src={lecture}/>
        ],
        type: 'professional'
    },
    {
        date: new Date(2024, 5, 7),
        title:<p>I finish undergrad!</p>,
        description:
        <p>
            I recieve my dual degrees in Computer Science and Education, Communities, and Organizations, with a minor in mathematics.
        </p>,
        type: 'achievement'
    },
    {
        date: new Date(2024, 0, 31),
        title:<p>Conducting a Pit Orchestra</p>,
        description:
        <p>
            I conduct the Univeristy of Washington 'Stage Notes' production of Dolly Parton's 9 to 5!, 
        </p>,
        type: 'music'
    },
    {
        date: new Date(2023, 2, 8),
        title:<p>Junior Recital</p>,
        description:
        <p>
            I have my first collegiate recital, playing the first four movements of Bach's Partita no. 2, Mozart Violin Sonata, and Bartok's Romanian Folk Dances 
        </p>,
        images: [
            <img src={recital}/>,
        ],
        type: 'music'
    },
    {
        date: new Date(2021, 8, 1),
        title:<p>I begin TAing</p>,
        description:
        <p>
            I join the University of Washington Introductory Programming ('UW 12X') Teaching Assistant Program. 
            I will be a TA for the rest of my time as an undergraduate and as a graduate student, eventually
            leading the TAs in my course and serving as a lecturer over the summer!
        </p>,
        type: 'professional'
    },
    {
        date: new Date(2021, 2, 1),
        title:<p>My birding journey begins</p>,
        description:
        <p>
            In the Spring, I decide to take Honors 393: Music, Birdsong, and the Limits of the Human. I decided to take this class
            to fulfill a requirement for interdisciplinary honors, and because I know that my dad loves birds.
            The course, without exaggeration, changed my life, connecting me to birds and nature as a whole. Go to <a target='_blank' href='/writing'>writing</a> to see my final project!
        </p>,
        images: [
            <img src={eagle}/>,
            <img src={heron}/>,
            <img src={ducklings}/>,
        ],
        type: 'personal'
    },
    {
        date: new Date(2021, 0, 3),
        title:<p>I start playing with UWSO</p>,
        description:
        <p>
            I begin my time with the University of Washington Symphony Orchestra playing in a reduced and socially distant ensemble. 
            My first performance, recorded and without an audience, is <a target='_blank' href='https://www.youtube.com/watch?v=QChQSrk2PG0'>Edvard Grieg's 'Våren'</a>, or Spring
        </p>,
        type: 'music'
    },
    {
        date: new Date(2020, 8, 28),
        title: <p>I begin my undergrad!</p>,
        description: 
        <p>
            I begin my undergraduate degree at the University of Washington. I start as a direct admit to the computer science department, 
            eventually adding a degree in Education, Communities, and Organizations.
        </p>,
        type: 'professional'
    },
    {
        date: new Date(2019, 7, 1), 
        title:<p>I begin my year of service</p>, 
        description:
        <p>
            I decide to participate in what is called שנת שירות ('schnat sherut'), or year of service. I volunteer in schools, after school programs,
             and youth groups in <a target="_blank" href='https://en.wikipedia.org/wiki/Haifa'>Haifa</a>.
        </p>, 
        type: 'professional'
    },
    {
        date: new Date(2019, 5, 23), 
        title:<p>I graduate high school!</p>, 
        description:
        <p>
            I send off the Roosevelt High School class of 2019 with my biggest public speaking event to date: a valedictorian speech at Memorial Stadium
        </p>, 
        type: 'achievement'
    },
    {
        date: new Date(2009, 8, 1), 
        title:<p>I start playing violin</p>, 
        description:
        <p>
            As per the mandatory music program in Seattle Public Schools, I start taking weekly violin lessons
        </p>, 
        type: 'music'
    },
    {
        date: new Date(2004, 7, 1), 
        title: <p>I move to Seattle</p>, 
        description: 
        <p>
            My family and I move to Seattle following my mom's fellowship program at the University of Washington
        </p>, 
        type: 'personal'
    },
    {
        date: new Date(2000, 11, 19), 
        title: <p>I am born!</p>, 
        description: 
        <p>
            I am born in the Meir Medical Center in what is now known as <a target='_blank' href='https://en.wikipedia.org/wiki/Kafr_Saba'>Kfar Saba</a>
        </p>, 
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
    },
    {
        date: new Date(2021, 5, 1),
        title: 'Birding Course Final Project',
        blurb: '',
        link: new URL('https://drive.google.com/uc?export=download&id=1uDprS1WC17CR5lDCOGFHLvPnSuoDHhsz'),
        time: 18,
        type: 'essay'
    }
]

export const headerLinks: types.HeaderLink[] = [
    {
        label: <img src={linkedin}/>,
        link: new URL('https://www.linkedin.com/in/ido-avnon/')
    },
    {
        label: <img src={github}/>,
        link: new URL('https://github.com/idoavnon')
    },
    // {
    //     label: 'resume',
    //     link: new URL('google.com')
    // },
    {
        label: <img src={gmail}/>,
        link: new URL('mailto:avnonido@gmail.com')
    }
]

export const projects: types.Project[] = [
    {
        title: 'Facebook Friends Scraper',
        description: 'A internet scraper for getting friends info on Facebook. Uses the WXT Framework',
        link: new URL('https://github.com/idoavnon/facebook-friends-network'),
        demo: <img src={facebook_scraper} alt='loading...'/>,
        tags: ['React', 'Web Extension', 'WXT', 'Web Crawler']
    },
    {
        title: 'Social Network Visualizer',
        description: 'A D3 force-driven network visualizer. Companion to the Facebook Friends Scraper',
        link: new URL('https://github.com/idoavnon/social-media-visualizer'),
        demo: <img src={network_visualization} alt='loading...'/>,
        tags: ['Data Visualization', 'D3', 'Networks']
    }
]