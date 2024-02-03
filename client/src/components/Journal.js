import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Journal() {
  return (

    <div>
      <header className='relative flex items-center justify-center h-screen overflow-hidden'>
        <img src="https://t4.ftcdn.net/jpg/01/87/47/59/360_F_187475954_KuDIRQZbGTwwyMTXZeRmojQH9YeSjrWt.jpg" className="absolute z-10 w-auto min-w-full min-h-full max-w-none" alt="background"/>
        <div className="relative z-30 p-5 text-2xl text-white h-screen min-w-full min-h-full items-center justify-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <div className="text-center" style={{ backgroundColor: 'white', borderRadius: '20px', padding: '20px' }}>
                  <p className='text-orange-500'>Journal</p>
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}