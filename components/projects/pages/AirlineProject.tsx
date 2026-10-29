"use client";

import ImageGallery from "@/components/projects/ImageGallery";
import { openImageModal } from "@/lib/imageModal";
import "@/styles/projects/airline.css";

export default function AirlineProject({ title }: { title: string }) {
  const dashboardImages = [
    "/assets/images/projects/airline/project2-dashboard/image0.png",
    "/assets/images/projects/airline/project2-dashboard/image1.png",
    "/assets/images/projects/airline/project2-dashboard/image2.png",
    "/assets/images/projects/airline/project2-dashboard/image3.png",
    "/assets/images/projects/airline/project2-dashboard/image4.png",
  ];
  return (
    <div className="airline-project">
        <div className="container-fluid py-5">
          <h1 className="project-page-title">{title}</h1>
          
          <section className="section-intro">
            <div className="section-content">
              <h2 className="section-title">Introduction</h2>
              <p className="intro-text">This is a Programming Fundamentals project analyzing airline customer reviews to determine sentiment patterns and insights.</p>
              
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/vEu2hFKITQs" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </section>
    
          
          <section className="section-about">
            <div className="section-content">
              <h2 className="section-title">About</h2>
              <p className="about-text">The project investigates how customer sentiment compares to the official Skytrax Top 10 Airline Rankings, using Natural Language Processing (NLP) 
                to extract insights from over <strong className="highlight">13,000 online reviews</strong>. It identifies emotion "hotspots" in text using Sliding Window Analysis, 
                Kadane's Algorithm, and Word Segmentation (DP-based) techniques.</p>
              
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">😊😐😞</div>
                  <h4>Sentiment Classification</h4>
                  <p>Classifies reviews as positive or negative</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🔍</div>
                  <h4>Topic Extraction</h4>
                  <p>Extracts key topics and themes from reviews</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">📊</div>
                  <h4>Data Visualization</h4>
                  <p>Visualizes insights through a Flask-based dashboard</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">📈</div>
                  <h4>Actionable Insights</h4>
                  <p>Provides insights for airline service improvement</p>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-tech">
            <div className="section-content">
              <h2 className="section-title">Technology Stack</h2>
              <div className="tech-intro">
                <p>A Python-based NLP pipeline was developed for data scraping, preprocessing, sentiment computation, and visualization.
                The lexicon-based model <strong className="highlight">(AFINN-en-165)</strong> achieved <strong className="highlight">~80% accuracy</strong>, with high recall and consistent performance.
                Results are displayed on an interactive Flask web interface, enabling airline-specific sentiment tracking.</p>
              </div>
              
              <div className="pipeline-card">
                <h3 className="pipeline-title">📋 Data Pipeline</h3>
                <div className="pipeline-steps">
                  <div className="pipeline-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Data Collection</h4>
                      <p>Scrape airline reviews using requests + BeautifulSoup</p>
                    </div>
                  </div>
                  <div className="pipeline-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Data Preprocessing</h4>
                      <p>Clean and preprocess data (tokenization, normalization, de-duplication)</p>
                    </div>
                  </div>
                  <div className="pipeline-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Sentiment Analysis</h4>
                      <p>Compute sentiment using modular Python functions</p>
                    </div>
                  </div>
                  <div className="pipeline-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Visualization</h4>
                      <p>Visualize rankings and insights via Flask</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="images-grid">
                <div className="image-card">
                  <h3 className="image-title">Data Flow Diagram</h3>
                  <img src="/assets/images/projects/airline/data-flow.png" alt="Data Flow Diagram" className="project-img" onClick={() => openImageModal("/assets/images/projects/airline/data-flow.png")} />
                </div>
                <div className="image-card">
                  <h3 className="image-title">Results Dashboard</h3>
                  <ImageGallery images={dashboardImages} />
                </div>
              </div>
              
              <div className="results-card">
                <h3 className="results-title">🎯 Key Results</h3>
                <div className="results-list">
                  <div className="result-item">
                    <span className="result-badge">#1</span>
                    <p>Hainan Airlines ranked #1 in sentiment vs #10 in Skytrax</p>
                  </div>
                  <div className="result-item">
                    <span className="result-badge">📉</span>
                    <p>Qatar Airways and Singapore Airlines dropped in sentiment rankings</p>
                  </div>
                  <div className="result-item">
                    <span className="result-badge">🔗</span>
                    <p>Strong correlation found between service consistency and positive sentiment</p>
                  </div>
                  <div className="result-item">
                    <span className="result-badge negative">⚠️</span>
                    <p><strong>Negative keywords:</strong> delay, baggage, service</p>
                  </div>
                  <div className="result-item">
                    <span className="result-badge positive">✨</span>
                    <p><strong>Positive keywords:</strong> comfort, crew, experience</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-implementation">
            <div className="section-content">
              <h2 className="section-title">Implementation</h2>
              <div className="implementation-card">
                <p>Developed collaboratively in Python using <strong>Jupyter Notebook</strong> for prototyping and <strong>modular .py scripts</strong> for production.
                  Visualization and user interaction were handled via <strong>Flask + Bootstrap</strong>.</p>
              </div>
            </div>
          </section>
    
          
          <section className="section-technologies">
            <div className="section-content">
              <h2 className="section-title">Technologies Used</h2>
              <div className="tech-grid">
                <div className="tech-category">
                  <h3 className="tech-category-title">📚 Libraries & Frameworks</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">Python</span>
                    <span className="tech-badge">Pandas</span>
                    <span className="tech-badge">NLTK</span>
                    <span className="tech-badge">Matplotlib</span>
                    <span className="tech-badge">Seaborn</span>
                    <span className="tech-badge">Flask</span>
                    <span className="tech-badge">VADER</span>
                    <span className="tech-badge">NumPy</span>
                    <span className="tech-badge">HTML/CSS/JS</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3 className="tech-category-title">🛠️ Tools & Platforms</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">Jupyter Notebook</span>
                    <span className="tech-badge">Git & GitHub</span>
                    <span className="tech-badge">Flask Web App</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-acknowledgements" id="acknowledgements">
            <div className="section-content">
              <h2 className="section-title">Acknowledgements</h2>
              <div className="acknowledgements-card">
                <p>Developed together with groupmates <strong>(Darryl, Shermaine, Derrick, & Jordan)</strong> under the guidance of <strong>Prof. Zhang Zhengchen</strong> 
                  & <strong>Prof. Eric Lam</strong> as part of SIT's Programming Fundamentals module. Special thanks to the open-source community for providing powerful NLP tools and documentation.
                   </p>
              </div>
            </div>
          </section>
    
          
          <section className="section-references">
            <div className="section-content">
              <h2 className="section-title">References</h2>
              <div className="references-card">
                <div className="reference-item">
                  <span className="reference-label">GitHub:</span>
                  <a className="reference-link" href="https://github.com/DyanelLancea/Airline-Review-Sentiment-Analysis" target="_blank">
                    Airline Review Sentiment Analysis Repository
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
                <div className="reference-item">
                  <span className="reference-label">Documentation:</span>
                  <a className="reference-link" href="https://scikit-learn.org/" target="_blank">
                    Scikit-learn Documentation
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
                <div className="reference-item">
                  <span className="reference-label">Documentation:</span>
                  <a className="reference-link" href="https://www.nltk.org/" target="_blank">
                    NLTK Documentation
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}
