import React from 'react'

const RunningLine = () => {

    return (
        <div className='absolute top-60 whitespace-nowrap w-full'>
            <span className='runningLine'>
                <span className='text-red text-40px leading-42px lg:text-[120px] lg:leading-[126px] uppercase'>Arena postAPOCALIPTIC</span>
                <img src='/img/lineElement.svg' alt='' className='w-[80px] h-[90px]' />
                <span className='text-red text-40px leading-42px lg:text-[120px] lg:leading-[126px] uppercase'>Arena postAPOCALIPTIC</span>
                <img src='/img/lineElement.svg' alt='' className='w-[80px] h-[90px]' />
                <span className='text-red text-40px leading-42px lg:text-[120px] lg:leading-[126px] uppercase'>Arena postAPOCALIPTIC</span>
            </span>
        </div>
    )
}
export default RunningLine;