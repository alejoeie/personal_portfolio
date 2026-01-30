import { Link } from 'react-router-dom';

export default function IssuPage() {
  return (
    <div className="container">
      <section className="section">
        <Link to="/" className="backLink">← Back to Portfolio</Link>
        
        <h1 className="sectionTitle">ISSU Major to Major</h1>
        <p className="sectionSubtitle">Zero-Downtime Software Upgrade for Enterprise Networking Switches</p>
        
        <div className="projectDetail">
          <div className="projectOverview">
            <h2>Overview</h2>
            <p>
              In-Service Software Upgrade (ISSU) is a critical infrastructure system that enables network operators 
              to upgrade networking switches between major software versions without disrupting network traffic. 
              This zero-downtime capability is essential for carrier-grade networks where even minutes of outage 
              can impact millions of users and cost significant revenue.
            </p>
          </div>

          <div className="technicalChallenge">
            <h2>Technical Challenge</h2>
            <p>
              Traditional network upgrades require scheduled maintenance windows, causing service interruptions. 
              ISSU eliminates this by maintaining continuous packet forwarding during the entire upgrade process, 
              from initial validation through final switchover.
            </p>
          </div>

          <div className="architecture">
            <h2>System Architecture</h2>
            <div className="architectureGrid">
              <div className="archComponent">
                <h3>Management Plane</h3>
                <p>REST API interfaces coordinate upgrade operations across distributed switch components, ensuring atomic state transitions.</p>
              </div>
              
              <div className="archComponent">
                <h3>switchd Daemon</h3>
                <p>Core system daemon managing hardware abstraction layer and coordinating between control and data planes during upgrade.</p>
              </div>
              
              <div className="archComponent">
                <h3>Data Plane</h3>
                <p>Multi-threaded packet processing engines continue forwarding traffic while control plane undergoes software transition.</p>
              </div>
              
              <div className="archComponent">
                <h3>State Management</h3>
                <p>Complex synchronization using mutexes and careful race condition handling ensures consistency across all system modules.</p>
              </div>
            </div>
          </div>

          <div className="validationProcess">
            <h2>Validation Process</h2>
            <p>Before any upgrade, ISSU performs comprehensive validation:</p>
            
            <div className="terminalOutput">
              <div className="terminalLine">
                <span className="prompt">switch#</span>
                <span className="command"> issu update-software validate</span>
              </div>
              <div className="terminalLine">
                <span className="output">ISSU validation is taking longer than expected. Check the final result with 'show issu validation'</span>
              </div>
              <div className="terminalLine">
                <span className="prompt">switch#</span>
                <span className="command"> show issu validation</span>
              </div>
              <div className="terminalSpacing"></div>
              <div className="terminalHeader">ISSU Validation</div>
              <div className="terminalSeparator">=======================</div>
              <div className="validationTable">
                <div className="validationRow">
                  <div className="validationCondition">Current Image Valid</div>
                  <div className="validationStatus inProgress">In Progress</div>
                </div>
                <div className="validationRow">
                  <div className="validationCondition">Target Image Valid</div>
                  <div className="validationStatus inProgress">In Progress</div>
                </div>
                <div className="validationRow">
                  <div className="validationCondition">Target Version Compatible</div>
                  <div className="validationStatus inProgress">In Progress</div>
                </div>
                <div className="validationRow">
                  <div className="validationCondition">Management Modules Ready</div>
                  <div className="validationStatus inProgress">In Progress</div>
                </div>
                <div className="validationRow">
                  <div className="validationCondition">Line Modules Ready</div>
                  <div className="validationStatus inProgress">In Progress</div>
                </div>
                <div className="validationRow">
                  <div className="validationCondition">Features Ready</div>
                  <div className="validationStatus inProgress">In Progress</div>
                </div>
              </div>
            </div>
            
            <p className="validationNote">The validation process ensures all system components are ready for the upgrade, checking image integrity, version compatibility, and module readiness across the entire switch fabric.</p>
          </div>

          <div className="industryContext">
            <h2>Industry Context</h2>
            <p>
              This implementation follows industry standards established by leading network vendors:
            </p>
            <ul className="industryList">
              <li><strong>Juniper Networks:</strong> Unified ISSU for carrier-grade routers</li>
              <li><strong>Arista Networks:</strong> EOS Zero-Downtime Upgrade</li>
              <li><strong>Cisco Systems:</strong> ISSU for Nexus and IOS-XR platforms</li>
            </ul>
          </div>

          <div className="technicalImplementation">
            <h2>Key Technical Implementation</h2>
            <div className="techStack">
              <div className="techItem">
                <h3>Multi-threaded C Programming</h3>
                <p>Low-level system programming with careful thread synchronization and resource management.</p>
              </div>
              
              <div className="techItem">
                <h3>REST API Design</h3>
                <p>RESTful interfaces for external orchestration systems to trigger and monitor upgrades.</p>
              </div>
              
              <div className="techItem">
                <h3>Race Condition Handling</h3>
                <p>Advanced synchronization patterns prevent data corruption during concurrent operations.</p>
              </div>
              
              <div className="techItem">
                <h3>State Machine Design</h3>
                <p>Robust state management ensures system consistency throughout the upgrade lifecycle.</p>
              </div>
            </div>
          </div>

          <div className="disclaimer">
            <p><em>Note: This project was developed internally at HPE. Code and specific implementation details are proprietary.</em></p>
          </div>
        </div>
      </section>
    </div>
  );
}
``