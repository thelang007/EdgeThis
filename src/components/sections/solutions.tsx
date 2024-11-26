import { useState } from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Server,
  Cpu,
  Smartphone,
  Factory,
  Building2,
  Camera,
  Car,
  Activity,
  ChevronRight,
  Mail,
  Building,
  Users,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  company: z.string().min(2, 'Company name is required'),
  name: z.string().min(2, 'Contact name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  message: z.string().min(10, 'Message is required'),
});

const solutions = [
  {
    id: 'manufacturing',
    title: 'Smart Manufacturing',
    icon: Factory,
    description: 'Real-time quality control and predictive maintenance',
    specs: {
      processors: '2x Edge TPU',
      memory: '32GB LPDDR5',
      storage: '1TB NVMe',
      connectivity: '5G, Wi-Fi 6E',
      power: '45W TDP',
    },
    features: [
      'Visual inspection with 99.9% accuracy',
      'Predictive maintenance alerts',
      'Real-time production optimization',
      'Energy consumption monitoring',
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2940',
  },
  {
    id: 'smart-cities',
    title: 'Smart Cities',
    icon: Building2,
    description: 'Urban infrastructure monitoring and optimization',
    specs: {
      processors: '4x Neural Engine',
      memory: '64GB DDR5',
      storage: '2TB NVMe',
      connectivity: '5G, LoRaWAN',
      power: '65W TDP',
    },
    features: [
      'Traffic flow optimization',
      'Environmental monitoring',
      'Public safety analytics',
      'Smart lighting control',
    ],
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=2940',
  },
  {
    id: 'surveillance',
    title: 'Smart Surveillance',
    icon: Camera,
    description: 'Intelligent security and monitoring systems',
    specs: {
      processors: '2x Vision NPU',
      memory: '16GB LPDDR5',
      storage: '512GB NVMe',
      connectivity: 'Wi-Fi 6, Ethernet',
      power: '35W TDP',
    },
    features: [
      'Object detection and tracking',
      'Facial recognition',
      'Anomaly detection',
      'Secure data encryption',
    ],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2940',
  },
  {
    id: 'automotive',
    title: 'Automotive',
    icon: Car,
    description: 'Advanced driver assistance and vehicle analytics',
    specs: {
      processors: '4x AutoAI Engine',
      memory: '32GB LPDDR5',
      storage: '1TB NVMe',
      connectivity: '5G, V2X',
      power: '55W TDP',
    },
    features: [
      'Real-time object detection',
      'Lane departure warning',
      'Driver behavior analysis',
      'Predictive diagnostics',
    ],
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=2940',
  },
];

export function Solutions() {
  const [activeDemo, setActiveDemo] = useState(solutions[0].id);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: '',
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: 'Form submitted',
      description: 'We\'ll get back to you shortly.',
    });
    form.reset();
  }

  return (
    <section id="solutions" className="relative bg-black py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.1),transparent_50%)]" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-red-600">
            Industry Solutions
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tailored Edge AI Integration
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Explore our industry-specific solutions powered by advanced edge computing
            technology. Each solution is optimized for maximum performance and
            reliability.
          </p>
        </motion.div>

        <div className="mt-16">
          <Tabs
            value={activeDemo}
            onValueChange={setActiveDemo}
            className="space-y-8"
          >
            <TabsList className="grid w-full grid-cols-2 gap-4 bg-transparent lg:grid-cols-4">
              {solutions.map((solution) => (
                <TabsTrigger
                  key={solution.id}
                  value={solution.id}
                  className="group relative overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm data-[state=active]:border-red-500/50"
                >
                  <div className="flex flex-col items-center gap-2 p-4">
                    <solution.icon className="h-6 w-6 text-red-500" />
                    <span className="text-sm font-medium text-white">
                      {solution.title}
                    </span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {solutions.map((solution) => (
              <TabsContent
                key={solution.id}
                value={solution.id}
                className="space-y-8"
              >
                <div className="grid gap-8 lg:grid-cols-2">
                  <Card className="border-white/10 bg-black/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white">
                        {solution.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="mb-4 text-lg font-medium text-white">
                          Technical Specifications
                        </h4>
                        <dl className="space-y-2">
                          {Object.entries(solution.specs).map(([key, value]) => (
                            <div
                              key={key}
                              className="flex justify-between border-b border-white/5 pb-2"
                            >
                              <dt className="text-sm text-gray-400">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </dt>
                              <dd className="text-sm font-medium text-white">
                                {value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                      <div>
                        <h4 className="mb-4 text-lg font-medium text-white">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center text-gray-300"
                            >
                              <ChevronRight className="mr-2 h-4 w-4 text-red-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-2xl"
        >
          <Card className="border-white/10 bg-black/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Enterprise Inquiry
              </CardTitle>
              <CardDescription className="text-gray-400">
                Get in touch with our solutions team to discuss your specific needs
                and requirements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Company Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Building className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                              <Input
                                {...field}
                                className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-gray-500"
                                placeholder="Enter company name"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Contact Person</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Users className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                              <Input
                                {...field}
                                className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-gray-500"
                                placeholder="Full name"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                              <Input
                                {...field}
                                type="email"
                                className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-gray-500"
                                placeholder="email@company.com"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Phone</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                              <Input
                                {...field}
                                type="tel"
                                className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-gray-500"
                                placeholder="+1 (555) 000-0000"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="min-h-[100px] border-white/10 bg-white/5 text-white placeholder:text-gray-500"
                            placeholder="Tell us about your project and requirements..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Submit Inquiry
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}