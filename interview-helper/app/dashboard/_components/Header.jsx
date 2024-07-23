"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    const path = usePathname();

    useEffect(() => {
        console.log(path)
    }, [])

    return (
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
            <div className="flex items-center">
                <Image src='/Logo.svg' width={160} height={100} alt='logo' />
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginLeft: '10px' }}>InterviewAce</h1>
            </div>
            <UserButton />
        </div>
    )
}

export default Header
