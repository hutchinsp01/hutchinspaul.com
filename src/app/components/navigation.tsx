"use client"
import { useRef, useState, useEffect } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

const Navigation: React.FC = () => {
    const ref = useRef<HTMLElement>(null)
    const [isIntersecting, setIntersecting] = useState(true)

    useEffect(() => {
        if (!ref.current) return
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        )

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <header ref={ref}>
            <div className={classNames('fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b', { 'bg-zinc-900/0 border-transparent': isIntersecting, 'bg-zinc-900/500  border-zinc-800': !isIntersecting })}>
                <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
                    <div className="flex justify-between gap-8">
                        {/* <Link
                            href="/project"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            Projects
                        </Link> */}
                        <Link
                            href="/contact"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            Contact
                        </Link>
                    </div>
                    <div>
                        <Link
                            href="/"
                            className="duration-200 text-zinc-300 hover:text-zinc-100"
                        >
                            &larr;
                        </Link>
                    </div>
                </div>
            </div>
        </header >
    )
}

export { Navigation }
