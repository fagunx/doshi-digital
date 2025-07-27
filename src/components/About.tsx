import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import portfolioData from '@/data/portfolio.json';
import quotesData from '@/data/quotes.json';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [randomQuote, setRandomQuote] = useState<string>('');
  const [showQuote, setShowQuote] = useState(false);

  const getRandomQuote = () => {
    // Flatten all quotes from all categories into a single array
    const allQuotes = quotesData.quotes.flatMap(category => category.quotes);
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    return allQuotes[randomIndex];
  };

  const handleLightningHover = () => {
    setRandomQuote(getRandomQuote());
    setShowQuote(true);
  };

  const handleLightningLeave = () => {
    setShowQuote(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4 fade-in-up">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
              Passionate about creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image & Stats */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="fade-in-left">
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-primary rounded-2xl shadow-2xl glow-primary flex items-center justify-center p-1">
                    <div className="w-72 h-72 bg-surface rounded-xl overflow-hidden">
                      <img 
                        src="/images/profile.jpg" 
                        alt="Fagun Doshi - Professional Photo" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = '<span class="text-6xl flex items-center justify-center h-full">👨‍💻</span>';
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center animate-float cursor-pointer group">
                    <span 
                      className="text-2xl hover:scale-110 transition-transform duration-200"
                      onMouseEnter={handleLightningHover}
                      onMouseLeave={handleLightningLeave}
                    >
                      ⚡
                    </span>
                    {/* Random Quote Tooltip */}
                    {showQuote && (
                      <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-surface-elevated border border-border rounded-lg shadow-xl z-50 transform transition-all duration-300 opacity-100 scale-100">
                        <div className="text-sm text-foreground font-medium leading-relaxed">
                          "{randomQuote}"
                        </div>
                        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-surface-elevated"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Favorite Technologies */}
              <div className="fade-in-left">
                <h3 className="text-xl font-semibold text-gradient-accent mb-4">Favorite Technologies</h3>
                <div className="flex flex-wrap gap-3 items-center">
                  {['.NET Core', 'Angular', 'TypeScript', 'SQL Server'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-7 py-2 bg-gradient-primary text-primary-foreground rounded-full text-sm font-medium shadow-lg hover-lift transition-smooth whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              {portfolioData.personal.bio.map((paragraph, index) => (
                <div
                  key={index}
                  className="fade-in-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {paragraph}
                  </p>
                </div>
              ))}

              {/* Experience Timeline */}
              <div className="mt-12 fade-in-right">
                <h3 className="text-2xl font-semibold text-gradient-accent mb-6">Journey Highlights</h3>
                <div className="space-y-4">
                  {portfolioData.experience.map((exp, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-surface-elevated rounded-lg border border-border hover-lift transition-smooth"
                    >
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">{exp.title}</h4>
                        <p className="text-accent font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;