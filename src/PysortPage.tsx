import { Link } from 'react-router-dom';

export default function PysortPage() {
  return (
    <div className="container">
      <section className="section">
        <Link to="/" className="backLink">← Back to Portfolio</Link>
        
        <h1 className="sectionTitle">PySort</h1>
        <p className="sectionSubtitle">Intelligent File Organization System for Linux</p>
        
        <div className="projectDetail">
          <div className="projectOverview">
            <h2>Overview</h2>
            <p>
              PySort is a command-line utility that automatically organizes messy directories by sorting files 
              into appropriate subdirectories based on their file extensions. Perfect for cleaning up Downloads folders, 
              project directories, or any location with accumulated files.
            </p>
          </div>

          <div className="codeDemo">
            <h2>How It Works</h2>
            <div className="terminalOutput">
              <div className="terminalLine">
                <span className="prompt">$</span>
                <span className="command"> python pysort.py ~/Downloads</span>
              </div>
              <div className="terminalSpacing"></div>
              <div className="terminalHeader">Directory Before</div>
              <div className="terminalSeparator">==================</div>
              <div className="fileList">
                <div className="fileItem">📄 report.pdf</div>
                <div className="fileItem">🖼️ vacation.jpg</div>
                <div className="fileItem">🖼️ screenshot.png</div>
                <div className="fileItem">📄 invoice.doc</div>
                <div className="fileItem">🎥 presentation.mp4</div>
                <div className="fileItem">📄 notes.txt</div>
              </div>
              <div className="terminalSpacing"></div>
              <div className="terminalHeader">Directory After</div>
              <div className="terminalSeparator">=================</div>
              <div className="fileList">
                <div className="folderItem">📁 Documents/</div>
                <div className="folderIndent">  📄 report.pdf</div>
                <div className="folderIndent">  📄 invoice.doc</div>
                <div className="folderIndent">  📄 notes.txt</div>
                <div className="folderItem">📁 Images/</div>
                <div className="folderIndent">  🖼️ vacation.jpg</div>
                <div className="folderIndent">  🖼️ screenshot.png</div>
                <div className="folderItem">📁 Videos/</div>
                <div className="folderIndent">  🎥 presentation.mp4</div>
              </div>
            </div>
          </div>

          <div className="architecture">
            <h2>Configuration System</h2>
            <p>PySort uses a flexible JSON configuration system to define file categories and their extensions:</p>
            
            <div className="codeBlock">
              <pre><code>{`{
  "Images": ["jpg", "jpeg", "png", "gif", "svg", "webp"],
  "Documents": ["pdf", "doc", "docx", "txt", "rtf", "odt"],
  "Videos": ["mp4", "avi", "mov", "mkv", "wmv", "flv"],
  "Audio": ["mp3", "wav", "flac", "aac", "ogg"],
  "Archives": ["zip", "rar", "7z", "tar", "gz"],
  "Code": ["py", "js", "html", "css", "cpp", "c", "java"]
}`}</code></pre>
            </div>
          </div>

          <div className="technicalImplementation">
            <h2>Technical Implementation</h2>
            <div className="techStack">
              <div className="techItem">
                <h3>File System Operations</h3>
                <p>Uses Python's built-in `os` and `shutil` modules for safe file operations, directory creation, and file movement.</p>
              </div>
              
              <div className="techItem">
                <h3>JSON Configuration</h3>
                <p>Flexible configuration system allows users to customize file categories and extensions without code changes.</p>
              </div>
              
              <div className="techItem">
                <h3>Error Handling</h3>
                <p>Robust error handling for permission issues, invalid paths, and file conflicts.</p>
              </div>
              
              <div className="techItem">
                <h3>CLI Interface</h3>
                <p>Simple command-line interface using `sys.argv` for easy integration into scripts and automation.</p>
              </div>
            </div>
          </div>

          <div className="usageExample">
            <h2>Usage Examples</h2>
            <div className="terminalOutput">
              <div className="terminalLine">
                <span className="prompt">$</span>
                <span className="command"> python pysort.py --help</span>
              </div>
              <div className="terminalSpacing"></div>
              <div className="output">
                PySort - File Organization Utility
                Usage: python pysort.py &lt;directory_path&gt;
                Example: python pysort.py ~/Downloads
              </div>
              <div className="terminalSpacing"></div>
              <div className="terminalLine">
                <span className="prompt">$</span>
                <span className="command"> python pysort.py ~/Downloads</span>
              </div>
              <div className="terminalSpacing"></div>
              <div className="output">
                Processing: /home/user/Downloads
                ✓ Created directory: Documents
                ✓ Created directory: Images  
                ✓ Moved: report.pdf → Documents/
                ✓ Moved: vacation.jpg → Images/
                ✓ Organized 15 files into 4 directories
              </div>
            </div>
          </div>

          <div className="features">
            <h2>Key Features</h2>
            <ul className="featureList">
              <li>✅ <strong>Configurable Categories</strong> - Define custom file types via JSON</li>
              <li>✅ <strong>Safe Operations</strong> - Creates directories before moving files</li>
              <li>✅ <strong>Fast Processing</strong> - Efficient file scanning and movement</li>
              <li>✅ <strong>Cross-Platform</strong> - Works on Linux, macOS, and Windows</li>
              <li>✅ <strong>CLI Integration</strong> - Easy to use in scripts and automation</li>
            </ul>
          </div>

          <div className="projectLinks">
            <h2>Project Resources</h2>
            <div className="linkGrid">
              <a href="https://github.com/alejoeie/pysort" className="linkCard" target="_blank" rel="noopener noreferrer">
                <h3>🔗 Source Code</h3>
                <p>View the complete implementation on GitHub</p>
              </a>
              <a href="https://github.com/alejoeie/pysort/blob/main/supportedFormats.json" className="linkCard" target="_blank" rel="noopener noreferrer">
                <h3>⚙️ Configuration</h3>
                <p>View the default file format configuration</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
