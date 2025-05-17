import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/Explore-Menu/ExploreMenu'
import FoodDisplay from '../../components/Food-Display/FoodDisplay'
import AppDownload from '../../components/App-Download/AppDownload'

const home = () => {
    const [category, setCategory] = useState("All");
    return (
        <div id='home' className='home'>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <AppDownload />
        </div>
    )
}

export default home
