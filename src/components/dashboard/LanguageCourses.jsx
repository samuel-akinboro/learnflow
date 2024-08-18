import Image from 'next/image';
import Link from 'next/link';

const LanguageCourses = () => {
  const courses = [
    {
      title: 'Introduction to CSS language',
      description: 'Learn the basics of CSS and its usefulness in the programming world',
      image: '/images/ln-1.png',
      author: 'ATO',
      price: 29,
    },
    {
      title: 'Introduction to Python language',
      description: 'Learn the basics of Python and its usefulness in the programming world',
      image: '/images/ln-1.png',
      author: 'ATO',
      price: 30,
    },
    {
      title: 'Introduction to JavaScript language',
      description: 'Learn the basics of JavaScript and its usefulness in the programming world',
      image: '/images/ln-1.png',
      author: 'ATO',
      price: 50,
    },
    {
      title: 'Introduction to HTML language',
      description: 'Learn the basics of HTML and its usefulness in the programming world',
      image: '/images/ln-1.png',
      author: 'ATO',
      price: 34,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h2 className="text-2xl font-medium mb-4 dark:text-black">Language Courses</h2>
      <p className="text-herogray mb-6 text-sm">Choose from one over many of course and learn with industry leading experts.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <Link key={index} className="bg-white rounded-lg shadow-sm overflow-hidden" href={`/dashboard/all-courses/${index}`}>
            <div className="relative h-48">
              <Image 
                src={course.image} 
                alt={course.title} 
                layout="fill" 
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg mb-2">{course.title}</h3>
              <p className="text-herogray text-sm mb-4">{course.description}</p>
              <div className="flex justify-between items-center border-t border-[#55555534] pt-4">
                <span className="text-gray-500 text-xs">By <span className='text-black text-sm'>{course.author}</span></span>
                <span className="">${course.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="bg-heroyellow hover:bg-yellow-300 text-black text-sm py-2.5 px-6 rounded-2xl">
          View all courses
        </button>
      </div>
    </div>
  );
};

export default LanguageCourses;