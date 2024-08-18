"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { db } from '@/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAuth } from '@/hooks/useAuth';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useAuth();

  useEffect(() => {
    const fetchCourses = async () => {
      if (!user) {
        console.log('no user')
        setLoading(false);
        return;
      }

      try {
        const coursesCollection = collection(db, 'courses');
        const coursesQuery = query(coursesCollection, where("authorId", "==", user?.uid));
        const coursesSnapshot = await getDocs(coursesQuery);
        const coursesList = coursesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCourses(coursesList);
        console.log({coursesList})
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [user]);

  if (loading) {
    return <div className="text-center py-10">Loading courses...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto py-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses?.map((course) => (
          <Link key={course?.id} className="bg-white rounded-lg shadow-sm overflow-hidden" href={`/dashboard/all-courses/${course?.id}`}>
            <div className="relative h-48">
              <Image 
                src={course?.imageUrl || '/images/ln-1.png'} 
                alt={course?.title} 
                layout="fill" 
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg mb-2 dark:text-herogray">{course?.title}</h3>
              <p className="text-herogray text-sm mb-4">{course?.description}</p>
              <div className="flex justify-between items-center border-t border-[#55555534] pt-4">
                <span className="text-gray-500 text-xs">By <span className='text-black text-sm'>{course?.author?.displayName || 'ATO'}</span></span>
                <span className="">${course?.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {courses.length > 4 && (
        <div className="text-center mt-8">
          <button className="bg-heroyellow hover:bg-yellow-300 text-black text-sm py-2.5 px-6 rounded-2xl">
            View all courses
          </button>
        </div>
      )}
    </div>
  );
};

export default AllCourses;