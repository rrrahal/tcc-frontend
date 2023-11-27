import React from 'react'
import { X, Check, RotateCw } from 'lucide-react';

import './title.css'

export const Response = ({ positive, loading} : {positive: boolean, loading : boolean}) => {
    let answer = <></>

    if (loading) {
        answer = <h2 className='text-blue-500 font flex'>Loading... {<RotateCw />}</h2>
        return (
            <div className='flex py-3 text-xl mt-2'>
                {answer}
            </div>
        )
    }
    if (positive) {
        answer = <h2 className='text-green-500 font flex'>Green Venture! {<Check />}</h2>
    } else {
        answer = <h2 className='text-red-500 font flex'>Not Green Venture!{<X />}</h2>
    }

    return (
        <div className='flex py-3 text-xl mt-2'>
            {answer}
        </div>
    )
}