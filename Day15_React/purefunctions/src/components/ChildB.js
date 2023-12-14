import React from 'react'
import ChildC from './ChildC'

function ChildB({data}) {
  return (
    <div>
      This is child B &gt; {data}
      <ChildC data={data}/>
    </div>
  )
}

export default ChildB

