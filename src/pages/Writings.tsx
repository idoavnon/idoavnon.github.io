import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

import Writing from '@/components/Writing'

import * as constants from '@/constants'
import * as types from '@/types'
import { useState } from 'react'

export default function Writings() {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredWritings = searchTerm.length ? constants.writings.filter((w) => w.title.includes(searchTerm)) : constants.writings

    const writings = filteredWritings.map((writing: types.Writing, index: number) => {return (
        <Writing key={index}
            {...writing}        
        />
    )})

    return (
        <div>
            <div className='p-3'>
                <Field>
                    <FieldLabel htmlFor='writing-search'>
                        Search for writing                    
                    </FieldLabel>
                    <Input 
                        id='writing-search'
                        placeholder='Title'
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Field>
            </div>            
            <div className='grid grid-cols-3 gap-4'>
                {writings.length ? writings : <p>No writings with search term</p>}
            </div>            
        </div>
    )
}