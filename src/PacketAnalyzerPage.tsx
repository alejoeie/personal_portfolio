import { Link } from 'react-router-dom';

export default function PacketAnalyzerPage() {
  return (
    <div className="container">
      <section className="section">
        <Link to="/" className="backLink">← Back to Portfolio</Link>
        
        <h1 className="sectionTitle">Packet Analyzer</h1>
        <p className="sectionSubtitle">Network Traffic Analysis Tool with Live Packet Capture</p>
        
        <div className="projectDetail">
          <div className="projectOverview">
            <h2>Overview</h2>
            <p>
              Packet Analyzer is a sophisticated command-line tool designed to capture and analyze live network traffic 
              in real-time. Built with C and libpcap, it provides deep insights into network communications by parsing 
              Ethernet and IPv4 headers with surgical precision. The tool focuses on delivering detailed packet information 
              while maintaining high performance and modularity.
            </p>
          </div>

          <div className="architecture">
            <h2>Modular Architecture</h2>
            <p>The project is designed with modularity and scalability in mind, ensuring clean separation of concerns:</p>
            
            <div className="architectureGrid">
              <div className="archComponent">
                <h3>Ethernet Parsing</h3>
                <p>Handles dissection of Ethernet headers, extracting MAC addresses and protocol types. Selectively parses supported EtherTypes (IPv4) while gracefully handling unsupported protocols.</p>
              </div>
              
              <div className="archComponent">
                <h3>IPv4 Header Parsing</h3>
                <p>Interprets IPv4 headers with precision, extracting source/destination IPs, TTL, protocol types, and performing comprehensive header validation checks.</p>
              </div>
              
              <div className="archComponent">
                <h3>PCAP Utilities</h3>
                <p>Manages libpcap interactions, device discovery, and packet capturing. Provides detailed interface information including IPv4/IPv6 addresses and subnet masks.</p>
              </div>
              
              <div className="archComponent">
                <h3>Main Application</h3>
                <p>Orchestrates data flow between modules, configures capture parameters, and provides the main application interface for network analysis.</p>
              </div>
            </div>
          </div>

          <div className="flowDiagram">
            <h2>Data Flow Architecture</h2>
            <div className="markdownDiagram">
              <pre className="diagram">{
`┌ ──────────────── ┐
 │  PacketAnalyzer  │
 │  Main Application│
 └─────────┬─────── ┘
          │
          ▼
┌-─────────────────┐
│  PCAP Utilities  │
│Device & Capture  │
└─────────┬─────── ┘
          │
          ▼
    ┌─────────┬─────────┐
    │         │         │
    ▼         │         ▼
┌─────────┐   ⇄   ┌─────────┐
│Ethernet │       │  IPv4   │
│ Parsing │       │ Parsing │
└─────────┘       └─────────┘`}</pre>
            </div>
          </div>

          <div className="setupSection">
            <h2>Setup & Installation</h2>
            <p>Ensure you have libpcap and a C toolchain installed:</p>
            
            <div className="codeBlock">
              <pre><code>{`# Ubuntu / Debian
sudo apt update
sudo apt install build-essential libpcap-dev

# Fedora
sudo dnf install gcc make libpcap-devel

# Arch Linux
sudo pacman -S base-devel libpcap`}</code></pre>
            </div>
          </div>

          <div className="projectStructure">
            <h2>Project Structure</h2>
            <div className="terminalOutput">
              <div className="fileTree">
                <div className="folderItem">📁 pkt-src/</div>
                <div className="folderIndent">📁 build/</div>
                <div className="folderIndent">  📄 Compiled binaries and object files</div>
                <div className="folderIndent">📁 include/</div>
                <div className="folderIndent">  📁 pcap_utils/</div>
                <div className="folderIndent">    📄 Headers for PCAP functionality</div>
                <div className="folderIndent">  📄 pkt_analyzer.h</div>
                <div className="folderIndent">  📄 pkt_headers.h</div>
                <div className="folderIndent">📁 src/</div>
                <div className="folderIndent">  📁 pcap_utils/</div>
                <div className="folderIndent">    📄 PCAP utility implementations</div>
                <div className="folderIndent">  📄 pkt_analyzer.c</div>
                <div className="folderIndent">📄 CMakeLists.txt</div>
                <div className="folderIndent">📄 packet_analyzer.pc.in</div>
              </div>
            </div>
          </div>

          <div className="buildSection">
            <h2>Building & Running</h2>
            
            <div className="codeBlock">
              <pre><code>{`# Build the project
mkdir build && cd build
cmake -DCMAKE_BUILD_TYPE=Debug ..
make

# Run with elevated privileges
sudo ./packet_sniffer <interface_name>

# Or set capabilities once
sudo setcap cap_net_raw,cap_net_admin=eip ./packet_sniffer
./packet_sniffer <interface_name>`}</code></pre>
            </div>
            
            <p className="note">
              <strong>Note:</strong> Replace <code>&lt;interface_name&gt;</code> with your network interface 
              (e.g., <code>eth0</code>, <code>wlan0</code>). Avoid using <code>any</code> as it doesn't provide Ethernet headers.
            </p>
          </div>

          <div className="exampleOutput">
            <h2>Live Packet Analysis Output</h2>
            <div className="terminalOutput">
              <div className="terminalLine">
                <span className="prompt">$</span>
                <span className="command"> sudo ./packet_sniffer eth0</span>
              </div>
              <div className="terminalSpacing"></div>
              <div className="output">
                Starting packet capture on eth0...
                Capturing packets (Press Ctrl+C to stop)...
              </div>
              <div className="terminalSpacing"></div>
              <div className="terminalHeader">Packet Analysis</div>
              <div className="terminalSeparator">=================</div>
              <div className="packetInfo">
                <div className="packetField">Packet number: 1</div>
                <div className="packetField">Ether type: 00000800</div>
                <div className="packetField status">Valid header</div>
              </div>
              <div className="terminalSpacing"></div>
              <div className="terminalHeader">=== IPv4 Header ===</div>
              <div className="packetInfo">
                <div className="packetField">Version: 4</div>
                <div className="packetField">IHL (Header Length): 5 (20 bytes)</div>
                <div className="packetField">Type of Service: 0x00</div>
                <div className="packetField">Total Length: 60 bytes</div>
                <div className="packetField">Identification: 0x1C46 (7238)</div>
                <div className="packetField">Flags: 0x2</div>
                <div className="packetField">Fragment Offset: 0</div>
                <div className="packetField">TTL: 64</div>
                <div className="packetField">Protocol: 6</div>
                <div className="packetField">Header Checksum: 0xB1E6</div>
                <div className="packetField highlight">Source IP: 192.168.0.101</div>
                <div className="packetField highlight">Destination IP: 192.168.0.1</div>
              </div>
              <div className="terminalSeparator">===================</div>
            </div>
          </div>

          <div className="technicalImplementation">
            <h2>Technical Implementation</h2>
            <div className="techStack">
              <div className="techItem">
                <h3>Low-Level Network Programming</h3>
                <p>Direct interaction with network interfaces using raw sockets and libpcap for efficient packet capture.</p>
              </div>
              
              <div className="techItem">
                <h3>Protocol Parsing</h3>
                <p>Manual parsing of Ethernet and IPv4 headers with proper validation and error handling.</p>
              </div>
              
              <div className="techItem">
                <h3>CMake Build System</h3>
                <p>Cross-platform build configuration with proper dependency management and debugging support.</p>
              </div>
              
              <div className="techItem">
                <h3>Memory Management</h3>
                <p>Efficient memory allocation and cleanup for high-performance packet processing.</p>
              </div>
            </div>
          </div>

          <div className="features">
            <h2>Key Features</h2>
            <ul className="featureList">
              <li>✅ <strong>Live Packet Capture</strong> - Real-time network traffic analysis</li>
              <li>✅ <strong>Ethernet Header Parsing</strong> - MAC addresses and protocol identification</li>
              <li>✅ <strong>IPv4 Header Analysis</strong> - Complete IPv4 header field extraction</li>
              <li>✅ <strong>Interface Discovery</strong> - Automatic network interface detection</li>
              <li>✅ <strong>Modular Design</strong> - Clean separation of parsing utilities</li>
              <li>✅ <strong>Cross-Platform</strong> - Linux compatibility with libpcap</li>
            </ul>
          </div>

          <div className="improvements">
            <h2>Future Enhancements</h2>
            <ul className="featureList">
              <li>🔄 <strong>TCP/UDP Support</strong> - Transport layer protocol parsing</li>
              <li>🔄 <strong>IPv6 Support</strong> - Next-generation Internet protocol</li>
              <li>🔄 <strong>Packet Filtering</strong> - BPF-based packet filtering</li>
              <li>🔄 <strong>Statistics Dashboard</strong> - Real-time traffic statistics</li>
            </ul>
          </div>

          <div className="projectLinks">
            <h2>Project Resources</h2>
            <div className="linkGrid">
              <a href="https://github.com/alejoeie/PacketAnalyzer" className="linkCard" target="_blank" rel="noopener noreferrer">
                <h3>🔗 Source Code</h3>
                <p>View the complete implementation on GitHub</p>
              </a>
              <a href="https://github.com/alejoeie/PacketAnalyzer/blob/main/CMakeLists.txt" className="linkCard" target="_blank" rel="noopener noreferrer">
                <h3>🔧 Build Configuration</h3>
                <p>Examine the CMake build system setup</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
