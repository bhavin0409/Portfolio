import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
    return (
        <section id='about' className='py-16 px-4 sm:px-8 md:px-20 lg:px-40 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center'>
                    About<span className='text-primary'>Me</span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center'>
                    <div className='space-y-4 sm:space-y-6'>
                        <h3 className='text-xl sm:text-2xl font-semibold'>Passionate Web Developer</h3>
                        <p className='text-foreground/80 text-base sm:text-lg'>
                            Passionate about clean code, modular design, and responsive UI development. Continuously building projects and integrating REST APIs.
                        </p>
                        <p className='text-foreground/80 text-base sm:text-lg'>
                            Quick to learn, persistent in debugging, and exploring new technologies to grow as a developer.
                        </p>

                        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center sm:justify-start'>
                            <a href="#contact" className='cosmic-button w-full sm:w-auto text-center'>Get In Touch</a>
                            <a href="https://drive.google.com/file/d/1w0-yuEETH5wr3WoLdRd2j-lcGpwvAZEw/view?usp=drive_link" target='_blank' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/30 transition-colors duration-300 w-full sm:w-auto text-center'>Download CV</a>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-4 sm:gap-6'>
                        <div className='gradient-border p-4 sm:p-6 card-hover'>
                            <div className='flex items-start gap-3 sm:gap-4'>
                                <div className='p-2 sm:p-3 rounded-full bg-primary/10'>
                                    <Code className='text-primary h-6 w-6'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-base sm:text-lg'>Web Development</h4>
                                    <p className='text-foreground/80 text-sm sm:text-base'>
                                        Building responsive and interactive web applications using modern frameworks and libraries.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-4 sm:p-6 card-hover'>
                            <div className='flex items-start gap-3 sm:gap-4'>
                                <div className='p-2 sm:p-3 rounded-full bg-primary/10'>
                                    <User className='text-primary h-6 w-6'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-base sm:text-lg'>User Experience</h4>
                                    <p className='text-foreground/80 text-sm sm:text-base'>
                                        Focused on creating user-friendly interfaces and enhancing user experience through intuitive design.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-4 sm:p-6 card-hover'>
                            <div className='flex items-start gap-3 sm:gap-4'>
                                <div className='p-2 sm:p-3 rounded-full bg-primary/10'>
                                    <Briefcase className='text-primary h-6 w-6'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-base sm:text-lg'>About Projects</h4>
                                    <p className='text-foreground/80 text-sm sm:text-base'>
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