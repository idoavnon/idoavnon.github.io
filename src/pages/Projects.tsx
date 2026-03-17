import Project from '@/components/Project'
import * as constants from '@/constants'
import * as types from '@/types'

export default function Projects() {    
    import.meta.glob('@/assets/*', { eager: true, import: 'default' }) as Record<string, string>

    const projects = constants.projects.map((project: types.Project, index) => {return (
        <Project key={index}
            {...project}       
        />
    )})
    return (
        <div className='grid grid-cols-2 gap-5'>
            {projects}
        </div>
    )
}