import FeatureCard from "./FeatureCard"

const Features = () => {
  return (
    <div className="bg-white">
      <div className="max-w-5xl px-4 xl:px-0 py-12 md:py-24 mx-auto">
        {/* <!-- Title --> */}
        <div className="max-w-3xl mb-10 lg:mb-14 mx-auto">
          <h2 className="text-xl font-medium md:text-4xl md:leading-tight text-black text-center">Special features that make our online courses the best</h2>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Card Grid --> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4">
          <FeatureCard
            title='Made by Experts'
            description='Our programming languages courses are meticulously crafted and taught by industry experts who bring years of practical experience'
            img='/images/ft-1.png'
          />
          <FeatureCard
            title='Career Opportunities'
            description='Benefit from our job placement assistance services that connects qualified learners with relevant career path'
            img='/images/ft-2.png'
          />
          <FeatureCard
            title='Collaboration'
            description='Study at their own pace and on their own schedule, which is ideal for those who have work, family, or other commitments'
            img='/images/ft-3.png'
          />
        </div>
        {/* <!-- End Card Grid --> */}

      </div>
    </div>
  )
}

export default Features