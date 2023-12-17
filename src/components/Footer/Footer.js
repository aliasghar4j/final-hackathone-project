import React from 'react'
import { images } from '../../assets/images/index'
import { Link } from 'react-router-dom'
export default function Footer() {
    let date = new Date().getFullYear()
    return (
        <>
            <div className="container">
                <footer className="row flex-wrap-reverse pt-5 my-5">
                    <div className="row footer border-top">
                        <div className="col">
                            <p>&copy; {date} DA System. All rights reserved.</p>
                        </div>
                        <div className="col ">
                            <p className='float-end'>Privacy Policy | Terms of Use</p>
                        </div>
                    </div>
                </footer >
            </div>
        </>
    )
}
