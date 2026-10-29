"use client";

import { openImageModal } from "@/lib/imageModal";
import "@/styles/projects/drone.css";

export default function DroneProject({ title }: { title: string }) {
  return (
    <div className="drone-project">
        <div className="container-fluid py-5">
          <h1 className="project-page-title">{title}</h1>
          
          <section className="section-intro">
            <div className="section-content">
              <h2 className="section-title">Introduction</h2>
              <p className="intro-text">The Flood Monitoring Drone System (FMDS) is a Major Project developed during my time at Temasek Polytechnic. 
                It combines autonomous drone technology with IoT sensors and AI-powered image analysis to provide early flood detection and monitoring capabilities for Singapore's flood-prone areas.</p>
              
              <div className="video-container">
                <iframe src="https://www.youtube.com/embed/m8Vxb_OpQuY" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </section>
    
          
          <section className="section-about">
            <div className="section-content">
              <h2 className="section-title">About</h2>
              <p className="about-text">Floods are becoming increasingly common in Singapore, 
                often causing damage to both the environment and property. 
                To address this issue, we have designed a <strong className="highlight">smart drone</strong> capable of navigating 
                inaccessible areas while equipped with sensors to collect real-time 
                environmental data.</p>
              
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">🌡️</div>
                  <h4>Temperature Monitoring</h4>
                  <p>Real-time temperature data collection</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">💦</div>
                  <h4>Humidity Tracking</h4>
                  <p>Environmental humidity measurements</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🖼️</div>
                  <h4>Aerial Imaging</h4>
                  <p>Visual aerial data capture and analysis</p>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-tech">
            <div className="section-content">
              <h2 className="section-title">Technology Outline</h2>
              <div className="tech-intro">
                <p>Our architecture stack is built on the <strong className="highlight">TIG framework</strong> (Telegraf, InfluxDB, and Grafana). 
                  The ESP32 (server) and Raspberry Pi (client) are connected to the same access point (AP) 
                  for seamless data communication.</p>
              </div>
    
              <div className="workflow-card">
                <h3 className="workflow-title">🔄 Image Analysis Workflow</h3>
                <div className="workflow-steps">
                  <div className="workflow-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Image Capture</h4>
                      <p>Drone captures images and transmits to Raspberry Pi as Base64-encoded strings</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Data Packaging</h4>
                      <p>Raspberry Pi packages images into JSON payloads</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>AI Analysis</h4>
                      <p>Google Vertex AI processes images to identify flood signs (high water levels, blocked drains, overflow areas)</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Data Storage</h4>
                      <p>Analysis results and images are sent to InfluxDB for storage and monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="images-grid">
                <div className="image-card">
                  <h3 className="image-title">System Architecture Diagram</h3>
                  <img src="/assets/images/projects/drone/Sys-arch-diag.png" alt="System Architecture Diagram" className="project-img" onClick={() => openImageModal("/assets/images/projects/drone/Sys-arch-diag.png")} />
                </div>
                <div className="image-card">
                  <h3 className="image-title">Dashboard Screenshot</h3>
                  <img src="/assets/images/projects/drone/Dashboard.png" alt="Dashboard Screenshot" className="project-img" onClick={() => openImageModal("/assets/images/projects/drone/Dashboard.png")} />
                </div>
              </div>
              
              <div className="dashboard-card">
                <h3 className="dashboard-title">📊 Dashboard & Alerts</h3>
                <p>Grafana is integrated with an alerting system, allowing <strong>real-time notifications</strong> to be sent to a Telegram channel 
                whenever potential overflow or flood risks are detected. The dashboard also includes visualisations of the 
                environmental data (temperature, and humidity) which are retrieved from 
                <a className="decorated-link" href="https://openweathermap.org/api" target="_blank">OpenWeatherMap</a> 
                 to complement on-site drone observations.</p>
              </div>
            </div>
          </section>
    
          
          <section className="section-prototype">
            <div className="section-content">
              <h2 className="section-title">Prototype and Housing</h2>
              <div className="prototype-intro">
                <p><a className="decorated-link" href="https://www.tinkercad.com/" target="_blank">TinkerCad</a> was used, then 3D printed using the school's facilities </p>
              </div>
              <div className="prototype-images">
                <div className="prototype-image-card">
                  <img src="/assets/images/projects/drone/FMDS_3D.png" alt="Prototype Image 1" className="project-img" onClick={() => openImageModal("/assets/images/projects/drone/FMDS_3D.png")} />
                </div>
                <div className="prototype-image-card">
                  <img src="/assets/images/projects/drone/FMDS_with_Drone.JPG" alt="Prototype Image 2" className="project-img" onClick={() => openImageModal("/assets/images/projects/drone/FMDS_with_Drone.JPG")} />
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-components">
            <div className="section-content">
              <h2 className="section-title">Components Used</h2>
              <div className="tech-grid">
                <div className="tech-category">
                  <h3 className="tech-category-title">🔧 Hardware</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">DJI Tello Drone</span>
                    <span className="tech-badge">ESP32</span>
                    <span className="tech-badge">Raspberry Pi 4</span>
                    <span className="tech-badge">DHT22 Sensor</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h3 className="tech-category-title">💻 Software</h3>
                  <div className="tech-badges">
                    <span className="tech-badge">InfluxDB</span>
                    <span className="tech-badge">Grafana</span>
                    <span className="tech-badge">Telegraf</span>
                    <span className="tech-badge">Google Vertex AI</span>
                    <span className="tech-badge">Telegram Bot API</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-acknowledgements" id="acknowledgements">
            <div className="section-content">
              <h2 className="section-title">Acknowledgements</h2>
              <div className="acknowledgements-card">
                <p>Huge appreciation for 
                  <strong><a className="decorated-link" href="https://www.linkedin.com/in/emir-ezzuddin-84975b1a9/" target="_blank">Emir</a></strong> 
                  and
                  <strong><a className="decorated-link" href="https://www.linkedin.com/in/lorenzo-ho-439255254/" target="_blank">Lorenzo</a></strong> 
                   for building this project with me. And for
                  <strong><a className="decorated-link" href="https://www.linkedin.com/in/foo-tze-wan-2abb75bb/" target="_blank">Mr Foo Tze Wan</a></strong> 
                    for his unwavering support
                   and guidance. This was lots of fun to build and would not have been possible without everyone's hard work!
                   <img src="/assets/images/icons/batman.png" alt="batman" className="batman-icon" /></p>
              </div>
              <div className="acknowledgement-images">
                <div className="ack-image-card">
                  <img src="/assets/images/acknowledgements/acknowledgement.jpg" alt="Acknowledgement Group" className="project-img-no-modal" />
                </div>
                <div className="ack-image-card">
                  <img src="/assets/images/acknowledgements/group-members.jpg" alt="Acknowledgement Group" className="project-img-no-modal" />
                </div>
              </div>
            </div>
          </section>
    
          
          <section className="section-references">
            <div className="section-content">
              <h2 className="section-title">References</h2>
              <div className="references-card">
                <div className="reference-item">
                  <span className="reference-label">Documentation:</span>
                  <a className="reference-link" href="https://docs.influxdata.com/telegraf" target="_blank">
                    InfluxData Telegraf Documentation
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
                <div className="reference-item">
                  <span className="reference-label">GitHub:</span>
                  <a className="reference-link" href="https://github.com/damiafuentes/DJITelloPy" target="_blank">
                    DJITelloPy Repository
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
