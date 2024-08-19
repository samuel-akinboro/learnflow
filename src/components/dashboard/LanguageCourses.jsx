"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { db } from '@/firebaseConfig';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { useAuth } from '@/hooks/useAuth';

const LanguageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useAuth();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesCollection = collection(db, 'courses');
        const coursesQuery = query(
          coursesCollection,
          where("authorId", "==", user?.uid),
        );
        const coursesSnapshot = await getDocs(coursesQuery);
        const coursesList = coursesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCourses(coursesList);
      } catch (error) {
        console.error("Error fetching language courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [user]);

  if (loading) {
    return <div className="text-center py-10">Loading language courses...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h2 className="text-2xl font-medium mb-4 dark:text-black">Language Courses</h2>
      {courses?.length > 0 && <p className="text-herogray mb-6 text-sm">Choose from one over many of course and learn with industry leading experts.</p>}
      {courses?.length === 0 && <p className="text-herogray mb-6 text-sm">You have not created any course</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
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
              <h3 className="text-lg mb-2">{course?.title}</h3>
              <p className="text-herogray text-sm mb-4">{course?.description}</p>
              <div className="flex justify-between items-center border-t border-[#55555534] pt-4">
                <span className="text-gray-500 text-xs">By <span className='text-black text-sm'>{course?.author?.displayName || 'Unknown'}</span></span>
                <span className="">${course?.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {courses?.length === 0 && <div className="text-center mt-8">
        <Link href="/dashboard/create-course" className="bg-heroyellow hover:bg-yellow-300 text-black text-sm py-2.5 px-6 rounded-2xl">
          Create course
        </Link>
      </div>}
      
      {courses?.length > 4 && <div className="text-center mt-8">
        <Link href="/dashboard/all-courses" className="bg-heroyellow hover:bg-yellow-300 text-black text-sm py-2.5 px-6 rounded-2xl">
          View all courses
        </Link>
      </div>}
    </div>
  );
};

export default LanguageCourses;