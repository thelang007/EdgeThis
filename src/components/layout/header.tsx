import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-red-500">
            EdgeAI
          </a>
        </div>

        <div className="hidden md:flex md:items-center md:gap-x-8">
          <a href="#features" className="text-sm font-medium text-white hover:text-red-400">
            Features
          </a>
          <a href="#solutions" className="text-sm font-medium text-white hover:text-red-400">
            Solutions
          </a>
          <a href="#about" className="text-sm font-medium text-white hover:text-red-400">
            About
          </a>
          <Button variant="outline" className="ml-4 text-white hover:bg-white/10">
            Contact Us
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-black/95 md:hidden"
          >
            <div className="container space-y-4 py-4">
              <a
                href="#features"
                className="block text-sm font-medium text-white hover:text-red-400"
              >
                Features
              </a>
              <a
                href="#solutions"
                className="block text-sm font-medium text-white hover:text-red-400"
              >
                Solutions
              </a>
              <a
                href="#about"
                className="block text-sm font-medium text-white hover:text-red-400"
              >
                About
              </a>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}