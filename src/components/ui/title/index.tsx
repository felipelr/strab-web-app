export const Title = ({ className = '', children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
    const className_ = className ? `${className} ` : ''
    return (
        <h1 className={`${className_}text-4xl font-bold text-strabblue-100 mb-2`} {...props}>{children}</h1>
    )
}