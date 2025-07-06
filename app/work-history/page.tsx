'use client';

import { useState } from 'react';

interface WorkExperience {
  company: string;
  position: string;
  location: string;
  duration: string;
  achievements: string[];
  technologies?: string[];
}

const workExperience: WorkExperience[] = [
  {
    company: "Uplynk",
    position: "Senior Full-Stack Engineer",
    location: "Orlando, FL (Remote)",
    duration: "03/2019 - 06/2025",
    achievements: [
      "Led a multi-tenant refactor, allowing SSO and SAML federation of thousands of users",
      "Architected secure API authentication, enabling least-privilege third-party access using JWT",
      "Built APIs powering content delivery at scale to support millions of concurrent viewers",
      "Built advanced UI/UX, enabling enterprise-scale management of million+ assets and channels",
      "Implemented OpenAPI 3.0 and Swagger to reduce customers' time-to-data by 4x",
      "Reduced unit test creation time by over 50% using AI tooling",
      "Integrated reusable web components into modern stacks, unifying UI across platforms and frameworks"
    ],
    technologies: ["React", "NodeJS", "JWT", "SAML", "OpenAPI", "Swagger", "AI Tools"]
  },
  {
    company: "Popular Pays Inc",
    position: "Senior Full-Stack Engineer",
    location: "Chicago, IL (Remote)",
    duration: "01/2018 - 03/2019",
    achievements: [
      "Led small team to enabling influencers to launch campaigns across social media platforms",
      "Collaborated with design, delivering impactful and consistent experiences across browsers",
      "Developed accessible, extensible, and high-performing UI components with EmberJS",
      "Optimized JavaScript, Ruby on Rails, and SQL queries to improve performance and readability"
    ],
    technologies: ["EmberJS", "Ruby on Rails", "JavaScript", "SQL"]
  },
  {
    company: "Teem",
    position: "Senior Frontend Engineer",
    location: "Salt Lake City, UT (Hybrid)",
    duration: "07/2015 - 12/2017",
    achievements: [
      "Owned multiple EmberJS applications and internal tools as the Senior Frontend Engineer",
      "Optimized frontend architecture from displaying fewer than 100 deployments to more than 1000",
      "Defined Git workflows and CI/CD pipelines resulting in builds running over 100x faster",
      "Mentored developers, resulting in 40% faster onboarding and increased code review quality",
      "Built reusable UI components and internal libraries to accelerate development by 5x"
    ],
    technologies: ["EmberJS", "Git", "CI/CD", "JavaScript", "HTML", "CSS"]
  }
];

export default function WorkHistory() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="mb-8 text-center">
        Work History
      </h2>

      <div className="relative">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className="timeline-item cursor-pointer"
            onClick={() => toggleExpanded(index)}
            onMouseEnter={() => setExpandedItem(index)}
            onMouseLeave={() => setExpandedItem(null)}
          >
            <div className="card hover:shadow-lg transition-shadow duration-300">
              <div className='card-body'>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h5 className="font-bold text-blue-600">
                      {job.company}
                    </h5>
                    <h6 className="text-gray-700 dark:text-gray-300">
                      {job.position}
                    </h6>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {job.location}
                    </p>
                    <p className="text-sm font-medium">
                      {job.duration}
                    </p>
                  </div>
                </div>

                {/* Expanded content */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  expandedItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h6 className="mb-3">
                      Key Achievements:
                    </h6>
                    <ul className="space-y-2 mb-4">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <p className="text-sm">
                            {achievement}
                          </p>
                        </li>
                      ))}
                    </ul>

                    {job.technologies && (
                      <div>
                        <h6 className="mb-2">
                          Technologies Used:
                        </h6>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <div
                              key={techIndex}
                              className="badge badge-sm bg-blue-100 text-blue-800"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile tap instruction */}
                <div className="md:hidden mt-2">
                  <p className="text-xs text-gray-500 text-center">
                    Tap to {expandedItem === index ? 'collapse' : 'expand'} details
                  </p>
                </div>

                {/* Desktop hover instruction */}
                <div className="hidden md:block mt-2">
                  <p className="text-xs text-gray-500 text-center">
                    Hover to view details
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
