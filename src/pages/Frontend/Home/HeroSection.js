import React from 'react'
import { images } from '../../../assets/images'
export default function HeroSection() {
  return (
    <>
      <div className="heroSection">
        <div className="container text-white">
          <div className="row hero mt-5">
            <div className="col-12 col-sm-6">
                <h4 className='text-secondary'>An Interactice interface to connect Doctors and Patients!</h4>
                <div className="button">
              </div>
            </div>
            <div className="col-12 col-sm-6 text-end">
              <div className="">
                <div>
                  <button type="button" className="btn btn-outline-success me-2 button1 ">DOWNLOAD APP</button>
                  <button type="button" className="btn btn-outline-primary text-dark border-success button1">BOOK APPOINMENT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
        </div>
      </div>

    </>
  )
}
