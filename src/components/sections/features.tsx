import { motion } from 'framer-motion';
import {
  Cpu,
  Gauge,
  Shield,
  Network,
  Workflow,
  BarChart3,
  Fingerprint,
  CloudCog,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const features = [
  {
    title: 'Edge Processing Units',
    description: 'Custom-designed processors optimized for AI workloads at the edge',
    icon: Cpu,
    specs: [
      { label: 'Processing Power', value: 95 },
      { label: 'Energy Efficiency', value: 88 },
      { label: 'Thermal Performance', value: 92 },
    ],
  },
  {
    title: 'Real-time Analytics',
    description: 'Process and analyze data in milliseconds with ultra-low latency',
    icon: Gauge,
    specs: [
      { label: 'Response Time', value: 98 },
      { label: 'Data Throughput', value: 94 },
      { label: 'Analysis Accuracy', value: 96 },
    ],
  },
  {
    title: 'Secure Computing',
    description: 'Hardware-level security with encrypted processing capabilities',
    icon: Shield,
    specs: [
      { label: 'Encryption Level', value: 99 },
      { label: 'Attack Prevention', value: 97 },
      { label: 'Data Protection', value: 98 },
    ],
  },
  {
    title: 'Network Integration',
    description: 'Seamless integration with existing infrastructure and protocols',
    icon: Network,
    specs: [
      { label: 'Compatibility', value: 93 },
      { label: 'Network Speed', value: 95 },
      { label: 'Connection Stability', value: 91 },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%)]" />
      
      <div className="container relative">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-red-600"
          >
            Advanced Hardware
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Edge Computing Infrastructure
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Our cutting-edge hardware solutions deliver unprecedented performance for
            AI workloads at the edge, combining power with efficiency.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <Card className="group relative overflow-hidden border-white/10 bg-black/50 backdrop-blur-sm transition-colors hover:border-red-500/50">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-600/10 text-red-600 group-hover:bg-red-600/20">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {feature.specs.map((spec) => (
                      <div key={spec.label} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">{spec.label}</span>
                          <span className="text-sm font-medium text-white">
                            {spec.value}%
                          </span>
                        </div>
                        <Progress value={spec.value} className="h-1.5" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl border border-white/10 bg-black/50 p-8 backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold text-white">Performance Metrics</h3>
          <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="flex flex-col items-center">
              <BarChart3 className="h-8 w-8 text-red-500" />
              <p className="mt-2 text-2xl font-bold text-white">99.9%</p>
              <p className="text-sm text-gray-400">Uptime</p>
            </div>
            <div className="flex flex-col items-center">
              <Workflow className="h-8 w-8 text-red-500" />
              <p className="mt-2 text-2xl font-bold text-white">&lt;5ms</p>
              <p className="text-sm text-gray-400">Latency</p>
            </div>
            <div className="flex flex-col items-center">
              <CloudCog className="h-8 w-8 text-red-500" />
              <p className="mt-2 text-2xl font-bold text-white">15TB</p>
              <p className="text-sm text-gray-400">Processing/Day</p>
            </div>
            <div className="flex flex-col items-center">
              <Fingerprint className="h-8 w-8 text-red-500" />
              <p className="mt-2 text-2xl font-bold text-white">256-bit</p>
              <p className="text-sm text-gray-400">Encryption</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}