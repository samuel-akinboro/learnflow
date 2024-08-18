import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <nav className="relative max-w-[66rem] w-full bg-herobg rounded-[28px] py-3 ps-5 pe-5 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto mt-2" aria-label="Global">
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* <!-- Logo --> */}
          <Link className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="/" aria-label="Preline">
            <Image
              src='/images/logo.png'
              width={116}
              height={32}
            />
          </Link>
          {/* <!-- End Logo --> */}

          <div className="md:hidden">
            <button type="button" className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse" aria-controls="navbar-collapse" aria-label="Toggle navigation">
              <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Collapse --> */}
        <div id="navbar-collapse" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto">
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-center md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
            <Link className="text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300" href="/" aria-current="page">About</Link>
            <Link className="text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300" href="#">Features</Link>
            <Link className="text-sm text-white hover:text-neutral-300 md:py-4 focus:outline-none focus:text-neutral-300" href="#">Pricing</Link>
          </div>
        </div>
        {/* <!-- End Collapse --> */}

        {/* <!-- Contact Us Button --> */}
        <div className="hidden md:block">
          <Link className="group inline-flex items-center gap-x-2 py-2 px-3 whitespace-nowrap text-sm text-heroyellow rounded-2xl border border-heroyellow" href="/sign-up">
            Lets start your learning journey
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar