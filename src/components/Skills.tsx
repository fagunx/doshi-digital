import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { 
  FlashOn, 
  Language, 
  Palette, 
  Build, 
  Code, 
  RocketLaunch, 
  Settings, 
  Power, 
  Search, 
  Storage, 
  Edit, 
  Computer, 
  Monitor, 
  GitHub, 
  Mail, 
  LocalShipping, 
  Assessment 
} from '@mui/icons-material';
import portfolioData from '@/data/portfolio.json';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-up');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 150);
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

  // Icon mapping for skills
  const skillIconMap: { [key: string]: React.ComponentType } = {
    'FlashOn': FlashOn,
    'Language': Language,
    'Palette': Palette,
    'Build': Build,
    'Code': Code,
    'RocketLaunch': RocketLaunch,
    'Power': Power,
    'Assessment': Assessment,
    'Search': Search,
    'Storage': Storage,
    'Edit': Edit,
    'Computer': Computer,
    'GitHub': GitHub,
    'Mail': Mail,
    'LocalShipping': LocalShipping
  };

  const skillCategories = [
    { 
      name: 'Frontend', 
      skills: portfolioData.skills.frontend, 
      gradient: 'from-blue-500 to-cyan-500',
      icon: Palette
    },
    { 
      name: 'Backend', 
      skills: portfolioData.skills.backend, 
      gradient: 'from-purple-500 to-pink-500',
      icon: Settings
    },
    { 
      name: 'Database', 
      skills: portfolioData.skills.database, 
      gradient: 'from-green-500 to-emerald-500',
      icon: Storage
    },
    { 
      name: 'Tools', 
      skills: portfolioData.skills.tools, 
      gradient: 'from-orange-500 to-red-500',
      icon: Build
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4 fade-in-up">
              Tech Stack & Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.name}
                className="bg-surface border-border p-8 hover-lift transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                {/* Category Header */}
                <div className="mb-8 flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white shadow-lg`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {category.name}
                    </h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${category.gradient} rounded-full mt-2`}></div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-surface-elevated transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="group-hover:scale-110 transition-transform duration-300">
                          {skillIconMap[skill.icon] ? 
                            (() => {
                              const IconComponent = skillIconMap[skill.icon];
                              return (
                                <div style={{ fontSize: 24 }}>
                                  <IconComponent />
                                </div>
                              );
                            })() : 
                            <span className="text-2xl">{skill.icon}</span>
                          }
                        </span>
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Footer */}
                <div className="mt-6 pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground">
                    {category.skills.length} technologies mastered
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center fade-in-up">
            <div className="inline-flex items-center space-x-4 bg-surface border border-border rounded-2xl px-8 py-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🚀</span>
                <span className="font-semibold text-foreground">
                  {portfolioData.skills.frontend.length + portfolioData.skills.backend.length + portfolioData.skills.database.length + portfolioData.skills.tools.length} Skills
                </span>
              </div>
              <div className="w-px h-6 bg-border"></div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold text-foreground">
                  Full-Stack Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;