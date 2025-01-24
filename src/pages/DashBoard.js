import React from 'react'
import ViewSegment from '../components/Dash/ViewSegment'
import DashHeader from '../components/Dash/DashHeader'
import { useState } from 'react'

const DashBoard = () => {
    const [getSegmentBool,setGetSegmentBool] = useState(false);
    const [segment,setSegment] = useState();
    const [customers,setCustomers] = useState([]);

  return (
    <div>
    <DashHeader setCustomers={setCustomers} setSegment={setSegment} setGetSegmentBool={setGetSegmentBool}/>
      <ViewSegment getSegmentBool={getSegmentBool} customers={customers}/>
    </div>
  )
}

export default DashBoard
