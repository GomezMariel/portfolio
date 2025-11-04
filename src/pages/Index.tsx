import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Compiler from "@/assets/Compiler.png";
import Amazon from "@/assets/Amazon.png";
import Game from "@/assets/Game.png";
import Fundacion from "@/assets/Fundacion.png";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "C– Compiler",
      description: "Collaborated on building a fully functional compiler for C–, running on a private cloud environment. I led the frontend design and documentation, creating an intuitive interface for testing, debugging, and visualization. Beyond the interface, I contributed to setting up the infrastructure and deployment environment, ensuring seamless performance and scalability. This project deepened my understanding of how user experience and system architecture intersect, translating lowlevel logic into a clear, functional tool for developers. ",
      role: "Frontend Engineer",
      tags: ["Python", "Next.js", "MongoDB"],
      image: Compiler,
      link: "https://github.com/Com-Bs"
    },
    {
      title: "Amazon Capstone Project",
      description: "Led a team of 15 in partnership with Amazon to design a real-time insights dashboard for call centers using AWS technologies (Connect, S3, DynamoDB, Lambda). Our solution provided business-oriented analytics that tracked agent performance and call outcomes, helping managers make smarter decisions. I coordinated the project roadmap, defined the user flow, and oversaw the integration of an AI powered embedded chat for FAQs, enhancing the customer and agent experience. The result was a dashboard that transformed raw call data into actionable insights, improving efficiency and visibility across operations.",
      role: "Project Manager & System Designer",
      tags: ["AWS", "DynamoDB", "Analytics"],
      image: Amazon,
      link: "https://github.com/S-2-C"
    },
    {
      title: "Fundación por México Platform",
      description: "Collaborated with a non-profit to design a simple, accessible platform for communities in low income areas to report issues and request assistance. Given that many users had limited digital experience, our focus was on clarity, accessibility, and empathy in design. I helped build the full stack, from backend workflows to a user friendly interface that simplified reporting malfunctions and tracking resolutions. The project taught me how thoughtful design can bridge technology and social impact, making tools truly inclusive and empowering.",
      role: "UX Designer & Full-Stack Developer",
      tags: ["React", "MongoDB", "Accessibility"],
      image: Fundacion,
      link: "https://github.com/coldhed/fpm-tickets"
    },
    {
      title: "Interactive Videogame Project",
      description: "Designed and developed a Unity based video game, creating the storyline, characters, and visual world from scratch. Alongside my team, I also designed the companion website, ensuring consistent visual identity and smooth navigation. This project combined creativity, storytelling, and technical execution, showcasing my ability to blend design and technology to create engaging, interactive experiences.",
      role: "Backend Developer & Web Designer",
      tags: ["Unity", "CSS", "SQL"],
      image: Game,
      link: "https://github.com/Paulaverdugo/TC2005B_Team2"
    }
  ];

  const skills = [
    "Java", "Python", "C++", "Oracle", "PostgreSQL",
    "React","AWS", "Figma", "UI/UX Design", "Data Visualization",
    "Machine Learning"
  ];

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold gradient-text">Portfolio</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("projects")} className="hover:text-primary transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection("skills")} className="hover:text-primary transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-fade-in-up">
              Hi, I'm Mariel
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              CS Engineer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Designing clarity from complexity
            </p>
          </div>
          <div className="flex gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button onClick={() => scrollToSection("projects")} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-shadow">
              View My Work
            </Button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">About Me</h2>
          <Card className="glass-card glow-shadow p-8 md:p-12">
            <p className="text-lg leading-relaxed mb-6">
              I’m a Software Engineering graduate from Mexico, currently working as a Data Science Consultant designing and optimizing data driven tools for the financial sector. My work revolves around transforming complex systems into intuitive, actionable solutions that help teams make smarter decisions.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              What began as a fascination with databases has evolved into a passion for how design, data, and technology intersect to shape better user experiences. I love turning intricate processes into clear, visual, and scalable solutions, whether it’s through dashboards, backend architectures, or AI-driven insights.

            </p>
            <p className="text-lg leading-relaxed">
              I thrive in environments where curiosity meets structure, where learning never stops, collaboration fuels creativity, and every challenge is an opportunity to turn complexity into clarity.
            </p>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="glass-card glow-shadow overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer group"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-sm font-medium text-secondary mb-4">{project.role}</p>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Skills & Experience</h2>
          <Card className="glass-card glow-shadow p-8 md:p-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 hover:border-primary transition-all hover:scale-110 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Management Solutions</h4>
                <p className="text-muted-foreground mb-2">Assistant Data Science Consultant • July 2025 - Present</p>
                <p className="text-muted-foreground mb-2">Data Science Consultant Intern • January 2025 - June 2025</p>
                <p className="text-sm">
                  At Management Solutions, I work at the intersection of data, design, and decision-making, building tools that help financial institutions make complex risk models understandable and actionable.
                </p>
                <p className="text-sm">
                  
                  I’ve contributed to the design and optimization of data-driven systems; from creating a mortgage interest rate calculator integrated with Oracle databases to developing visual dashboards and reporting tools that turn raw data into clear insights.
                </p>
                <p className="text-sm">
                  Working alongside engineers, product managers, and analysts, I focus on making information accessible, intuitive, and reliable. Whether refactoring backend processes, visualizing risk metrics, or improving the user flow of analytical tools, 
                  my goal is always the same: to bring simplicity, usability, and confidence to complex systems.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <Card className="glass-card glow-shadow p-8 md:p-12">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:your.email@example.com" className="text-xl hover:text-primary transition-colors">
                  gomezgutierrezmariel@gmail.com
                </a>
              </div>
              <div className="flex gap-6 mt-4">
                <a href="www.linkedin.com/in/mariel-mgg" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
          </Card>
          <p className="mt-12 text-sm text-muted-foreground">
            © 2025 Mariel Gomez
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
