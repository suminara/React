import React from 'react'

export default function Dl({props}) {

  return (
    <dl>
        <dt>{props.name}</dt>
        <dd>{props.desc}</dd>
    </dl>
  )
}