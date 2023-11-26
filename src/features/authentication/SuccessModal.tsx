import React, { useEffect } from 'react'
import Modal from '../../components/modal'
import { useNavigate } from 'react-router-dom'
import colors from '../../utils/colors'
interface IProps {
    isOpen: boolean
}
const SuccessModal = ({ isOpen }: IProps) => {
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            isOpen && navigate('/login'); // Redirect to the login page after 10 seconds
        }, 10000); // 10000 milliseconds = 10 seconds

        return () => clearTimeout(timeout); // Clear the timeout if the component unmounts before the timeout
    }, [isOpen]);
    return (
        <Modal isOpen={isOpen}>
            <div className='text-[18px] font-[600] font-Inter' style={{ color: colors.Gray_900 }}>
                Verification Successful
            </div>
            <div style={{ color: colors.Gray_500 }} className='text-xs'>You will automatically be redirected to login page after 10 seconds</div>
        </Modal>
    )
}

export default SuccessModal