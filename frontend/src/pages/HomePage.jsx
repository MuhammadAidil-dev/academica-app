import MainLayout from '../components/layouts/MainLayout';
import FeatureSection from './content/home/FeatureSection';
import HeroSection from './content/home/HeroSection';
import QuestionSection from './content/home/QuestionSection';

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeatureSection />
      <QuestionSection />
    </MainLayout>
  );
};

export default HomePage;
