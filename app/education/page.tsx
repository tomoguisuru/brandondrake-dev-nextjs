import { AcademicCapIcon, CpuChipIcon } from '@heroicons/react/24/outline';

interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  duration: string;
  description?: string;
}

interface Skill {
  category: string;
  technologies: string[];
}

const education: Education[] = [
  {
    institution: "Weber State University",
    degree: "Bachelor of Science",
    field: "Computer Science - Software Engineering",
    location: "Ogden, UT",
    duration: "2008 - 2010",
    description: "Focused on software engineering principles, algorithms, and system design."
  }
];

const skills: Skill[] = [
  {
    category: "Frontend",
    technologies: ["React", "Vue", "EmberJS", "Lit", "Svelte", "HTML", "CSS", "SCSS", "JavaScript", "TypeScript"]
  },
  {
    category: "Backend",
    technologies: ["NodeJS", "Express", "Rails", "FastAPI", "ASP.NET", "Python", "Ruby", "C#"]
  },
  {
    category: "Tools & DevOps",
    technologies: ["Git", "CI/CD", "REST", "OpenAPI", "Swagger", "AI Prompt Engineering", "Docker"]
  },
  {
    category: "Security/Auth",
    technologies: ["JWT", "SAML", "OIDC"]
  }
];

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="mb-8 text-center">
        Education & Skills
      </h2>

      {/* Education Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <AcademicCapIcon className="h-8 w-8 text-blue-600 mr-3" />
          <h3>
            Education
          </h3>
        </div>

        <ol className="space-y-6">
          {education.map((edu, index) => (
            <li key={index}>
              <div className="card hover:shadow-lg transition-shadow duration-300">
                <div className='card-body'>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h5 className="font-bold text-blue-600 mb-2">
                        {edu.institution}
                      </h5>
                      <h6 className="text-gray-700 dark:text-gray-300 mb-1">
                        {edu.degree}
                      </h6>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {edu.field}
                      </p>
                      {edu.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {edu.description}
                        </p>
                      )}
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {edu.location}
                      </p>
                      <p className="text-sm font-medium">
                        {edu.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Skills Section */}
      <div>
        <div className="flex items-center mb-6">
          <CpuChipIcon className="h-8 w-8 text-blue-600 mr-3" />
          <h3>
            Technical Skills
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillCategory, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
              <div className='card-body'>
                <h5 className="font-bold text-blue-600 mb-4">
                  {skillCategory.category}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="badge badge-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
