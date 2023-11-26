import React from 'react'
import HeaderText from './HeaderText'
import BlogItems from './BlogItems'
import { background1, background2 } from './assets'

const Blog = () => {
    return (
        <div className='bg-[black] mt-[100px] pt-[100px] pl-[50px] lg:pl-[100px] h-[500px] relative'>
            <HeaderText />
            <div className='no-scrollbar mt-[-10px] lg:mt-[80px] flex gap-4 overflow-x-scroll'>
                <div className='w-[500px] lg:w-[650px]'>
                    <BlogItems
                        bgImage={background1}
                        date='12.10.2023'
                        title={`Why war is a sly means for super powers to sell their arsenal.`}
                        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`}
                    />
                </div>
                <div className='w-[650px]'>
                    <BlogItems
                        bgImage={background2}
                        date='01.01.2023'
                        title={`Why war is a sly means for super powers to sell their arsenal.`}
                        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`}
                    />
                </div>
                <div className='w-[650px]'>
                    <BlogItems
                        bgImage={background1}
                        date='12.10.2023'
                        title={`Why war is a sly means for super powers to sell their arsenal.`}
                        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`}
                    />
                </div>
                <div className='w-[650px]'>
                    <BlogItems
                        bgImage={background2}
                        date='01.01.2023'
                        title={`Why war is a sly means for super powers to sell their arsenal.`}
                        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`}
                    />
                </div>
                <div className='w-[650px]'>
                    <BlogItems
                        bgImage={background1}
                        date='12.10.2023'
                        title={`Why war is a sly means for super powers to sell their arsenal.`}
                        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,`}
                    />
                </div>
            </div >
        </div>
    )
}

export default Blog