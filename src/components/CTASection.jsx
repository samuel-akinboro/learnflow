import Image from "next/image"
import Link from "next/link"

const CTASection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-6xl px-4 xl:px-0 md:py-10 mx-auto py-6">
        <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center flex flex-col pt-6 gap-6 md:my-8 bg-heroyellow px-4 rounded-3xl overflow-hidden md:px-14">
          <div className="md:mb-6">
            {/* <!-- Blockquote --> */}
            <blockquote>
              <p className="font-medium text-xl text-black md:text-3xl md:leading-normal xl:text-4xl xl:leading-normal">
                Expand your skills & knowledge at any level.
              </p>
              <p className="text-herogray md:text-base md:leading-normal xl:text-base xl:leading-normal text-sm mt-2">
                Learn at your own pace with lifetime access on mobile and desktop.
              </p>
              <Link className="group inline-flex items-center gap-x-2 py-2.5 px-8 whitespace-nowrap text-sm bg-herobg rounded-2xl text-white mt-5" href="/">
                Get started
              </Link>
            </blockquote>
            {/* <!-- End Blockquote --> */}
          </div>
          {/* <!-- End Col --> */}
          <div className="md:block relative">
            <Image
              className="rounded-xl transform -rotate-12 relative -bottom-12 md:right-[-5.3rem]"
              src="/images/dashboard.png"
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

export default CTASection