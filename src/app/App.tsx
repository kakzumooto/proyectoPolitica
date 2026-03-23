import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { Proposals } from './components/Proposals';
import { ContactForm } from './components/ContactForm';
import { Multimedia } from './components/Multimedia';
import { SocialFeed } from './components/SocialFeed';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Biography />
      <Proposals />
      <ContactForm />
      <Multimedia />
      <SocialFeed />
      <Footer />
    </div>
  );
}