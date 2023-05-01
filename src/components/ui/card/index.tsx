import React from "react";

interface CardProps extends React.PropsWithChildren {
    width?: string
    className?: string
    onClick?: () => void
}

export default function Card({ children, width, className = 'bg-white', onClick }: CardProps) {
    return (
        <div onClick={onClick} className={`${className} shadow-lg rounded p-4 ${width ? width : ''}`}>
            {children}
        </div>
    )
}