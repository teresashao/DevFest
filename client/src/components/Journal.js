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
                <div className="text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '20px', padding: '20px' }}>
                  <p className='text-blue-500' style={{textAlign: 'left', padding: '30px 0 0 0' }}></p>
                  <div className="col-lg-12" style={{ textAlign: 'left', padding: '0 0 0 0' }}>
                    {/* <p style={{ textAlign: 'left', position: 'absolute' }}>Input your journal here:</p> */}
                    {/* <input type="text" id="journal" name="journal" style={{ position: 'relative', left: 0, top: '30px', width: '100%', height: '100px', padding: '0 0 10px 0' }} /><br /><br /> */}
                    <label htmlFor="journal" className="text-5xl block mb-10 text-blue-500 font-righteous" style={{marginTop: '30px', width: '100%' }}>Journal</label>
                    <textarea
                      id="journal"
                      name="journal"
                      className="w-full h-48 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm text-black"
                    />
                    <span style={{ padding: '20px 0 10px 0' }}>
                      {/* <button style={{ width: '100%', height: '40px', borderWidth: 0, color: 'white', backgroundColor: 'rgb(86, 187, 118)' }}>
                        Submit
                      </button> */}
                    <center>
                      <button className="text-3xl font-mont relative z-20 mt-20 text-center bg-slate-100 text-slate-500 rounded-lg py-3 px-7 transform transition-transform duration-300 hover:hover:drop-shadow-xl hover:scale-105">Submit</button>
                      </center>
                    </span>
                  </div>
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