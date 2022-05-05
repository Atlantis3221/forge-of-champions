import React, { useState, useEffect, ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

type Props = {
    children?: ReactNode,
}

export default function Layout({ children }: Props) {
    return (
        <>
            <div className={`flex flex-col justify-between min-h-screen`}>
                <Header />
                <div className={`overflow-x-hidden`}>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}