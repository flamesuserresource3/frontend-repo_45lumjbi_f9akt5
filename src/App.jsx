import Hero3D from './components/Hero3D';
import ProgramOverview from './components/ProgramOverview';
import StatsOverview from './components/StatsOverview';
import DashboardCards from './components/DashboardCards';
import TeamGrid from './components/TeamGrid';
import PodcastSection from './components/PodcastSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] font-['Inter','Manrope',sans-serif] text-violet-50">
      <Hero3D />
      <ProgramOverview />
      <StatsOverview />
      <DashboardCards />
      <TeamGrid />
      <PodcastSection />
      <Footer />
    </div>
  );
}

export default App;
