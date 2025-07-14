import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
    return (
        <section id='about' className='py-24 px-40 relative'>
            {" "}
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    About<span className='text-primary'>Me</span>
                </h2>


                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6'>
                        <h3 className='text-2xl font-semibold'>Passionate Web Developer</h3>
                        <p className='text-foreground/80'>Passionate about clean code, modular design, and responsive UI development. Continuously building projects and integrating REST APIs.</p>
                        <p className='text-foreground/80'>Quick to learn, persistent in debugging, and exploring new technologies to grow as a developer.</p>

                        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                            <a href="#contact" className='cosmic-button'>Get In Touch</a>
                            <a href="" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/30 transition-colors duration-300'>Download CV</a>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-6'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Code className='text-primary h-6 w-6'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold'>Web Development</h4>
                                    <p className='text-foreground/80'>
                                        Building responsive and interactive web applications using modern frameworks and libraries.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <User className='text-primary h-6 w-6'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold'>User Experience</h4>
                                    <p className='text-foreground/80'>
                                        Focused on creating user-friendly interfaces and enhancing user experience through intuitive design.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Briefcase className='text-primary h-6 w-6'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold'>About Projects</h4>
                                    <p className='text-foreground/80'>
                                        Worked on various projects that showcase my skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection