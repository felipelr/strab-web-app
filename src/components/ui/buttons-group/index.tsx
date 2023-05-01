interface ButtonItemProps {
    label: string,
    onClick: () => void,
    className?: string,
    active?: boolean
}

interface ButtonsGroupProps {
    className?: string,
    items: ButtonItemProps[],
    buttonActive?: number
}

function ButtonItem({ className, label, onClick, active }: ButtonItemProps) {
    const buttonStyle = active ? "text-gray-50 bg-strabblue-100 border-strabblue-200 hover:bg-strabblue-200 hover:text-white" : "text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700"
    return (
        <button onClick={onClick} type="button" className={`${className} px-4 py-2 text-sm font-medium border ${buttonStyle}`}>
            {label}
        </button>
    )
}

export default function ButtonsGroup({ items, className, buttonActive = 0 }: ButtonsGroupProps) {

    return (
        <div className={`inline-flex rounded-md shadow-sm ${className ? className : ''}`} role="group">
            {items?.map((item, index) => {
                const className = index === 0 ? 'rounded-l-md' : index === (items.length - 1) ? 'rounded-r-md' : ''
                return <ButtonItem
                    {...item}
                    className={className}
                    active={buttonActive === index} />
            })}
        </div>
    )
}