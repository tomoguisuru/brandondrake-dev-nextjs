import Image from 'next/image';

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="mb-8">
        Projects
      </h2>

      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
        A collection of simple applications
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 justify-center text-left">
        <div className="card card-side bg-base-200 shadow-sm">
          <figure>
            <Image
              src="/projects/movie-app.png"
              alt="Vite + React + TS + Appwrite"
              width={200}
              height={280}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">NextJS Movie App</h2>
            <p>A simple NextJS React application that uses TypeScript with Appwrite & TMDB for data retrieval and storage.</p>
            <div className="card-actions justify-end">
              <a href='https://movies.brandondrake.dev' target='_blank' className="link link-primary">View Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
