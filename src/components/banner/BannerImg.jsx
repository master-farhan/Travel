import React from 'react'

const BannerImg = ({img}) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: "center",
    height: '400px',
  }
  return (
    <div data-aos="zoom-down" className='h-[400px] w-full over' style={bgImage}>

    </div>
  )
}

export default BannerImg