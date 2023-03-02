import React from 'react'
import VCA from '../../assets//icons/VCA.png'

const FirstPart = () => {
    return (
        <div className='bg-gray-100 h-screen px-44 '>
            <div className='flex justify-between py-10 text-[#7C7C7C] items-center'>
                <p>Edit Training “Working At Height”</p>
                <div className='flex gap-8'>
                    <button className=''>Cancel</button>
                    <button className='bg-[#EB7421] px-6 py-2 rounded text-white'>Update & Save</button>
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='bg-white flex flex-col gap-2 px-4 py-2 justify-center rounded text-sm w-[532px] h-[311px]'>
                    <div className='flex gap-3'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between text-sm'>
                                <p className='text-[#616161]'>Category</p>
                                <button className='text-blue-500'>Add new +</button>
                            </div>
                            <div>
                                <div className='absolute mx-2 my-2.5'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4545 3.979V1.584C14.4545 1.0425 14.1175 0.571 13.637 0.4395L12.0275 0L8.994 7.2945L5.9605 0L4.351 0.4395C3.8705 0.571 3.5335 1.043 3.5335 1.584V3.9785C3.5335 5.81 2.1755 7.2945 0.5 7.2945V16.8125C0.5 17.4155 0.9755 17.905 1.5615 17.905H7.477C8.3145 17.905 8.994 17.1625 8.994 16.247C8.994 17.1625 9.673 17.905 10.511 17.905H16.4265C17.013 17.905 17.4885 17.416 17.4885 16.8125V7.2945C15.8125 7.2945 14.4545 5.81 14.4545 3.979Z" fill="#EB7421" />
                                    </svg>
                                </div>
                                <select className='px-8 py-2 w-[165px]  rounded border border-[#DCDCDC] bg-white' name="" id="">
                                    <option value="Safety">Safety</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between'>
                                <p className='text-[#616161]'>Topic</p>
                                <button className='text-blue-500'>Add new +</button>
                            </div>
                            <div>
                                <div className='absolute mx-2 my-1.5'>
                                    <img className='w-6' src={VCA} alt="" />
                                </div>
                                <select className='px-9 py-2 w-[196px] rounded border border-[#DCDCDC] bg-white' name="" id="">
                                    <option value="Safety">VCA</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between'>
                                <p className='text-[#616161]'>Valid For</p>
                            </div>
                            <div>
                                <select className='px-2 py-2 w-[103px] rounded border border-[#DCDCDC] bg-white' name="" id="">
                                    <option value="Safety">1 year</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between'>
                                <p className='text-[#616161]'>Training</p>
                            </div>
                            <div>
                                <div className='absolute mx-[16rem] my-1.5'>
                                    <img className='w-6' src={VCA} alt="" />
                                </div>
                                <div className='absolute mx-[18rem] my-3'>
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.625 1.125H3.5C3.56875 1.125 3.625 1.06875 3.625 1V1.125H8.375V1C8.375 1.06875 8.43125 1.125 8.5 1.125H8.375V2.25H9.5V1C9.5 0.448438 9.05156 0 8.5 0H3.5C2.94844 0 2.5 0.448438 2.5 1V2.25H3.625V1.125ZM11.5 2.25H0.5C0.223437 2.25 0 2.47344 0 2.75V3.25C0 3.31875 0.05625 3.375 0.125 3.375H1.06875L1.45469 11.5469C1.47969 12.0797 1.92031 12.5 2.45312 12.5H9.54688C10.0813 12.5 10.5203 12.0812 10.5453 11.5469L10.9312 3.375H11.875C11.9438 3.375 12 3.31875 12 3.25V2.75C12 2.47344 11.7766 2.25 11.5 2.25ZM9.42656 11.375H2.57344L2.19531 3.375H9.80469L9.42656 11.375Z" fill="#ED4C5C" />
                                    </svg>
                                </div>

                                <div className='px-2 py-2 w-[309px] rounded border border-[#DCDCDC] bg-white'>
                                    SafetyWorking at height
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between'>
                                <p className='text-[#616161]'>Valid For</p>
                            </div>
                            <div>
                                <select className='px-2 py-2 w-[166px] rounded border border-[#DCDCDC] bg-white' name="" id="">
                                    <option value="Safety">1 year</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between text-sm'>
                                    <p className='text-[#616161]'>Departments</p>
                                    <p className='text-[#B8B8B8]'>Optional</p>
                                </div>
                                <div>
                                    <select className='px-2 py-2 w-[166px] rounded border text-[#888888] border-[#DCDCDC] bg-white' name="" id="">
                                        <option value="Safety">Select departments</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-between text-sm'>
                                    <p className='text-[#616161]'>Functions</p>
                                    <p className='text-[#B8B8B8]'>Optional</p>
                                </div>
                                <div>
                                    <select className='px-2 py-2 w-[166px] rounded border border-[#DCDCDC] text-[#888888] bg-white' name="" id="">
                                        <option value="Select departments">Select departments</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between'>
                                <p className='text-[#616161]'>Description</p>
                            </div>
                            <div>
                                <textarea
                                    className='max-h-28 resize-none px-3 py-2 w-[303px] rounded border border-[#DCDCDC] bg-white'
                                    name="Description" placeholder='Type here..' id="" cols="10" rows="10">    
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white flex items-center justify-center rounded text-sm w-[529px] h-[311px]'>
                    <div className='flex justify-center w-[294px] h-[202px] border-2 border-dashed border-red-500'>
                        <div className='m-auto'>
                            <div className='flex justify-center'>
                                <svg width="50" height="36" viewBox="0 0 50 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.5882 14.7059C40.8824 13.8235 41.1765 12.9412 41.1765 11.7647C41.1765 5.29412 35.8824 0 29.4118 0C25 0 20.8824 2.64706 19.1176 6.47059C18.2353 6.17647 17.0588 5.88235 16.1765 5.88235C12.0588 5.88235 8.82353 9.11765 8.82353 13.2353C8.82353 13.8235 8.82353 14.4118 9.11765 14.7059C3.82353 15.5882 0 19.7059 0 25C0 30.5882 4.70588 35.2941 10.2941 35.2941H20.5882V26.4706H11.7647L25 13.2353L38.2353 26.4706H29.4118V35.2941H39.7059C45.2941 35.2941 50 30.5882 50 25C50 19.7059 45.8824 15.2941 40.5882 14.7059Z" fill="url(#paint0_linear_401_508)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_401_508" x1="25" y1="0" x2="41.1765" y2="45.5882" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#E7E7E7" />
                                            <stop offset="1" stop-color="#848484" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className='font-normal text-sm w-[200px] h-[34px] text-center text-[#B5B5B5] leading-5'>
                                <p>Drag and drop your image here Or browse files</p>
                                <input type="file" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white flex flex-col gap-6 px-4 py-4 justify-center rounded text-sm w-[300px]'>
                    <div className=''>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPart