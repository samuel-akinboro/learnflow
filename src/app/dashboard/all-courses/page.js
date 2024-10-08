"use client";
import AllCourses from '@/components/dashboard/AllCourses'
import Breadcrumb from '@/components/dashboard/Breadcrumb'
import ContinueLearningCard from '@/components/dashboard/ContinueLearningCard'
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'

const AllCoursesPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);
  
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
            <h1 className="text-2xl font-medium mb-4 dark:text-black">Courses</h1>
            <p className="text-sm text-gray-600 mb-8">
              Unlock the world of web development effortlessly with our innovative e-learning courses. Elevate your skills, build a dynamic portfolio, and launch your web development or no-code career with our industry-aligned certifications and dedicated job placement assistance.
            </p>
            
            <hr className="my-8 border-gray-200" />
            <AllCourses />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCoursesPage