import { LinkIcon } from '@heroicons/react/24/outline';

interface SocialLink {
  name: string;
  url: string;
  description: string;
  icon: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/brandon-drake-6b362050/",
    description: "Connect with me professionally and view my career journey",
    icon: "💼",
    color: "bg-blue-600 hover:bg-blue-700"
  },
  {
    name: "GitHub",
    url: "https://github.com/tomoguisuru",
    description: "Explore my code repositories and open source contributions",
    icon: "🐙",
    color: "bg-gray-800 hover:bg-gray-900"
  }
];

export default function Links() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* <h2 className="mb-8 text-center">
        Connect With Me
      </h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialLinks.map((link, index) => (
          <div key={index} className="card">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">{link.icon}</div>
              <h4 className="mb-4 text-gray-700 dark:text-gray-300">
                {link.name}
              </h4>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                {link.description}
              </p>
              <a
                href={link.url}
                target='_blank'
                className={`btn ${link.color} text-white flex items-center justify-center gap-2 mx-auto`}
              >
                <LinkIcon className="h-5 w-5" />
                Visit {link.name}
              </a>
            </div>
          </div>
        ))}

      </div>

      <div className="card mt-8">
        <div className="card-name text-center">
          <h5 className="mb-4">
            Get In Touch
          </h5>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            I&apos;m always interested in discussing new opportunities,
            collaborating on projects, or just having a chat about technology.
          </p>
          <p className="text-blue-600 font-medium">
            Feel free to reach out through any of the platforms above!
          </p>
        </div>
      </div>
    </div>
  );
}
