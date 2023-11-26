import SidebarItems from './SidebarItems'
import colors from '../../utils/colors'
import { logo_big } from './assets'

const Sidebar = () => {
    return (
        <div className={`w-full min-w-[250px] flex flex-col cursor-pointer gap-[20px] border-r-[2px] h-[100vh] drop-shadow-md`}
            style={{ borderColor: colors.divider }}>
            <div className='w-full flex items-center justify-center pt-[70px] pb-[10px]'>
                <img src={logo_big} alt='logo'/>
            </div>
            <div className='flex flex-1 flex-col justify-between mb-2'>
                <SidebarItems />
            </div>
        </div>
    )
}

export default Sidebar
