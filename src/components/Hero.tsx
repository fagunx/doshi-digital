import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, MessageCircle } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';
import quotesData from '@/data/quotes.json';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuote, setCurrentQuote] = useState('');
  const [quoteIndex, setQuoteIndex] = useState(0);
  const fullText = portfolioData.personal.tagline;
  console.log('portfolioData:', portfolioData);

  // Flatten all quotes from all categories
  const allQuotes = quotesData?.quotes?.flatMap(category => category.quotes) || [];

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Effect for rotating quotes every 5 seconds
  useEffect(() => {
    if (allQuotes.length === 0) return;
    
    const interval = setInterval(() => {
      setQuoteIndex(prev => (prev + 1) % allQuotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [allQuotes.length]);

  // Effect to update current quote when quoteIndex changes
  useEffect(() => {
    if (allQuotes.length === 0) return;
    
    const newQuote = allQuotes[quoteIndex] || allQuotes[0] || '';
    setCurrentQuote(newQuote);
    console.log('Current quote:', newQuote, 'Index:', quoteIndex);
  }, [quoteIndex, allQuotes]);

  // Set initial quote when component mounts
  useEffect(() => {
    if (allQuotes.length > 0 && !currentQuote) {
      setCurrentQuote(allQuotes[0]);
      console.log('Setting initial quote:', allQuotes[0]);
    }
  }, [allQuotes, currentQuote]);

  const handleDownloadResume = () => {
    window.open(portfolioData.personal.resumeUrl, '_blank');
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-primary/30 font-mono text-sm animate-float">
          {'{ "code": "clean" }'}
        </div>
        <div className="absolute top-3/4 right-1/4 text-secondary/30 font-mono text-sm animate-float" style={{ animationDelay: '1.5s' }}>
          {'<Angular />'}
        </div>
        <div className="absolute top-1/2 left-3/4 text-accent/30 font-mono text-sm animate-float" style={{ animationDelay: '0.5s' }}>
          {'.NET Core'}
        </div>
        <div className="absolute bottom-1/4 left-1/6 text-primary/20 font-mono text-xs animate-float" style={{ animationDelay: '2.5s' }}>
          {'SELECT * FROM dreams;'}
        </div>
        <div className="absolute top-1/6 right-1/6 text-secondary/25 font-mono text-xs animate-float" style={{ animationDelay: '0.8s' }}>
          {'const future = await build();'}
        </div>
        <div className="absolute top-2/3 left-1/8 text-accent/25 font-mono text-sm animate-float" style={{ animationDelay: '1.8s' }}>
          {'npm install success'}
        </div>
        <div className="absolute bottom-1/3 right-1/3 text-primary/20 font-mono text-xs animate-float" style={{ animationDelay: '3s' }}>
          {'git commit -m "awesome"'}
        </div>
        <div className="absolute top-1/3 right-2/3 text-secondary/30 font-mono text-sm animate-float" style={{ animationDelay: '1.2s' }}>
          {'TypeScript'}
        </div>
        <div className="absolute bottom-1/6 left-2/3 text-accent/25 font-mono text-xs animate-float" style={{ animationDelay: '2.2s' }}>
          {'React.useState()'}
        </div>
        <div className="absolute top-4/5 left-1/3 text-primary/20 font-mono text-xs animate-float" style={{ animationDelay: '0.3s' }}>
          {'docker run -d'}
        </div>
        <div className="absolute top-1/8 right-1/3 text-secondary/25 font-mono text-sm animate-float" style={{ animationDelay: '1.7s' }}>
          {'async/await'}
        </div>
        <div className="absolute bottom-2/5 right-1/8 text-accent/20 font-mono text-xs animate-float" style={{ animationDelay: '2.8s' }}>
          {'SQL Server'}
        </div>
        <div className="absolute top-1/2 right-1/8 text-primary/25 font-mono text-sm animate-float" style={{ animationDelay: '0.9s' }}>
          {'npm start'}
        </div>
        <div className="absolute bottom-1/8 left-1/2 text-secondary/20 font-mono text-xs animate-float" style={{ animationDelay: '1.4s' }}>
          {'console.log("Hello World")'}
        </div>
        <div className="absolute top-1/6 left-2/3 text-accent/30 font-mono text-sm animate-float" style={{ animationDelay: '2.1s' }}>
          {'Vue.js'}
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-primary/25 font-mono text-xs animate-float" style={{ animationDelay: '0.7s' }}>
          {'git push origin main'}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            {portfolioData?.personal?.name}
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground/80 " style={{ animationDelay: '0.2s' }}>
            {portfolioData?.personal?.title}
          </h2>

          {/* Typewriter Tagline */}
          <div className="h-16 flex items-center justify-center " style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-muted-foreground font-mono">
              <span className="text-accent">&gt;</span> {displayedText}
              <span className="animate-pulse text-accent">|</span>
            </p>
          </div>

          {/* Random Quote Display */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-surface-elevated border border-border rounded-xl p-6 shadow-xl">
              <p className="text-lg md:text-xl text-foreground italic leading-relaxed">
                "{currentQuote || allQuotes[0]}"
              </p>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {allQuotes.slice(0, 10).map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === quoteIndex 
                          ? 'bg-accent scale-125' 
                          : 'bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={handleDownloadResume}
              className="bg-gradient-primary hover:glow-primary transition-smooth px-8 py-6 text-lg font-semibold group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button
              onClick={handleContactClick}
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth px-8 py-6 text-lg font-semibold group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Let's Talk
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="flex flex-col items-center text-muted-foreground">
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
                <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;