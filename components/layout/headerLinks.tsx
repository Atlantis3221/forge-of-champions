import React, { ReactNode } from "react";
import { useRouter } from 'next/router'

type Props = {
    children: ReactNode,
    link: string,
    active: any,
    setIsShow?: any,
}

const HeaderLinks = ({ children, link, active, setIsShow, }: Props,) => {
    const router = useRouter()

    // console.log(link)
    return (
        <>
            <div className={`px-3 w-full lg:items-center`}>
                <div
                    className='flex items-center'
                >
                    <a
                        onClick={(e) => {
                            e.preventDefault()
                            router.push(`/#${link}`)
                            setIsShow((isShow: any) => !isShow)
                        }}
                        className={`${active ? 'text-white' : 'text-white'} my-9 leading-[105%] whitespace-nowrap cursor-pointer`}>{children}</a>
                </div>
            </div>
        </>
    )
}
export default HeaderLinks