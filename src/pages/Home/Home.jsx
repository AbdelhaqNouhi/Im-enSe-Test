import React from 'react'
import FirstPart from '../../components/Custom/FirstPart'
import QuizPart from '../../components/Custom/QuizPart'
import LastPart from '../../components/Custom/LastPart'

const Home = () => {
    return (
        <div className='bg-gray-100'>
            <FirstPart />
            <QuizPart />
            <LastPart />
        </div>
    )
}

export default Home