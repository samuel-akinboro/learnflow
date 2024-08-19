import Image from "next/image"

const FeatureCard = ({
  title,
  description,
  img
}) => {
  return (
    <div className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-[#F5F5F5] rounded-t-xl" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="600">
      <div className="mb-5 flex-1">
        <div className="mt-5">
          <h3 className="mt-5 font-medium text-lg text-black">{title}</h3>
          <p className="mt-1 text-[#555555] text-sm">{description}</p>
        </div>
      </div>
      <div className="flex justify-end">
          <Image 
            src={img}
            height={43}
            width={43}
          />
        </div>
    </div>
  )
}

export default FeatureCard