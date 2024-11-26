import { motion } from 'framer-motion';
import { ChevronRight, Server, Cpu, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Earth Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="relative h-[150vh] w-[150vh] animate-slow-spin">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <linearGradient id="grid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#ef4444" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Grid Lines */}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={i} className="opacity-30">
                <circle
                  cx="100"
                  cy="100"
                  r={40 + i * 15}
                  fill="none"
                  stroke="url(#grid)"
                  strokeWidth="0.5"
                  className="animate-pulse"
                />
              </g>
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={`line-${i}`}
                x1="100"
                y1="0"
                x2="100"
                y2="200"
                stroke="url(#grid)"
                strokeWidth="0.5"
                transform={`rotate(${(i * 30)}, 100, 100)`}
                className="opacity-30"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1682686580391-615b1e32be1f?q=80&w=3540&auto=format&fit=crop")',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />

      <div className="container relative z-10 pt-24 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Deploy AI at the{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Edge
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Transform your business with cutting-edge AI infrastructure deployment.
            Faster decisions, reduced latency, and enhanced security at the edge.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex justify-center gap-8 sm:gap-12"
        >
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-white/10 p-3">
              <Server className="h-8 w-8 text-red-400" />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-300">Edge Servers</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-white/10 p-3">
              <Cpu className="h-8 w-8 text-red-400" />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-300">AI Processing</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-white/10 p-3">
              <Network className="h-8 w-8 text-red-400" />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-300">Global Network</p>
          </div>
        </motion.div>
      </div>

      {/* Red Glow Effect */}
      <div className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-800 to-red-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
}