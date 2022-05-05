import { ReactNode } from "react"

type Props = {
    children?: ReactNode,
    className?: string,
    id?: string,
}

export default function GridContainer({ children, className, id, }: Props,) {

    return (
        <>
            <div id={id} className={`grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 w-full mx-auto max-w-8xl px-4 md:px-8 lg:px-16  ${className}`}>
                {children}
            </div>
        </>
    )
}