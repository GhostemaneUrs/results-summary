import React, { Fragment, useEffect, useState } from 'react'
import summary from '../../assets/api/data.json'
import memory from '../../assets/images/icon-memory.svg'
import verbal from '../../assets/images/icon-verbal.svg'
import visual from '../../assets/images/icon-visual.svg'
import reaction from '../../assets/images/icon-reaction.svg'

const Summary = () => {
  const [cardSummary, setCardSummary] = useState(summary)

  useEffect(() => {
    const result = cardSummary.map((item, index) => {
      if (item?.id === index) {
        if (item?.score === 61) {
          return {
            ...item,
            icon: verbal,
            color: 'text-green-95',
          }
        } else if (item?.score === 73) {
          return {
            ...item,
            icon: visual,
            color: 'text-cobalt-blue',
          }
        } else if (item?.score === 80) {
          return {
            ...item,
            icon: reaction,
            color: 'text-light-red',
          }
        } else if (item?.score === 92) {
          return {
            ...item,
            icon: memory,
            color: 'text-dark-navy',
          }
        }
      }
    })
    setCardSummary(result)
  }, [])

  return (
    <div className='flex flex-col md:flex-row bg-white min-w-[350px] max-w-[736px] md:min-w-[736px] min-h-[512px] rounded-[32px]'>
      <div className='linear-gradient-result w-full md:max-w-[368px] flex flex-col items-center rounded-[32px] p-10'>
        <div className='mb-[35px]'>
          <h1 className='font-bold text-2xl text-light-lavender'>
            Your Result
          </h1>
        </div>
        <div className='linear-gradient-oval flex justify-center items-center flex-col w-full h-full max-w-[140px] min-h-[140px] md:max-w-[200px] md:max-h-[200px] rounded-full mb-7'>
          <div className='mb-1'>
            <span className='text-[56px] md:text-7xl font-extrabold text-white leading-[60px]'>76</span>
          </div>
          <div>
            <span className='text-light-lavender text-base md:text-lg font-bold'>
              of 100
            </span>
          </div>
        </div>
        <div className='flex flex-col items- gap-[14px] max-w-[260px]'>
          <div className='text-center'>
            <span className='text-white text-[32px]'>Great</span>
          </div>
          <div className='text-center'>
            <p className='text-lg text-light-lavender font-medium'>
              Your performance exceed 65% of the people conducting the test
              here!
            </p>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col p-10'>
        <div className='mb-7'>
          <h2 className='text-2xl text-dark-navy font-bold'>Summary</h2>
        </div>
        <div className='w-full mb-10'>
          {cardSummary.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl mb-4 w-full ${item?.bgColor}`}
              >
                <div className='flex gap-2'>
                  <img src={item?.icon} alt='icon' />
                  <span
                    className={`${
                      item?.id === index && item?.color
                    } text-lg font-medium`}
                  >
                    {item?.category}
                  </span>
                </div>
                <div className='flex gap-2'>
                  <span className='text-lg text-dark-navy font-bold'>
                    {item?.score}
                  </span>
                  <span className='text-lg text-dark-navy opacity-50 font-bold'>
                    /
                  </span>
                  <span className='text-lg text-dark-navy opacity-50 font-bold'>
                    100
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        <button className='text-white rounded-[32px] p-4 font-bold w-full button-gradient'>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Summary
