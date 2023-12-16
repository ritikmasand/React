import React from 'react'

function ChildA({data}) {
  var a =10;
  const fn = () =>{
    console.log(a);
  }
  fn()
  return (
    <div>
    This is child A - {data}
    </div>
  )
}

export default ChildA