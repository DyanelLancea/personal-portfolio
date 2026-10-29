"use client";

import { openImageModal } from "@/lib/imageModal";
import "@/styles/projects/silver.css";

export default function SilverCompanionProject({ title }: { title: string }) {
  return (
    <div className="silvercompanion-project">
        <div className="container-fluid py-5">
          <h1 className="project-page-title">{title}</h1>
          
          <section className="section-intro">
            <div className="section-content">
              <h2 className="section-title">Introduction</h2>
              <p className="intro-text">SilverCompanionSG is an agentic AI system designed to make technology truly accessible 
                for the elderly in Singapore. Built during HackRift2025 hosted by SITech Developers Club, our team was 
                selected as one of the top 15 finalist teams. The system focuses on Singlish accessibility, leveraging 
                AI Singapore's SEA-LION model to replace complex interfaces with natural conversation.</p>
              
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/moTQwcIvKzU" frameBorder="0" allowFullScreen></iframe>
              </div>
              
              <div className="achievement-badge">
                <span className="badge-icon">🏆</span>
                <span className="badge-text">Top 15 Finalist - HackRift2025</span>
              </div>
            </div>
          </section>
    
          
          <section className="section-about">
            <div className="section-content">
              <h2 className="section-title">About</h2>
              <p className="about-text">What makes SilverCompanionSG special is its focus on 
                <strong className="highlight">Singlish Accessibility</strong>. Seniors can speak in Singlish, just like 
                chatting with a friend, to instantly access community events without needing any technical literacy. 
                The system uses a multi-agent workflow where specialized AI agents handle distinct responsibilities 
                to provide a seamless experience.</p>
            </div>
          </section>
    
          
          <section className="section-workflow">
            <div className="section-content">
              <h2 className="section-title">How It Works - Multi-Agent System</h2>
              <p className="workflow-intro">We designed a sophisticated multi-agent workflow to handle distinct responsibilities:</p>
              
              <div className="system-image-container">
                <img src="/assets/images/projects/silvercompanion/sys_arch.png" alt="SilverCompanionSG System Architecture" className="project-img" onClick={() => openImageModal("/assets/images/projects/silvercompanion/sys_arch.png")} />
                <p className="image-caption">System Architecture Diagram</p>
              </div>
              
              <div className="agents-container">
                <div className="agent-card">
                  <div className="agent-number">1</div>
                  <div className="agent-content">
                    <div className="agent-icon">🧠</div>
                    <h3 className="agent-title">The Orchestrator Agent</h3>
                    <p className="agent-subtitle">The Brain</p>
                    <p className="agent-description">The entry point that translates Singlish to English using SEA-LION & OpenAI Whisper. 
                      It uses Groq to detect intent and route commands to the right specialist.</p>
                  </div>
                </div>
    
                <div className="agent-card">
                  <div className="agent-number">2</div>
                  <div className="agent-content">
                    <div className="agent-icon">🏘️</div>
                    <h3 className="agent-title">The Wellness Agent</h3>
                    <p className="agent-subtitle">Community</p>
                    <p className="agent-description">Connects to Supabase to handle social logistics. It interprets voice commands—even 
                      in heavy Singlish—to book slots, cancel attendance, or read out available events for the day.</p>
                  </div>
                </div>
    
                <div className="agent-card">
                  <div className="agent-number">3</div>
                  <div className="agent-content">
                    <div className="agent-icon">🚨</div>
                    <h3 className="agent-title">The Safety Agent</h3>
                    <p className="agent-subtitle">Emergency</p>
                    <p className="agent-description">Prioritizes security by detecting distress signals. It uses OpenStreetMap for 
                      location tracking 📍 and Twilio 📞 to trigger immediate emergency calls if a threat is detected.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-features">
            <div className="section-content">
              <h2 className="section-title">Key Features</h2>
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-badge">🗣️</span>
                  <p>Singlish voice recognition and natural conversation</p>
                </div>
                <div className="feature-item">
                  <span className="feature-badge">🤖</span>
                  <p>Multi-agent AI orchestration for specialized tasks</p>
                </div>
                <div className="feature-item">
                  <span className="feature-badge">🏘️</span>
                  <p>Community event booking and management</p>
                </div>
                <div className="feature-item">
                  <span className="feature-badge">🚨</span>
                  <p>Emergency detection and response system</p>
                </div>
                <div className="feature-item">
                  <span className="feature-badge">🇸🇬</span>
                  <p>Designed specifically for Singapore's elderly community</p>
                </div>
                <div className="feature-item">
                  <span className="feature-badge">♿</span>
                  <p>Zero technical literacy required</p>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-technologies">
            <div className="section-content">
              <h2 className="section-title">Technologies Used</h2>
              <div className="tech-grid">
                <div className="tech-category">
                  <h3 className="tech-category-title">🤖 AI & Language Models</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">SEA-LION</span>
                    <span className="tech-badge">OPENAI WHISPER</span>
                    <span className="tech-badge">GROQ</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3 className="tech-category-title">🗄️ Backend & Database</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">SUPABASE</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3 className="tech-category-title">🌍 Location & Communication</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">OPENSTREETMAP</span>
                    <span className="tech-badge">TWILIO</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-roadmap">
            <div className="section-content">
              <h2 className="section-title">Future Roadmap 🔮</h2>
              <div className="roadmap-card">
                <p className="roadmap-intro">If given more time, I see huge potential to expand this project further:</p>
                
                <div className="roadmap-items">
                  <div className="roadmap-item">
                    <div className="roadmap-icon">🤖</div>
                    <div className="roadmap-content">
                      <h4>Companion Agent</h4>
                      <p>Introduce a visual avatar that responds via voice, acting as a conversational partner. 
                        This wouldn't just be for tasks, but to alleviate loneliness by giving the elderly someone 
                        to chat with about their day.</p>
                    </div>
                  </div>
                  
                  <div className="roadmap-item">
                    <div className="roadmap-icon">🌎</div>
                    <div className="roadmap-content">
                      <h4>Hyper-Local Linguistics</h4>
                      <p>Expanding beyond Singlish to support different dialects (Hokkien, Cantonese, Teochew) 
                        and languages (Malay, Tamil), ensuring no senior is left behind due to a language barrier.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-takeaway">
            <div className="section-content">
              <h2 className="section-title">Key Takeaway</h2>
              <div className="takeaway-card">
                <div className="takeaway-icon">💼</div>
                <p className="takeaway-text">While code builds the product, a <strong>'business mindset'</strong> builds the value. 
                  Learning to articulate and sell our solution was truly just as important as figuring out how to build it!</p>
              </div>
            </div>
          </section>
    
          
          <section className="section-acknowledgements" id="acknowledgements">
            <div className="section-content">
              <h2 className="section-title">Acknowledgements</h2>
              <div className="acknowledgements-card">
                <p>
                  Super grateful to have worked on this with my amazing teammates:{" "}
                  <strong><a className="decorated-link" href="https://www.linkedin.com/in/ayt-shermaine/" target="_blank">Shermaine Ang</a></strong>
                  {", "}
                  <strong><a className="decorated-link" href="https://www.linkedin.com/in/wileen-chia-923ab9260/" target="_blank">Wileen Chia</a></strong>
                  {", "}
                  <strong><a className="decorated-link" href="https://www.linkedin.com/in/tanvi-abburu-73584a238/" target="_blank">Tanvi Abburu</a></strong>
                  {" 🫶🏻"}
                </p>
                
                <div className="acknowledgement-image-container">
                  <img src="/assets/images/projects/silvercompanion/group.jpg" alt="Team Members" className="acknowledgement-img" onClick={() => openImageModal("/assets/images/projects/silvercompanion/group.jpg")} />
                  <p className="image-caption">The amazing team behind SilverCompanionSG</p>
                </div>
                
                <p style={{ marginTop: "1rem" }}>
                  Huge thank you to{" "}
                  <strong><a className="decorated-link" href="https://www.linkedin.com/company/sitech-developers-club/" target="_blank">SITech Developers Club</a></strong>
                  {" for hosting HackRift2025! 🤗"}
                </p>
                
                <div className="acknowledgement-image-container">
                  <img src="/assets/images/projects/silvercompanion/club.jpg" alt="HackRift2025 Event" className="acknowledgement-img" onClick={() => openImageModal("/assets/images/projects/silvercompanion/club.jpg")} />
                  <p className="image-caption">HackRift2025 by SITech Developers Club</p>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-links">
            <div className="section-content">
              <h2 className="section-title">Project Links</h2>
              <div className="links-card">
                <a href="https://devpost.com/software/silvercompanionsg" target="_blank" className="project-link">
                  <i className="fas fa-external-link-alt"></i> View on Devpost
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}
