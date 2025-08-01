import React from 'react'

function useService() {
    const countTotal = (counterArray) => {
  return counterArray?.reduce((acc,el)=>{
    acc += (el.stock * el.costPerUnit)
    return acc
  },0)
}

  return (
   {countTotal}
  )
}

export default useService