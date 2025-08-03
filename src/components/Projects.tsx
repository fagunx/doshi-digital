import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowForward, Code, Storage, Language } from '@mui/icons-material';
import portfolioData from '@/data/portfolio.json';

const Projects = () => {
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

  // Filter out the payroll project and only show the first two projects
  const filteredProjects = portfolioData.projects
    .filter(project => project.title !== 'Payroll Management System')
    .slice(0, 2);

  const projectIcons = {
    'Supermarket-Style E-Commerce Platform': <Language className="w-6 h-6" />,
    'Community Outreach Web Platform': <Code className="w-6 h-6" />
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4 fade-in-up">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
              A showcase of my best work and creative solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-surface border-border p-8 hover-lift transition-all duration-300 fade-in-up group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Project Header */}
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground">
                      {projectIcons[project.title as keyof typeof projectIcons] || <Storage className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-primary rounded-full mt-2"></div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-foreground/70 text-sm"
                      >
                        <span className="text-primary mr-2 mt-1 text-xs">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Footer */}
                <div className="pt-4 border-t border-border/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {project.technologies.length} technologies used
                    </span>
                    {/* <div className="flex items-center space-x-2 text-primary group-hover:text-primary/80 transition-colors">
                      <span className="text-sm font-medium">View Details</span>
                      <ArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div> */}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16 fade-in-up">
            <div className="inline-flex items-center space-x-4 bg-surface border border-border rounded-2xl px-8 py-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💼</span>
                <span className="font-semibold text-foreground">
                  More projects available
                </span>
              </div>
              <div className="w-px h-6 bg-border"></div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🚀</span>
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

export default Projects;