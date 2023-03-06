import React from 'react'
import FirstPart from '../../components/Custom/FirstPart'
import QuizPart from '../../components/Custom/QuizPart'
import LastPart from '../../components/Custom/LastPart'
import NavBar from '../../components/NavBar'

const Home = () => {
    return (
        <div className='bg-gray-100'>
            <NavBar />
            <FirstPart />
            <QuizPart />
            <LastPart />
        </div>
    )
}

export default Home