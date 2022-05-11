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
            <div className={`px-6 w-full flex flex-col lg:items-center`}>
                <div
                    className='flex items-center'
                >
                    <a
                        onClick={(e) => {
                            e.preventDefault()
                            router.push(`/#${link}`)
                            setIsShow((isShow: any) => !isShow)
                        }}
                        className={`${active ? 'text-white' : 'text-neutral-500'} my-4 text-base leading-[105%] whitespace-pre-wrap font-gothic cursor-pointer`}>{children}</a>
                </div>
            </div>
        </>
    )
}
export default HeaderLinks