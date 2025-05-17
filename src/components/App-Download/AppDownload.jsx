import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'

const AppDownload = () => {
    return (
        <div className='appDownload m-auto mt-24 text-center text-4xl font-semibold' id='appDownload'>
            <p className='capitalize'>For better experiance download <br /> <span className='text-orange-600 '>snackzy app</span> </p>
            <div className="app-download-platforms flex justify-center gap-3 mt-10">
                <img src={assets.play_store} alt="" /><img src={assets.app_store} alt="" />
            </div>

        </div>
    )
}

export default AppDownload
