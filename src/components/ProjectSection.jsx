import { ArrowRight, ExternalLink, Github } from "lucide-react";

const Projects = [
    {
        id: 1,
        title: "Anime Blog",
        description: "A blog website where you can read and write articles about anime.",
        image: '/projects/Anime-Blog.png',
        tags: ['React', 'Tailwind CSS', 'AppWrite', 'Redux Toolkit'],
        demoUrl: 'https://anime-blog-appwrite.netlify.app/',
        githubUrl: 'https://github.com/bhavin0409/Blog-AppWrite-Project'
    },
    {
        id: 2,
        title: "Code Reviewer",
        description: "A platform for developers to share and review code snippets.",
        image: '/projects/Code-Reviewer.png',
        tags: ['React', 'Tailwind CSS', 'Gemini-API', 'express.js', 'node.js'],
        demoUrl: 'https://code-reviewer-theta-ten.vercel.app/',
        githubUrl: 'https://github.com/bhavin0409/Code-Reviewer'
    },
    {
        id: 3,
        title: "Todo Reminder",
        description: "A platform for users to create and manage their todo lists. It allows users to add, edit, delete tasks, and set reminders.",
        image: '/projects/Todo-Reminder.png',
        tags: ['React', 'Tailwind CSS', 'Context API'],
        demoUrl: 'https://todo-context-api-pink.vercel.app/',
        githubUrl: 'https://github.com/bhavin0409/todoContextAPI'
    },
    {
        id: 4,
        title: "Currency Converter",
        description: "A tool to convert currencies with real-time exchange rates.",
        image: '/projects/currency-converter.png',
        tags: ['React', 'Tailwind CSS', 'Currency API'],
        demoUrl: 'https://currency-project-three.vercel.app/',
        githubUrl: 'https://github.com/bhavin0409/currencyProject'
    },
    {
        id: 5,
        title: "Password Maker",
        description: "A tool to generate secure passwords with various options.",
        image: '/projects/Password-Maker.png',
        tags: ['React', 'Tailwind CSS'],
        demoUrl: 'https://password-maker-mocha.vercel.app/',
        githubUrl: 'https://github.com/bhavin0409/passwordMaker'
    }
];

const ProjectSection = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured  <span className='text-primary'>Projects</span>
                </h2>

                <p className='text-center text-foreground/80 mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent projects. Each project showcases my skills in web development.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {Projects.map((project, key) => (
                        <div key={key} className='group bg-card card-hover rounded-lg overflow-hidden shadow-xs'>
                            <div className='h-fit overflow-hidden'>
                                <img src={project.image} alt={project.title} className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-105' />
                            </div>
                            <div className='p-6'>
                                <div className='flex flex-wrap gap-1 mb-1'>
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-foreground/80">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <h3 className="text-xl text-primary mt-2 mb-2 font-semibold mb-1">{project.title}</h3>
                                <p className="text-foreground/70 text-xs mb-4"> {project.description}</p>
                                
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/bhavin0409" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2 hover:text-white/80 transition-colors duration-300">Check My Github <ArrowRight /></a>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection