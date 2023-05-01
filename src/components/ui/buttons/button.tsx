interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    color?: string,
    hoverColor?: string,
    textColor?: string,
    className?: string
    icon?: React.ReactNode
}

export default function Button({
    onClick,
    color = 'bg-gray-50',
    hoverColor = 'bg-gray-200',
    textColor = 'text-gray-500',
    className,
    children,
    icon
}: ButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${color} hover:${hoverColor} ${textColor} ${className ? className : ''} font-bold py-2 px-4 rounded`}>
            <div className="flex items-center">
                <div className="flex-1">{children}</div>
                {icon}
            </div>
        </button>
    )
}