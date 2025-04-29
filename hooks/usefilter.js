import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export  function usefilter(dataList,callback) {
  const [query,setQuery]=useLocalStorage('query','')

 const filteredData=dataList.filter((data)=>{
    return callback(data).toLowerCase().includes(query)
  })

  return [filteredData,setQuery]
}
