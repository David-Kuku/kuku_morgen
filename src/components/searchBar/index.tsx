import { search } from './assets'

interface IProps {
    className: string
    placeholderText: string
    handleChange: (val: string) => void
    width?: string
    height?: string
    iconClass?: string
}
const SearchBar = ({ className, handleChange, placeholderText, iconClass }: IProps) => {
    return (
        <div className='flex relative'>
            <input
                className={`rounded-md w-[200px] h-[40px] bg-[white] text-sm placeholder:text-[#B5B7C0] outline-none p-2 pl-[35px] ${className}`}
                onChange={(e) => handleChange(e.target.value)}
                placeholder={placeholderText}
            />
            <img src={search} alt='' className={`absolute h-[20px] top-[8px] left-2 mt-[2px] ${iconClass}`} />

        </div>
    )
}

export default SearchBar