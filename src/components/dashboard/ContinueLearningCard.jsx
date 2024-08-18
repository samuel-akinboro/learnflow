import Image from 'next/image'

const ContinueLearningCard = ({
  image,
  title,
  description,
  progress
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex">
      <div className="flex-shrink-0 w-28 relative">
        <Image src={image} alt={title} layout='fill' objectFit='cover' />
      </div>
      <div className='flex-grow p-4 flex flex-col justify-between'>
        <div>
          <h3 className="text-xs mb-1 text-herogray lg:text-sm">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div 
            className="bg-yellow-400 h-2.5 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ContinueLearningCard