"use client";
import Breadcrumb from '@/components/dashboard/Breadcrumb'
import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'

const SettingsPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);
  return (
    <div className='bg-[#F5F6F7] min-h-screen'>
      <Header />
      <div className="-mt-px">
        <Breadcrumb page='settings' />
      </div>
      <Sidebar />

      {/* <!-- Content --> */}
      <div className="w-full lg:ps-64 xl:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-2xl font-medium mb-4 dark:text-black">Edit Profile</h1>
            
            <hr className="my-8 border-gray-200" />
            <div className="">
              <form>
                <section className="mb-8">
                  <h2 className="text-lg font-medium mb-4 dark:text-black">Edit Details</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm text-herogray mb-1">First Name (required)</label>
                      <input type="text" id="firstName" name="firstName" required className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-zinc-100 dark:text-herogray" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm text-herogray mb-1">Last Name (required)</label>
                      <input type="text" id="lastName" name="lastName" required className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-zinc-100 dark:text-herogray" defaultValue="ATO" />
                    </div>
                    <div>
                      <label htmlFor="nickname" className="block text-sm text-herogray mb-1">Nickname (required)</label>
                      <input type="text" id="nickname" name="nickname" required className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-zinc-100 dark:text-herogray" />
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-lg font-medium mb-4 dark:text-black">Login Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm text-herogray mb-1">Current Password (required)</label>
                      <input type="password" id="currentPassword" name="currentPassword" required className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-zinc-100 dark:text-herogray" />
                    </div>
                    <div className="text-right">
                      <a href="#" className="text-sm text-black underline-offset-2 underline">Can't remember password?</a>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-herogray mb-1">Account Email</label>
                      <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-zinc-100 dark:text-herogray bg-gray-100" value="ayo1010@gmail.com" readOnly />
                    </div>
                    <div>
                      <label htmlFor="newPassword" className="block text-sm text-herogray mb-1">Add new password</label>
                      <div className="relative">
                        <input 
                          type={showPassword ? "text" : "password"} 
                          id="newPassword" 
                          name="newPassword" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-zinc-100 dark:text-herogray pr-10" 
                        />
                        <button 
                          type="button" 
                          className="absolute inset-y-0 right-0 pr-3 flex items-center" 
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm text-herogray mb-1">Confirm new password</label>
                      <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-3 py-2 border border-gray-300 rounded-xl bg-zinc-100 dark:text-herogray" />
                    </div>
                  </div>
                </section>

                <button type='submit' className="bg-heroyellow hover:bg-yellow-300 text-black text-sm py-2.5 px-6 rounded-2xl mb-4">
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage