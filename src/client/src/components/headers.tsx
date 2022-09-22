import React, {useEffect, useState} from 'react'
import './headers.css'

export function WaitingHeader() {
    return (
        <div className='headRowW'>
            <div className='headColumnW'>Customer's Name</div>
            <div className='headColumnW'>Party Size</div>
        </div>
    )
}
export function TableHeader() {
    return (
        <div className='headRowT'>
            <div className='headColumnT'>Table Number</div>
            <div className='headColumnT'>Capacity</div>
            <div className='headColumnT'>Occupied?</div>
        </div>
    )
}