import React from 'react'
import CardDemo from './ui/cards-demo-1'

const StressRelief = () => {
  return (
    <div>
      <h1 className='text-3xl'>Stress Relief</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolores sit tenetur facere, praesentium adipisci eaque blanditiis hic totam voluptatem animi, quas quis accusamus. Ducimus nam aperiam numquam quo voluptas!</p>
      
        <div className='flex flex-row gap-4' >
          <CardDemo/>
          <CardDemo/>
          <CardDemo/>
          <CardDemo/>
        </div >

    </div>
  )
}

export default StressRelief

