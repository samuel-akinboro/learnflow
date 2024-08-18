import Breadcrumb from '@/components/dashboard/Breadcrumb'
import ContinueLearningCard from '@/components/dashboard/ContinueLearningCard'
import Header from '@/components/dashboard/Header'
import LanguageCourses from '@/components/dashboard/LanguageCourses'
import Sidebar from '@/components/dashboard/Sidebar'

const Dashboard = () => {
  return (
    <div className='bg-[#F5F6F7] min-h-screen'>
      <Header />
      <div className="-mt-px">
        <Breadcrumb />
      </div>
      <Sidebar />

      {/* <!-- Content --> */}
      <div className="w-full lg:ps-64 xl:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-2xl font-medium mb-4">Welcome to Learnflow</h1>
            <p className="text-base text-gray-600 mb-8">
              Learn at your own pace with lifetime access on mobile and desktop.
            </p>
            
            <hr className="my-8 border-gray-200" />
            
            <h2 className="text-2xl font-medium mb-6">Let's continue Learning!</h2>
            
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
              <ContinueLearningCard
                image="/images/ln-1.png"
                title="Introduction to CSS language"
                description="Learn different programming languages and its usefulness"
                progress={70}
              />
              <ContinueLearningCard
                image="/images/ln-2.png"
                title="Introduction to CSS language"
                description="Learn different programming languages and its usefulness"
                progress={70}
              />
            </div>

            <LanguageCourses />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard