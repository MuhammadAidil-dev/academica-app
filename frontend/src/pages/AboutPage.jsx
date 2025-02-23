import MainLayout from '../components/layouts/MainLayout';
import AboutSection from './content/about/AboutSection';
import ContactSection from './content/about/ContactSection';
import VisionSection from './content/about/VisionSection';

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutSection />
      <VisionSection />
      <ContactSection />
    </MainLayout>
  );
};

export default AboutPage;
