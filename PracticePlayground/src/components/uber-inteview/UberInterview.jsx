import React from 'react'
import Shape from './Shape'

const UberInterview = () => {
    const data = [
        [1,1,1],
        [1,0,0],
        [1,1,1]
    ]
  return (
    <div>
        <Shape data={data} />
    </div>
  )
}

export default UberInterview