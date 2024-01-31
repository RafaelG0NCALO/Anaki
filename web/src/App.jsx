import React from 'react'
import IMG from './assets/IMG.png'
import Vector from './assets/Vector.png'
import iconHome from './assets/iconHome.png'
import iconCircle from './assets/iconCircle.png'
import ravo from './assets/ravo.png'
import footerStyle from './assets/footerStyle.png'
import Title from './assets/Title.png'
import plus from './assets/plus.png'
import iconToggle from './assets/iconToggle.png'
import iconBan from './assets/iconBan.png'
import Polygon from './assets/Polygon.png'
import Polygon2 from './assets/Polygon2.png'
import cardimg from './assets/cardimg.png'
import arrow from './assets/arrow.png'
import calendar from './assets/calendar.png'
import map from './assets/map.png'
import social from './assets/social.png'

const App = () => { 
  return (
    <div className='flex items-center justify-center w-full min-h-screen p-3 bg-black'>
      <div className='w-full max-w-[1300px] bg-[#1E1F27] flex gap-3 p-3 rounded-2xl max-lg:flex-col'>

        <div className='w-full h-[720px] flex items-center bg-[#0B0C10] overflow-hidden relative max-md:rounded-xl rounded-bl-[108px] rounded-tr-[108px]'>

            <img src={Title} alt="" className='absolute right-8 animate-slideUpScale top-12 max-md:top-24 max-md:right-2 z-20'/>

            <div className='flex items-center absolute right-6 z-40'>
              <img src={plus} alt=""/>
              <div className='pl-6'>
                <p className='font-semibold text-gray-400 py-1'>Best JP.Producer</p>
                <p className='font-semibold text-gray-400 py-1'>1st Prdc AMA Award</p>
                <p className='font-semibold text-gray-400 py-1'>tOP 20 prdc of 2023</p>
                <p className='font-semibold text-gray-400 py-1'>Top 5 Epic-center Tour</p>
              </div>
            </div>

            <div className='w-56 max-md:h-16 max-md:w-44 flex items-center justify-center h-24 top-0 left-0 absolute bg-[#1E1F27] z-30 rounded-br-[90px]
              before:absolute
              before:-z-10
              before:w-10
              before:h-10
              before:rounded-tl-full
              before:-right-[31px]
              before:top-0
              before:shadow-curve2
              after:absolute
              after:-z-10
              after:w-[108px]
              after:h-[108px]
              after:rounded-tl-full
              after:left-0
              after:-bottom-[109px]
              after:shadow-curve3'>
              <div className='flex gap-2'>
                <img src={iconHome} alt="" />
                <img src={iconCircle} alt="" />
              </div>
            </div>

            <img src={footerStyle} alt="" className='animate-fadeIn absolute z-20 bottom-10 left-20' />

    
              <div className='w-full animate-slideDown max-w-[700px] h-full flex overflow-hidden absolute -top-20 right-0 z-10 '>
                <img src={IMG} alt="" className='object-cover max-md:object-left max-md:h-[600px] max-md:absolute left-10 w-full h-full ' />
              </div>
              <img src={Vector} alt="" className='animate-slideDown object-contain w-[48%] max-md:top-56 z-0 bottom-0  top-0 absolute' />


            <div className='p-2 bg-[#1E1F27] rounded-tl-[108px] z-20 absolute bottom-0 right-0'>
              <div className='relative flex items-center justify-center 
              before:absolute
              before:-z-10
              before:w-24
              before:h-24
              before:rounded-br-full
              before:-right-2
              before:-top-[104px]
              before:shadow-curve
              after:absolute
              after:-z-10
              after:w-24
              after:h-24
              after:rounded-br-full
              after:-left-[104px]
              after:-bottom-2
              after:shadow-curve
              w-[320px] h-[218px] bg-[#111218] rounded-full'>
                    <span className='w-24 h-24 max-md:w-16 max-md:left-2 max-md:h-16 rounded-full block absolute -top-6 -left-6 bg-[#BBFF1A]'/>
                    <img src={ravo} alt=""/>
              </div>
            </div>
            
        </div>

        <div className='w-full p-3 max-lg:max-w-none max-w-[408px] h-[720px] flex justify-center  max-md:rounded-xl overflow-hidden bg-[#0B0C10] rounded-[108px]'>
          <div className='w-full'>
          <div className='flex h-1/5 w-64 m-auto items-center justify-between'>
              <img src={ravo} alt="" className='animate-slideLeft'/>
              <div className='mt-5 animate-fadeIn'>
                <img src={iconToggle} alt="" className='opacity-50' />
                <img src={iconBan} alt="" className='-translate-y-3' />
              </div>
          </div>

          <div className='bg-[#111218] w-full h-4/5 rounded-[100px] max-md:rounded-xl overflow-hidden'>
              <div className='h-full items-center flex flex-col justify-end relative'>
              <div className='w-full flex h-full pt-5 justify-center'>
                <div className='animate-fadeIn'>
                  <div className='flex gap-4 text-[#999DBA] py-2'>
                    <img src={map} alt="" />
                    <p>13:00 - 19:00, Oct 12 - 2023</p>
                  </div>
                  <div className='flex gap-4 text-[#999DBA] py-2'>
                    <img src={calendar} alt="" />
                    <p>West Point St., Birmingham Dtr.</p>
                  </div>
                  <img src={social} alt="" />
                </div>
              </div>
                <div className='w-[77%] h-[300px] bg-[#BBFF1A] animate-cardUp rounded-[64px] absolute bottom-24'>
                  <div className='translate-y-2 px-9 flex items-center justify-between w-full'>
                    <h1 className='font-semibold text-black'>SSS-VIP</h1>
                    <p className='text-black font-medium'>$529</p>
                  </div> 
                </div>
                <div className='w-[88%] flex flex-col items-center animate-cardUp justify-start h-[300px] bg-[#1A31FF] rounded-[72px] absolute bottom-14'>
                  <div className='w-10 h-10 flex justify-center bg-[#BBFF1A] p-3 -translate-y-6 rounded-full'>
                    <img src={Polygon2} alt="" className='object-contain' />
                  </div>
                  <div className='-translate-y-6 px-9 flex items-center justify-between w-full'>
                    <h1 className='text-2xl font-semibold text-white'>S-VIP</h1>
                    <p className='text-white font-medium'>$129</p>
                  </div> 
                </div>
                <div className='w-full pb-6 flex flex-col items-center animate-cardUp h-[300px] bg-[#1E1F29] rounded-[90px] absolute'>
                  <div className='w-10 h-10 flex justify-center bg-[#1A31FF] p-3 -translate-y-6 rounded-full'>
                    <img src={Polygon} alt="" className='object-contain' />
                  </div>
                  
                  <div className='h-full flex flex-col justify-around w-full max-w-72 items-center'>
                    <div className='flex items-center gap-7'>
                      <div>
                        <h1 className='text-2xl font-semibold text-white'>Early Access</h1>
                        <p className='font-medium text-[#999DBA] py-3'>Check in 15:00</p>
                        <p className='font-medium text-[#999DBA]'>No refund</p>
                      </div>
                      <img src={cardimg} alt="" />
                    </div>
                    <button className='h-20 flex justify-between items-center px-8 rounded-full w-full bg-[#0B0C10]'>
                      <p className='text-3xl font-bold text-white'>$99</p>
                      <img src={arrow} alt="" />
                    </button>
                  </div>

                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App