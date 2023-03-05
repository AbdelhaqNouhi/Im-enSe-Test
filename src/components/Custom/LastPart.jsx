import React, { useEffect, useState } from 'react'

function Counter({text}) {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className='flex justify-between items-center'>
            <span onClick={handleDecrement} className='rounded bg-[#F1F1F1] px-1.5 py-1'>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="24px" height="24px" fill-rule="nonzero"><g fill="#c8c8c8" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(4,4)"><path d="M50,34h-36c-1.104,0 -2,-0.896 -2,-2c0,-1.104 0.896,-2 2,-2h36c1.104,0 2,0.896 2,2c0,1.104 -0.896,2 -2,2z"></path></g></g></svg>
            </span>
            <span className='text-sm border-2 border-[#2C8EFF] text-[#2C8EFF] font-semibold px-8 py-1 rounded'>{count}{text}</span>
            <span onClick={handleIncrement} className='rounded bg-[#F1F1F1] px-1.5 py-1'>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="24px" height="24px" fill-rule="nonzero"><g fill="#c8c8c8" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M20,11h-7v-7c0,-0.552 -0.448,-1 -1,-1c-0.552,0 -1,0.448 -1,1v7h-7c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1h7v7c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1v-7h7c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1z"></path></g></g></svg>
            </span>
        </div>
    );
}

function ToggleCheck({ onChange, checked }) {

    const sliderStyles = {
        position: "absolute",
        cursor: "pointer",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#ccc",
        transition: ".4s",
        borderRadius: '34px',
    };

    const sliderBeforeStyles = {
        position: "absolute",
        content: "",
        height: "26px",
        width: "26px",
        top: "-3px",
        bottom: "6px",
        backgroundColor: "#47CA5B",
        transition: ".4s",
        borderRadius: "50%",
    };

    const checkedSliderStyles = {
        backgroundColor: "#DAFFDF",
    };

    const checkedSliderBeforeStyles = {
        transform: "translateX(20px)",
    };

    return (
        <div className='flex justify-center'>
            <label className="switch relative inline-block w-11 switch">
                <input
                    className="opacity-0 "
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                />
                <span style={Object.assign({}, sliderStyles, checked && checkedSliderStyles)}>
                    <span style={Object.assign({}, sliderBeforeStyles, checked && checkedSliderBeforeStyles)} ></span>
                </span>
            </label>
        </div>
    );
}

function DropDown() {

    const [open, setOpen] = useState(false);

    function handleMouseEnter() {
        setOpen(true);
    }

    function handleMouseLeave() {
        setTimeout(() => {
            setOpen(false);
        }, 200);
    }

    return (
        <div className='absolute '>
            <button
                className=''
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                // onClick={() => setOpen((event) => !event)}
            >
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_401_266)">
                        <path d="M7.86764 0.791162C3.83079 0.791162 0.546777 4.07517 0.546777 8.11203C0.546777 12.1489 3.83079 15.4329 7.86764 15.4329C11.9045 15.4329 15.1885 12.1489 15.1885 8.11203C15.1885 4.07517 11.9045 0.791162 7.86764 0.791162ZM7.86764 13.6987C4.78742 13.6987 2.28095 11.1923 2.28095 8.11203C2.28095 5.0318 4.78742 2.52534 7.86764 2.52534C10.9479 2.52534 13.4543 5.0318 13.4543 8.11203C13.4543 11.1923 10.9479 13.6987 7.86764 13.6987Z" fill="#D6D6D6" stroke="#D6D6D6" stroke-width="0.3" />
                        <path d="M7.15063 7.2952H7.05063V7.3952V11.6977V11.7977H7.15063H8.58481H8.68481V11.6977V7.3952V7.2952H8.58481H7.15063ZM7.15063 4.42686H7.05063V4.52686V5.96103V6.06103H7.15063H8.58481H8.68481V5.96103V4.52686V4.42686H8.58481H7.15063Z" fill="#D6D6D6" stroke="#D6D6D6" stroke-width="0.2" />
                    </g>
                    <defs>
                        <clipPath id="clip0_401_266">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
            {open && (
                <div className='bg-white border w-[145px] h-[78px] rounded p-1'>
                    <p className='text-xs break-words'>When the countdown is
                        finished, the system will
                        automatically move to the
                        next question.
                    </p>
                </div>
            )}
        </div>
    );
}

const LastPart = () => {

    const [isChecked, setIsChecked] = useState(false);
    console.log(isChecked);

    const handleCheckboxChange = (event) => {
        if (isChecked === true) {
            setIsChecked(false);
        }
        const check = event.target.checked;
        setIsChecked(check);
    };

    return (
        <div className='px-44 py-8 w-full'>
            <div className='flex gap-4 rounded text-sm w-full'>
                <div className='bg-white flex flex-col gap-6 rounded p-2 w-[186px] h-[166px]'>
                    <div className='ml-[9.4rem]'>
                        <DropDown />
                    </div>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00431319 10.067C0.00450072 9.23889 0.57891 8.22228 1.28965 7.79471L13.7149 0.32007C14.4247 -0.10694 15.5743 -0.10694 16.2854 0.32157L28.715 7.81046C29.425 8.23803 30.0002 9.25502 30 10.0867L29.9947 25.0148C29.9946 25.8442 29.4192 26.8648 28.7105 27.2941L16.2584 34.8338C15.5494 35.2632 14.4013 35.263 13.6911 34.8319L1.28272 27.2959C0.573847 26.8655 -0.00037488 25.8457 1.8363e-07 25.0172L0.00431319 10.0672V10.067ZM2.61775 8.85295L14.9637 15.7464L26.7343 8.94315L14.9438 2.01986L2.61757 8.85295H2.61775ZM1.82149 11.084C1.82149 11.3893 1.62177 24.56 1.62177 24.56C1.6154 24.9737 1.89688 25.4821 2.25319 25.6972L13.8074 32.67L13.9137 18.1526C13.9137 18.1526 1.82168 10.7785 1.82168 11.084H1.82149ZM16.094 32.6385L27.5169 25.3885C27.9542 25.111 28.3088 24.4668 28.3088 23.9485V11.0099L16.094 18.0448V32.6385Z" fill="#2A5F9E" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.60487 18.3539C4.7081 18.8719 3.51915 18.4917 2.94942 17.5051C2.37989 16.5185 2.64525 15.2988 3.54203 14.7811C4.43899 14.2631 5.62794 14.6432 6.19747 15.6298C6.76719 16.6164 6.50184 17.8361 5.60487 18.3539ZM11.6059 22.2921C10.7091 22.81 9.52016 22.4299 8.95044 21.4433C8.3809 20.4567 8.64626 19.237 9.54304 18.7192C10.44 18.2013 11.629 18.5814 12.1985 19.568C12.7682 20.5546 12.5028 21.7743 11.6059 22.2921ZM5.60487 25.2926C4.7081 25.8105 3.51915 25.4304 2.94942 24.4438C2.37989 23.4572 2.64525 22.2375 3.54203 21.7197C4.43899 21.2018 5.62794 21.5819 6.19747 22.5685C6.76719 23.5551 6.50184 24.7748 5.60487 25.2926ZM11.6059 29.2307C10.7091 29.7487 9.52016 29.3686 8.95044 28.382C8.3809 27.3954 8.64626 26.1757 9.54304 25.6579C10.44 25.1399 11.629 25.5201 12.1985 26.5067C12.7682 27.4933 12.5028 28.713 11.6059 29.2307ZM26.278 14.5935C25.381 14.0756 24.1923 14.4557 23.6225 15.4423C23.053 16.4289 23.3182 17.6486 24.2151 18.1664C25.1121 18.6843 26.3011 18.3042 26.8706 17.3176C27.4403 16.331 27.1749 15.1113 26.278 14.5935ZM23.2328 20.0319C22.3361 19.514 21.1471 19.8941 20.5774 20.8807C20.0079 21.8673 20.2732 23.087 21.17 23.6048C22.067 24.1228 23.2559 23.7426 23.8254 22.756C24.3952 21.7694 24.1298 20.5497 23.2328 20.0319ZM20.0448 25.2828C19.148 24.7649 17.9591 25.145 17.3894 26.1316C16.8198 27.1182 17.0852 28.3379 17.982 28.8557C18.8789 29.3736 20.0679 28.9935 20.6374 28.0069C21.2071 27.0203 20.9418 25.8006 20.0448 25.2828ZM15.1202 6.4856C13.9292 6.4856 12.9636 7.40919 12.9636 8.54844C12.9636 9.6877 13.9292 10.6113 15.1202 10.6113C16.3112 10.6113 17.2768 9.6877 17.2768 8.54844C17.2768 7.40919 16.3112 6.4856 15.1202 6.4856Z" fill="#2A5F9E" />
                        </svg>
                        <h1>Random questions</h1>
                    </div>
                    <Counter/>
                </div>
                <div className='bg-white flex flex-col gap-4 rounded p-2 w-[186px] h-[166px]    '>
                    <div className='ml-auto'>
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_401_266)">
                                <path d="M7.86764 0.791162C3.83079 0.791162 0.546777 4.07517 0.546777 8.11203C0.546777 12.1489 3.83079 15.4329 7.86764 15.4329C11.9045 15.4329 15.1885 12.1489 15.1885 8.11203C15.1885 4.07517 11.9045 0.791162 7.86764 0.791162ZM7.86764 13.6987C4.78742 13.6987 2.28095 11.1923 2.28095 8.11203C2.28095 5.0318 4.78742 2.52534 7.86764 2.52534C10.9479 2.52534 13.4543 5.0318 13.4543 8.11203C13.4543 11.1923 10.9479 13.6987 7.86764 13.6987Z" fill="#D6D6D6" stroke="#D6D6D6" stroke-width="0.3" />
                                <path d="M7.15063 7.2952H7.05063V7.3952V11.6977V11.7977H7.15063H8.58481H8.68481V11.6977V7.3952V7.2952H8.58481H7.15063ZM7.15063 4.42686H7.05063V4.52686V5.96103V6.06103H7.15063H8.58481H8.68481V5.96103V4.52686V4.42686H8.58481H7.15063Z" fill="#D6D6D6" stroke="#D6D6D6" stroke-width="0.2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_401_266">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0013 0H10.0006V3.33354H20.0013V0ZM13.3342 21.668H16.6677V11.6674H13.3342V21.668ZM26.7183 10.6507L29.0852 8.28385C28.3685 7.4338 27.5851 6.63375 26.735 5.93371L24.3682 8.30052C21.7136 6.16426 18.4084 4.9998 15.0009 5.00031C6.71709 5.00031 0 11.7174 0 20.0013C0 28.2851 6.70042 35.0022 15.0009 35.0022C17.825 35.0037 20.592 34.2075 22.9833 32.7053C25.3747 31.2031 27.293 29.056 28.5175 26.5112C29.742 23.9665 30.2228 21.1276 29.9045 18.3216C29.5862 15.5155 28.4817 12.8565 26.7183 10.6507ZM15.0009 31.6687C8.55054 31.6687 3.33354 26.4517 3.33354 20.0013C3.33354 13.5509 8.55054 8.33386 15.0009 8.33386C21.4513 8.33386 26.6683 13.5509 26.6683 20.0013C26.6683 26.4517 21.4513 31.6687 15.0009 31.6687Z" fill="#FF964E" />
                        </svg>
                        <h1>Time per question</h1>
                    </div>
                    <Counter text={'s'}/>
                </div>
                <div className='bg-white flex flex-col gap-4 rounded p-2 w-[186px] h-[166px]'>
                    <div className='ml-auto'>
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_401_266)">
                                <path d="M7.86764 0.791162C3.83079 0.791162 0.546777 4.07517 0.546777 8.11203C0.546777 12.1489 3.83079 15.4329 7.86764 15.4329C11.9045 15.4329 15.1885 12.1489 15.1885 8.11203C15.1885 4.07517 11.9045 0.791162 7.86764 0.791162ZM7.86764 13.6987C4.78742 13.6987 2.28095 11.1923 2.28095 8.11203C2.28095 5.0318 4.78742 2.52534 7.86764 2.52534C10.9479 2.52534 13.4543 5.0318 13.4543 8.11203C13.4543 11.1923 10.9479 13.6987 7.86764 13.6987Z" fill="#D6D6D6" stroke="#D6D6D6" stroke-width="0.3" />
                                <path d="M7.15063 7.2952H7.05063V7.3952V11.6977V11.7977H7.15063H8.58481H8.68481V11.6977V7.3952V7.2952H8.58481H7.15063ZM7.15063 4.42686H7.05063V4.52686V5.96103V6.06103H7.15063H8.58481H8.68481V5.96103V4.52686V4.42686H8.58481H7.15063Z" fill="#D6D6D6" stroke="#D6D6D6" stroke-width="0.2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_401_266">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34ZM13.665 24.7082L7.28571 18.4571L9.01 16.7329L13.6729 21.3957L23.8729 11.1714L25.5971 12.8957L13.665 24.7082Z" fill="#47CA5B" />
                        </svg>
                        <h1>Passing score</h1>
                    </div>
                    <Counter text={'%'} />
                </div>
                <div className=' bg-white flex flex-col gap-5 rounded p-2 w-[186px] h-[166px]'>
                    <div className='ml-auto'>
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_401_266)">
                                <path d="M7.86764 0.791162C3.83079 0.791162 0.546777 4.07517 0.546777 8.11203C0.546777 12.1489 3.83079 15.4329 7.86764 15.4329C11.9045 15.4329 15.1885 12.1489 15.1885 8.11203C15.1885 4.07517 11.9045 0.791162 7.86764 0.791162ZM7.86764 13.6987C4.78742 13.6987 2.28095 11.1923 2.28095 8.11203C2.28095 5.0318 4.78742 2.52534 7.86764 2.52534C10.9479 2.52534 13.4543 5.0318 13.4543 8.11203C13.4543 11.1923 10.9479 13.6987 7.86764 13.6987Z" fill="#D6D6D6" stroke="#D6D6D6" stroke-width="0.3" />
                                <path d="M7.15063 7.2952H7.05063V7.3952V11.6977V11.7977H7.15063H8.58481H8.68481V11.6977V7.3952V7.2952H8.58481H7.15063ZM7.15063 4.42686H7.05063V4.52686V5.96103V6.06103H7.15063H8.58481H8.68481V5.96103V4.52686V4.42686H8.58481H7.15063Z" fill="#D6D6D6" stroke="#D6D6D6" stroke-width="0.2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_401_266">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_401_313)">
                                <path d="M24.7187 0H3.28125C2.41129 0.000926472 1.57723 0.346926 0.962079 0.962079C0.346926 1.57723 0.000926472 2.41129 0 3.28125V24.7187C0 26.5282 1.47175 28 3.28125 28H12.25V31.5H5.25V35H22.75V31.5H15.75V28H24.7187C25.5887 27.9991 26.4228 27.6531 27.0379 27.0379C27.6531 26.4228 27.9991 25.5887 28 24.7187V3.28125C27.9991 2.41129 27.6531 1.57723 27.0379 0.962079C26.4228 0.346926 25.5887 0.000926472 24.7187 0ZM24.5 24.5H3.5V3.5H24.5V24.5Z" fill="#FF3838" />
                                <path d="M14 21C17.8605 21 21 17.8605 21 14C21 10.1395 17.8605 7 14 7C10.1395 7 7 10.1395 7 14C7 17.8605 10.1395 21 14 21ZM14 10.5C15.9302 10.5 17.5 12.0697 17.5 14C17.5 15.9302 15.9302 17.5 14 17.5C12.0697 17.5 10.5 15.9302 10.5 14C10.5 12.0697 12.0697 10.5 14 10.5Z" fill="#FF3838" />
                            </g>
                            <defs>
                                <clipPath id="clip0_401_313">
                                    <rect width="28" height="35" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h1>Webcam validation</h1>
                    </div>
                    {/* <Counter text={'%'} /> */}
                    <ToggleCheck onChange={handleCheckboxChange} checked={isChecked} />
                </div>
                <div className='bg-white flex flex-col gap-4 rounded p-2 w-[186px] h-[166px]'>
                    <div className='ml-auto'>
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_401_266)">
                                <path d="M7.86764 0.791162C3.83079 0.791162 0.546777 4.07517 0.546777 8.11203C0.546777 12.1489 3.83079 15.4329 7.86764 15.4329C11.9045 15.4329 15.1885 12.1489 15.1885 8.11203C15.1885 4.07517 11.9045 0.791162 7.86764 0.791162ZM7.86764 13.6987C4.78742 13.6987 2.28095 11.1923 2.28095 8.11203C2.28095 5.0318 4.78742 2.52534 7.86764 2.52534C10.9479 2.52534 13.4543 5.0318 13.4543 8.11203C13.4543 11.1923 10.9479 13.6987 7.86764 13.6987Z" fill="#D6D6D6" stroke="#D6D6D6" stroke-width="0.3" />
                                <path d="M7.15063 7.2952H7.05063V7.3952V11.6977V11.7977H7.15063H8.58481H8.68481V11.6977V7.3952V7.2952H8.58481H7.15063ZM7.15063 4.42686H7.05063V4.52686V5.96103V6.06103H7.15063H8.58481H8.68481V5.96103V4.52686V4.42686H8.58481H7.15063Z" fill="#D6D6D6" stroke="#D6D6D6" stroke-width="0.2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_401_266">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17C0.000116228 19.2325 0.439949 21.4431 1.29439 23.5056C2.14882 25.568 3.40113 27.442 4.97981 29.0206C6.55849 30.5991 8.43262 31.8512 10.4952 32.7054C12.5578 33.5596 14.7684 33.9992 17.0009 33.9991C19.2334 33.999 21.4439 33.5592 23.5064 32.7047C25.5689 31.8503 27.4429 30.598 29.0214 29.0193C30.6 27.4406 31.8521 25.5665 32.7063 23.5039C33.5605 21.4413 34.0001 19.2307 34 16.9982C34 7.61104 26.3872 0 17 0ZM17 30.4566C15.2326 30.4566 13.4826 30.1085 11.8497 29.4321C10.2169 28.7558 8.73324 27.7644 7.48352 26.5147C6.2338 25.265 5.24247 23.7814 4.56612 22.1485C3.88978 20.5157 3.54167 18.7656 3.54167 16.9982C3.54167 15.2309 3.88978 13.4808 4.56612 11.8479C5.24247 10.2151 6.2338 8.73147 7.48352 7.48175C8.73324 6.23203 10.2169 5.24069 11.8497 4.56435C13.4826 3.88801 15.2326 3.5399 17 3.5399V17L29.0275 10.9862C29.9678 12.8515 30.4578 14.9112 30.4583 17C30.4579 20.5691 29.0397 23.9918 26.5159 26.5153C23.992 29.0389 20.5691 30.4566 17 30.4566Z" fill="#8C2CAE" />
                        </svg>
                        <h1>Time Expected</h1>
                    </div>
                    <Counter text={'m'} />
                </div>
                <div className='bg-white flex flex-col gap-4 rounded p-2 w-[186px] h-[166px]'>
                    <div className='ml-auto'>
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_401_266)">
                                <path d="M7.86764 0.791162C3.83079 0.791162 0.546777 4.07517 0.546777 8.11203C0.546777 12.1489 3.83079 15.4329 7.86764 15.4329C11.9045 15.4329 15.1885 12.1489 15.1885 8.11203C15.1885 4.07517 11.9045 0.791162 7.86764 0.791162ZM7.86764 13.6987C4.78742 13.6987 2.28095 11.1923 2.28095 8.11203C2.28095 5.0318 4.78742 2.52534 7.86764 2.52534C10.9479 2.52534 13.4543 5.0318 13.4543 8.11203C13.4543 11.1923 10.9479 13.6987 7.86764 13.6987Z" fill="#D6D6D6" stroke="#D6D6D6" stroke-width="0.3" />
                                <path d="M7.15063 7.2952H7.05063V7.3952V11.6977V11.7977H7.15063H8.58481H8.68481V11.6977V7.3952V7.2952H8.58481H7.15063ZM7.15063 4.42686H7.05063V4.52686V5.96103V6.06103H7.15063H8.58481H8.68481V5.96103V4.52686V4.42686H8.58481H7.15063Z" fill="#D6D6D6" stroke="#D6D6D6" stroke-width="0.2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_401_266">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#E9E9E9" />
                            <path d="M18.2862 9.85H18.2862C16.2017 9.85 14.2017 10.655 12.7265 12.0891C11.2876 13.4881 10.4628 15.3741 10.423 17.35H8H7.63052L7.89544 17.6076L11.3242 20.9409L11.4287 21.0425L11.5333 20.9409L14.962 17.6076L15.2269 17.35H14.8574H12.4379C12.5195 14.2811 15.0995 11.8167 18.2862 11.8167C21.5246 11.8167 24.1364 14.3618 24.1364 17.5V17.5002C24.1376 18.5432 23.843 19.5667 23.2846 20.4581C22.7263 21.3496 21.9256 22.0748 20.9701 22.5536C20.0146 23.0323 18.9415 23.2459 17.8689 23.1705C16.7963 23.0952 15.7661 22.7339 14.8916 22.1268L14.7893 22.0558L14.7007 22.1432L13.4835 23.3432L13.3591 23.4658L13.4991 23.5702C14.4907 24.3099 15.6489 24.809 16.8779 25.0265C18.1068 25.2439 19.3714 25.1735 20.5669 24.821C21.7623 24.4685 22.8546 23.844 23.7529 22.9989C24.6513 22.1538 25.3298 21.1123 25.732 19.9607C26.1342 18.8091 26.2484 17.5807 26.0649 16.3775C25.8814 15.1742 25.4056 14.0312 24.6773 13.0429C23.949 12.0547 22.9893 11.2499 21.8779 10.6948C20.7665 10.1396 19.5353 9.85012 18.2862 9.85ZM20.1505 17.5C20.1505 16.4965 19.3079 15.6833 18.2862 15.6833C17.2644 15.6833 16.4218 16.4965 16.4218 17.5C16.4218 18.5035 17.2644 19.3167 18.2862 19.3167C19.3079 19.3167 20.1505 18.5035 20.1505 17.5Z" fill="#B6B6B6" stroke="#B6B6B6" stroke-width="0.3" />
                            <circle cx="18.5" cy="17.5" r="2.5" fill="#E9E9E9" />
                        </svg>
                        <h1>Attemps</h1>
                    </div>
                    <Counter text={''} />
                </div>
            </div>
            <div className='py-8'>
            </div>
        </div>
    )
}

export default LastPart