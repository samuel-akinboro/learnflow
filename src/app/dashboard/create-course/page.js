import AllCourses from '@/components/dashboard/AllCourses'
import Breadcrumb from '@/components/dashboard/Breadcrumb'
import ContinueLearningCard from '@/components/dashboard/ContinueLearningCard'
import CreateCourse from '@/components/dashboard/CreateCourse'
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'

const CreateCoursePage = () => {
  return (
    <div className='bg-[#F5F6F7] min-h-screen'>
      <Header />
      <div className="-mt-px">
        <Breadcrumb page='All courses' />
      </div>
      <Sidebar />

      {/* <!-- Content --> */}
      <div className="w-full lg:ps-64 xl:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-2xl font-medium mb-4">Create a new course</h1>
            
            <hr className="my-8 border-gray-200" />
            <CreateCourse />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCoursePage