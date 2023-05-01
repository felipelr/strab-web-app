export const Subtitle = ({ className = '', children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
    const className_ = className ? `${className} ` : ''
    return (
        <p className={`${className_}text-lg font-normal text-gray-600 mb-2`} {...props}>{children}</p>
    )
}