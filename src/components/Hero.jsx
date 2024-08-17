import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div>
      {/* <!-- Hero --> */}
      <div className="bg-herobg">
        <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 text-center">
          <h1 className="text-white text-5xl md:text-6xl leading-normal md:leading-snug">
            The free, fun, and effective way to learn a language
          </h1>
          <div className="max-w-4xl">
            <p className="mt-5 text-neutral-400 text-lg">
              Learn at your own pace with lifetime access on mobile and desktop.
            </p>
          </div>
          <Link className="group inline-flex items-center gap-x-2 py-2 px-4 whitespace-nowrap text-sm text-herobg rounded-xl bg-heroyellow mt-5" href="/">
            Start a new course!
          </Link>
          <div className="flex flex-col items-center mt-5">
            <Image
              src='/images/join-pic.png'
              width={123}
              height={45}
              objectFit="contain"
            />
            <div className="max-w-4xl">
              <p className="mt-5 text-neutral-400 text-lg">
                Join thousands of students to start coding now!
              </p>
            </div>
            <div className="mt-6">
              <Image
                src='/images/dashboard.png'
                width={979}
                height={636}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}

      {/* <!-- Clients --> */}
      <div className="relative overflow-hidden bg-[#E8E8E8]">
        <div className="relative z-10">
          <div className="max-w-5xl px-4 xl:px-0 mx-auto">

            <div className="flex justify-between gap-6 bg-[#E8E8E8]">
              <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400" enable-background="new 0 0 2499 614" viewBox="0 0 154 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M133.037 18C133.037 12.3072 137.36 8.29517 143.088 8.29517C148.816 8.29517 153.138 12.3072 153.138 18C153.138 23.6928 148.816 27.7048 143.088 27.7048C137.36 27.7048 133.037 23.6385 133.037 18ZM147.465 18C147.465 15.3434 145.789 13.3916 143.142 13.3916C140.494 13.3916 138.819 15.3434 138.819 18C138.819 20.6566 140.494 22.6084 143.142 22.6084C145.789 22.6084 147.465 20.7108 147.465 18ZM129.254 13.5C129.633 14.259 129.795 15.0723 129.795 15.9397C129.795 18 128.714 19.8976 126.985 21.3615C129.363 22.5 130.767 25.265 130.767 27.8675C130.767 32.747 126.823 36 120.825 36C114.827 36 110.882 32.8013 110.882 27.8675C110.828 25.1567 112.287 22.6627 114.665 21.3615C112.881 19.8976 111.855 18 111.855 15.9397C111.855 11.6566 115.205 8.51205 120.5 8.51205C123.635 8.51205 124.553 9.05422 126.336 9.05422C127.525 9.10843 128.768 8.78313 129.795 8.13253C130.173 7.91568 130.551 7.753 130.984 7.753C131.686 7.753 132.064 8.45783 132.064 9.3253C132.227 11.2229 131.038 12.9036 129.254 13.5ZM125.202 27.7048C125.202 25.5363 123.527 24.0181 120.879 24.0181C118.231 24.0181 116.556 25.482 116.556 27.7048C116.556 29.765 118.393 31.3915 120.879 31.3915C123.364 31.3915 125.202 29.765 125.202 27.7048ZM117.366 16.2651C117.421 18.1627 119.042 19.6807 120.987 19.6265C122.824 19.5723 124.229 18.1084 124.337 16.2651C124.337 14.3133 122.932 12.9578 120.879 12.9578C118.826 12.9578 117.366 14.259 117.366 16.2651ZM108.288 18.3795V25.1567C108.288 26.4578 107.802 27 106.397 27H104.506C103.101 27 102.615 26.4578 102.615 25.1567V18.5422C102.615 16.8615 102.344 15.6687 101.75 14.9096C101.048 14.0422 99.9669 13.6084 98.886 13.6627C97.7513 13.6084 96.6707 14.0964 95.9142 14.9096C95.2656 15.6687 94.8333 16.8615 94.8333 18.4879V25.1025C94.8333 26.4578 94.2391 26.9457 92.9422 26.9457H91.051C89.7541 26.9457 89.1596 26.4578 89.1596 25.1025V9.92167C89.1596 9.05422 89.5919 8.6747 90.2404 8.6747C91.2129 8.6747 92.5639 9.48795 93.5905 11.0603C95.1578 9.3253 97.3731 8.3494 99.6966 8.3494C102.453 8.3494 104.668 9.3253 106.127 10.9518C107.586 12.5783 108.288 14.8012 108.288 18.3795ZM78.7848 3.09035C78.7848 1.35542 80.2436 0 81.9188 0C81.9728 0 81.9728 0 82.0269 0C83.7021 0.108434 84.999 1.57229 84.8908 3.253C84.7827 4.93372 83.3238 6.23495 81.6487 6.1265C80.0276 6.0723 78.7848 4.71688 78.7848 3.09035ZM79.163 25.1567V10.8976C79.163 9.59638 79.6494 9 81.0542 9H82.9456C84.3504 9 84.8368 9.54218 84.8368 10.8976V25.1567C84.8368 26.4578 84.3504 27 82.9456 27H81.0542C79.6494 27 79.163 26.4578 79.163 25.1567ZM69.1662 25.1567V7.26505C69.1662 2.76505 71.6519 0.216868 73.7593 0.216868C74.4076 0.216868 74.84 0.650603 74.84 1.46386V25.1567C74.84 26.512 74.2998 27 72.9488 27H71.0576C69.7607 27 69.1662 26.512 69.1662 25.1567ZM45.8228 18C45.8228 12.3072 50.1455 8.29517 55.8734 8.29517C61.6012 8.29517 65.924 12.3072 65.924 18C65.924 23.6928 61.6012 27.7048 55.8734 27.7048C50.1455 27.7048 45.8228 23.6385 45.8228 18ZM60.1962 18C60.1962 15.3434 58.521 13.3916 55.8734 13.3916C53.2255 13.3916 51.5506 15.3434 51.5506 18C51.5506 20.6566 53.2255 22.6084 55.8734 22.6084C58.521 22.6084 60.1962 20.7108 60.1962 18ZM42.9048 10.8976V26.0783C42.9048 26.9458 42.4725 27.3253 41.8239 27.3253C40.8514 27.3253 39.5004 26.512 38.5276 24.994C37.0147 26.729 34.8534 27.7048 32.5297 27.6505C30.3684 27.7048 28.3151 26.9458 26.694 25.482C25.0188 23.8554 24.1001 21.3615 24.1001 17.7831V10.8976C24.1001 9.59638 24.5864 9 25.9913 9H27.8827C29.2875 9 29.7739 9.54218 29.7739 10.8976V17.2952C29.7739 19.4639 30.1522 20.6024 30.8546 21.3615C31.5031 22.0121 32.4756 22.3916 33.3943 22.3374C34.4211 22.3374 35.3936 21.9578 36.096 21.1988C36.7987 20.4397 37.1769 19.247 37.1769 17.4036V10.8976C37.1769 9.54218 37.7712 9 39.0681 9H40.9595C42.3102 9 42.9048 9.54218 42.9048 10.8976ZM20.2095 1.46386V26.0783C20.2095 26.9458 19.7772 27.3253 19.1288 27.3253C18.1562 27.3253 16.8052 26.512 15.8326 25.0483C14.6438 26.4578 12.2122 27.7048 9.40228 27.7048C3.78253 27.7048 0 23.5843 0 18C0 12.4157 3.89061 8.29517 9.40228 8.29517C11.2395 8.29517 13.0227 8.83735 14.5898 9.86747V7.26505C14.5898 2.76505 17.1295 0.216868 19.1828 0.216868C19.8313 0.216868 20.2095 0.650603 20.2095 1.46386ZM14.5898 18C14.5898 15.235 12.6445 13.3916 10.2128 13.3916C7.7812 13.3916 5.78186 15.235 5.78186 18C5.78186 20.765 7.72716 22.6084 10.2128 22.6084C12.6985 22.6084 14.5898 20.8193 14.5898 18Z" fill="black" fill-opacity="0.4"/>
              </svg>

              <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400" enable-background="new 0 0 2499 614" viewBox="0 0 187 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.5867 9.0923C62.2597 9.0923 64.3979 9.98265 66.1799 11.8227L66.2987 11.9414L68.6747 9.6265L68.6152 9.5078C66.4769 7.13355 63.2099 5.8277 59.4679 5.8277C52.1027 5.8277 46.6974 10.9324 46.6974 17.9958C46.6974 25.0592 52.0432 30.1637 59.4084 30.1637C63.1507 30.1637 66.4174 28.858 68.6152 26.4242L68.6747 26.3055L66.2987 23.9907L66.1799 24.1094C64.3979 25.9495 62.2002 26.8993 59.5867 26.8993C54.2409 26.8993 50.3802 23.1597 50.3802 17.9958C50.3802 12.8318 54.3004 9.0923 59.5867 9.0923ZM78.8317 27.0772C75.3272 27.0772 72.8919 24.5249 72.8919 20.9636C72.8919 17.3428 75.3272 14.8498 78.8317 14.8498C82.3362 14.8498 84.7714 17.3428 84.7714 20.9636C84.7714 24.5843 82.3362 27.0772 78.8317 27.0772ZM78.8317 11.7633C73.3077 11.7633 69.3279 15.6215 69.3279 20.9636C69.3279 26.3055 73.3077 30.1637 78.8317 30.1637C84.3557 30.1637 88.3352 26.3055 88.3352 20.9636C88.3352 15.6215 84.2962 11.7633 78.8317 11.7633ZM99.0269 27.0772C95.5224 27.0772 93.0277 24.5249 93.0277 20.9042C93.0277 17.2835 95.4629 14.7311 99.0269 14.7311C102.531 14.7311 104.967 17.2835 104.967 20.9042C104.967 24.5249 102.531 27.0772 99.0269 27.0772ZM104.967 14.2563C103.482 12.535 101.343 11.6446 98.7894 11.6446C93.3247 11.6446 89.5232 15.4434 89.5232 20.9042C89.5232 26.365 93.3247 30.1637 98.7894 30.1637C101.403 30.1637 103.66 29.1548 105.085 27.374V29.9263H108.471V4.64057H104.907L104.967 14.2563ZM119.875 14.7311C122.786 14.7311 124.984 16.6899 125.399 19.539H114.411C114.767 16.6899 116.906 14.7311 119.875 14.7311ZM119.875 11.7633C114.648 11.7633 110.906 15.6215 110.906 20.9636C110.906 26.365 114.827 30.1637 120.529 30.1637C123.499 30.1637 125.934 29.1548 127.597 27.2553L127.657 27.196L125.696 24.9404L125.578 25.0592C124.33 26.4242 122.667 27.1365 120.588 27.1365C117.262 27.1365 114.827 25.2373 114.351 22.21H128.607V22.0913C128.666 21.7945 128.666 21.3791 128.666 21.0823C128.726 15.5621 125.043 11.7633 119.875 11.7633ZM144.941 24.5843C143.872 26.187 142.209 27.0772 140.13 27.0772C136.507 27.0772 134.072 24.5843 134.072 20.9636C134.072 17.3428 136.566 14.8498 140.13 14.8498C142.209 14.8498 143.872 15.6809 144.941 17.3428L145.001 17.4615L147.733 15.7402L147.674 15.6215C146.248 13.1879 143.516 11.7633 140.19 11.7633C134.606 11.7633 130.508 15.6215 130.508 20.9636C130.508 26.3055 134.606 30.1637 140.19 30.1637C143.516 30.1637 146.248 28.7393 147.674 26.2463L147.733 26.1275L145.001 24.4656L144.941 24.5843ZM158.425 27.0772C154.92 27.0772 152.485 24.5249 152.485 20.9636C152.485 17.3428 154.92 14.8498 158.425 14.8498C161.929 14.8498 164.364 17.3428 164.364 20.9636C164.364 24.5843 161.929 27.0772 158.425 27.0772ZM158.425 11.7633C152.901 11.7633 148.921 15.6215 148.921 20.9636C148.921 26.3055 152.901 30.1637 158.425 30.1637C163.949 30.1637 167.928 26.3055 167.928 20.9636C167.928 15.6215 163.889 11.7633 158.425 11.7633ZM182.897 11.7633L176.838 25.6528L170.898 11.7633H167.275L175.056 29.5107L175.115 29.5702H178.561L186.342 11.7633H182.897ZM19.0328 0C8.61988 0 0.138428 8.3916 0.138428 18.6294V18.7133L3.32948 20.5595H3.41345C5.42885 19.2168 7.86413 18.7133 10.2994 19.1329C11.9789 19.4685 13.5744 20.2238 14.834 21.3986L15.4219 21.9021L15.7578 21.2308C16.0937 20.5595 16.4296 19.972 16.7655 19.3846C16.9334 19.1329 17.1014 18.965 17.2693 18.7133L17.6052 18.2937L17.1853 17.958C15.4219 16.5315 13.3225 15.5245 11.0552 15.1049C8.8718 14.6853 6.68848 14.7692 4.67308 15.4405C6.18463 8.8112 12.0629 4.1119 19.0328 4.1119C22.9796 4.1119 26.6744 5.62237 29.4457 8.3916C31.4612 10.3217 32.8047 12.7552 33.3924 15.4405C32.1329 15.021 30.7892 14.8532 29.4457 14.8532H29.1937C28.6899 14.8532 28.1859 14.937 27.5982 14.937H27.5142C27.3462 14.937 27.0944 15.021 26.9264 15.021C26.5904 15.1049 26.3387 15.1049 26.0027 15.1888L25.7507 15.2727C25.4989 15.3567 25.2469 15.4405 24.995 15.5245H24.911C24.3232 15.6923 23.8194 15.9441 23.2315 16.1958C22.9796 16.2797 22.7277 16.4475 22.4758 16.6154H22.3918C21.1322 17.3706 19.9565 18.2937 19.0328 19.4685L18.9488 19.6364C18.6969 19.972 18.5289 20.2238 18.361 20.3916C18.193 20.5595 18.1091 20.8112 17.9411 21.0629L17.8571 21.2308C17.6892 21.4825 17.6052 21.7343 17.5212 21.9021V21.986C17.2693 22.4895 17.0174 23.0769 16.8494 23.6643V23.7482C16.4296 25.091 16.1776 26.5175 16.1776 28.028V28.1957C16.1776 28.3637 16.1776 28.6155 16.1776 28.7833C16.1776 28.8673 16.1776 28.951 16.1776 29.035C16.1776 29.119 16.1776 29.2868 16.1776 29.3708V29.4545V29.6225C16.1776 29.7902 16.2616 30.042 16.2616 30.2097C16.6815 32.2237 17.6052 34.1538 19.0328 35.916L19.1168 36L19.2007 35.916C19.7886 35.2448 21.1322 33.1468 21.3001 31.888C20.6283 30.6292 20.2924 29.2028 20.2924 27.8603C20.2924 23.1609 23.9873 19.2168 28.7739 18.965H29.1097C31.0412 18.8811 32.9727 19.4685 34.5682 20.5595H34.6522L37.8432 18.7133V18.6294C37.8432 13.6783 35.9117 8.97902 32.3009 5.45455C28.7739 1.93007 24.0713 0 19.0328 0Z" fill="black" fill-opacity="0.4"/>
              </svg>

              <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400" enable-background="new 0 0 2499 614"  viewBox="0 0 141 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M61.4572 23.8979V5.56477C61.4572 2.50325 58.9717 0 55.8922 0H5.9532C2.89168 0 0.388428 2.48524 0.388428 5.56477V23.8979C0.388428 26.9595 2.87367 29.4627 5.9532 29.4627H42.1152L51.9122 36L49.9492 29.4627H55.9282C58.9717 29.4447 61.4749 26.9595 61.4572 23.8979ZM10.9417 18.4232C11.2299 18.9275 11.608 19.3237 12.0943 19.5758C12.5805 19.8459 13.1028 19.972 13.6971 19.972C14.2914 19.972 14.8317 19.8279 15.3179 19.5578C15.8041 19.2696 16.2003 18.8734 16.4705 18.3692C16.7586 17.8469 16.9027 17.2706 16.9027 16.6043V8.37418C16.9027 8.24813 16.9387 8.15808 17.0107 8.08605C17.0828 8.014 17.1728 7.978 17.2989 7.978H19.2979C19.424 7.978 19.532 8.014 19.604 8.08605C19.6401 8.12205 19.6761 8.17607 19.6941 8.2121C19.7121 8.26612 19.7301 8.32015 19.7121 8.37418V16.5863C19.7121 17.9009 19.442 18.9995 18.9017 19.9C18.3614 20.7824 17.6411 21.4487 16.7406 21.8629C15.8402 22.2951 14.8136 22.4932 13.6971 22.4932C12.5805 22.4932 11.572 22.2771 10.6536 21.8449C9.7351 21.4127 9.01475 20.7464 8.47448 19.8639C7.9342 18.9815 7.66408 17.8829 7.66408 16.5683V8.37418C7.66408 8.26612 7.70008 8.17607 7.77213 8.10405C7.80813 8.06802 7.84415 8.03203 7.88018 8.014C7.9162 7.996 7.97023 7.978 8.02425 7.978H10.1313C10.2574 7.978 10.3654 8.014 10.4195 8.08605C10.4735 8.15808 10.5095 8.24813 10.5095 8.37418V16.6043C10.5095 17.3067 10.6536 17.919 10.9417 18.4232ZM21.603 19.8459C21.603 19.9 21.6211 19.972 21.6391 20.026C21.6751 20.098 21.7111 20.1701 21.7471 20.2421C22.1973 20.9445 22.8096 21.5028 23.566 21.899C24.3224 22.2952 25.1868 22.4932 26.1414 22.4932C26.8977 22.4932 27.6359 22.3492 28.3384 22.0791C29.0407 21.7909 29.5989 21.3767 30.0492 20.8004C30.4814 20.2421 30.6977 19.5578 30.6977 18.7474C30.6977 17.901 30.4274 17.1266 29.8872 16.4602C29.3469 15.7759 28.5364 15.2896 27.4379 14.9475C27.2939 14.8935 27.1679 14.8574 27.0417 14.8214C26.9157 14.7854 26.8077 14.7494 26.7177 14.7314C26.1774 14.5873 25.7812 14.4612 25.5289 14.3532C25.2769 14.2451 25.0608 14.1191 24.9167 13.975C24.7546 13.8129 24.6826 13.6148 24.6826 13.3447C24.6826 13.0025 24.8267 12.7324 25.1148 12.5162C25.4029 12.3001 25.7992 12.1921 26.3034 12.1921C26.7897 12.1921 27.1859 12.2822 27.5099 12.4442C27.8342 12.6063 28.1402 12.8765 28.4464 13.2186C28.5544 13.3447 28.6447 13.4167 28.7527 13.4167C28.8247 13.4167 28.9147 13.3807 29.0047 13.2907L30.1392 12.3542C30.2654 12.2461 30.3374 12.1561 30.3374 12.066C30.3374 11.994 30.2834 11.886 30.1934 11.7419C29.7612 11.2016 29.2209 10.7334 28.5724 10.3732C27.9242 9.995 27.1499 9.8149 26.2314 9.8149C25.3849 9.8149 24.6466 9.977 23.9982 10.3191C23.3499 10.6613 22.8637 11.0936 22.5035 11.6338C22.1613 12.1741 21.9812 12.7143 21.9812 13.2726C21.9812 13.957 22.1073 14.5513 22.3774 15.0375C22.6476 15.5238 23.0438 15.938 23.584 16.2801C24.1243 16.6223 24.8267 16.9285 25.7092 17.1986C26.0872 17.3067 26.3214 17.3787 26.3754 17.3967C26.8077 17.5228 27.1317 17.6308 27.3299 17.7208C27.5459 17.8109 27.7082 17.919 27.8162 18.0811C27.9422 18.2431 27.9962 18.4592 27.9962 18.7474C27.9962 19.0175 27.8882 19.2696 27.6902 19.4858C27.4739 19.7019 27.2219 19.8639 26.8977 19.99C26.5914 20.098 26.2494 20.1701 25.9252 20.1701C25.3849 20.1701 24.9347 20.044 24.5745 19.7919C24.2143 19.5398 23.8722 19.1976 23.566 18.7654C23.458 18.6213 23.3499 18.5493 23.2239 18.5493C23.1518 18.5493 23.0798 18.5853 23.0077 18.6213L21.7651 19.5037C21.6571 19.6118 21.603 19.7198 21.603 19.8459ZM41.9352 18.8194C42.0432 18.8194 42.1152 18.8554 42.1694 18.9455L43.1599 20.1521C43.2319 20.2601 43.2859 20.3502 43.2859 20.4402C43.2859 20.5483 43.2319 20.6383 43.1419 20.7284C42.4214 21.3587 41.7192 21.8089 40.9987 22.097C40.2964 22.3672 39.5219 22.5112 38.7117 22.5112C37.6129 22.5112 36.5684 22.2231 35.5959 21.6648C34.6234 21.0886 33.8492 20.3322 33.2729 19.3597C32.6967 18.3872 32.4084 17.3427 32.4084 16.2081C32.4084 15.0555 32.6787 13.993 33.2189 13.0385C33.7592 12.066 34.4974 11.3096 35.4519 10.7334C36.4064 10.1571 37.4689 9.88695 38.6394 9.88695C39.5939 9.88695 40.5304 10.121 41.4669 10.5893C42.4034 11.0575 43.1779 11.7599 43.7902 12.7143C44.4024 13.6688 44.7087 14.8394 44.7087 16.2261C44.7087 16.5323 44.6727 16.7664 44.6004 16.9104C44.5284 17.0545 44.4204 17.1446 44.3124 17.1626C44.1864 17.1986 43.9882 17.2166 43.7362 17.1986H35.0917C35.2179 17.7749 35.4699 18.2792 35.8122 18.7113C36.1544 19.1436 36.5864 19.4858 37.0907 19.7199C37.5949 19.954 38.1352 20.08 38.7117 20.08C39.1619 20.08 39.5399 20.026 39.8822 19.936C40.2064 19.8459 40.4764 19.7379 40.6927 19.6118C40.9447 19.4677 41.1789 19.3056 41.3949 19.1256L41.6832 18.9095C41.7732 18.8374 41.8632 18.8194 41.9352 18.8194ZM37.1629 12.5703C36.6947 12.8044 36.2984 13.1286 35.9562 13.5248C35.6139 13.9209 35.3619 14.3712 35.1819 14.8755H42.0432C41.7552 14.083 41.3049 13.4347 40.7107 12.9485C40.1162 12.4622 39.4139 12.2281 38.6394 12.2281C38.1352 12.2101 37.6309 12.3362 37.1629 12.5703ZM48.7067 9.977H47.3199C47.0677 9.977 46.9417 10.121 46.9417 10.3912V21.881C46.9417 22.1511 47.0677 22.2771 47.3199 22.2771H49.3009C49.5709 22.2771 49.6972 22.1511 49.6972 21.881V15.1456C49.6972 14.5333 49.8052 14.029 50.0392 13.6148C50.2734 13.2006 50.5614 12.8945 50.9397 12.6964C51.2999 12.4983 51.6962 12.3902 52.1102 12.3902C52.5244 12.3902 52.9027 12.4622 53.2629 12.6063C53.6229 12.7684 53.9652 12.9485 54.2894 13.1646C54.3974 13.2366 54.5054 13.2907 54.5954 13.2907C54.7037 13.2907 54.7757 13.2366 54.8657 13.1286L55.7662 11.8499C55.8382 11.7599 55.8742 11.6698 55.8742 11.5798C55.8742 11.4537 55.8022 11.3277 55.6582 11.1836C55.2979 10.8774 54.8297 10.5713 54.2534 10.2831C53.6952 9.995 53.0827 9.85093 52.4164 9.85093C51.8042 9.85093 51.2459 9.995 50.7417 10.2831C50.2374 10.5713 49.8232 10.9675 49.4989 11.4897L49.3009 10.4272C49.2649 10.2291 49.2109 10.103 49.1027 10.049C49.0127 9.995 48.8867 9.977 48.7067 9.977Z" fill="black" fill-opacity="0.4"/>
                <path d="M65.0046 7.97803H75.3059C75.5579 7.97803 75.6842 8.1041 75.6842 8.35623V10.1751C75.6842 10.4273 75.5579 10.5713 75.3059 10.5713H71.5059V21.899C71.5059 22.1511 71.3799 22.2772 71.1276 22.2772H69.0566C68.8046 22.2772 68.6787 22.1511 68.6787 21.899V10.5533H64.9866C64.7346 10.5533 64.6084 10.4273 64.6084 10.1571V8.35623C64.6264 8.1041 64.7526 7.97803 65.0046 7.97803Z" fill="black" fill-opacity="0.4"/>
                <path d="M84.8866 18.8197C84.9946 18.8197 85.0666 18.8557 85.1206 18.9457L86.1111 20.1524C86.1831 20.2604 86.2371 20.3504 86.2371 20.4405C86.2371 20.5485 86.1831 20.6386 86.0931 20.7286C85.3729 21.359 84.6704 21.8092 83.9501 22.0973C83.2296 22.3855 82.4734 22.5115 81.6629 22.5115C80.5644 22.5115 79.5199 22.2234 78.5474 21.6651C77.5749 21.0888 76.8006 20.3324 76.2241 19.36C75.6479 18.3875 75.3599 17.3429 75.3599 16.2084C75.3599 15.0558 75.6299 13.9933 76.1701 13.0388C76.7104 12.0663 77.4489 11.3099 78.4034 10.7336C79.3579 10.1574 80.4204 9.88721 81.5909 9.88721C82.5454 9.88721 83.4999 10.1213 84.4184 10.5896C85.3549 11.0578 86.1291 11.7602 86.7414 12.7146C87.3539 13.6691 87.6599 14.8397 87.6599 16.2264C87.6599 16.5325 87.6239 16.7667 87.5519 16.9107C87.4799 17.0548 87.3719 17.1448 87.2639 17.1629C87.1376 17.1989 86.9396 17.2169 86.6874 17.2169H78.0611C78.1871 17.7932 78.4394 18.2974 78.7816 18.7296C79.1236 19.1619 79.5559 19.504 80.0601 19.7381C80.5644 19.9723 81.1046 20.0983 81.6989 20.0983C82.1491 20.0983 82.5274 20.0443 82.8696 19.9543C83.1936 19.8642 83.4639 19.7562 83.6799 19.6301C83.9321 19.486 84.1661 19.3239 84.3824 19.1438L84.6704 18.9277C84.7064 18.8377 84.7966 18.8197 84.8866 18.8197ZM80.0961 12.5706C79.6279 12.8047 79.2316 13.1288 78.8896 13.525C78.5474 13.9212 78.2954 14.3715 78.1151 14.8757H84.9946C84.7064 14.0833 84.2564 13.435 83.6619 12.9487C83.0676 12.4625 82.3654 12.2284 81.5729 12.2284C81.0686 12.2104 80.5464 12.3364 80.0961 12.5706Z" fill="black" fill-opacity="0.4"/>
                <path d="M88.4884 20.0259C88.4704 19.9718 88.4524 19.8998 88.4524 19.8458C88.4524 19.7197 88.5064 19.6117 88.6146 19.5036L89.8391 18.5671C89.8931 18.5131 89.9651 18.4771 90.0554 18.4951C90.1814 18.4951 90.3074 18.5671 90.3974 18.7112C90.7036 19.1434 91.0459 19.4856 91.4059 19.7377C91.7661 19.9898 92.2164 20.1159 92.7566 20.1159C93.0989 20.1159 93.4229 20.0619 93.7291 19.9358C94.0534 19.8098 94.3234 19.6477 94.5214 19.4316C94.7196 19.2155 94.8276 18.9633 94.8276 18.6932C94.8276 18.4051 94.7736 18.1889 94.6476 18.0269C94.5214 17.8648 94.3594 17.7567 94.1614 17.6667C93.9631 17.5766 93.6391 17.4686 93.2069 17.3425C93.1349 17.3245 92.9186 17.2705 92.5406 17.1444C91.6581 16.8743 90.9556 16.5681 90.4154 16.226C89.8751 15.8838 89.4789 15.4696 89.2089 14.9833C88.9386 14.4971 88.8126 13.9028 88.8126 13.2185C88.8126 12.6602 88.9926 12.1199 89.3349 11.5796C89.6771 11.0394 90.1814 10.6072 90.8296 10.265C91.4779 9.92282 92.2164 9.76074 93.0629 9.76074C93.9631 9.76074 94.7556 9.94082 95.4039 10.319C96.0524 10.6972 96.5926 11.1474 97.0249 11.6877C97.1329 11.8138 97.1689 11.9218 97.1689 12.0119C97.1689 12.1019 97.0969 12.21 96.9706 12.3L95.8361 13.2365C95.7281 13.3085 95.6561 13.3625 95.5841 13.3625C95.4939 13.3625 95.3859 13.2905 95.2779 13.1644C94.9896 12.8223 94.6656 12.5701 94.3414 12.39C94.0171 12.228 93.6031 12.1379 93.1349 12.1379C92.6306 12.1379 92.2344 12.246 91.9461 12.4621C91.6581 12.6782 91.5139 12.9483 91.5139 13.2905C91.5139 13.5606 91.5861 13.7587 91.7481 13.9208C91.9101 14.0829 92.1084 14.209 92.3604 14.299C92.6126 14.4071 93.0266 14.5151 93.5491 14.6772C93.6571 14.6952 93.7651 14.7312 93.8731 14.7672C93.9991 14.8033 94.1254 14.8393 94.2694 14.8933C95.3679 15.2175 96.1784 15.7217 96.7186 16.4061C97.2589 17.0904 97.5289 17.8468 97.5289 18.6932C97.5289 19.4856 97.3129 20.1699 96.8806 20.7462C96.4484 21.3045 95.8721 21.7367 95.1699 22.0249C94.4674 22.313 93.7291 22.4571 92.9726 22.4391C92.0181 22.4391 91.1539 22.241 90.3974 21.8448C89.6411 21.4486 89.0469 20.8903 88.5786 20.1879C88.5606 20.1699 88.5246 20.0979 88.4884 20.0259Z" fill="black" fill-opacity="0.4"/>
                <path d="M104.138 10.0673C104.408 10.0673 104.552 10.2114 104.552 10.4815V12.0663C104.552 12.1924 104.516 12.3004 104.426 12.3725C104.336 12.4445 104.228 12.4805 104.102 12.4805H102.716V18.4775C102.716 18.9097 102.788 19.2519 102.95 19.522C103.112 19.7742 103.382 19.9182 103.76 19.9363L104.066 19.9543C104.282 19.9723 104.426 20.0263 104.48 20.1344C104.534 20.2424 104.57 20.3685 104.552 20.4945V21.8632C104.552 22.1874 104.3 22.3495 103.814 22.3495C103.058 22.3495 102.391 22.2054 101.815 21.9172C101.221 21.6291 100.771 21.2149 100.446 20.6746C100.122 20.1344 99.9602 19.504 99.9602 18.7837V12.4985H98.8437C98.7357 12.4985 98.6274 12.4625 98.5554 12.3905C98.4654 12.3184 98.4294 12.2104 98.4294 12.0843V10.5175C98.4294 10.3735 98.4654 10.2654 98.5554 10.1754C98.6274 10.1033 98.7357 10.0673 98.8437 10.0673H99.9602V8.05032C99.9602 7.90624 99.9782 7.81619 100.032 7.74417C100.086 7.67212 100.194 7.63612 100.338 7.58209L102.301 7.00579C102.337 6.98779 102.373 6.98779 102.409 6.98779C102.445 6.98779 102.499 7.00579 102.535 7.02379C102.571 7.04182 102.607 7.07784 102.625 7.11384C102.68 7.18589 102.698 7.29394 102.698 7.41999V10.0493L104.138 10.0673Z" fill="black" fill-opacity="0.4"/>
                <path d="M107.182 5.58301H108.857C109.217 5.58301 109.397 5.78111 109.397 6.19533V7.88816C109.397 8.08626 109.361 8.23033 109.271 8.30238C109.181 8.37441 109.037 8.42843 108.857 8.42843H107.182C106.786 8.42843 106.587 8.24836 106.587 7.88816V6.19533C106.587 5.78111 106.786 5.58301 107.182 5.58301ZM106.786 10.0853C106.858 10.0132 106.948 9.97721 107.056 9.97721H109.091C109.199 9.97721 109.289 10.0132 109.361 10.0853C109.433 10.1573 109.469 10.2474 109.469 10.3734V21.8812C109.469 22.1333 109.343 22.2774 109.091 22.2774H107.056C106.804 22.2774 106.678 22.1513 106.678 21.8812V10.3734C106.678 10.2474 106.714 10.1573 106.786 10.0853Z" fill="black" fill-opacity="0.4"/>
                <path d="M114.223 22.1693C114.115 22.2413 113.971 22.2773 113.845 22.2773H112.08C111.81 22.2773 111.666 22.1333 111.666 21.8631V10.3734C111.666 10.1032 111.81 9.95917 112.08 9.95917H113.377C113.503 9.95917 113.647 10.0132 113.737 10.1032C113.845 10.1933 113.917 10.3194 113.953 10.4454L114.115 11.8321C114.584 11.1658 115.142 10.6795 115.808 10.3554C116.475 10.0312 117.195 9.86914 117.933 9.86914C118.672 9.86914 119.392 10.0492 120.094 10.4274C120.797 10.8056 121.373 11.3819 121.841 12.1563C122.292 12.9307 122.526 13.9031 122.526 15.0557V21.8451C122.526 22.1153 122.4 22.2413 122.147 22.2413H120.22C119.95 22.2413 119.806 22.1153 119.806 21.8451V15.1458C119.806 14.6775 119.698 14.2453 119.464 13.8311C119.23 13.4169 118.906 13.0747 118.51 12.8226C118.095 12.5705 117.645 12.4444 117.141 12.4444C116.709 12.4444 116.277 12.5525 115.862 12.7866C115.43 13.0207 115.088 13.3449 114.818 13.7771C114.548 14.2093 114.404 14.7135 114.404 15.2718V21.8271C114.386 21.9892 114.332 22.0792 114.223 22.1693Z" fill="black" fill-opacity="0.4"/>
                <path d="M135.888 23.4297C135.348 24.4022 134.628 25.1405 133.691 25.6448C132.755 26.149 131.674 26.3832 130.468 26.3832C129.657 26.3832 128.865 26.239 128.091 25.969C127.298 25.6987 126.632 25.3208 126.074 24.8524C125.965 24.7624 125.911 24.6723 125.911 24.5643C125.911 24.4922 125.947 24.4022 126.037 24.2761L126.848 23.1055C126.938 22.9795 127.046 22.9074 127.19 22.9074C127.298 22.9074 127.406 22.9435 127.532 23.0335C128.379 23.6278 129.423 23.9159 130.702 23.9159C131.35 23.9159 131.926 23.7719 132.431 23.4837C132.935 23.2136 133.349 22.7994 133.619 22.2951C133.907 21.7909 134.051 21.2146 134.051 20.5662V20.5303C133.511 21.1065 132.935 21.5388 132.341 21.8269C131.746 22.115 131.044 22.2591 130.252 22.2591C129.189 22.2591 128.181 22.007 127.262 21.4667C126.326 20.9444 125.587 20.2061 125.029 19.2696C124.471 18.3331 124.183 17.2706 124.201 16.082C124.201 14.9655 124.471 13.9209 125.029 12.9664C125.587 12.012 126.326 11.2376 127.262 10.6613C128.199 10.085 129.189 9.79688 130.252 9.79688C131.782 9.79688 133.097 10.3912 134.196 11.5618L134.358 10.4272C134.375 10.2471 134.43 10.121 134.502 10.049C134.574 9.97697 134.682 9.94095 134.826 9.94095H136.374C136.609 9.94095 136.735 10.085 136.735 10.3552V19.8099C136.681 21.2686 136.411 22.4572 135.888 23.4297ZM133.619 14.2271C133.295 13.6508 132.863 13.1826 132.305 12.8404C131.746 12.4982 131.134 12.3181 130.432 12.3181C129.711 12.3181 129.081 12.4982 128.523 12.8404C127.964 13.1826 127.55 13.6508 127.226 14.2451C126.92 14.8394 126.758 15.4697 126.758 16.1721C126.758 16.9104 126.92 17.5587 127.244 18.135C127.568 18.7113 128.018 19.1616 128.577 19.4857C129.135 19.8099 129.765 19.972 130.45 19.972C131.134 19.972 131.746 19.8099 132.287 19.4677C132.827 19.1255 133.259 18.6573 133.583 18.081C133.889 17.4867 134.051 16.8564 134.051 16.1721C134.088 15.4517 133.925 14.8034 133.619 14.2271Z" fill="black" fill-opacity="0.4"/>
                <path d="M139.022 9.97705C138.247 9.97705 137.617 10.6074 137.617 11.3818C137.617 12.1562 138.247 12.7865 139.022 12.7865C139.796 12.7865 140.426 12.1562 140.426 11.3818C140.426 10.6254 139.796 9.97705 139.022 9.97705ZM139.022 12.4983C138.427 12.4983 137.923 11.9941 137.923 11.3818C137.923 10.7695 138.427 10.2652 139.022 10.2652C139.616 10.2652 140.12 10.7515 140.12 11.3818C140.12 11.9941 139.616 12.4983 139.022 12.4983Z" fill="black" fill-opacity="0.4"/>
                <path d="M138.482 10.6254C138.482 10.6254 138.5 10.6074 138.518 10.6074H139.166C139.256 10.6074 139.346 10.6254 139.418 10.6794C139.49 10.7335 139.544 10.7875 139.598 10.8595C139.634 10.9316 139.67 11.0216 139.67 11.1117C139.67 11.2017 139.652 11.2737 139.598 11.3638C139.544 11.4358 139.49 11.5079 139.4 11.5439L139.688 12.1022V12.1202V12.1382H139.67H139.4C139.382 12.1382 139.382 12.1382 139.364 12.1382C139.364 12.1382 139.346 12.1202 139.346 12.1022L139.094 11.5979H138.788V12.0841C138.788 12.1202 138.77 12.1202 138.752 12.1202H138.536C138.5 12.1202 138.5 12.1022 138.5 12.0841V10.6254C138.464 10.6434 138.464 10.6254 138.482 10.6254ZM138.77 11.3638H139.094C139.148 11.3638 139.184 11.3458 139.22 11.3278C139.256 11.3098 139.292 11.2737 139.31 11.2377C139.328 11.2017 139.346 11.1657 139.346 11.1117C139.346 11.0756 139.328 11.0216 139.31 10.9856C139.292 10.9496 139.256 10.9136 139.22 10.8956C139.184 10.8775 139.148 10.8595 139.094 10.8595H138.77V11.3638Z" fill="black" fill-opacity="0.4"/>
              </svg>

              <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400" enable-background="new 0 0 2499 614" viewBox="0 0 236 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.4 23.0369C98.0177 23.0369 95.4799 21.3969 95.4799 17.7657C95.4799 14.1345 98.0177 12.4946 100.4 12.4946C102.781 12.4946 105.319 14.1345 105.319 17.7657C105.319 21.3969 102.781 23.0369 100.4 23.0369ZM109.185 17.8048C109.185 12.1041 104.929 8.7462 100.165 8.7462C95.4017 8.7462 91.5362 12.4946 91.5362 17.8048C91.5362 22.8807 95.0894 26.59 99.6187 26.8633C100.321 26.9025 103.406 26.8633 105.827 24.2863H105.905L108.716 26.8633H109.263V17.961C109.224 17.961 109.185 17.8048 109.185 17.8048ZM135.384 0.039048C136.79 0.039048 137.922 1.17137 137.922 2.577C137.922 3.98265 136.79 5.11497 135.384 5.11497C134.057 5.11497 132.924 3.98265 132.924 2.577C132.924 1.17137 134.018 0.039048 135.384 0.039048ZM133.588 26.8633H137.259V8.78525H133.588V26.8633ZM153.658 20.6161C152.76 22.295 151.042 23.0759 149.402 23.0759C147.02 23.0759 144.482 21.436 144.482 17.8048C144.482 14.1735 147.02 12.5336 149.402 12.5336C151.042 12.5336 152.76 13.3145 153.658 14.9544L157.055 12.9631C155.493 10.2299 152.642 8.66813 149.402 8.66813C144.638 8.66813 140.538 12.2213 140.538 17.7267C140.538 23.2711 144.599 26.8242 149.402 26.8242C152.642 26.8242 155.493 25.2625 157.055 22.5293L153.658 20.6161ZM80.7597 8.3948C79.3539 8.3948 77.9874 8.78525 76.8942 9.44903C76.4257 9.7614 75.4884 10.4642 75.0979 11.167H75.0199C74.6294 10.4642 73.6924 9.7614 73.2239 9.44903C72.0914 8.7462 70.7639 8.3948 69.3584 8.3948C65.1414 8.3948 61.7054 11.9089 61.7054 16.2039V26.7073H65.6099V16.2039C65.6099 14.0954 67.2889 12.3384 69.3974 12.3384C71.4667 12.3384 73.1847 14.0564 73.1847 16.2039V26.7073H77.0504V16.2039C77.0504 14.0954 78.7292 12.3384 80.8377 12.3384C82.9072 12.3384 84.6252 14.0564 84.6252 16.2039V26.7073H88.5297V16.2039C88.4127 11.8698 84.9767 8.3948 80.7597 8.3948ZM173.571 26.7073C169.822 26.7073 166.816 24.3644 166.816 20.0304V3.82647H170.603V19.718C170.603 21.8265 171.775 22.8807 173.571 22.8807V26.7073ZM226.048 23.3102C223.666 23.3102 221.128 21.6703 221.128 18.039C221.128 14.4078 223.666 12.7679 226.048 12.7679C228.43 12.7679 230.968 14.4078 230.968 18.039C230.929 21.6703 228.391 23.3102 226.048 23.3102ZM234.911 18C234.911 12.4946 230.851 8.94145 226.048 8.94145C221.48 8.94145 217.536 12.1822 217.185 17.2191V35.922H220.855V24.5206C222.378 26.7463 225.345 27.0195 226.321 27.0585H226.673H226.634C230.812 26.9805 234.911 23.5445 234.911 18ZM204.964 23.2712C202.582 23.2712 200.044 21.6312 200.044 18C200.044 14.3688 202.582 12.7289 204.964 12.7289C207.345 12.7289 209.883 14.3688 209.883 18C209.844 21.6703 207.306 23.2712 204.964 23.2712ZM213.71 18C213.71 12.2993 209.454 8.94145 204.69 8.94145C199.927 8.94145 196.061 12.6898 196.061 18C196.061 23.154 199.692 26.8243 204.261 27.0585H204.612C205.159 27.0585 206.057 26.9805 207.111 26.59C207.384 26.512 207.619 26.3558 207.892 26.2385C208.634 25.8483 209.415 25.3015 210.117 24.5206H210.196L213.163 27.0195H213.71V18ZM184.543 12.6117C186.924 12.6117 188.642 14.0174 189.345 15.9306H179.818C180.521 13.9393 182.239 12.6117 184.543 12.6117ZM188.681 21.1236C187.783 22.4121 186.3 23.1931 184.543 23.1931C181.849 23.1931 180.013 21.475 179.545 19.2104H193.367C193.406 18.82 193.445 18.3904 193.445 18C193.445 13.0022 189.462 8.9024 184.543 8.9024C179.623 8.9024 175.64 13.0022 175.64 18C175.64 22.9978 179.623 27.0975 184.543 27.0975C187.822 27.0975 190.634 25.3015 192.196 22.6464L188.681 21.1236ZM120.937 23.0759C118.556 23.0759 116.018 21.436 116.018 17.8048C116.018 14.1735 118.556 12.5336 120.937 12.5336C123.319 12.5336 125.896 14.1735 125.896 17.8048C125.935 21.475 123.358 23.0759 120.937 23.0759ZM129.801 17.7657C129.801 12.2603 125.701 8.78525 120.937 8.78525C116.174 8.78525 112.074 12.3384 112.074 17.8438C112.074 23.3883 116.174 26.9415 120.664 26.9415H121.172C122.655 26.7852 124.1 26.1995 125.232 25.1845L125.467 24.9501C125.74 24.6378 125.935 24.2473 126.013 23.8959V26.629C126.013 26.629 126.091 28.6595 124.764 30.2213C123.827 31.3927 122.343 31.9783 120.976 31.9783C119.219 31.9783 117.306 31.0413 116.486 29.089L112.855 30.6117C114.261 33.8525 117.384 35.8047 120.898 35.8047C125.701 35.8047 129.762 32.2518 129.762 26.7463L129.801 17.7657ZM42.9634 13.3926C40.9722 5.70065 34.1002 0 25.9397 0C17.7792 0 10.9072 5.70065 8.91583 13.3926C4.85511 16.9848 1.96573 21.7093 0.638184 26.9415C3.52756 25.9263 6.49501 25.1063 9.54056 24.5597C12.1176 31.2755 18.482 36 25.9397 36C33.4364 36 39.8009 31.2755 42.3389 24.5597C45.6187 25.1845 48.5862 25.9653 51.2412 26.9415C49.9137 21.7093 47.0242 16.9848 42.9634 13.3926ZM20.5124 13.0802C19.7315 15.6182 17.4278 17.1019 15.3974 16.4382C13.328 15.7744 12.3128 13.2365 13.0547 10.6985C13.7965 8.16052 16.1393 6.6768 18.1696 7.34058C20.2 7.9653 21.2542 10.5814 20.5124 13.0802ZM36.4039 16.4382C34.3344 17.1019 32.0699 15.5792 31.2889 13.0802C30.5079 10.5423 31.5622 8.00435 33.6317 7.34058C35.7012 6.6768 37.9657 8.19957 38.7467 10.6985C39.5667 13.2365 38.5124 15.7744 36.4039 16.4382Z" fill="black" fill-opacity="0.4"/>
              </svg>
              
              <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400" enable-background="new 0 0 2499 614" viewBox="0 0 187 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.5864 9.0923C62.2594 9.0923 64.3977 9.98265 66.1797 11.8227L66.2984 11.9414L68.6744 9.6265L68.6149 9.5078C66.4767 7.13355 63.2097 5.8277 59.4677 5.8277C52.1024 5.8277 46.6972 10.9324 46.6972 17.9958C46.6972 25.0592 52.0429 30.1637 59.4082 30.1637C63.1504 30.1637 66.4172 28.858 68.6149 26.4242L68.6744 26.3055L66.2984 23.9907L66.1797 24.1094C64.3977 25.9495 62.1999 26.8993 59.5864 26.8993C54.2407 26.8993 50.3799 23.1597 50.3799 17.9958C50.3799 12.8318 54.3002 9.0923 59.5864 9.0923ZM78.8314 27.0772C75.3269 27.0772 72.8917 24.5249 72.8917 20.9636C72.8917 17.3428 75.3269 14.8498 78.8314 14.8498C82.3359 14.8498 84.7712 17.3428 84.7712 20.9636C84.7712 24.5843 82.3359 27.0772 78.8314 27.0772ZM78.8314 11.7633C73.3074 11.7633 69.3277 15.6215 69.3277 20.9636C69.3277 26.3055 73.3074 30.1637 78.8314 30.1637C84.3554 30.1637 88.3349 26.3055 88.3349 20.9636C88.3349 15.6215 84.2959 11.7633 78.8314 11.7633ZM99.0267 27.0772C95.5222 27.0772 93.0274 24.5249 93.0274 20.9042C93.0274 17.2835 95.4627 14.7311 99.0267 14.7311C102.531 14.7311 104.966 17.2835 104.966 20.9042C104.966 24.5249 102.531 27.0772 99.0267 27.0772ZM104.966 14.2563C103.481 12.535 101.343 11.6446 98.7892 11.6446C93.3244 11.6446 89.5229 15.4434 89.5229 20.9042C89.5229 26.365 93.3244 30.1637 98.7892 30.1637C101.403 30.1637 103.66 29.1548 105.085 27.374V29.9263H108.471V4.64057H104.907L104.966 14.2563ZM119.875 14.7311C122.786 14.7311 124.983 16.6899 125.399 19.539H114.411C114.767 16.6899 116.905 14.7311 119.875 14.7311ZM119.875 11.7633C114.648 11.7633 110.906 15.6215 110.906 20.9636C110.906 26.365 114.826 30.1637 120.529 30.1637C123.499 30.1637 125.934 29.1548 127.597 27.2553L127.656 27.196L125.696 24.9404L125.577 25.0592C124.33 26.4242 122.667 27.1365 120.588 27.1365C117.262 27.1365 114.826 25.2373 114.351 22.21H128.607V22.0913C128.666 21.7945 128.666 21.3791 128.666 21.0823C128.726 15.5621 125.043 11.7633 119.875 11.7633ZM144.941 24.5843C143.872 26.187 142.209 27.0772 140.13 27.0772C136.507 27.0772 134.071 24.5843 134.071 20.9636C134.071 17.3428 136.566 14.8498 140.13 14.8498C142.209 14.8498 143.872 15.6809 144.941 17.3428L145.001 17.4615L147.733 15.7402L147.673 15.6215C146.248 13.1879 143.516 11.7633 140.189 11.7633C134.606 11.7633 130.507 15.6215 130.507 20.9636C130.507 26.3055 134.606 30.1637 140.189 30.1637C143.516 30.1637 146.248 28.7393 147.673 26.2463L147.733 26.1275L145.001 24.4656L144.941 24.5843ZM158.424 27.0772C154.92 27.0772 152.485 24.5249 152.485 20.9636C152.485 17.3428 154.92 14.8498 158.424 14.8498C161.929 14.8498 164.364 17.3428 164.364 20.9636C164.364 24.5843 161.929 27.0772 158.424 27.0772ZM158.424 11.7633C152.9 11.7633 148.921 15.6215 148.921 20.9636C148.921 26.3055 152.9 30.1637 158.424 30.1637C163.948 30.1637 167.928 26.3055 167.928 20.9636C167.928 15.6215 163.889 11.7633 158.424 11.7633ZM182.896 11.7633L176.838 25.6528L170.898 11.7633H167.275L175.056 29.5107L175.115 29.5702H178.56L186.341 11.7633H182.896ZM19.0325 0C8.61963 0 0.138184 8.3916 0.138184 18.6294V18.7133L3.32923 20.5595H3.41321C5.42861 19.2168 7.86388 18.7133 10.2991 19.1329C11.9786 19.4685 13.5742 20.2238 14.8338 21.3986L15.4216 21.9021L15.7575 21.2308C16.0934 20.5595 16.4293 19.972 16.7652 19.3846C16.9332 19.1329 17.1011 18.965 17.2691 18.7133L17.605 18.2937L17.1851 17.958C15.4216 16.5315 13.3222 15.5245 11.0549 15.1049C8.87156 14.6853 6.68823 14.7692 4.67283 15.4405C6.18438 8.8112 12.0626 4.1119 19.0325 4.1119C22.9794 4.1119 26.6742 5.62237 29.4454 8.3916C31.4609 10.3217 32.8044 12.7552 33.3922 15.4405C32.1327 15.021 30.7889 14.8532 29.4454 14.8532H29.1934C28.6897 14.8532 28.1857 14.937 27.5979 14.937H27.5139C27.3459 14.937 27.0942 15.021 26.9262 15.021C26.5902 15.1049 26.3384 15.1049 26.0024 15.1888L25.7504 15.2727C25.4987 15.3567 25.2467 15.4405 24.9948 15.5245H24.9108C24.323 15.6923 23.8191 15.9441 23.2313 16.1958C22.9794 16.2797 22.7274 16.4475 22.4755 16.6154H22.3915C21.1319 17.3706 19.9563 18.2937 19.0325 19.4685L18.9486 19.6364C18.6966 19.972 18.5287 20.2238 18.3607 20.3916C18.1928 20.5595 18.1088 20.8112 17.9409 21.0629L17.8569 21.2308C17.6889 21.4825 17.605 21.7343 17.521 21.9021V21.986C17.2691 22.4895 17.0171 23.0769 16.8492 23.6643V23.7482C16.4293 25.091 16.1774 26.5175 16.1774 28.028V28.1957C16.1774 28.3637 16.1774 28.6155 16.1774 28.7833C16.1774 28.8673 16.1774 28.951 16.1774 29.035C16.1774 29.119 16.1774 29.2868 16.1774 29.3708V29.4545V29.6225C16.1774 29.7902 16.2614 30.042 16.2614 30.2097C16.6812 32.2237 17.605 34.1538 19.0325 35.916L19.1165 36L19.2005 35.916C19.7883 35.2448 21.1319 33.1468 21.2999 31.888C20.6281 30.6292 20.2922 29.2028 20.2922 27.8603C20.2922 23.1609 23.9871 19.2168 28.7737 18.965H29.1094C31.0409 18.8811 32.9724 19.4685 34.5679 20.5595H34.6519L37.8429 18.7133V18.6294C37.8429 13.6783 35.9114 8.97902 32.3007 5.45455C28.7737 1.93007 24.071 0 19.0325 0Z" fill="black" fill-opacity="0.4"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero