import AuthTitle from '../../AuthTitle'
import colors from '../../../../utils/colors'
import Input from '../../../../components/ui/input'
import { useState } from 'react'
import Button from '../../../../components/ui/button'
import { Link } from 'react-router-dom'
import { isUserInputValid } from '../../../../utils/validateUserInput'
import { displayErrorMsg } from '../../../../utils/displayErrorMsg'
import {useNavigate} from 'react-router-dom'
const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const navigate = useNavigate()
    return (
        <div style={{ border: '1px solid', borderColor: colors.divider }} className='rounded-[10px] p-6 w-[400px]'>
            <AuthTitle text='Sign into your Account' />
            <div className='flex flex-col gap-3 mt-[30px]'>
                <div>
                    <Input
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder=''
                        type='text'
                        value={username}
                        label='Username'
                        className='w-full'
                    />
                    {displayErrorMsg('Username cannot be empty', username, submitting)}
                </div>
                <div>
                    <Input
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder=''
                        type='password'
                        value={password}
                        label='Password'
                        className='w-full'

                    />
                    {displayErrorMsg('Password cannot be empty', password, submitting)}

                </div>
            </div>

            <div className='flex gap-1 items-center my-4'>
                <Input onChange={() => { }} type='checkbox' />
                <div className='font-Inter' style={{ color: colors.Gray_800 }}>Remember me</div>
            </div>

            <Button theme='primary' text='Sign in' className='w-full rounded-md' onClick={() => {
                setSubmitting(true)
                if (isUserInputValid([password, username])) {
                    navigate('/dashboard')
                }
            }} />

            <div className='flex justify-between mt-5 text-[14px]'>
                <Link to='/signup'>
                    <div style={{ color: colors.primary }}>Create an Account</div>
                </Link>
                <div style={{ color: colors.Gray_800 }}>Forgot Password</div>
            </div>
        </div>
    )
}

export default LoginForm