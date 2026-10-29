"use client";

import ImageGallery from "@/components/projects/ImageGallery";

import "@/styles/projects/ripplemart.css";

export default function RipplemartProject({ title }: { title: string }) {
  const merchantImages = [
    "/assets/images/projects/ripplemart/merchant1.png",
    "/assets/images/projects/ripplemart/merchant2.png",
    "/assets/images/projects/ripplemart/merchant3.png",
    "/assets/images/projects/ripplemart/merchant4.png",
    "/assets/images/projects/ripplemart/merchant5.png",
    "/assets/images/projects/ripplemart/merchant6.png",
    "/assets/images/projects/ripplemart/merchant7.png",
  ];
  
  const shopperImages = [
    "/assets/images/projects/ripplemart/shopper0.jpg",
    "/assets/images/projects/ripplemart/shopper1.jpg",
    "/assets/images/projects/ripplemart/shopper2.jpg",
    "/assets/images/projects/ripplemart/shopper3.jpg",
  ];
  return (
    <div className="ripplemart-project">
        <div className="container-fluid py-5">
          <h1 className="project-page-title">{title}</h1>
          
          <section className="section-intro">
            <div className="section-content">
              <h2 className="section-title">Ripple Mart: Trustless E-Commerce on XRPL</h2>
              <p className="intro-text">Ripple Mart is a seamless e-commerce platform powered by XRPL Escrows, ensuring secure, 
                trustless transactions and real-time delivery tracking for a worry-free shopping experience. Built for the 
                NUS Fintech Summit 2026, this project bridges the gap between blockchain technology and user-friendly 
                e-commerce.</p>
              
              <div className="achievement-badge">
                <span className="badge-icon">🏆</span>
                <span className="badge-text">Blockchain for Good Alliance (BGA) Bounty Award </span>
              </div>
            </div>
          </section>
    
          
          <section className="section-inspiration">
            <div className="section-content">
              <h2 className="section-title">Inspiration</h2>
              <div className="inspiration-card">
                <div className="inspiration-icon">💡</div>
                <p className="inspiration-text">E-commerce has a persistent <strong className="highlight">"trust gap."</strong> 
                  Buyers worry they won't receive what they paid for, and sellers worry about fraudulent chargebacks. 
                  While the <strong className="highlight">XRP Ledger (XRPL)</strong> offers a powerful Escrow feature to solve 
                  this, the barrier to entry is high—requiring users to manually handle cryptographic conditions and 
                  fulfillment secrets.</p>
                <p className="inspiration-text"><strong>Ripple Mart</strong> was born from a simple goal: To make trustless 
                  e-commerce as "seamless" as a traditional checkout experience. We wanted to build a platform where the 
                  blockchain works silently in the background, securing funds and tracking journeys without the user ever 
                  needing to copy-paste a single hex string.</p>
              </div>
            </div>
          </section>
    
          
          <section className="section-features">
            <div className="section-content">
              <h2 className="section-title">What It Does</h2>
              <p className="features-intro">Ripple Mart is a functional e-commerce demo that uses the XRPL to secure payments:</p>
              
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">🔒</div>
                  <h3 className="feature-title">Secure Escrows</h3>
                  <p className="feature-description">When a buyer checks out, funds are locked on-chain using the 
                    <code>EscrowCreate</code> transaction.</p>
                </div>
    
                <div className="feature-card">
                  <div className="feature-icon">🚚</div>
                  <h3 className="feature-title">Delivery Simulation</h3>
                  <p className="feature-description">We built a custom "Oracle" that simulates a real-world shipping 
                    journey (e.g., Shenzhen to Singapore).</p>
                </div>
    
                <div className="feature-card">
                  <div className="feature-icon">🤝</div>
                  <h3 className="feature-title">Automated Handshakes</h3>
                  <p className="feature-description">The backend generates cryptographic conditions, and the frontend 
                    handles the Crossmark wallet interaction automatically.</p>
                </div>
    
                <div className="feature-card">
                  <div className="feature-icon">🛡️</div>
                  <h3 className="feature-title">Buyer Protection</h3>
                  <p className="feature-description">Funds are only released to the merchant when the buyer confirms 
                    receipt, or they can be refunded via <code>EscrowCancel</code> if conditions aren't met.</p>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-build">
            <div className="section-content">
              <h2 className="section-title">How We Built It</h2>
              <p className="build-intro">The project is split into a modern full-stack architecture:</p>
              
              <div className="build-items">
                <div className="build-item">
                  <div className="build-icon">⚛️</div>
                  <div className="build-content">
                    <h4>Frontend</h4>
                    <p>Built with <strong>Next.js 15</strong> and <strong>Tailwind CSS</strong>. We integrated 
                      the <strong>Crossmark SDK</strong> to provide a smooth, browser-based wallet experience.</p>
                  </div>
                </div>
    
                <div className="build-item">
                  <div className="build-icon">🔮</div>
                  <div className="build-content">
                    <h4>Backend (The Oracle)</h4>
                    <p>A <strong>Node.js/Express</strong> server that acts as the trusted intermediary. It manages 
                      the lifecycle of the escrow and handles the "Fulfillment" secrets.</p>
                  </div>
                </div>
    
                <div className="build-item">
                  <div className="build-icon">🗄️</div>
                  <div className="build-content">
                    <h4>Database</h4>
                    <p><strong>MongoDB</strong> tracks the state of every order, mirroring the ledger status for 
                      high-performance UI updates.</p>
                  </div>
                </div>
    
                <div className="build-item">
                  <div className="build-icon">⛓️</div>
                  <div className="build-content">
                    <h4>Ledger Integration</h4>
                    <p>We used <strong>xrpl.js</strong> and <strong>five-bells-condition</strong> to handle the 
                      heavy lifting of on-chain escrow logic.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-challenges">
            <div className="section-content">
              <h2 className="section-title">Challenges We Ran Into</h2>
              <div className="challenge-card">
                <div className="challenge-header">
                  <div className="challenge-icon">⚠️</div>
                  <h3>The "Wallet Hang"</h3>
                </div>
                <p>The biggest hurdle was the <strong>"Wallet Hang."</strong> Initially, our frontend would wait 
                  indefinitely for a response from the wallet after a transaction. On the testnet, WebSocket timeouts 
                  frequently caused the UI to freeze, even if the transaction was successful.</p>
                
                <div className="solution-box">
                  <h4>✅ Solution: Resilient State Management</h4>
                  <ol>
                    <li>We switched to "fire-and-forget" transaction submission.</li>
                    <li>We built a <strong>Backend Ledger Listener</strong> that monitors the XRPL in real-time.</li>
                    <li>The frontend polls our Oracle for the "Truth." If the listener sees the transaction on the 
                      ledger, the UI updates instantly, regardless of whether the wallet extension is still "loading."</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-accomplishments">
            <div className="section-content">
              <h2 className="section-title">Accomplishments We're Proud Of</h2>
              <div className="accomplishments-list">
                <div className="accomplishment-item">
                  <span className="accomplishment-badge">💰</span>
                  <div className="accomplishment-content">
                    <h4>Successful Integration of RLUSD</h4>
                    <p>We overcame <code>tecPATH_DRY</code> errors by implementing proper <strong>Trustline</strong> 
                      management for the RLUSD stablecoin.</p>
                  </div>
                </div>
    
                <div className="accomplishment-item">
                  <span className="accomplishment-badge">✨</span>
                  <div className="accomplishment-content">
                    <h4>Seamless UI</h4>
                    <p>Moving from manual hex-code entry to a single-click checkout flow using Crossmark.</p>
                  </div>
                </div>
    
                <div className="accomplishment-item">
                  <span className="accomplishment-badge">⚡</span>
                  <div className="accomplishment-content">
                    <h4>Atomic Concurrency</h4>
                    <p>Ensuring that funds cannot be released and refunded simultaneously through backend locking 
                      mechanisms.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-learned">
            <div className="section-content">
              <h2 className="section-title">What We Learned</h2>
              <div className="learned-card">
                <div className="learned-icon">📚</div>
                <p className="learned-text">We gained a deep appreciation for the <code>EscrowFinish</code> and 
                  <code>EscrowCancel</code> mechanics. Learning how to properly bridge "off-chain" delivery events with 
                  "on-chain" fund releases taught us a lot about the importance of robust error handling and state 
                  synchronization in decentralized applications.</p>
              </div>
            </div>
          </section>
    
          
    
          
          <section className="section-technologies">
            <div className="section-content">
              <h2 className="section-title">Built With</h2>
              <div className="tech-grid">
                <div className="tech-category">
                  <h3 className="tech-category-title">⚛️ Frontend</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">Next.js 15</span>
                    <span className="tech-badge">Tailwind CSS</span>
                    <span className="tech-badge">TypeScript</span>
                    <span className="tech-badge">Crossmark SDK</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3 className="tech-category-title">🔧 Backend</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">Node.js</span>
                    <span className="tech-badge">Express.js</span>
                    <span className="tech-badge">XRPL.js</span>
                    <span className="tech-badge">Five-bells-condition</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3 className="tech-category-title">🗄️ Database & Storage</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">MongoDB</span>
                    <span className="tech-badge">Pinata</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3 className="tech-category-title">⛓️ Blockchain</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">XRP Ledger</span>
                    <span className="tech-badge">RLUSD</span>
                    <span className="tech-badge">Escrow</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-screenshots">
            <div className="section-content">
              <h2 className="section-title">Platform Overview</h2>
              <div className="images-grid">
                <div className="image-card">
                  <h3 className="image-title">Merchant Dashboard</h3>
                  <ImageGallery images={merchantImages} />
                </div>
                <div className="image-card">
                  <h3 className="image-title">Shopper Experience</h3>
                  <ImageGallery images={shopperImages} />
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-acknowledgements" id="acknowledgements">
            <div className="section-content">
              <h2 className="section-title">Acknowledgements</h2>
              <div className="acknowledgements-card">
                <p>
                  Built with passion by an amazing team of developers:{" "}
                  <strong><a className="decorated-link" href="https://www.linkedin.com/in/chye-zhi-hao/" target="_blank">Zhi Hao</a></strong>
                  {", "}
                  <strong><a className="decorated-link" href="https://www.linkedin.com/in/elz-fintech/" target="_blank">Edmund</a></strong>
                  {", "}
                  <strong><a className="decorated-link" href="https://www.linkedin.com/in/tohzhenwei/" target="_blank">Zhen Wei</a></strong>
                  {", "}
                  <strong><a className="decorated-link" href="https://www.linkedin.com/in/chan-nasya-9128b72a4/" target="_blank">Nasya</a></strong>
                </p>
                <p style={{ marginTop: "1rem" }}>Special thanks to the XRPL community and the organizers of the 
                  NUS Fintech Summit for providing this opportunity to innovate in the blockchain space.</p>
              </div>
            </div>
          </section>
    
          
          <section className="section-links">
            <div className="section-content">
              <h2 className="section-title">Project Links</h2>
              <div className="links-card">
                <a href="https://devpost.com/software/ripplemart" target="_blank" className="project-link">
                  <i className="fas fa-external-link-alt"></i> View on Devpost
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}
