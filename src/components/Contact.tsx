import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Download } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const Contact = () => {
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

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: portfolioData.personal.social.github, color: 'text-foreground' },
    { name: 'LinkedIn', icon: Linkedin, url: portfolioData.personal.social.linkedin, color: 'text-blue-400' },
    { name: 'Twitter', icon: Twitter, url: portfolioData.personal.social.twitter, color: 'text-blue-400' }
  ];

  const handleDownloadResume = () => {
    window.open(portfolioData.personal.resumeUrl, '_blank');
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mr-3">
                Let's Connect
              </h2>
              <span className="text-4xl animate-float">👋</span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
              Have a project in mind or just want to chat? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="fade-in-left">
                <h3 className="text-2xl font-semibold text-gradient-accent mb-6">
                  Get in Touch
                </h3>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and development. Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 fade-in-left">
                <div className="flex items-center space-x-4 p-4 bg-surface-elevated rounded-lg border border-border hover-lift transition-smooth">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-surface-elevated rounded-lg border border-border hover-lift transition-smooth">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a 
                      href={`tel:${portfolioData.personal.phone}`}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-surface-elevated rounded-lg border border-border hover-lift transition-smooth">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">{portfolioData.personal.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-surface-elevated rounded-lg border border-border hover-lift transition-smooth cursor-pointer" onClick={handleDownloadResume}>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Resume</p>
                    <p className="text-muted-foreground">Download my resume</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-8 fade-in-right">
              <div>
                <h3 className="text-2xl font-semibold text-gradient-accent mb-6">
                  Follow Me
                </h3>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  Connect with me on social media to stay updated with my latest projects, 
                  tech insights, and professional journey.
                </p>
              </div>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-surface-elevated border border-border rounded-lg hover-lift transition-smooth group"
                  >
                    <div className="w-12 h-12 bg-surface border border-border rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Connect on {social.name}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Summary */}
          <div className="text-center mt-16 fade-in-up">
            <div className="inline-flex items-center space-x-4 bg-surface-elevated border border-border rounded-2xl px-8 py-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💼</span>
                <span className="font-semibold text-foreground">
                  Open to opportunities
                </span>
              </div>
              <div className="w-px h-6 bg-border"></div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🚀</span>
                <span className="font-semibold text-foreground">
                  Let's build something amazing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;