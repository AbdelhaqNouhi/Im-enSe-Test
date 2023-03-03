import React from 'react'

const QuizPart = () => {
    return (
        <div className='px-44 pb-24'>
            <div className='bg-white flex flex-col p-6 gap-4 rounded text-sm w-full h-full'>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-normal text-base text-[#616161]'>Training quiz</h1>
                    <p className='text-[#B4B4B4] text-xs font-normal'>Here you can manage the questions by clicking on the “Add Question” button and choose from the available types of question. You can add up to 100 questions.</p>
                    <hr />
                </div>
                <div className='bg-[#EBEBEB] rounded p-6'>
                    <div className='w-[730px] flex flex-col gap-4'>
                        <div className='flex justify-between w-full items-center'>
                            <h1>Question 1</h1>
                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00076 8.47107L9.88473 12.4477C10.2744 12.8497 10.5279 12.8538 10.9246 12.4477L11.7039 11.6496C12.0857 11.2589 12.1115 11.0024 11.7039 10.585L7.59193 6.37552L11.7043 2.16605C12.0894 1.77041 12.0969 1.50341 11.7043 1.10102L10.925 0.303378C10.5207 -0.110632 10.271 -0.0915067 9.88511 0.303378L6.00076 4.27997L2.11679 0.303753C1.73091 -0.0911317 1.48115 -0.110257 1.07689 0.303753L0.297626 1.1014C-0.0953839 1.50378 -0.0882587 1.77079 0.297626 2.16642L4.4096 6.37552L0.297626 10.585C-0.110009 11.0024 -0.0882587 11.2589 0.297626 11.6496L1.07652 12.4477C1.4699 12.8538 1.72341 12.8497 2.11642 12.4477L6.00076 8.47107Z" fill="#C7C7C7" />
                            </svg>
                        </div>
                        <div className='px-2 py-4 w-full rounded border border-[#DCDCDC] bg-white'>
                            <p>Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.</p>
                        </div>
                        <input className='px-2 py-2 w-full rounded border border-[#DCDCDC] bg-white'  type="text" />
                        <input className='px-2 py-2 w-full rounded border border-[#DCDCDC] bg-white' type="text" />
                    </div>
                    <div className=''>

                    </div>
                </div>
                <div className='bg-[#E1EFFF] text-[#2C8EFF] font-bold text-center py-2 rounded'>
                    <button className=''>Add Question +</button>
                </div>
            </div>
        </div>
    )
}

export default QuizPart