import AuthTitle from '../../AuthTitle'
import colors from '../../../../utils/colors'
import { useState } from 'react'
import Input from '../../../../components/ui/input'
import Button from '../../../../components/ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { checkPasswords, displayErrorMsg } from '../../../../utils/displayErrorMsg'
import { isUserInputValid, validateEmail } from '../../../../utils/validateUserInput'

const SignupForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [submitting, setSubmitting] = useState(false)

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/verify/email');
    };

    return (
        <div style={{ border: '1px solid', borderColor: colors.divider }} className='rounded-[10px] w-[400px] p-6'>
            <AuthTitle text='Create an Account' />

            <div className='flex flex-col gap-3'>
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
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=''
                        type='email'
                        value={email}
                        label='E-mail'
                        className='w-full'

                    />
                    {displayErrorMsg('Email cannot be empty', email, submitting)}
                    {email && !validateEmail(email) && <div className='text-[red] text-left text-[11px]'>Enter a valid email</div>}
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

                <div>
                    <Input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder=''
                        type='password'
                        value={confirmPassword}
                        label='Confirm Password'
                        className='w-full'

                    />
                    {displayErrorMsg('Password cannot be empty', confirmPassword, submitting)}
                    {checkPasswords(password, confirmPassword, 'Passwords do not match')}
                </div>

                <div className='flex gap-1 items-start text-left my-4'>
                    <Input onChange={() => { }} type='checkbox' />
                    <div className='font-Inter' style={{ color: colors.Gray_800 }}>By creating an account, you agree to the <br />
                        <span style={{ color: colors.primary }}>terms and condition</span></div>
                </div>

                <Button
                    theme='primary'
                    text='Sign in'
                    className='w-full rounded-md'
                    onClick={() => {
                        setSubmitting(true)
                        if (isUserInputValid([password, username, confirmPassword, email]) &&
                            password === confirmPassword &&
                            validateEmail(email)
                        ) {
                            handleClick()
                        }
                    }}
                // disabled={!(isUserInputValid([password, username, confirmPassword, email]) && password === confirmPassword)}
                />

                <div className='flex justify-center mt-5 text-[14px]'>
                    <div className='text-center'>Already have an account?
                        <Link to='/login'>
                            <span style={{ color: colors.primary }}>{` Login `}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm