import React, { useState } from 'react';

export default function Like() {
    const [like, setlike] = useState('')
    function clickLike (){
        if(like===''){setlike('❤')}
        else {setlike('')}
    }
  return (
    <button onClick={clickLike}>좋아요{like}</button>
  )
}
