import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Award } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} id="experience" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4 fade-in-up">
              Experience & Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
              My professional journey and continuous learning path
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gradient-accent mb-8 fade-in-up">
              Professional Experience
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              
              <div className="space-y-8">
                {portfolioData.experience.map((exp, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-8 ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-surface shadow-lg"></div>
                    </div>

                    {/* Experience Card */}
                    <Card className="flex-1 bg-surface-elevated border-border p-6 hover-lift transition-smooth">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-1">
                            {exp.title}
                          </h4>
                          <p className="text-primary font-medium text-lg">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-sm">{exp.duration}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-foreground/80 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-3">
                        <h5 className="font-medium text-accent flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start text-foreground/70"
                            >
                              <span className="text-primary mr-2 mt-1">▸</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gradient-accent mb-8 fade-in-up">
              Education
            </h3>
            
            {portfolioData.education.map((edu, index) => (
              <Card
                key={index}
                className="bg-surface-elevated border-border p-6 hover-lift transition-smooth fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium text-lg mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm mr-4">{edu.duration}</span>
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Badge variant="outline" className="border-accent text-accent">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </div>

                  {/* <div>
                    <h5 className="font-medium text-accent mb-3">Relevant Courses</h5>
                    <div className="space-y-2">
                      {edu.relevant_courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="text-sm text-foreground/70 bg-surface px-3 py-1 rounded-md"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </div> */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;