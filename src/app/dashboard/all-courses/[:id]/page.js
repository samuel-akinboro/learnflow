import AllCourses from '@/components/dashboard/AllCourses'
import Breadcrumb from '@/components/dashboard/Breadcrumb'
import ContinueLearningCard from '@/components/dashboard/ContinueLearningCard'
import CourseDetails from '@/components/dashboard/CourseDetails'
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import Image from 'next/image'
import Link from 'next/link'

const AllCoursesPage = () => {
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
            {/* <h1 className="text-2xl font-medium mb-4">Courses</h1>
            <p className="text-sm text-gray-600 mb-8">
              Unlock the world of web development effortlessly with our innovative e-learning courses. Elevate your skills, build a dynamic portfolio, and launch your web development or no-code career with our industry-aligned certifications and dedicated job placement assistance.
            </p>
            
            <hr className="my-8 border-gray-200" /> */}
            <div className="container mx-auto p-4 max-w-4xl">
              <nav className="mb-4">
                <Link href="/dashboard/all-courses" className="text-black hover:text-heroyellow">
                  &larr; Back to Courses
                </Link>
              </nav>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 md:p-6">
                  <div className="mb-6 relative w-full h-64">
                    <Image
                      src="/images/ln-1.png"
                      alt="Course Books"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  
                  <div className='xl:flex gap-8 mt-8'>
                    <div>
                      <h1 className="text-2xl md:text-3xl mb-4">Introduction to CSS language</h1>
                      
                      <p className="text-herogray mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies dui vitae
                        pulvinar luctus. Fusce lacinia tempus nec ligula. Sit amet lobortis augue id justo.
                        Aliquam erat volutpat. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl,
                        nec aliquam nisl nisl sit amet nisl.
                      </p>
                    </div>
                    
                    <CourseDetails />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCoursesPage