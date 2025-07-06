import { SparklesIcon } from '@heroicons/react/24/outline';

export default function JustForFun() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="mb-8">
        Just For Fun
      </h2>

      <div className="card max-w-md mx-auto">
        <div className="card-body flex flex-col items-center py-12">
          <SparklesIcon className="h-16 w-16 text-purple-600 mb-4" />
          <h4 className="mb-4 text-gray-700 dark:text-gray-300">
            Coming Soon
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            This section will feature my personal projects, experiments,
            and creative coding adventures. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}
