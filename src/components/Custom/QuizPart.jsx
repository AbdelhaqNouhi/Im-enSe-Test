import React, { useEffect, useState } from 'react'

function ToggleCheck({onChange, checked}) {

    return (
        <div className=''>
            <input
                class="w-4 h-4 bg-blue-500 rounded focus:ring-blue-500"
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
        </div>
    );
}

function Upload_L_Img() {

    const [takeImg, setTakeImg] = useState('');
    // console.log(takeImg);

    // function is called when a file is dropped
    const handleDrop = (e) => {
        e.preventDefault();
        const img = e.dataTransfer.files[0];
        setTakeImg(img);
    };

    // function is called when the user is dragging a file over the drop zone
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // unction is called when the user selects a file using the file input element
    const handleTakeImg = (e) => {
        const img = e.target.files[0];
        setTakeImg(img);
        console.log(takeImg);
    };


    return (
        <div className='flex justify-center w-[294px] h-[200px] border-2 border-dashed border-[#DCDCDC]'
            onDrop={handleDrop}
            onDragOver={handleDragOver}>
            <div className='m-auto'>
                <label className='flex justify-center' htmlFor="hidden-input">
                    {!takeImg ? (
                        <svg width="50" height="36" viewBox="0 0 50 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.5882 14.7059C40.8824 13.8235 41.1765 12.9412 41.1765 11.7647C41.1765 5.29412 35.8824 0 29.4118 0C25 0 20.8824 2.64706 19.1176 6.47059C18.2353 6.17647 17.0588 5.88235 16.1765 5.88235C12.0588 5.88235 8.82353 9.11765 8.82353 13.2353C8.82353 13.8235 8.82353 14.4118 9.11765 14.7059C3.82353 15.5882 0 19.7059 0 25C0 30.5882 4.70588 35.2941 10.2941 35.2941H20.5882V26.4706H11.7647L25 13.2353L38.2353 26.4706H29.4118V35.2941H39.7059C45.2941 35.2941 50 30.5882 50 25C50 19.7059 45.8824 15.2941 40.5882 14.7059Z" fill="url(#paint0_linear_401_508)" />
                            <defs>
                                <linearGradient id="paint0_linear_401_508" x1="25" y1="0" x2="41.1765" y2="45.5882" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E7E7E7" />
                                    <stop offset="1" stop-color="#848484" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    ) : (
                        <p className='font-normal text-sm w-[200px] h-[34px] text-center text-[#9d9d9d]'>
                            Selected file : {takeImg.name}({takeImg.type})
                        </p>
                    )}
                </label>
                {!takeImg ? (
                    <div className='font-normal text-sm w-[200px] h-[34px] text-center text-[#B5B5B5] leading-5'>
                        <p>Drag and drop your image here Or <label className='text-blue-500' htmlFor="hidden-input">Upload Image</label></p>
                        <input
                            type="file"
                            id="hidden-input"
                            onChange={handleTakeImg}
                            style={{ display: 'none' }}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

function Upload_S_Img() {

    const [takeFile, setTakeFile] = useState('');

    // function is called when a file is dropped
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setTakeFile(file);
    };

    // function is called when the user is dragging a file over the drop zone
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // unction is called when the user selects a file using the file input element
    const handleTakeFile = (e) => {
        const file = e.target.files[0];
        setTakeFile(file);
    };


    return (
        <div className='flex items-center'
            onDrop={handleDrop}
            onDragOver={handleDragOver}>
            <label htmlFor="hidden-file-input">
                <svg width="24" height="16" viewBox="0 0 50 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.5882 14.7059C40.8824 13.8235 41.1765 12.9412 41.1765 11.7647C41.1765 5.29412 35.8824 0 29.4118 0C25 0 20.8824 2.64706 19.1176 6.47059C18.2353 6.17647 17.0588 5.88235 16.1765 5.88235C12.0588 5.88235 8.82353 9.11765 8.82353 13.2353C8.82353 13.8235 8.82353 14.4118 9.11765 14.7059C3.82353 15.5882 0 19.7059 0 25C0 30.5882 4.70588 35.2941 10.2941 35.2941H20.5882V26.4706H11.7647L25 13.2353L38.2353 26.4706H29.4118V35.2941H39.7059C45.2941 35.2941 50 30.5882 50 25C50 19.7059 45.8824 15.2941 40.5882 14.7059Z" fill="url(#paint0_linear_401_508)" />
                    <defs>
                        <linearGradient id="paint0_linear_401_508" x1="25" y1="0" x2="41.1765" y2="45.5882" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E7E7E7" />
                            <stop offset="1" stop-color="#848484" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </label>
            <input
                type="file"
                id="hidden-file-input"
                onChange={handleTakeFile}
                style={{ display: 'none' }}
            />
        </div>
    );
}

function AddQuestion() {

    const [isChecked_1, setIsChecked_1] = useState(false);
    const [isChecked_2, setIsChecked_2] = useState(false);

    const handleCheckboxChange_1 = (event) => {
        if (isChecked_2 === true) {
            setIsChecked_2(false);
        }
        const check = event.target.checked;
        setIsChecked_1(check);
    };

    const handleCheckboxChange_2 = (event) => {
        if (isChecked_1 === true) {
            setIsChecked_1(false);
        }
        const check = event.target.checked;
        setIsChecked_2(check);
    };

    return (
        <div className='bg-[#F8F8F8] rounded p-6 flex gap-10'>
            <div className='w-[730px] flex flex-col gap-4'>
                <div className='flex justify-between w-full items-center'>
                    <p className='font-semibold'>Question 1</p>
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00076 8.47107L9.88473 12.4477C10.2744 12.8497 10.5279 12.8538 10.9246 12.4477L11.7039 11.6496C12.0857 11.2589 12.1115 11.0024 11.7039 10.585L7.59193 6.37552L11.7043 2.16605C12.0894 1.77041 12.0969 1.50341 11.7043 1.10102L10.925 0.303378C10.5207 -0.110632 10.271 -0.0915067 9.88511 0.303378L6.00076 4.27997L2.11679 0.303753C1.73091 -0.0911317 1.48115 -0.110257 1.07689 0.303753L0.297626 1.1014C-0.0953839 1.50378 -0.0882587 1.77079 0.297626 2.16642L4.4096 6.37552L0.297626 10.585C-0.110009 11.0024 -0.0882587 11.2589 0.297626 11.6496L1.07652 12.4477C1.4699 12.8538 1.72341 12.8497 2.11642 12.4477L6.00076 8.47107Z" fill="#C7C7C7" />
                    </svg>
                </div>
                <div className='px-2 py-4 w-full rounded border border-[#DCDCDC] bg-white'>
                    <p>Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.</p>
                </div>
                <div className='px-3 py-2 w-full flex justify-between items-center  rounded border border-[#DCDCDC] bg-white' type="text">
                    <p>True</p>
                    <div className='flex gap-4'>

                        <ToggleCheck onChange={handleCheckboxChange_1} checked={isChecked_1} />
                        <Upload_S_Img />
                    </div>
                </div>
                <div className='px-3 py-2 w-full flex justify-between items-center  rounded border border-[#DCDCDC] bg-white' type="text">
                    <p>False</p>
                    <div className='flex gap-4'>
                        <ToggleCheck onChange={handleCheckboxChange_2} checked={isChecked_2} />
                        <Upload_S_Img />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                    <p className='text-[#616161] text-sm'>Question Image</p>
                    <p className='text-[#B6B6B6] text-xs'>Optional</p>
                </div>
                <Upload_L_Img />
            </div>
        </div>
    );
}

const QuizPart = () => {

    const [newQuestion, setNewQuestion] = useState([]);

    const handleAddQuestion = () => {
        setNewQuestion([...newQuestion,
            <AddQuestion />
        ])
    }
    return (
        <div className='px-44'>
            <div className='bg-white flex flex-col p-6 gap-4 rounded text-sm w-full h-full'>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-normal text-base text-[#616161]'>Training quiz</h1>
                    <p className='text-[#B4B4B4] text-xs font-normal'>Here you can manage the questions by clicking on the “Add Question” button and choose from the available types of question. You can add up to 100 questions.</p>
                    <hr />
                </div>

                <AddQuestion />
                
                {newQuestion.map((question, index) => (
                    <div key={index} className=''>{question}</div>
                ))}
                <div className='bg-[#E1EFFF] text-[#2C8EFF] font-bold text-center py-2 rounded'>
                    <button 
                        onClick={handleAddQuestion}>
                        Add Question +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuizPart