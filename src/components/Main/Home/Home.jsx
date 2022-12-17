import React from 'react'
import Head from './Head'
import BodyFirst from './BodyFirst'
import BodySecond from './BodySecond'
import BodyThird from './BodyThird'
// import BodyForth from './BodyForth'
import data from '../../../LocalData/data.json'



export default function Home() {
  return (
    <div>
      <Head />
      <BodyFirst />
      <BodySecond second={data.SecondBody} />
      <BodyThird />
      {/* <BodyForth /> */}
    </div>
  )
}
