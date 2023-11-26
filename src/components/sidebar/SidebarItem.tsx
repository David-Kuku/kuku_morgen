import colors from '../../utils/colors'

interface SidebarItemProps {
    icon: string
    title: string
    active?: boolean
    onClick: () => void
}
const SidebarItem = ({ icon, title, active = false, onClick }: SidebarItemProps) => {
    const { primary, dark } = colors
    return (
        <>
            <div
                onClick={onClick}
                className={`w-[70%] flex gap-2 items-center font-[500] text-[20px] ${active && `w-[80%] p-3 rounded-[10px] text-[white]`}`}
                style={{ backgroundColor: active ? primary : '', color: active ? 'white' : dark }}
            >
                <img
                    src={icon}
                    className={``}
                    alt='img'
                />
                <div className='text-[14px]'>{title}</div>
            </div>
        </>
    )
}

export default SidebarItem