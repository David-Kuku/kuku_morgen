import Login from '../features/authentication/login'
import Navbar from '../components/navbar'

const LoginPage = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
                <Login />
            </div>
        </>
    )
}

export default LoginPage