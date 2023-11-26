import { useState } from "react"
import { sideBarMenu } from "./utils/SidebarMenu"
import SidebarItem from "./SidebarItem"

const SidebarItems = () => {
    const [active, setActive] = useState(0)
    return (
        <div className="w-full flex flex-col gap-4 justify-center items-center">
            {
                sideBarMenu.map((item, index) => (
                    <SidebarItem
                        icon={item.icon}
                        title={item.title}
                        active={index == active}
                        key={item.title}
                        onClick={() => setActive(index)}
                    />
                ))
            }
        </div>
    )
}

export default SidebarItems