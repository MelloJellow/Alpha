import React from 'react'
import Sidebar from '../components/AdminComp/sidebar'
import Chart from '../components/AdminComp/Chart'
import { userData } from "../data"
import Topbar from '../components/AdminComp/Topbar'
import FeatureInfo from '../components/AdminComp/FeatureInfo'
import WidgetLg from '../components/AdminComp/widgetLg'
import WidgetSm from '../components/AdminComp/widgetSm'

const Admin = () => {
  return (
    <>
    <Topbar/>
    
    <FeatureInfo/>

    <Chart  data={userData} title="User Analytics" grid dataKey="Active User"/>
    <WidgetLg/>
    <WidgetSm/>
    </>
  )
}

export default Admin
