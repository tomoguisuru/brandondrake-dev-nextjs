import { RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="mb-8">
        Projects
      </h2>

      <div className="card max-w-md mx-auto">
        <div className="card-body flex flex-col items-center py-12">
          <RocketLaunchIcon className="h-16 w-16 text-blue-600 mb-4" />
          <h4 className="mb-4 text-gray-700 dark:text-gray-300">
            Coming Soon
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            I&apos;m currently working on showcasing my latest projects here.
            Check back soon to see some exciting work!
          </p>
        </div>
      </div>
    </div>
  );
}
