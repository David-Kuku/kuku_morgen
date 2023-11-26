import { ChangeEvent, useState, useRef, useEffect } from 'react'
import AuthTitle from '../../AuthTitle'
import colors from '../../../../utils/colors'
import Input from '../../../../components/ui/input'
import Button from '../../../../components/ui/button'
import { Link } from 'react-router-dom'
import { isUserInputValid } from '../../../../utils/validateUserInput'
import SuccessModal from '../../SuccessModal'

interface ICode {
    [key: string]: string;
}

const TwoFactor = () => {
    const [code, setCode] = useState<ICode>({} as ICode)
    const [openModal, setOpenModal] = useState(false)
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
            setFocusedIndex(0);
        }
    }, []);

    const handleInputChange = (index: number, value: string) => {
        setCode((prev) => ({
            ...prev,
            [`digit${index}`]: value,
        }));

        // Focus the next input on user input
        if (value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1]?.focus();
            setFocusedIndex(index + 1);

        }
    };

    return (
        <>
            <div style={{ border: '1px solid', borderColor: colors.divider }} className='rounded-[10px] p-6 w-[400px]'>
                <AuthTitle text='Create your Account' />
                <div className='px-4 mt-6'>
                    <div className='mb-4'>
                        <div className='font-bold text-[18px] text-left mb-1' style={{ color: colors.Type_Primary }}>Enter verification code</div>
                        <div className='text-xs text-left' style={{ color: colors.Type_Secondary }}>A 6 digit code has been sent to your email address
                            <span className='font-[600]'>{` example@gmail.com `}</span>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-[30px]'>
                        {[...Array(6)].map((_, index) => (
                            <Input
                                key={_}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    handleInputChange(index, e.target.value)
                                }
                                placeholder=''
                                type='text'
                                value={code[`digit${index}`] || ''}
                                className={`w-[42px] border border-[#7600BE] ${focusedIndex === index ? 'outline-[#9747FF]' : ''} text-center`}
                                ref={(input) => (inputRefs.current[index] = input)}
                            />
                        ))}
                    </div>

                    <div className='flex gap-1 items-center my-4'>
                        <div className='font-Inter text-xs' style={{ color: colors.Gray_800 }}>Resend after 59 seconds</div>
                    </div>

                    <Button
                        theme='primary'
                        text='Verify Email Address'
                        className='w-full rounded-md my-[40px]'
                        onClick={() => {
                            if (isUserInputValid(Object.values(code))) {
                                setOpenModal(true)
                            }
                        }} />

                    <div className='flex justify-center mt-5 text-[14px]'>
                        <div className='text-center'>Already have an account?
                            <Link to='/login'>
                                <span style={{ color: colors.primary }}>{` Login `}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <SuccessModal isOpen={openModal} />
        </>
    )
}

export default TwoFactor