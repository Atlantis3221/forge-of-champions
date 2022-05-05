import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import HeaderLinks from './headerLinks'



export default function Header() {

    const [scrollTop, setScrollTop] = useState(0)
    const [headerHeight, setHeaderHeight] = useState(0)
    const [currentPoint, setCurrentPoint] = useState("")
    const [isShow, setIsShow] = useState(false)

    const links = [
        {
            name: '1',
            link: '',
        },
        {
            name: '2',
            link: '',
        },
        {
            name: '3',
            link: '',
        },
        {
            name: '4',
            link: 'numbers'
        },
    ]

    return (
        <>
            <div id='header' className={`flex justify-between sticky top-0 left-0 w-full z-50`}>
                <img className={``} src={``} alt={`logo`} />
                <div className={`flex`}>
                    {links.map((item, index) => {
                        return (
                            <HeaderLinks
                                key={index}
                                // {...{ setCurrentPoint, scrollTo }}
                                active={item.link === currentPoint}
                                {...{ setIsShow }}
                                link={item.link}
                            >
                                {item.name}
                            </HeaderLinks>
                        )
                    })}
                </div>
            </div>
        </>
    )
}