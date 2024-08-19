"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { auth } from '@/firebaseConfig';
import { useAuth } from '@/hooks/useAuth';

function LoadingSpinner() {
  return (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (rememberMe) {
        localStorage.setItem('rememberMe', email);
      } else {
        localStorage.removeItem('rememberMe');
      }
      router.push('/dashboard');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) return <div className='h-screen bg-white w-screen'>Loading...</div>;
  if (user) return null;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto w-full bg-white rounded-lg flex gap-14 xl:gap-20 justify-between">
        <div className='w-full md:w-1/2'>
          <Link className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80 mb-4" href="/dashboard" aria-label="Preline">
            <Image src="/images/logo-black.png" className="mr-3 h-8" alt="Learn flow Logo" width={155} height={33} />
          </Link>
          <div className="w-full p-8 shadow-sm border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-light mb-1 text-black">Welcome !</h2>
            <h1 className="text-3xl font-medium mb-2 text-black">Sign in to</h1>
            <p className="text-gray-600 mb-6">Lorem ipsum is simply</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 md:mb-6 lg:mb-8">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="w-full px-3 py-3 border border-[#282828] rounded-md focus:outline-none focus:ring-1 focus:ring-heroyellow placeholder:text-[#ABABAB] text-sm dark:text-herogray" 
                />
              </div>
              <div className="mb-4 md:mb-6 lg:mb-8">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    name="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password" 
                    className="w-full px-3 py-3 border border-[#282828] rounded-md focus:outline-none focus:ring-1 focus:ring-heroyellow placeholder:text-[#ABABAB] text-sm dark:text-herogray" 
                  />
                  <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-heroyellow focus:ring-heroyellow border-gray-300 rounded dark:text-herogray accent-black"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-herogray">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link href="/forgot-password" className="font-medium text-herogray hover:underline">
                    Forgot Password ?
                  </Link>
                </div>
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <button 
                type="submit" 
                className="w-full bg-black text-white py-3 px-4 rounded-md transition duration-300 text-sm flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner />
                    <span className="ml-2">Processing...</span>
                  </>
                ) : (
                  'Login'
                )}
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600 md:mt-8">
              Don't have an Account ? <Link href="/sign-up" className="font-medium text-black hover:underline cursor-pointer">Register</Link>
            </p>
          </div>
        </div>
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="/images/sign-up.png"
            alt="Sign up illustration"
            layout='fill'
            objectFit='contain'
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}