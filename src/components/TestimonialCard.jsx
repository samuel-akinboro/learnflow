import Image from "next/image"

const TestimonialCard = () => {
  return (
    <div className="flex flex-col border rounded-xl border-[#e3e3e336]">
      <div className="p-4 md:p-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-3 mb-5">
            <Image width={40} height={40} className="inline-block size-9 rounded-full" src="/images/tav-1.png" alt="Vosidiy Muslimbek" />
            <div className="grow text-left">
              <p className="font-semibold text-white">John Doe</p>
              <p className="text-sm text-herogray2">Java Developer</p>
            </div>
          </div>
        </div>
        <p className="text-start leading-7 text-herogray2 text-sm">
          I don't know how to thank for such a good teaching style. It's the best!
        </p>
      </div>
    </div>
  )
}

export default TestimonialCard