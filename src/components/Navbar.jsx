import { useEffect, useState } from 'react'
import { cn } from "@/lib/utils"
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={cn(
            'fixed w-full z-40 transition-all duration-300',
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className='container flex items-center justify-between'>
                <a href='#hero' className='text-xl font-bold text-primary flex items-center'>
                    <span className='relative z-10'>
                        <span className='text-glow text-foreground'>Bhavin</span> {" "}Portfolio
                    </span>
                </a>


                {/* desktop navbar */}
                <div className='hidden md:flex space-x-8'>
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>


                {/* mobile navbar */}
                <button 
                className='md:hidden text-foreground p-2 z-50 hover:text-primary transition-colors duration-300'
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                onClick={() => setIsMenuOpen((prev) => !prev)}> {isMenuOpen ? <X size={24}/> : <Menu size={24}/> } </button>

                <div className={cn('fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden',
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className='flex flex-col text-xl space-y-10 justify-center items-center'>
                        {navItems.map((item, key) => (
                            <a key={key} 
                            href={item.href} 
                            onClick={() => setIsMenuOpen(false)}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar