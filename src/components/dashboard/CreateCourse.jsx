"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CreateCourse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Course data:', courseData);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div 
        className="bg-white rounded-lg shadow-sm p-8 cursor-pointer flex items-center justify-center md:max-w-72 md:h-64"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl">Create a new course</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm text-black mb-1">Course Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={courseData.title}
                    onChange={handleInputChange}
                    placeholder="Add course title"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm font-light placeholder:text-herogray bg-zinc-100"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm text-black mb-1">Course Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={courseData.description}
                    onChange={handleInputChange}
                    placeholder="Add course description"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm font-light placeholder:text-herogray bg-zinc-100 resize-none"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="image" className="block text-sm text-black mb-1">Course Image</label>
                  <label htmlFor="image" className="flex items-center gap-3 px-3 py-2.5 border border-gray-300 rounded-lg bg-zinc-100 cursor-pointer">
                    <span className="text-sm font-light text-herogray">Upload image</span>
                    <label htmlFor="image" className="cursor-pointer">
                    <svg className='w-5 h-5' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="16" fill="white"/>
                      <path d="M12 14.3333C12 12.3082 13.6416 10.6666 15.6667 10.6666C17.4605 10.6666 18.9547 11.9554 19.2714 13.6577C19.3158 13.8964 19.4865 14.0921 19.7169 14.1686C21.0441 14.6087 22 15.8602 22 17.3333C22 19.1742 20.5076 20.6666 18.6667 20.6666C18.2985 20.6666 18 20.9651 18 21.3333C18 21.7014 18.2985 21.9999 18.6667 21.9999C21.244 21.9999 23.3334 19.9106 23.3334 17.3333C23.3334 15.4049 22.1642 13.7512 20.4976 13.0396C19.9273 10.9053 17.9812 9.33325 15.6667 9.33325C12.9053 9.33325 10.6667 11.5718 10.6667 14.3333C10.6667 14.4001 10.668 14.4667 10.6706 14.533C9.47367 15.2235 8.66669 16.5169 8.66669 17.9999C8.66669 20.2091 10.4575 21.9999 12.6667 21.9999C13.0349 21.9999 13.3334 21.7014 13.3334 21.3333C13.3334 20.9651 13.0349 20.6666 12.6667 20.6666C11.1939 20.6666 10 19.4727 10 17.9999C10 16.895 10.6721 15.9456 11.6325 15.541C11.9103 15.424 12.0751 15.135 12.0341 14.8362C12.0117 14.6721 12 14.5042 12 14.3333Z" fill="#475367"/>
                      <path d="M15.5571 17.5016C15.8097 17.2771 16.1903 17.2771 16.4429 17.5016L17.4429 18.3905C17.7181 18.6351 17.7429 19.0565 17.4983 19.3317C17.2843 19.5725 16.935 19.6216 16.6667 19.4663V22.6666C16.6667 23.0348 16.3682 23.3333 16 23.3333C15.6318 23.3333 15.3334 23.0348 15.3334 22.6666V19.4663C15.065 19.6216 14.7157 19.5725 14.5017 19.3317C14.2571 19.0565 14.2819 18.6351 14.5571 18.3905L15.5571 17.5016Z" fill="#475367"/>
                    </svg>
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleInputChange}
                      className="hidden"
                      accept="image/*"
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm text-black mb-1">Add Price</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={courseData.price}
                    onChange={handleInputChange}
                    placeholder="$99"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm font-light placeholder:text-herogray bg-zinc-100"
                    required
                  />
                </div>
                <button type='submit' className="bg-heroyellow hover:bg-yellow-300 text-black text-sm py-2.5 px-6 rounded-2xl w-full mt-6">
                  Create course
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CreateCourse;