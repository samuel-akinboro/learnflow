"use client";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = () => {
  const NavLink = ({ href, children }) => {
    const pathname = usePathname()
    const isActive = pathname === href
  
    return (
      <>
        <Link
          className={`flex items-center gap-x-3.5 py-3 px-5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 relative ${
            isActive
              ? 'bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-white'
              : 'text-gray-600 dark:text-gray-400'
          }`}
          href={href}
        >
          {children}
          {isActive && (
            <span className="absolute -left-3 top-1/2 h-11 w-1 bg-gray-100 dark:bg-neutral-700 rounded-r-full transform -translate-y-1/2"></span>
          )}
        </Link>
      </>
    )
  }

  return (
    <div id="hs-application-sidebar" className="hs-overlay  [--auto-close:lg]
        hs-overlay-open:translate-x-0
        -translate-x-full transition-all duration-300 transform
        w-[260px] h-full
        hidden
        fixed inset-y-0 start-0 z-[60]
        bg-white border-e border-gray-200
        lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
        dark:bg-neutral-800 dark:border-neutral-700" role="dialog" tabIndex="-1" aria-label="Sidebar">
      <div className="relative flex flex-col h-full max-h-full">
        <div className="px-6 pt-4">
          {/* <!-- Logo --> */}
          <Link className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="/dashboard" aria-label="Preline">
            <Image src="/images/logo.png" className="mr-3 h-8" alt="Learn flow Logo" width={155} height={33} />
          </Link>
          {/* <!-- End Logo --> */}
        </div>

        {/* <!-- Content --> */}
        <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <p className="w-full flex items-center gap-x-3.5 ml-2 mt-4 md:mt-6 py-2 px-2.5 text-sm text-gray-800 rounded-lg dark:text-neutral-200">
            Menu
          </p>
          <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
            <ul className="flex flex-col space-y-1">
              <li>
                <NavLink href="/dashboard">
                  <svg className="shrink-0 size-4" stroke="currentColor" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8275 10.957H11.7975C10.29 10.957 9.5625 10.2595 9.5625 8.81953V3.71953C9.5625 2.27953 10.2975 1.58203 11.7975 1.58203H14.8275C16.335 1.58203 17.0625 2.27953 17.0625 3.71953V8.81953C17.0625 10.2595 16.3275 10.957 14.8275 10.957ZM11.7975 2.70703C10.845 2.70703 10.6875 2.96203 10.6875 3.71953V8.81953C10.6875 9.57703 10.845 9.83203 11.7975 9.83203H14.8275C15.78 9.83203 15.9375 9.57703 15.9375 8.81953V3.71953C15.9375 2.96203 15.78 2.70703 14.8275 2.70703H11.7975Z" fill="white"/>
                    <path d="M14.8275 17.707H11.7975C10.29 17.707 9.5625 17.0095 9.5625 15.5695V14.2195C9.5625 12.7795 10.2975 12.082 11.7975 12.082H14.8275C16.335 12.082 17.0625 12.7795 17.0625 14.2195V15.5695C17.0625 17.0095 16.3275 17.707 14.8275 17.707ZM11.7975 13.207C10.845 13.207 10.6875 13.462 10.6875 14.2195V15.5695C10.6875 16.327 10.845 16.582 11.7975 16.582H14.8275C15.78 16.582 15.9375 16.327 15.9375 15.5695V14.2195C15.9375 13.462 15.78 13.207 14.8275 13.207H11.7975Z" fill="white"/>
                    <path d="M6.2025 17.707H3.1725C1.665 17.707 0.9375 17.0095 0.9375 15.5695V10.4695C0.9375 9.02953 1.6725 8.33203 3.1725 8.33203H6.2025C7.71 8.33203 8.4375 9.02953 8.4375 10.4695V15.5695C8.4375 17.0095 7.7025 17.707 6.2025 17.707ZM3.1725 9.45703C2.22 9.45703 2.0625 9.71203 2.0625 10.4695V15.5695C2.0625 16.327 2.22 16.582 3.1725 16.582H6.2025C7.155 16.582 7.3125 16.327 7.3125 15.5695V10.4695C7.3125 9.71203 7.155 9.45703 6.2025 9.45703H3.1725Z" fill="white"/>
                    <path d="M6.2025 7.20703H3.1725C1.665 7.20703 0.9375 6.50953 0.9375 5.06953V3.71953C0.9375 2.27953 1.6725 1.58203 3.1725 1.58203H6.2025C7.71 1.58203 8.4375 2.27953 8.4375 3.71953V5.06953C8.4375 6.50953 7.7025 7.20703 6.2025 7.20703ZM3.1725 2.70703C2.22 2.70703 2.0625 2.96203 2.0625 3.71953V5.06953C2.0625 5.82703 2.22 6.08203 3.1725 6.08203H6.2025C7.155 6.08203 7.3125 5.82703 7.3125 5.06953V3.71953C7.3125 2.96203 7.155 2.70703 6.2025 2.70703H3.1725Z" fill="white"/>
                  </svg>

                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink href="/dashboard/all-courses">
                  <svg className="shrink-0 size-4" stroke="currentColor" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.91699 15.9986C2.57533 15.9986 2.29199 15.7153 2.29199 15.3736V6.20695C2.29199 2.53195 3.40866 1.41528 7.08366 1.41528H12.917C16.592 1.41528 17.7087 2.53195 17.7087 6.20695V14.5403C17.7087 14.6736 17.7087 14.7986 17.7003 14.9319C17.6753 15.2736 17.367 15.5403 17.0337 15.5153C16.692 15.4903 16.4253 15.1903 16.4503 14.8486C16.4587 14.7486 16.4587 14.6403 16.4587 14.5403V6.20695C16.4587 3.23195 15.9003 2.66528 12.917 2.66528H7.08366C4.10033 2.66528 3.54199 3.23195 3.54199 6.20695V15.3736C3.54199 15.7153 3.25866 15.9986 2.91699 15.9986Z" fill="black" fill-opacity="0.5"/>
                    <path d="M14.167 19.3319H5.83366C3.88366 19.3319 2.29199 17.7402 2.29199 15.7902V15.2485C2.29199 13.5902 3.64199 12.2485 5.29199 12.2485H17.0837C17.4253 12.2485 17.7087 12.5319 17.7087 12.8735V15.7902C17.7087 17.7402 16.117 19.3319 14.167 19.3319ZM5.29199 13.4985C4.32533 13.4985 3.54199 14.2819 3.54199 15.2485V15.7902C3.54199 17.0569 4.56699 18.0819 5.83366 18.0819H14.167C15.4337 18.0819 16.4587 17.0569 16.4587 15.7902V13.4985H5.29199Z" fill="black" fill-opacity="0.5"/>
                    <path d="M13.3337 6.83179H6.66699C6.32533 6.83179 6.04199 6.54845 6.04199 6.20679C6.04199 5.86512 6.32533 5.58179 6.66699 5.58179H13.3337C13.6753 5.58179 13.9587 5.86512 13.9587 6.20679C13.9587 6.54845 13.6753 6.83179 13.3337 6.83179Z" fill="black" fill-opacity="0.5"/>
                    <path d="M10.8337 9.74854H6.66699C6.32533 9.74854 6.04199 9.4652 6.04199 9.12354C6.04199 8.78187 6.32533 8.49854 6.66699 8.49854H10.8337C11.1753 8.49854 11.4587 8.78187 11.4587 9.12354C11.4587 9.4652 11.1753 9.74854 10.8337 9.74854Z" fill="black" fill-opacity="0.5"/>
                  </svg>
                  All courses
                </NavLink>
              </li>
              <li>
                <NavLink href="/dashboard/create-course">
                  <svg className="shrink-0 size-4" stroke="currentColor" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5001 18.9584H7.50008C2.97508 18.9584 1.04175 17.0251 1.04175 12.5001V7.50008C1.04175 2.97508 2.97508 1.04175 7.50008 1.04175H9.16675C9.50841 1.04175 9.79175 1.32508 9.79175 1.66675C9.79175 2.00841 9.50841 2.29175 9.16675 2.29175H7.50008C3.65841 2.29175 2.29175 3.65841 2.29175 7.50008V12.5001C2.29175 16.3417 3.65841 17.7084 7.50008 17.7084H12.5001C16.3417 17.7084 17.7084 16.3417 17.7084 12.5001V10.8334C17.7084 10.4917 17.9917 10.2084 18.3334 10.2084C18.6751 10.2084 18.9584 10.4917 18.9584 10.8334V12.5001C18.9584 17.0251 17.0251 18.9584 12.5001 18.9584Z" fill="black" fill-opacity="0.5"/>
                    <path d="M7.08336 14.7417C6.57503 14.7417 6.10836 14.5584 5.76669 14.225C5.35836 13.8167 5.18336 13.225 5.27503 12.6L5.63336 10.0917C5.70003 9.60838 6.01669 8.98338 6.35836 8.64172L12.925 2.07505C14.5834 0.416716 16.2667 0.416716 17.925 2.07505C18.8334 2.98338 19.2417 3.90838 19.1584 4.83338C19.0834 5.58338 18.6834 6.31672 17.925 7.06672L11.3584 13.6334C11.0167 13.975 10.3917 14.2917 9.90836 14.3584L7.40003 14.7167C7.29169 14.7417 7.18336 14.7417 7.08336 14.7417ZM13.8084 2.95838L7.24169 9.52505C7.08336 9.68338 6.90003 10.05 6.86669 10.2667L6.50836 12.775C6.47503 13.0167 6.52503 13.2167 6.65003 13.3417C6.77503 13.4667 6.97503 13.5167 7.21669 13.4834L9.72503 13.125C9.94169 13.0917 10.3167 12.9084 10.4667 12.75L17.0334 6.18338C17.575 5.64172 17.8584 5.15838 17.9 4.70838C17.95 4.16672 17.6667 3.59172 17.0334 2.95005C15.7 1.61672 14.7834 1.99172 13.8084 2.95838Z" fill="black" fill-opacity="0.5"/>
                    <path d="M16.5416 8.19173C16.4832 8.19173 16.4249 8.1834 16.3749 8.16673C14.1832 7.55006 12.4416 5.8084 11.8249 3.61673C11.7332 3.2834 11.9249 2.94173 12.2582 2.84173C12.5916 2.75006 12.9332 2.94173 13.0249 3.27506C13.5249 5.05006 14.9332 6.4584 16.7082 6.9584C17.0416 7.05006 17.2332 7.40006 17.1416 7.7334C17.0666 8.01673 16.8166 8.19173 16.5416 8.19173Z" fill="black" fill-opacity="0.5"/>
                  </svg>
                  Course builder
                </NavLink>
              </li>
              <li>
                <NavLink href="/dashboard/settings">
                  <svg className="shrink-0 size-4" stroke="currentColor" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 13.4985C8.275 13.4985 6.875 12.0985 6.875 10.3735C6.875 8.64854 8.275 7.24854 10 7.24854C11.725 7.24854 13.125 8.64854 13.125 10.3735C13.125 12.0985 11.725 13.4985 10 13.4985ZM10 8.49854C8.96667 8.49854 8.125 9.3402 8.125 10.3735C8.125 11.4069 8.96667 12.2485 10 12.2485C11.0333 12.2485 11.875 11.4069 11.875 10.3735C11.875 9.3402 11.0333 8.49854 10 8.49854Z" fill="black" fill-opacity="0.5"/>
                    <path d="M12.6753 18.8653C12.5003 18.8653 12.3253 18.8403 12.1503 18.7986C11.6337 18.6569 11.2003 18.3319 10.9253 17.8736L10.8253 17.7069C10.3337 16.8569 9.65866 16.8569 9.16699 17.7069L9.07533 17.8653C8.80033 18.3319 8.36699 18.6653 7.85033 18.7986C7.32533 18.9403 6.78366 18.8653 6.32533 18.5903L4.89199 17.7653C4.38366 17.4736 4.01699 16.9986 3.85866 16.4236C3.70866 15.8486 3.78366 15.2569 4.07533 14.7486C4.31699 14.3236 4.38366 13.9403 4.24199 13.6986C4.10033 13.4569 3.74199 13.3153 3.25033 13.3153C2.03366 13.3153 1.04199 12.3236 1.04199 11.1069V9.64028C1.04199 8.42361 2.03366 7.43194 3.25033 7.43194C3.74199 7.43194 4.10033 7.29028 4.24199 7.04861C4.38366 6.80694 4.32533 6.42361 4.07533 5.99861C3.78366 5.49028 3.70866 4.89028 3.85866 4.32361C4.00866 3.74861 4.37533 3.27361 4.89199 2.98194L6.33366 2.15694C7.27533 1.59861 8.51699 1.92361 9.08366 2.88194L9.18366 3.04861C9.67533 3.89861 10.3503 3.89861 10.842 3.04861L10.9337 2.89028C11.5003 1.92361 12.742 1.59861 13.692 2.16528L15.1253 2.99028C15.6337 3.28194 16.0003 3.75694 16.1587 4.33194C16.3087 4.90694 16.2337 5.49861 15.942 6.00694C15.7003 6.43194 15.6337 6.81528 15.7753 7.05694C15.917 7.29861 16.2753 7.44028 16.767 7.44028C17.9837 7.44028 18.9753 8.43194 18.9753 9.64861V11.1153C18.9753 12.3319 17.9837 13.3236 16.767 13.3236C16.2753 13.3236 15.917 13.4653 15.7753 13.7069C15.6337 13.9486 15.692 14.3319 15.942 14.7569C16.2337 15.2653 16.317 15.8653 16.1587 16.4319C16.0087 17.0069 15.642 17.4819 15.1253 17.7736L13.6837 18.5986C13.367 18.7736 13.0253 18.8653 12.6753 18.8653ZM10.0003 15.7819C10.742 15.7819 11.4337 16.2486 11.9087 17.0736L12.0003 17.2319C12.1003 17.4069 12.267 17.5319 12.467 17.5819C12.667 17.6319 12.867 17.6069 13.0337 17.5069L14.4753 16.6736C14.692 16.5486 14.8587 16.3403 14.9253 16.0903C14.992 15.8403 14.9587 15.5819 14.8337 15.3653C14.3587 14.5486 14.3003 13.7069 14.667 13.0653C15.0337 12.4236 15.792 12.0569 16.742 12.0569C17.2753 12.0569 17.7003 11.6319 17.7003 11.0986V9.63194C17.7003 9.10694 17.2753 8.67361 16.742 8.67361C15.792 8.67361 15.0337 8.30694 14.667 7.66528C14.3003 7.02361 14.3587 6.18194 14.8337 5.36528C14.9587 5.14861 14.992 4.89028 14.9253 4.64028C14.8587 4.39028 14.7003 4.19028 14.4837 4.05694L13.042 3.23194C12.6837 3.01528 12.2087 3.14028 11.992 3.50694L11.9003 3.66528C11.4253 4.49028 10.7337 4.95694 9.99199 4.95694C9.25033 4.95694 8.55866 4.49028 8.08366 3.66528L7.99199 3.49861C7.78366 3.14861 7.31699 3.02361 6.95866 3.23194L5.51699 4.06528C5.30033 4.19028 5.13366 4.39861 5.06699 4.64861C5.00033 4.89861 5.03366 5.15694 5.15866 5.37361C5.63366 6.19028 5.69199 7.03194 5.32533 7.67361C4.95866 8.31528 4.20033 8.68194 3.25033 8.68194C2.71699 8.68194 2.29199 9.10694 2.29199 9.64028V11.1069C2.29199 11.6319 2.71699 12.0653 3.25033 12.0653C4.20033 12.0653 4.95866 12.4319 5.32533 13.0736C5.69199 13.7153 5.63366 14.5569 5.15866 15.3736C5.03366 15.5903 5.00033 15.8486 5.06699 16.0986C5.13366 16.3486 5.29199 16.5486 5.50866 16.6819L6.95033 17.5069C7.12533 17.6153 7.33366 17.6403 7.52533 17.5903C7.72533 17.5403 7.89199 17.4069 8.00033 17.2319L8.09199 17.0736C8.56699 16.2569 9.25866 15.7819 10.0003 15.7819Z" fill="black" fill-opacity="0.5"/>
                  </svg>
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink href="/dashboard/settings">
                  <svg className="shrink-0 size-4" stroke="currentColor" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.90005 12.8651C9.74172 12.8651 9.58338 12.8068 9.45838 12.6818L7.32505 10.5485C7.08338 10.3068 7.08338 9.9068 7.32505 9.66514C7.56672 9.42347 7.96672 9.42347 8.20838 9.66514L9.90005 11.3568L11.5917 9.66514C11.8334 9.42347 12.2334 9.42347 12.475 9.66514C12.7167 9.9068 12.7167 10.3068 12.475 10.5485L10.3417 12.6818C10.2167 12.8068 10.0584 12.8651 9.90005 12.8651Z" fill="black" fill-opacity="0.5"/>
                    <path d="M9.90039 12.807C9.55872 12.807 9.27539 12.5237 9.27539 12.182V3.70703C9.27539 3.36536 9.55872 3.08203 9.90039 3.08203C10.2421 3.08203 10.5254 3.36536 10.5254 3.70703V12.182C10.5254 12.5237 10.2421 12.807 9.90039 12.807Z" fill="black" fill-opacity="0.5"/>
                    <path d="M9.99967 17.8151C5.70801 17.8151 2.70801 14.8151 2.70801 10.5234C2.70801 10.1818 2.99134 9.89844 3.33301 9.89844C3.67467 9.89844 3.95801 10.1818 3.95801 10.5234C3.95801 14.0818 6.44134 16.5651 9.99967 16.5651C13.558 16.5651 16.0413 14.0818 16.0413 10.5234C16.0413 10.1818 16.3247 9.89844 16.6663 9.89844C17.008 9.89844 17.2913 10.1818 17.2913 10.5234C17.2913 14.8151 14.2913 17.8151 9.99967 17.8151Z" fill="black" fill-opacity="0.5"/>
                  </svg>
                  Log out
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {/* <!-- End Content --> */}
      </div>
    </div>
  )
}

export default Sidebar