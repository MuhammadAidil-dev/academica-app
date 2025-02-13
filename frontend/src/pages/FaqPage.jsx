import MainLayout from '../components/layouts/MainLayout';
import FaqContactSection from './content/faq/FaqContactSection';
import FaqSection from './content/faq/FaqSection';
import HeroSectionFaq from './content/faq/HeroSectionFaq';

const FaqPage = () => {
  return (
    <MainLayout>
      <HeroSectionFaq />
      <FaqSection />
      <FaqContactSection />
    </MainLayout>
  );
};

export default FaqPage;
