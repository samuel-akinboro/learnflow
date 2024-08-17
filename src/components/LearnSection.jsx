import Image from "next/image"
import Link from "next/link"

const LearnSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-5xl px-4 xl:px-0 md:py-10 mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center flex flex-col-reverse gap-6">
          {/* <!-- End Col --> */}
          <div className="md:block relative">
            <Image
              className="rounded-xl"
              src="/images/ln-1.png"
              width={494}
              height={427}
            />
          </div>
          {/* <!-- End Col --> */}
          <div>
            {/* <!-- Blockquote --> */}
            <blockquote>
              <p className="font-medium text-xl text-black md:text-3xl md:leading-normal xl:text-4xl xl:leading-normal">
                Collaborate & learn with our platform
              </p>
              <p className="text-herogray md:text-base md:leading-normal xl:text-base xl:leading-normal text-sm mt-2">
                We offer a wide range of language courses taught by experienced and qualified instructors, who are passionate about teaching and dedicated to helping you achieve your language goals.
              </p>
              <Link className="group inline-flex items-center gap-x-2 py-2 px-8 whitespace-nowrap text-sm text-herobg rounded-xl bg-heroyellow mt-5" href="/">
                Get started
              </Link>
            </blockquote>
            {/* <!-- End Blockquote --> */}
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center flex flex-col-reverse gap-6 mt-8">
          <div>
            {/* <!-- Blockquote --> */}
            <blockquote>
              <p className="font-medium text-xl text-black md:text-3xl md:leading-normal xl:text-4xl xl:leading-normal">
                Propel your career & expand your knowledge at any level
              </p>
              <p className="text-herogray md:text-base md:leading-normal xl:text-base xl:leading-normal text-sm mt-2">
                Learnflow is an online course class that provides various categories of programming courses.
              </p>
              <Link className="group inline-flex items-center gap-x-2 py-2 px-8 whitespace-nowrap text-sm text-herobg rounded-xl bg-heroyellow mt-5" href="/">
                Get started
              </Link>
            </blockquote>
            {/* <!-- End Blockquote --> */}
          </div>
          {/* <!-- End Col --> */}
          <div className="md:block relative">
            <Image
              className="rounded-xl"
              src="/images/ln-2.png"
              width={494}
              height={427}
            />
          </div>
          {/* <!-- End Col --> */}
        </div>
      </div>
    </div>
  )
}

export default LearnSection