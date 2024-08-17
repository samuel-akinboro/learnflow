import Image from "next/image"
import TestimonialCard from "./TestimonialCard"

const TestimonialSection = () => {
  return (
    <div class="relative overflow-hidden bg-herobg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative pt-12 pb-0 md:pt-24 text-center">
          {/* <!-- Title --> */}
          <div class="text-center mb-5 max-w-xl mx-auto">
            <h2 class="text-2xl font-medium lg:text-3xl lg:leading-tight text-white">Learners like you achieve their goals through our courses</h2>
            <p class="mt-2 text-neutral-400">We believe everyone has something to give. Share your skills & experience with students around the world by teaching free or paid.</p>
          </div>
          {/* <!-- End Title --> */}

          {/* <!-- Grid --> */}
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6 relative -bottom-6">
            {/* <!-- Col --> */}
            <div class="space-y-4 xl:space-y-6">
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </div>
            {/* <!-- End Col --> */}

            {/* <!-- Col --> */}
            <div class="space-y-4 xl:space-y-6">
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </div>
            {/* <!-- End Col --> */}

            {/* <!-- Col --> */}
            <div class="space-y-4 xl:space-y-6">
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </div>
            {/* <!-- End Col --> */}

            {/* <!-- Col --> */}
            <div class="space-y-4 xl:space-y-6">
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection