
import { CodeBracketIcon, RocketLaunchIcon, UserIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="mb-6 text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Brandon Drake
        </h1>
        <h3 className="mb-4 text-gray-700 dark:text-gray-300">
          Senior Fullstack Software Engineer
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          I&apos;m passionate about creating scalable, secure, and performant
          software solutions with over a decade of experience in SaaS and and 6+ years on video delivery platforms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <Link href="/about">
            <button className="btn bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
              <ChatBubbleLeftIcon className="h-5 w-5" />
              Blog
            </button>
          </Link> */}
          <Link href="/projects">
            <button className="btn btn-outline flex items-center gap-2">
              <CodeBracketIcon className="h-5 w-5" />
              Projects
            </button>
          </Link>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 justify-center">
        <div className="card">
          <div className="card-body text-center">
            <CodeBracketIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h5 className="mb-2">
              15+ Years Experience
            </h5>
            <p className="text-gray-600 dark:text-gray-400">
              Extensive experience in full-stack development, from startups to growth-stage companies.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <RocketLaunchIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h5 className="mb-2">
              Scalable Solutions
            </h5>
            <p className="text-gray-600 dark:text-gray-400">
              Built APIs and systems supporting millions of concurrent viewers and enterprise-scale management.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <UserIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h5 className="mb-2">
              UI Creation
            </h5>
            <p className="text-gray-600 dark:text-gray-400">
              Built rich, user interfaces using Frontend Frameworks such as React, Ember, Vue, Aurelia, and others.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <UserIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h5 className="mb-2">
              Team Leadership
            </h5>
            <p className="text-gray-600 dark:text-gray-400">
              Led teams, mentored developers, and improved onboarding processes.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="card bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="card-body text-center">
          <h4 className="mb-4">
            Let&apos;s Connect
          </h4>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            I&apos;m always interested in discussing new opportunities, collaborating on projects,
            or just having a chat about technology.
          </p>
          <Link href="/contact">
            <button className="btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
