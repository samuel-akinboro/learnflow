import Breadcrumb from '@/components/dashboard/Breadcrumb'
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="-mt-px">
        <Breadcrumb />
      </div>
      <Sidebar />

      {/* <!-- Content --> */}
      <div className="w-full lg:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* <!-- your content goes here ... --> */}
        </div>
      </div>
    </div>
  )
}

export default Dashboard