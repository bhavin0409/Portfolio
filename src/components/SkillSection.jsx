import React, { useState } from 'react'
import { cn } from '@/lib/utils'

const skills = [
    //Frontend
    { name: "HTML" , category: "Frontend" },
    { name: "CSS" , category: "Frontend"},
    { name: "JavaScript" , category: "Frontend"},
    { name: "Tailwind CSS" , category: "Frontend"},
    { name: "Bootstrap" , category: "Frontend"},
    { name: "React" , category: "Frontend"},
    { name: "Redux Toolkit" , category: "Frontend"},

    //Backend
    { name: "Node.js" , category: "Backend"},
    { name: "Express.js" , category: "Backend"},
    { name: "REST APIs" , category: "Backend"},
    { name: "AppWrite" , category: "Backend"},


    //Database
    { name: "MongoDB" , category: "Database"},
    { name: "MySQL" , category: "Database"},
    { name: "MongoDB Atlas" , category: "Database"},
    { name: "Mongoose" , category: "Database"},
    { name: "MongoDB Chart" , category: "Database"},

    //Version Control
    { name: "Git" , category: "Version Control"},
    { name: "GitHub" , category: "Version Control" },

    //others
    { name: "Java" , category: "Others"},
    { name: "Python" , category: "Others"},
    { name: "Dart" , category: "Others" },
    { name: "Postman" , category: "Others"}
]

const categories = ['All' , 'Frontend' , 'Backend' , 'Database' , 'Version Control' , 'Others'];

const SkillSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory)

    return (
        <section id='skills' className='py-25 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My <span className='text-primary'>Skills</span>
                </h2>

                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {categories.map((category, key) => (
                        <button 
                        key={key} 
                        className={cn('px-5 py-2 rounded-full hover:text-primary transition-colors duration-300 capitalize',
                            activeCategory === category ? 'bg-primary text-primary-foreground hover:text-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                        )} 
                        onClick={() => setActiveCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredSkills.map((skill , key) => (
                        <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                            <div className='flex flex-row justify-between'>
                                <h3 className='font-semibold text-sm text-left'> { skill.name} </h3>
                                <h3 className='text-xs text-primary/80 text-right'>{skill.category}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillSection