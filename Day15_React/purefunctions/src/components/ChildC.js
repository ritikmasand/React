import React from 'react'
import ChildD from './ChildD'

function ChildC({data}) {
  return (
    <div>
      This is child c &gt; {data}
      <ChildD data={data}/>
    </div>
  )
}

export default ChildC
