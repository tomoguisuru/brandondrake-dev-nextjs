import Image from 'next/image';

export default function Projects() {

  const projects = [
    {
      img: "movie-app.png",
      alt: "Vite + React + TS + Appwrite",
      title: "Trending Movies App",
      description: "A simple React application that uses Vite, TypeScript, Appwrite & TMDB API.",
      link: "https://movies.brandondrake.dev",
    },
    {
      img: "budget-app.png",
      alt: "React + TS + Local Store",
      title: "Budget Tracker",
      description: "Simple budget app using React + Bootstrap Components to track budget data in local store",
      link: "https://budget.brandondrake.dev",
    },
  ] as const;

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="mb-8">
        Projects
      </h2>

      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
        A collection of simple applications
      </p>

      {projects.map((project, idx) => (
        <div key={`project-${idx}`} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 justify-center text-left">
        <div className="card card-side bg-base-200 shadow-sm">
          <figure>
            <Image
              src={`/projects/${project.img}`}
              alt={project.alt}
              width={200}
              height={280}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{project.title}</h2>
            <p>{project.description}</p>
            <div className="card-actions justify-end">
              <a href={project.link} target='_blank' className="link link-primary">View Demo</a>
            </div>
          </div>
        </div>
      </div>
      ))}

    </div>
  );
}
