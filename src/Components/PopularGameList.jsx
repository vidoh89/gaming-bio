import React from 'react';
import GlobalApi from '../Service.js/GlobalApi';

function PopularGameList({gameList}) {
  const getMovieDetails=(id).then(resp=>{
    GlobalApi.getMovieDetails(id).then(resp=>{
      console.log(resp);
    })
    
  }
  return (
    <div className='mt-5'>
      <h2 className ='font-bold-text-[30px] dark:text-white'>Popular Games</h2>
      
    </div>
  )
}

export default PopularGameList

