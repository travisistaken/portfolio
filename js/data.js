/* ============================================================
   data.js — portfolio.travisteo.com content
   ============================================================ */

const PROJECTS = [
  {
    id:1, tags:['security','web'], num:'FEATURED / 001',
    title:'Inquiry Helper — WhatsApp Automation',
    sub:'NYP Group Project · Oct 2025 – Feb 2026 · Team of 4',
    body:'Automated system that classifies incoming WhatsApp messages and replies in under 10 seconds, 24/7, without human intervention for routine queries.',
    img:'assets/images/project-inquiry-helper.png',
    detail:`<h2>Inquiry Helper — WhatsApp Automation</h2>
<div class="msub">NYP Group Project · Oct 2025 – Feb 2026 · Team of 4</div>
<div class="mlabel">The Problem</div>
<p>Small businesses handling WhatsApp inquiries manually were losing hours a day to repetitive questions — slow responses, frustrated customers, no way to scale.</p>
<div class="mlabel">What We Built</div>
<p>An automated classification and response system. Incoming messages are categorised and answered automatically within 10 seconds. Staff dashboard provides visibility and control over conversations that need human handling.</p>
<div class="mlabel">My Contribution — Account & Security Management</div>
<p>Built the staff account management system with role-based access control. Designed a Security Centre with full audit logging of every user action (timestamps, IP addresses), automated account lockouts after repeated failed logins, and an access reports dashboard.</p>
<div class="mlabel">What I Learned</div>
<p>Security and usability have to work together — building features strict enough to protect the system but seamless enough staff don't find them frustrating. Taught me to debug under pressure and think from both a developer and end-user perspective.</p>`,
    chips:['Python','Flask','SQLite','Jinja','Session Management','Security Audits','HTML','CSS']
  },
  {
    id:2, tags:['web'], num:'PROJECT / 002',
    title:'Ultimate Frisbee CCA Website',
    sub:'NYP CCA Assignment · 2025',
    body:'Clean, responsive club website with home, achievements, schedule, and about pages. Built for the CCA to establish an online presence for students and recruits.',
    img:'assets/images/project-ultimate-frisbee.jpg',
    detail:`<h2>Ultimate Frisbee CCA Website</h2>
<div class="msub">NYP CCA Assignment · 2025</div>
<div class="mlabel">The Brief</div>
<p>The CCA needed an online presence — somewhere for current and prospective members to find schedule info, achievements, and club background.</p>
<div class="mlabel">What I Built</div>
<p>A static, responsive multi-page website. Pages include: Home, Achievements, Schedule, and About. Designed to be easy to update and mobile-friendly.</p>
<div class="mlabel">Key Decisions</div>
<p>No frameworks — just HTML/CSS/JS. Focused on legibility and mobile responsiveness since most students browse on phones.</p>`,
    chips:['HTML','CSS','JavaScript','Responsive Design','Bootstrap']
  },
  {
    id:3, tags:['security'], num:'PROJECT / 003',
    title:'Security Home Lab',
    sub:'Self-Directed · HackTheBox, TryHackMe &amp; OverTheWire',
    body:'Network enumeration, Linux privilege escalation, Bash scripting — practised in real challenge environments, documented like real engagements.',
    img:'assets/images/project-homelab.png',
    detail:`<h2>Security Home Lab</h2>
<div class="msub">Self-directed · Ongoing</div>
<div class="mlabel">Platforms Used</div>
<p>HackTheBox and TryHackMe for network and machine-based challenges. OverTheWire Bandit for Linux fundamentals and privilege escalation. Each challenge documented with methodology, commands used, and lessons applied to real-world scenarios.</p>
<div class="mlabel">Skills Practised</div>
<p>nmap for service discovery, Bash scripting for automation, file permission analysis, SSH tunnelling, basic privilege escalation vectors on misconfigured Linux systems.</p>
<div class="mlabel">Why This Matters</div>
<p>Understanding why a vulnerability exists matters more than knowing how to exploit it. This perspective shaped how I wrote Nessus findings at ST Engineering — framing each issue as a real business risk, not just a checkbox.</p>`,
    chips:['Linux','Bash','nmap','HackTheBox','TryHackMe','OverTheWire']
  },
  {
    id:4, tags:['infra'], num:'PROJECT / 004',
    title:'Personal Domain &amp; Infrastructure',
    sub:'Self-Directed · 2025 – Present',
    body:'Purchased travisteo.com, configured Cloudflare with DNSSEC and SSL/TLS, and deployed six subdomains routing to separate GitHub Pages repositories.',
    img:'assets/images/project-steng.png',
    detail:`<h2>Personal Domain &amp; Infrastructure</h2>
<div class="msub">Self-directed · 2025 – Present</div>
<div class="mlabel">What I Built</div>
<p>Registered travisteo.com through Exabytes Singapore. Set up Cloudflare as a reverse proxy with DNSSEC enabled and SSL/TLS configured. Created subdomains for each portfolio property using DNS management.</p>
<div class="mlabel">Subdomains Deployed</div>
<p>portfolio · contact · projects · resume · writeups — all routed to respective GitHub Pages repositories under travisistaken.github.io.</p>
<div class="mlabel">Forwarded Email</div>
<p>Configured contact@travisteo.com to forward to my main Gmail — professional contact without managing a mail server.</p>
<div class="mlabel">What I Learned</div>
<p>Practical DNS management, DNSSEC concepts, SSL/TLS configuration, and Cloudflare proxying to protect origin IPs. Applied security hardening principles from my internship to my own infrastructure.</p>`,
    chips:['DNS','DNSSEC','SSL/TLS','Cloudflare','GitHub Pages','Infrastructure']
  },
];

const WRITEUPS = [
  {id:1, type:'lab', platform:'OverTheWire', diff:'Easy', date:'2025-01',
   title:'Bandit Wargame — Level 0 → 15',
   body:'Worked through Bandit: SSH basics, file system navigation, hidden files, setuid binaries, and Bash scripting.',
   detail:`<h2>Bandit Wargame — Level 0 → 15</h2><div class="msub">OverTheWire · January 2025</div><div class="mlabel">What I Practised</div><p>Worked through the first 15 levels of Bandit, covering SSH login, hidden files, directory navigation, file permissions, and setuid binaries.</p><div class="mlabel">Commands Used</div><p>ssh, ls -la, cat, find, grep, sort, uniq, strings, base64, tr, xxd, nc, openssl, chmod</p><div class="mlabel">Key Takeaway</div><p>chmod, find, and file permissions are exactly the misconfigurations I look for in vulnerability assessments. Understanding the attacker perspective made my Nessus documentation at ST Engineering significantly more detailed.</p>`,
   tags:['Linux','Bash','SSH','File Permissions']},
  {id:2, type:'lab', platform:'HackTheBox', diff:'Medium', date:'2025-03',
   title:'Network Enumeration &amp; Service Discovery',
   body:'Practised identifying open ports, running services, and entry points. Framed each finding in terms of actual business risk.',
   detail:`<h2>Network Enumeration & Service Discovery</h2><div class="msub">HackTheBox · March 2025</div><div class="mlabel">What I Practised</div><p>Systematic network enumeration with nmap across multiple HackTheBox machines. Focus on identifying exposed services and documenting findings clearly.</p><div class="mlabel">Tools Used</div><p>nmap, netcat, enum4linux, smbclient, gobuster</p><div class="mlabel">Key Takeaway</div><p>Framing every finding in terms of impact — "what could an attacker do with this?" — made my Nessus reports at ST Engineering significantly more actionable for remediation teams.</p>`,
   tags:['nmap','SMB','Enumeration','Risk Framing']},
  {id:3, type:'course', platform:'Cisco NetAcad', diff:'Course', date:'2024-11',
   title:'Intro to Cybersecurity — Key Concepts',
   body:'Personal notes from the Cisco Introduction to Cybersecurity course. CIA triad, social engineering, cryptography basics.',
   detail:`<h2>Intro to Cybersecurity — Key Concepts</h2><div class="msub">Cisco Networking Academy · November 2024</div><div class="mlabel">What I Covered</div><p>After completing the Cisco course, I wrote a personal summary of core concepts — CIA triad, types of attacks (DoS, phishing, MitM), social engineering, and basic symmetric/asymmetric cryptography.</p><div class="mlabel">Key Takeaway</div><p>Every security decision maps back to one question: does this protect Confidentiality, Integrity, or Availability?</p>`,
   tags:['CIA Triad','Cryptography','Social Engineering']},
  {id:4, type:'event', platform:'BuildingBloCS', diff:'Conference', date:'2025-06',
   title:'BuildingBloCS 2025 — AI &amp; Machine Learning',
   body:'Computing conference at SUTD focused on AI and ML. Zero background going in — beginner pathway with Python, TensorFlow, PyCaret.',
   detail:`<h2>BuildingBloCS 2025</h2><div class="msub">SUTD Singapore · June 2025</div><div class="mlabel">What I Attended</div><p>Enrolled in the beginner pathway at BuildingBloCS. Workshops covered Python basics applied to ML, TensorFlow and PyCaret, and sessions on Neural Networks and LLMs.</p><div class="mlabel">Key Takeaway</div><p>Sparked genuine curiosity about where AI and cybersecurity intersect — particularly AI-powered threat detection.</p>`,
   tags:['AI','Machine Learning','Python','TensorFlow']},
  {id:5, type:'lab', platform:'Self-Directed', diff:'In Progress', date:'2026-01',
   title:'SOC Home Lab — Planning Stage',
   body:'Planning a personal SOC environment: Windows VM monitored by Wazuh SIEM, simulated attacks from Kali Linux.',
   detail:`<h2>SOC Home Lab</h2><div class="msub">Self-directed · In Progress</div><div class="mlabel">Planned Setup</div><p>Windows 10 VM as endpoint, Wazuh SIEM on Ubuntu collecting logs, Kali Linux as attacker machine. Goal: write custom detection rules and generate real alerts.</p><div class="mlabel">Why I'm Building This</div><p>Hands-on SIEM experience is the most commonly required skill for SOC Analyst entry-level roles in Singapore.</p>`,
   tags:['SIEM','Wazuh','Kali Linux','Detection Engineering']},
];

const EVENTS_DATA = [
  {id:'e1', type:'conference', status:'attended', date:'2025-06-14', dateLabel:'June 2025',
   title:'BuildingBloCS Conference 2025', org:'SUTD · Singapore',
   desc:'Computing conference on AI and ML. Enrolled in beginner pathway — Python, Machine Learning, TensorFlow, PyCaret.',
   detail:`<h2>BuildingBloCS Conference 2025</h2><div class="msub">SUTD Singapore · June 2025 · Attended</div><div class="mlabel">What I Did</div><p>Enrolled in the beginner pathway alongside friends from NYP. Workshops on Python for ML, TensorFlow and PyCaret, and sessions on the future of AI in Singapore.</p><div class="mlabel">Takeaway</div><p>First exposure to AI/ML in a structured setting. Certificate of Participation awarded.</p>`,
   tags:['AI','Machine Learning','Python'], hasCert:true},
  {id:'e2', type:'webinar', status:'upcoming', date:'2026-02-26', dateLabel:'26 Feb 2026 · 2:00–3:15 PM SGT',
   title:'AWS Security Agent Webinar', org:'AWS · Online',
   desc:'Frontier AI agent that proactively secures applications — automated security reviews, pen testing, and code review.',
   detail:`<h2>AWS Security Agent Webinar</h2><div class="msub">AWS · Online · 26 Feb 2026</div><div class="mlabel">Why I Registered</div><p>Interested in how AI is being applied to automate security workflows — relevant to understanding where the industry is heading for SOC and analyst roles.</p>`,
   tags:['AWS','Cybersecurity','AI Agents'], hasCert:false},
];
