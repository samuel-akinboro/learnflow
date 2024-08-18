"use client";
import { db } from '@/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CourseDetails({author}) {
  return (
    <div className="max-w-sm mx-auto bg-white flex-shrink-0 lg:w-[350px]">
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-sm border border-gray-300 overflow-hidden p-6">
        <h2 className="text-base font-medium mb-4 dark:text-black">Course Details</h2>
        <div className="space-y-2">
          <div className="flex justify-between border-b border-gray-300 pb-1 mb-3">
            <span className="text-herogray text-sm">Author:</span>
            <span className="text-sm text-black capitalize">{author?.displayName}</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 pb-1">
            <span className="text-herogray text-sm">Level:</span>
            <span className="text-sm text-black">Beginner</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 pb-1 pt-1">
            <span className="text-herogray text-sm">Lessons:</span>
            <span className="text-sm text-black">14</span>
          </div>
        </div>
        <button className="w-full bg-heroyellow text-black text-sm py-2 px-4 rounded-2xl mt-6 hover:bg-yellow-400 transition duration-300">
          Buy Now
        </button>
      </div>
      <div className="mt-4">
        <Link href="/next-course" className="text-herogray mx-auto text-sm block text-center border-gray-300 border py-2 rounded-2xl w-4/5">
          Next Course
        </Link>
      </div>
    </div>
  );
}