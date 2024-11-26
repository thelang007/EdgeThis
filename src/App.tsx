import { useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Solutions } from '@/components/sections/solutions';
import { BackToTop } from '@/components/ui/back-to-top';

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');

    // Add schema markup
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'EdgeAI',
      description:
        'Specialized IT company focusing on AI edge infrastructure deployment',
      url: 'https://www.edgeai.com',
    };

    const scriptSchema = document.createElement('script');
    scriptSchema.type = 'application/ld+json';
    scriptSchema.text = JSON.stringify(schema);
    document.head.appendChild(scriptSchema);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(scriptSchema);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <Solutions />
      </main>
      <BackToTop />
    </>
  );
}

export default App;