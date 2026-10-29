"use client";

import { openImageModal } from "@/lib/imageModal";
import "@/styles/projects/ezbiz.css";

export default function EzBizProject({ title }: { title: string }) {
  return (
    <div className="ezbiz-project">
        <div className="container-fluid py-5">
          <h1 className="project-page-title">{title}</h1>
          
          <section className="section-intro">
            <div className="section-content">
              <h2 className="section-title">Introduction</h2>
              <p className="intro-text">Ezbiz is an AI-driven, e-commerce system that automates the entire product launch cycle—from discovery to 
                execution to monitoring. It can identify viable product ideas, analyze market conditions, and craft a go-to-market plan 
                using specialized agents. After user approval, it sources products, creates Shopify listings with auto-generated images, 
                and publishes marketing posts on X. It then tracks sales and performance, offering ongoing optimization.</p>
              
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/d2_uR_35mrc" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </section>
    
          
          <section className="section-about">
            <div className="section-content">
              <h2 className="section-title">About</h2>
              <p className="about-text"> It has AI agents that discover, list, and manage products using 
                <strong className="highlight">ERC-8004 & X402 on Hedera</strong>.  Powered by FastAPI orchestration, blockchain-registered 
                agents, and persistent memory, it delivers end-to-end automation for effortless product launches. The system 
                 enables <strong className="highlight">secure, verifiable payments and on-chain coordination between agents</strong> for
                  trustworthy automation. Users can simply state a business idea, and our system handles everything else.</p>
              
              <div className="phases-container">
                <div className="phase-item">
                  <div className="phase-number">1</div>
                  <div className="phase-content">
                    <div className="phase-icon">📋</div>
                    <h4 className="phase-title">Plan</h4>
                  </div>
                </div>
                <div className="phase-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">→</div>
                </div>
                <div className="phase-item">
                  <div className="phase-number">2</div>
                  <div className="phase-content">
                    <div className="phase-icon">⚡</div>
                    <h4 className="phase-title">Execute</h4>
                  </div>
                </div>
                <div className="phase-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">→</div>
                </div>
                <div className="phase-item">
                  <div className="phase-number">3</div>
                  <div className="phase-content">
                    <div className="phase-icon">📊</div>
                    <h4 className="phase-title">Monitor</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-tech">
            <div className="section-content">
              <h2 className="section-title">Agentic AI System</h2>
              <div className="tech-intro">
                <p>A sophisticated multi-agent orchestration system where specialized AI agents collaborate to automate the entire product 
                  launch lifecycle. Each agent is blockchain-registered for identity verification and uses persistent memory to maintain 
                  context and improve performance over time.</p>
              </div>
    
              <div className="system-image-container">
                <img src="/assets/images/projects/ezbiz/agentic-system.png" alt="EzBiz Agentic AI System Diagram" className="project-img" onClick={() => openImageModal("/assets/images/projects/ezbiz/agentic-system.png")} />
              </div>
            </div>
          </section>
    
          
          <section className="section-features">
            <div className="section-content">
              <h2 className="section-title">Key Features</h2>
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-badge">🤖</span>
                  <p>Multi-agent orchestration for seamless automation</p>
                </div>
                <div className="feature-item">
                  <span className="feature-badge">⛓️</span>
                  <p>Blockchain-registered agents for transparency and identity verification</p>
                </div>
                <div className="feature-item">
                  <span className="feature-badge">🧠</span>
                  <p>Persistent memory for continuous learning and improvement</p>
                </div>
                <div className="feature-item">
                  <span className="feature-badge">🔄</span>
                  <p>End-to-end automation from product discovery to sales monitoring</p>
                </div>
                <div className="feature-item">
                  <span className="feature-badge">🛍️</span>
                  <p>Automated Shopify listing creation with AI-generated images</p>
                </div>
                <div className="feature-item">
                  <span className="feature-badge">📈</span>
                  <p>Real-time performance tracking and optimization</p>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-technologies">
            <div className="section-content">
              <h2 className="section-title">Technologies Used</h2>
              <div className="tech-grid">
                <div className="tech-category">
                  <h3 className="tech-category-title">🔗 Blockchain & Identity</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">ERC-8004 IDENTITY REGISTRY</span>
                    <span className="tech-badge">X402 MICROPAYMENTS</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3 className="tech-category-title">🤖 AI & Orchestration</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">MULTI-AGENT ORCHESTRATION</span>
                    <span className="tech-badge">MEM0</span>
                    <span className="tech-badge">GROQ</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3 className="tech-category-title">🛠️ Backend & Infrastructure</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">FastAPI</span>
                    <span className="tech-badge">SUPABASE</span>
                    <span className="tech-badge">IPFS METADATA STORAGE</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-acknowledgements" id="acknowledgements">
            <div className="section-content">
              <h2 className="section-title">Acknowledgements</h2>
              <div className="acknowledgements-card">
                <p>
                  Special thanks to my teammates{" "}
                  <strong><a className="decorated-link" href="https://www.linkedin.com/in/elz-fintech/" target="_blank">Edmund</a></strong>
                  {", "}
                  <strong><a className="decorated-link" href="https://www.linkedin.com/in/chye-zhi-hao/" target="_blank">Zhi Hao</a></strong>
                  {", "}
                  <strong><a className="decorated-link" href="https://www.linkedin.com/in/jasbir-kaur-1238j/" target="_blank">Jas</a></strong>
                  {" and "}
                  <strong><a className="decorated-link" href="https://www.linkedin.com/in/yeosimyee/" target="_blank">Sim Yee</a></strong>
                  {" for building this with me! And for Hedera for providing the platform to build this innovative project. Thank you to the Web3 and AI communities, as well for the open-source technologies that power the agentic AI system. This project was so fun to build and would not have been possible without everyone's support!"}
                </p>
              </div>
            </div>
          </section>
    
          
          <section className="section-documentation">
            <div className="section-content">
              <h2 className="section-title">Documentation</h2>
              <div className="documentation-card">
                <p>For detailed project documentation, please refer to the project PDF:</p>
                <a href="/MD/EZBIZ - HELLOFUTURE (1).pdf" target="_blank" className="document-link">
                  <i className="fas fa-file-pdf"></i> View EZBiz - HelloFuture PDF
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}
