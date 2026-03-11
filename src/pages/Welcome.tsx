export default function Welcome() {
    return (
        <div className='m-5'>
            <h1>Hi!</h1>   
            <br/>
            <p>Welcome to my portfolio! My name is Ido Avnon (he/him).
               This page exists to not only showcase my ability as a programmer, but also to document my life!</p>
            <br/>
            <p>I have recently moved to San Francisco from Seattle, where I am pursuing a career as a Software Engineer</p>
            <br/>
            <p>Here is a short list of the things I love!</p>
            <br/>
            <ul className='list-inside list-disc'>
                <li>Playing violin</li>
                <li>Birdwatching</li>
                <li>Cooking</li>
                <li>Baking</li>
                <li>Biking</li>
                <li>Entertaining</li>
            </ul>
            <br/>
            <p>
                This portfolio is written by me and can be found <a target='_blank' href='https://github.com/idoavnon/idoavnon.github.io'>here</a>.
                As a challenge to myself, the repository is created without the use of large language models – only my brain and internet searches allowed! 
                I was inspired to do this based on the <a target='_blank' href='https://arxiv.org/pdf/2601.20245'>growing literature </a> 
                showing that using LLMs for codegen can reduce learning and must be used with discipline and skill. 
                As a junior engineer, I still have a lot of work to build the knowledge to use codegen tools effectively!
            </p>
            <br/>
            <p>
                External libraries used for this portfolio: <a target='_blank' href='https://react.dev/'>React</a>
                , <a target='_blank' href="https://vite.dev/">Vite</a>, <a target='_blank' href="https://tailwindcss.com/">TailwindCSS</a>
                , <a target='_blank' href="https://ui.shadcn.com/">Shadcn</a>
            </p>
            <br/>
            <p>
                The icon for this website is used for free from Pedro Machado <a target='_blank' href='https://www.svgrepo.com/svg/417415/bird'>here</a>. 
                It is a <a target='_blank' href='https://www.allaboutbirds.org/guide/Pileated_Woodpecker/overview'>pileated woodpecker</a>, a  gorgeous bird that I grew up with in Seattle.
                The voraciousness of the pileated woodpecker to keep on pecking inspires me to push forward in the midst of hardship.
            </p>
        </div>
    )
}