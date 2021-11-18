import React from 'react'
import Explore from '../Explore'
import Banner from './Banner'
import Review from './Review'
import Feature from '../../Pages/Home/Feature/Feature'
import EntryPage from './EntryPage/EntryPage'
import Blog from './Blog/Blog'
import About from './About'

const Home = () => {
    return (
        <>
            <Banner />
            <EntryPage></EntryPage>
            <Explore quantity={6}/>
            <Review />
            <Feature></Feature>
            <Blog></Blog>
            <About></About>
            
        </>
    )
}

export default Home
