// Specialized Laboratory Data — Sri Shakthi Institute of Engineering & Technology
// Single Source of Truth for all 8 dedicated laboratory pages

export const labsList = [
  {
    id: '01',
    slug: 'ai-lab',
    name: 'AI Lab',
    title: 'AI Lab',
    tagline: 'Artificial Intelligence & Intelligent Systems',
    shortDesc: 'Explore intelligent solutions for tomorrow.',
    category: 'Emerging Technologies',
    categoryKey: 'emerging',
    categoryBadgeClass: 'badge-mint-chip',
    accentColor: '#10b981',
    accentClass: 'bar-emerald',
    image: '/brand/special-labs/lab-ai-hd.jpg',
    department: 'Department of Artificial Intelligence & Machine Learning / CSE',
    deptSlug: 'artificial-intelligence-and-machine-learning',
    establishedYear: '2020',
    capacity: '60 High-Compute Workstations',
    timing: '8:30 AM - 6:30 PM (Extended project access till 8:00 PM with mentor approval)',
    metaSummary: 'Dedicated computing and experimentation suite engineered for machine learning, deep neural network training, computer vision, natural language processing, and autonomous decision systems.',

    overview: `
      <p>The <strong>Artificial Intelligence Laboratory</strong> at Sri Shakthi Institute of Engineering and Technology is a state-of-the-art research and experimentation workspace dedicated to next-generation computing paradigms. As artificial intelligence transforms industries across the globe, the AI Lab provides students, research scholars, and faculty mentors with high-throughput compute infrastructure to formulate, train, evaluate, and deploy intelligent algorithms.</p>
      <p>Designed around modern machine learning lifecycles, the laboratory combines high-density GPU computing nodes with industry-standard development frameworks. Students work on cutting-edge problem statements spanning generative AI, autonomous navigation, diagnostic healthcare imaging, conversational agents, and real-time edge intelligence.</p>
    `,

    about: `
      <p>Established to accelerate research and project-based learning under the Autonomous Regulations curriculum, the AI Lab serves as the premier computational hub for undergraduate and postgraduate engineering disciplines. Through hands-on laboratory courses, capstone projects, and competitive hackathon preparation, the lab fosters an environment where foundational mathematical theory converges with real-world software engineering.</p>
      <p>The laboratory is continually updated with modern software packages and cloud-connected telemetry, giving learners comprehensive exposure to data preprocessing pipelines, distributed model training, hyperparameter optimization, and low-latency inference on embedded accelerators.</p>
    `,

    objectives: [
      'Provide comprehensive practical mastery in supervised, unsupervised, and deep reinforcement learning architectures.',
      'Train students in designing end-to-end computer vision pipelines for real-time detection, tracking, and image segmentation.',
      'Develop competencies in Natural Language Processing (NLP), sequence-to-sequence modeling, and foundational LLM fine-tuning.',
      'Facilitate interdisciplinary AI research addressing challenges in precision agriculture, biomedical diagnostics, and industrial automation.',
      'Cultivate industry-grade MLOps practices covering model versioning, testing, containerization, and edge deployment.'
    ],

    specializations: [
      {
        title: 'Machine Learning & Deep Learning',
        desc: 'Advanced supervised and unsupervised algorithms, deep convolutional networks, recurrent models, and transformer architectures.'
      },
      {
        title: 'Computer Vision & Visual Intelligence',
        desc: 'Object recognition, real-time video analytics, automated defect inspection, semantic segmentation, and optical character recognition.'
      },
      {
        title: 'Natural Language Processing & LLMs',
        desc: 'Tokenization, transformer models, semantic search, sentiment classification, question-answering engines, and prompt engineering.'
      },
      {
        title: 'Edge AI & Embedded Inference',
        desc: 'Quantization, pruning, model distillation, and low-latency inference deployment on edge compute platforms and microcontrollers.'
      },
      {
        title: 'Reinforcement Learning & Autonomous Agents',
        desc: 'Policy gradients, Q-learning, robotic simulation environments, and multi-agent coordination systems.'
      },
      {
        title: 'Data Engineering & MLOps',
        desc: 'Feature store management, automated training pipelines, model monitoring, containerized microservices, and experiment tracking.'
      }
    ],

    technologies: [
      { name: 'Python', category: 'Programming Language', desc: 'Core language for statistical computing, scientific workflows, and neural network development.' },
      { name: 'PyTorch', category: 'Deep Learning Framework', desc: 'Dynamic computational graphs for research-grade model creation and gradient optimization.' },
      { name: 'TensorFlow & Keras', category: 'Deep Learning Suite', desc: 'Production-ready neural network construction, training pipelines, and mobile exports.' },
      { name: 'OpenCV', category: 'Computer Vision', desc: 'Real-time image processing, camera calibration, feature extraction, and video tracking.' },
      { name: 'Hugging Face Transformers', category: 'NLP Framework', desc: 'State-of-the-art pretrained transformer models for text, speech, and multimodal tasks.' },
      { name: 'Scikit-Learn', category: 'Machine Learning', desc: 'Robust toolkit for classification, regression, clustering, and dimensional reduction.' },
      { name: 'CUDA & cuDNN', category: 'GPU Acceleration', desc: 'NVIDIA parallel computing platform accelerating matrix computations and tensor operations.' },
      { name: 'JupyterLab & VS Code', category: 'Development IDE', desc: 'Interactive notebook prototyping environments coupled with enterprise IDE tooling.' },
      { name: 'Docker & MLflow', category: 'MLOps & Deployment', desc: 'Containerization and lifecycle tracking for reproducible machine learning workflows.' }
    ],

    equipment: [
      {
        name: 'High-Performance GPU Workstations',
        desc: 'Multi-core computing nodes equipped with dedicated NVIDIA RTX GPUs offering multi-TFLOPS tensor computing capacity for deep learning.'
      },
      {
        name: 'Dual High-Resolution 4K Displays',
        desc: 'Ergonomic dual-monitor setups enabling simultaneous code debugging, training telemetry monitoring, and dataset visualization.'
      },
      {
        name: 'High-Speed Gigabit Intranet & SAN Storage',
        desc: 'Dedicated network-attached storage array for high-throughput streaming of gigabyte-scale image, audio, and video training datasets.'
      },
      {
        name: 'Dedicated Edge AI Developer Kits',
        desc: 'Hardware accelerator modules including NVIDIA Jetson and edge TPUs for real-time model evaluation and embedded robotics deployment.'
      },
      {
        name: 'Centralized Solar & Uninterrupted Power Backup',
        desc: '100% online UPS backed power infrastructure ensuring zero interruption during multi-hour neural network training runs.'
      }
    ],

    researchAreas: [
      'Automated Early Disease Detection in Plant Foliage via Drone Imagery',
      'Low-Latency Multimodal Vision-Language Models for Assistive Healthcare',
      'Explainable AI (XAI) for Clinical Decision Support Systems',
      'Intelligent Traffic Flow Optimization and Emergency Vehicle Routing',
      'Privacy-Preserving Federated Learning for Distributed Internet-of-Things'
    ],

    studentProjects: [
      {
        title: 'Vision-Based Automated Surface Defect Classifier',
        desc: 'Deep learning classification pipeline identifying micro-fractures in industrial metal castings with sub-second latency.',
        tags: ['PyTorch', 'OpenCV', 'Computer Vision']
      },
      {
        title: 'Diagnostic Radiograph Pulmonary Screening Assistant',
        desc: 'Convolutional neural network architecture trained to highlight pulmonary abnormalities and assist healthcare professionals.',
        tags: ['TensorFlow', 'Medical Imaging', 'Deep Learning']
      },
      {
        title: 'Multilingual Regional Speech Transcription Engine',
        desc: 'Acoustic sequence model capable of recognizing and transcribing regional conversational dialects with high accuracy.',
        tags: ['Hugging Face', 'NLP', 'Acoustic Models']
      },
      {
        title: 'Autonomous Navigation for Indoor Delivery Drones',
        desc: 'Reinforcement learning control policy integrated with stereo depth cameras for obstacle navigation in GPS-denied buildings.',
        tags: ['Edge AI', 'Reinforcement Learning', 'Robotics']
      }
    ],

    facilities: [
      'Centrally air-conditioned 60-seat workspace with ergonomic workstation seating',
      'High-speed campus-wide 1 Gbps fiber optic internet and private intranet subnet',
      'Interactive smart touch panel for algorithmic walk-throughs and code reviews',
      'Dedicated collaboration pods for capstone project teams and hackathon squads',
      'Full suite of licensed and open-source scientific software packages'
    ],

    applications: [
      'Autonomous Driving & Advanced Driver Assistance Systems (ADAS)',
      'Automated Quality Assurance in High-Precision Manufacturing',
      'Personalized Diagnostic Healthcare and Predictive Patient Monitoring',
      'Smart City Infrastructure and Intelligent Surveillance Systems',
      'Algorithmic Financial Risk Modeling and Fraud Prevention'
    ],

    mentorship: {
      title: 'Laboratory Mentorship & Academic Coordination',
      desc: 'The AI Laboratory is steered by faculty specialists from the Department of Artificial Intelligence & Machine Learning, supported by departmental lab coordinators and senior research mentors.',
      roles: [
        'Faculty Lab Coordinator: Overall academic laboratory planning and project curriculum alignment.',
        'Technical Support Engineer: Workstation administration, GPU cluster maintenance, and software environment updates.',
        'Research Mentors: Specialized faculty guidance across Vision, NLP, and Deep Learning capstone tracks.'
      ]
    },

    gallery: [
      { img: '/brand/special-labs/lab-ai-hd.jpg', title: 'Main AI Computing Workspace', caption: 'High-compute GPU workstations configured for machine learning and deep neural network experimentation.' },
      { img: '/brand/techpark-hd.jpg', title: 'Technology Park Compute Center', caption: 'Integrated campus infrastructure housing specialized innovation laboratories and research hubs.' },
      { img: '/brand/special-labs/lab-iot-hd.jpg', title: 'Interdisciplinary Edge AI Sandbox', caption: 'Hardware interfacing bench connecting neural networks with physical sensors and smart gateways.' }
    ]
  },

  {
    id: '02',
    slug: 'cyber-cloud-lab',
    name: 'Cyber & Cloud Lab',
    title: 'Cyber & Cloud Lab',
    tagline: 'Cybersecurity, Cloud Infrastructure & Network Defense',
    shortDesc: 'Secure today. Scale tomorrow.',
    category: 'Cloud & Information Security',
    categoryKey: 'emerging',
    categoryBadgeClass: 'badge-blue-cloud',
    accentColor: '#0ea5e9',
    accentClass: 'bar-blue',
    image: '/brand/special-labs/lab-cyber-cloud-hd.jpg',
    department: 'Department of Computer Science & Engineering / Information Technology',
    deptSlug: 'computer-science-and-engineering',
    establishedYear: '2021',
    capacity: '55 Enterprise Workstations & Server Rack Pods',
    timing: '8:30 AM - 6:30 PM (Lab access till 8:00 PM for project teams)',
    metaSummary: 'Dedicated cybersecurity operations center and cloud computing testbed equipped for penetration testing, network defense simulations, virtualization, and resilient cloud architectures.',

    overview: `
      <p>The <strong>Cyber &amp; Cloud Lab</strong> at Sri Shakthi Institute of Engineering and Technology is an enterprise-grade digital proving ground designed to prepare engineering students for the demanding requirements of information security, cloud infrastructure, and distributed computing.</p>
      <p>In an era marked by rapid digital transformation and sophisticated cyber threats, this laboratory bridges theoretical computer networks with hands-on red-team and blue-team security operations, software-defined networking, container orchestration, and multi-tenant cloud architecture.</p>
    `,

    about: `
      <p>Configured with isolated sandbox testbeds, hardware managed switches, and enterprise virtualization nodes, the lab provides an authentic environment where students can dissect real network vulnerabilities without risking live networks.</p>
      <p>Students master defense-in-depth methodologies, cryptographic protocols, cloud security auditing, and continuous deployment workflows. Regular hands-on capture-the-flag (CTF) challenges and threat emulation exercises prepare graduates for high-demand careers in security engineering and cloud operations.</p>
    `,

    objectives: [
      'Provide experiential learning in ethical hacking, vulnerability scanning, and threat intelligence mapping.',
      'Train students in designing resilient, auto-scaling cloud architectures using containers and microservices.',
      'Instill proficiency in configuring enterprise firewalls, intrusion detection systems (IDS), and cryptographic protocols.',
      'Equip learners with modern DevSecOps tools to embed continuous security across the software lifecycle.',
      'Foster independent research in malware analysis, network packet forensics, and cloud zero-trust security.'
    ],

    specializations: [
      {
        title: 'Cybersecurity & Ethical Hacking',
        desc: 'Penetration testing methodologies, vulnerability assessments, exploit analysis, and defense mitigations.'
      },
      {
        title: 'Cloud Infrastructure & Architecture',
        desc: 'Virtual machine clusters, distributed storage, serverless execution, and multi-region network routing.'
      },
      {
        title: 'Network Defense & SOC Simulation',
        desc: 'Security Information and Event Management (SIEM), packet inspection, anomaly detection, and incident response.'
      },
      {
        title: 'Containerization & Microservices',
        desc: 'Docker container packaging, Kubernetes cluster orchestration, service meshes, and auto-scaling rules.'
      },
      {
        title: 'Applied Cryptography & PKI',
        desc: 'Symmetric and asymmetric encryption, digital signatures, public key infrastructure, and secure handshake protocols.'
      },
      {
        title: 'Digital Forensics & Incident Response',
        desc: 'Volatile memory extraction, disk image forensics, log file correlation, and evidentiary auditing.'
      }
    ],

    technologies: [
      { name: 'Kali Linux', category: 'Security OS', desc: 'Industry-standard penetration testing distribution loaded with offensive security tools.' },
      { name: 'Wireshark', category: 'Packet Analysis', desc: 'Deep packet inspection and real-time network protocol decoding.' },
      { name: 'Metasploit & Nmap', category: 'Penetration Testing', desc: 'Network discovery, open-port scanning, and vulnerability exploitation frameworks.' },
      { name: 'Burp Suite', category: 'Web Security', desc: 'Interactive HTTP proxy for intercepting and auditing web application security weaknesses.' },
      { name: 'Docker & Kubernetes', category: 'Cloud Orchestration', desc: 'Container packaging, declarative service definitions, and cluster orchestration.' },
      { name: 'Terraform & Ansible', category: 'Infrastructure as Code', desc: 'Automated provisioning and configuration management for cloud resources.' },
      { name: 'Snort & Suricata', category: 'Intrusion Detection', desc: 'Rule-based network intrusion detection and signature-based packet filtering.' },
      { name: 'AWS & Azure Cloud Tools', category: 'Cloud Platforms', desc: 'SDKs, CLI tools, and emulators for leading public cloud environments.' },
      { name: 'OpenVAS & Nessus', category: 'Vulnerability Management', desc: 'Automated asset scanning and security vulnerability reporting.' }
    ],

    equipment: [
      {
        name: 'Enterprise Rack-Mounted Server Nodes',
        desc: 'High-density multi-core server blades running enterprise hypervisors for virtual lab isolation.'
      },
      {
        name: 'Managed Gigabit Switches & Hardware Firewalls',
        desc: 'Dedicated networking racks with VLAN-capable switches and programmable hardware packet routers.'
      },
      {
        name: 'Isolated Air-Gapped Sandbox Network',
        desc: 'Segregated physical subnets enabling safe execution and analysis of simulated cyber attack scenarios.'
      },
      {
        name: 'Security Operations (SOC) Dual-Monitor Stations',
        desc: 'Dual-display workstations configured for parallel log inspection, traffic telemetry, and command terminal work.'
      },
      {
        name: 'High-Speed NAS Storage for Forensics Images',
        desc: 'Encrypted storage arrays designed for staging multi-gigabyte forensic disk images and packet logs.'
      }
    ],

    researchAreas: [
      'AI-Driven Network Anomaly Detection in High-Throughput Campus Networks',
      'Zero-Trust Access Control Frameworks for Multi-Tenant Cloud Environments',
      'Automated Vulnerability Remediation in Containerized Microservice Architectures',
      'Lightweight Cryptographic Protocols for Constrained IoT Edge Gateways',
      'Adversarial Attack Simulation and Defense Resilience in Web APIs'
    ],

    studentProjects: [
      {
        title: 'Automated Network Threat Hunter & Packet Inspector',
        desc: 'Real-time network traffic monitor using machine learning algorithms to flag suspicious packet surges and port scans.',
        tags: ['Python', 'Wireshark', 'IDS']
      },
      {
        title: 'Zero-Trust Campus Authentication & Role Gateway',
        desc: 'Authentication portal enforcing multi-factor verification, device health checks, and micro-segmentation access rules.',
        tags: ['Cloud', 'Zero-Trust', 'OAuth2']
      },
      {
        title: 'Resilient Microservices Deployment on Kubernetes',
        desc: 'Fault-tolerant multi-tier web application featuring automated rolling updates, health probes, and self-healing pods.',
        tags: ['Kubernetes', 'Docker', 'DevOps']
      },
      {
        title: 'Automated Vulnerability Assessment Pipeline',
        desc: 'CI/CD pipeline integration that runs automated static and dynamic code security checks before software staging.',
        tags: ['DevSecOps', 'Burp Suite', 'OpenVAS']
      }
    ],

    facilities: [
      '55 workstation terminal stations arranged in collaborative security pods',
      'Isolated research VLAN with restricted gateway controls for ethical security drills',
      'Dedicated server rack housing virtualization hypervisors and storage appliances',
      'Dual large visual wall monitors for network topology visualization and SOC monitoring',
      'Reliable power backup and dedicated cooling infrastructure'
    ],

    applications: [
      'Enterprise Network Defense & Threat Mitigation',
      'Public & Private Cloud Infrastructure Management',
      'Financial & Healthcare Data Privacy Compliance',
      'DevSecOps Pipelines for High-Velocity Software Teams',
      'Incident Response & Digital Forensics Auditing'
    ],

    mentorship: {
      title: 'Laboratory Mentorship & Academic Coordination',
      desc: 'Supervised by faculty members from the Department of Computer Science & Engineering and Information Technology with certifications in networking, cloud architectures, and information security.',
      roles: [
        'Faculty Lab In-Charge: Curricular alignment, student lab examinations, and industry-sponsored certifications.',
        'Network Systems Administrator: Server maintenance, sandbox network configuration, and firewall policies.',
        'Cyber Security Mentors: Technical coaching for CTF competitions, hackathons, and security capstone projects.'
      ]
    },

    gallery: [
      { img: '/brand/special-labs/lab-cyber-cloud-hd.jpg', title: 'Cyber Operations & Cloud Datacenter', caption: 'Enterprise server racks, managed switches, and terminal stations for cyber defense and cloud virtualization.' },
      { img: '/brand/techpark-hd.jpg', title: 'SIET Technology Park Infrastructure', caption: 'State-of-the-art campus computing facilities supporting advanced engineering disciplines.' },
      { img: '/brand/special-labs/lab-ai-hd.jpg', title: 'Collaborative Computing Suites', caption: 'Modern computing environments equipped for advanced analytical and software workloads.' }
    ]
  },

  {
    id: '03',
    slug: 'vlsi-lab',
    name: 'VLSI Lab',
    title: 'VLSI Lab',
    tagline: 'Semiconductor Microelectronics, IC Design & FPGA Systems',
    shortDesc: 'Designing the next generation chips.',
    category: 'Core Semiconductor & Hardware',
    categoryKey: 'core',
    categoryBadgeClass: 'badge-yellow-chip',
    accentColor: '#eab308',
    accentClass: 'bar-yellow',
    image: '/brand/special-labs/lab-vlsi-hd.jpg',
    department: 'Department of Electronics Engineering (VLSI Design and Technology) / ECE',
    deptSlug: 'vlsi-design',
    establishedYear: '2016',
    capacity: '50 Specialized EDA Workstations & Hardware Test Benches',
    timing: '8:30 AM - 6:30 PM (Special access for tape-out and capstone teams)',
    metaSummary: 'AICTE-funded advanced microelectronics facility equipped with industry EDA toolchains, FPGA synthesis stations, and semiconductor characterization benches.',

    overview: `
      <p>The <strong>VLSI Lab</strong> at Sri Shakthi Institute of Engineering and Technology is a premier semiconductor microelectronics center recognized as one of the standout hardware facilities in the region. Funded under AICTE RPS and MODROBS initiatives, this laboratory empowers students to design, simulate, verify, and fabricate integrated circuits spanning digital, analog, and mixed-signal domains.</p>
      <p>From foundational CMOS logic gates to sophisticated System-on-Chip (SoC) architectures and custom RISC-V processors, learners gain hands-on mastery over the complete electronic design automation (EDA) lifecycle demanded by global semiconductor giants.</p>
    `,

    about: `
      <p>Supporting both the B.E. Electronics Engineering (VLSI Design and Technology) and M.E. VLSI Design programs, the laboratory features high-performance Linux workstations running industry-standard EDA environments alongside FPGA acceleration trainer kits.</p>
      <p>Students carry out Register-Transfer Level (RTL) coding, logic synthesis, static timing analysis (STA), physical layout design, design rule checking (DRC), and layout versus schematic (LVS) verification. The lab provides a direct pipeline for careers in fabless semiconductor design, physical verification, and chip tape-out engineering.</p>
    `,

    objectives: [
      'Master digital integrated circuit design from RTL specification to synthesized gate-level netlists.',
      'Train students in analog and mixed-signal CMOS schematic design, DC/AC analysis, and transient simulations.',
      'Provide practical proficiency in FPGA synthesis, constraint generation, timing closure, and hardware debugging.',
      'Expose learners to physical design methodologies including floorplanning, placement, routing, and parasitic extraction.',
      'Encourage research in low-power VLSI design, semiconductor AI accelerators, and fault-tolerant architectures.'
    ],

    specializations: [
      {
        title: 'Digital IC Design & RTL Synthesis',
        desc: 'Hardware Description Languages (Verilog/VHDL), logic synthesis, finite state machines, and datapath units.'
      },
      {
        title: 'Analog & Mixed-Signal CMOS Design',
        desc: 'Operational amplifiers, bandgap references, data converters (ADC/DAC), and layout matching.'
      },
      {
        title: 'FPGA Architecture & Prototyping',
        desc: 'Xilinx/Altera FPGA implementation, clock management tiles, DSP slices, and high-speed I/O interfaces.'
      },
      {
        title: 'System-on-Chip (SoC) & RISC-V',
        desc: 'Bus architectures (AMBA/AXI), processor core integration, peripheral controllers, and hardware-software co-design.'
      },
      {
        title: 'Low-Power VLSI Techniques',
        desc: 'Multi-voltage domains, clock gating, power gating, dynamic voltage scaling, and leakage current minimization.'
      },
      {
        title: 'Physical Design & Tape-Out Verification',
        desc: 'Automatic Place and Route (APR), Static Timing Analysis, DRC, LVS, and antenna rule verification.'
      }
    ],

    technologies: [
      { name: 'Cadence EDA Suite', category: 'EDA Toolchain', desc: 'Industry-standard environment for analog and mixed-signal IC schematic and layout.' },
      { name: 'Synopsys Design Compiler', category: 'Logic Synthesis', desc: 'RTL synthesis and optimization tool translating HDL into target gate-level netlists.' },
      { name: 'Xilinx Vivado', category: 'FPGA Design', desc: 'Comprehensive FPGA synthesis, implementation, and hardware debugging suite.' },
      { name: 'ModelSim / Questa', category: 'HDL Simulation', desc: 'High-speed event-driven simulator for Verilog, VHDL, and SystemVerilog testbenches.' },
      { name: 'Verilog HDL & VHDL', category: 'Hardware Languages', desc: 'Standard languages for modeling digital electronic systems at structural and behavioral levels.' },
      { name: 'SystemVerilog & UVM', category: 'Verification', desc: 'Constrained random testing, coverage metrics, and Universal Verification Methodology.' },
      { name: 'SPICE Simulators', category: 'Circuit Simulation', desc: 'Analog transistor-level circuit simulation for DC operating points, AC response, and transient behavior.' },
      { name: 'GDSII / OASIS Viewers', category: 'Layout Formats', desc: 'Standard mask layout data inspection tools for semiconductor fabrication handoff.' }
    ],

    equipment: [
      {
        name: 'Xilinx FPGA & CPLD Development Kits',
        desc: 'Modern Artix-7 and Spartan series trainer boards equipped with high-density programmable logic, pushbuttons, LEDs, and high-speed expansion headers.'
      },
      {
        name: 'High-Bandwidth Mixed-Signal Oscilloscopes (MSO)',
        desc: 'Digital storage oscilloscopes with analog and digital logic channels for analyzing high-frequency clock pulses and bus transmissions.'
      },
      {
        name: 'Dedicated 32-Channel Logic Analyzers',
        desc: 'High-speed multi-channel timing analyzers for capturing parallel bus states, address/data buses, and protocol handshakes.'
      },
      {
        name: 'High-RAM Linux EDA Compute Workstations',
        desc: 'Multi-core workstations configured with high memory pools required for intensive physical synthesis and layout DRC runs.'
      },
      {
        name: 'Regulated Precision DC Power Supplies',
        desc: 'Low-ripple multi-output benchtop power supplies providing stable sub-volt and standard logic voltages for IC prototyping.'
      }
    ],

    researchAreas: [
      'Energy-Efficient Compute-in-Memory Architectures for Edge AI',
      'Ultra-Low-Power Sub-Threshold Logic for Biomedical Implants',
      'Custom Hardware Acceleration for Cryptographic Hash Algorithms',
      'Fault-Tolerant Clock Distribution Networks in Deep Sub-Micron Technologies',
      'High-Speed Analog-to-Digital Converter Architectures for 5G RF Front-Ends'
    ],

    studentProjects: [
      {
        title: '32-Bit Pipelined RISC-V Processor Core on FPGA',
        desc: 'Complete RTL implementation of an RV32I instruction set architecture verified and synthesized onto an FPGA board.',
        tags: ['Verilog', 'RISC-V', 'FPGA']
      },
      {
        title: 'Low-Power 16x16 Bit MAC Unit for Deep Learning Accelerators',
        desc: 'High-speed multiply-accumulate unit utilizing carry-save adder trees and clock gating to reduce dynamic switching power.',
        tags: ['VLSI', 'Synopsys', 'Low-Power']
      },
      {
        title: 'High-Gain Low-Noise CMOS Operational Transconductance Amplifier',
        desc: 'Transistor-level design in Cadence Virtuoso achieving 70dB gain with phase margin optimized for sensor signal conditioning.',
        tags: ['Cadence', 'Analog IC', 'CMOS']
      },
      {
        title: 'AXI4-Lite Compliant Memory Controller IP Core',
        desc: 'Custom bus interconnect peripheral providing arbitration and high-speed data transfer between on-chip memory and processor.',
        tags: ['SystemVerilog', 'SoC', 'IP Core']
      }
    ],

    facilities: [
      '50 high-specification Linux workstations running licensed EDA synthesis tools',
      'Dedicated hardware testing and FPGA verification benches with anti-static ESD mats',
      'AICTE RPS and MODROBS sponsored microelectronics research facilities',
      'Digital interactive display for schematic walkthroughs and waveform reviews',
      'Uninterrupted clean power supply and temperature-controlled clean laboratory environment'
    ],

    applications: [
      'Fabless Semiconductor Design & Verification Engineering',
      'System-on-Chip (SoC) Integration for Consumer & Automotive Tech',
      'Telecom Silicon & 5G/6G Baseband Processing Hardware',
      'Aerospace & Defense Electronics Radiation-Hardened Circuits',
      'Specialized Edge AI Hardware Accelerators and Microcontrollers'
    ],

    mentorship: {
      title: 'Laboratory Mentorship & Academic Coordination',
      desc: 'Directed by faculty specialists from the Department of Electronics Engineering (VLSI Design and Technology) and ECE with deep research backgrounds in microelectronics, semiconductor physics, and chip architecture.',
      roles: [
        'Faculty Lab Coordinator: Oversees curriculum-aligned practical modules, MODROBS research deliverables, and laboratory expansion.',
        'EDA Systems Engineer: Manages Linux workstations, toolchain licenses, PDK library installations, and compute servers.',
        'Semiconductor Research Mentors: Guides undergraduate capstones and postgraduate M.E. thesis research in chip design.'
      ]
    },

    gallery: [
      { img: '/brand/special-labs/lab-vlsi-hd.jpg', title: 'VLSI Microelectronics Clean Lab', caption: 'High-density chip layout design, semiconductor testing stations, and FPGA verification benches.' },
      { img: '/brand/special-labs/lab-pcb-hd.jpg', title: 'Hardware Integration & Soldering Suite', caption: 'Complementary prototyping suite for board-level testing and peripheral carrier assembly.' },
      { img: '/brand/techpark-hd.jpg', title: 'Sri Shakthi Technology Park', caption: 'Campus research complex supporting specialized engineering infrastructure and Centers of Excellence.' }
    ]
  },

  {
    id: '04',
    slug: 'embedded-systems-lab',
    name: 'Embedded Systems Lab',
    title: 'Embedded Systems Lab',
    tagline: 'Microcontrollers, Real-Time Firmware & Hardware Interfacing',
    shortDesc: 'Build. Integrate. Innovate.',
    category: 'Core Embedded & Electronics',
    categoryKey: 'core',
    categoryBadgeClass: 'badge-mint-gear',
    accentColor: '#14b8a6',
    accentClass: 'bar-teal',
    image: '/brand/special-labs/lab-embedded-hd.jpg',
    department: 'Department of Electronics and Communication Engineering / EEE',
    deptSlug: 'electronics-and-communication-engineering',
    establishedYear: '2015',
    capacity: '60 Hardware Development & Testing Workstations',
    timing: '8:30 AM - 6:30 PM (Lab access for prototype development till 8:00 PM)',
    metaSummary: 'Comprehensive hardware engineering testbed dedicated to 8/16/32-bit microcontrollers, real-time operating systems, firmware development, and hardware-software interfacing.',

    overview: `
      <p>The <strong>Embedded Systems Lab</strong> at Sri Shakthi Institute of Engineering and Technology is an intensive hardware-software engineering workspace. Embedded systems power the modern world — from automotive engine controllers and avionics to medical diagnostic devices and smart home appliances.</p>
      <p>This laboratory immerses students in the complete embedded product lifecycle: understanding processor architectures, writing efficient bare-metal firmware in C/C++, integrating real-time operating systems (RTOS), and interfacing microcontrollers with sensors, displays, communication transceivers, and motor drivers.</p>
    `,

    about: `
      <p>Equipped with industry-standard development boards spanning ARM Cortex-M processors, PIC microcontrollers, AVR chips, and legacy 8051 trainers, the laboratory provides every student with dedicated benchtop instrumentation including digital storage oscilloscopes, function generators, and logic analyzers.</p>
      <p>The curriculum emphasizes deterministic real-time responsiveness, power-efficient peripheral management, hardware protocol analysis (SPI, I2C, UART, CAN), and modular driver architecture, molding students into agile embedded systems engineers ready for industry leadership.</p>
    `,

    objectives: [
      'Develop strong foundational competence in microcontroller architecture, memory organization, and interrupt service routines.',
      'Train students in writing clean, portable, and memory-constrained embedded C and C++ firmware.',
      'Instill practical understanding of Real-Time Operating Systems (RTOS) concepts including tasks, queues, semaphores, and mutexes.',
      'Master hardware bus communication protocols such as I2C, SPI, UART, CAN, and USB.',
      'Equip learners to diagnose hardware-firmware bugs using in-circuit debuggers, oscilloscopes, and logic probes.'
    ],

    specializations: [
      {
        title: 'ARM Cortex-M Architecture & Programming',
        desc: '32-bit RISC processing, register manipulation, Nested Vectored Interrupt Controllers (NVIC), and hardware timers.'
      },
      {
        title: 'Real-Time Operating Systems (RTOS)',
        desc: 'FreeRTOS kernel primitives, task scheduling algorithms, priority inversion prevention, and inter-task communication.'
      },
      {
        title: 'Industrial Bus Protocols (CAN, SPI, I2C)',
        desc: 'Automotive Controller Area Network (CAN), differential signaling, multi-master I2C buses, and high-speed SPI.'
      },
      {
        title: 'Sensor & Actuator Interfacing',
        desc: 'Analog-to-digital converters (ADC), PWM motor control, optical encoders, LCD/OLED displays, and relay modules.'
      },
      {
        title: 'Firmware Architecture & Device Drivers',
        desc: 'Hardware Abstraction Layers (HAL), bare-metal peripheral drivers, circular buffers, and state machine design.'
      },
      {
        title: 'Hardware Debugging & In-Circuit Emulation',
        desc: 'JTAG and SWD hardware debuggers, breakpoint analysis, memory registers inspection, and timing analysis.'
      }
    ],

    technologies: [
      { name: 'Embedded C / C++', category: 'Core Language', desc: 'Primary low-level languages for high-performance firmware and hardware register programming.' },
      { name: 'ARM Keil MDK', category: 'IDE & Compiler', desc: 'Industry-standard IDE and Arm Compiler suite for Cortex-M microcontroller development.' },
      { name: 'STM32CubeIDE', category: 'Development Platform', desc: 'Eclipse-based IDE with graphical pinout configuration and HAL code generation.' },
      { name: 'FreeRTOS', category: 'Real-Time OS', desc: 'Market-leading open-source real-time operating system kernel for microcontrollers.' },
      { name: 'Proteus VSM', category: 'Circuit Simulation', desc: 'Virtual system modeling suite for co-simulating microcontroller firmware with schematics.' },
      { name: 'MPLAB X IDE', category: 'Microchip Suite', desc: 'Integrated toolset for PIC and AVR microcontroller firmware development and emulation.' },
      { name: 'JTAG / SWD Debuggers', category: 'Hardware Emulation', desc: 'Hardware debug probes enabling single-step code execution and register memory dumps.' },
      { name: 'PlatformIO & VS Code', category: 'Modern Toolchain', desc: 'Collaborative development environment supporting multi-architecture embedded boards.' }
    ],

    equipment: [
      {
        name: 'ARM Cortex-M (STM32 / NXP) Development Boards',
        desc: 'Modern 32-bit microcontroller boards featuring extensive breakout pins, on-board ST-Link debuggers, and USB interfaces.'
      },
      {
        name: 'PIC, AVR & 8051 Microcontroller Trainer Kits',
        desc: 'Modular test platforms equipped with keypads, 7-segment displays, stepper motor drivers, DACs, and relay banks.'
      },
      {
        name: 'Dual-Channel Digital Storage Oscilloscopes (DSO)',
        desc: 'High-sampling oscilloscopes with automated measurements for waveform analysis and bus protocol decoding.'
      },
      {
        name: 'Arbitrary Function & Signal Generators',
        desc: 'Precision signal generators producing sine, square, ramp, and custom waveforms for sensor emulation.'
      },
      {
        name: 'Regulated Triple-Output DC Power Supplies',
        desc: 'Isolated low-noise DC power supplies with current-limiting controls protecting sensitive prototypes during bring-up.'
      }
    ],

    researchAreas: [
      'Ultra-Low-Power Sleep Mode Strategies for Energy-Harvesting Nodes',
      'Safety-Critical CAN-Bus Communication Frameworks for Electric Vehicles',
      'Lightweight Cryptographic Implementations on Constrained 8-Bit MCUs',
      'Deterministic Real-Time Motor Control for Multi-Axis Gimbal Systems',
      'Predictive Firmware Diagnostics and Over-The-Air (OTA) Bootloader Design'
    ],

    studentProjects: [
      {
        title: 'Automotive CAN-Bus Telemetry Logger with Fault Diagnostics',
        desc: 'Automotive dashboard controller reading engine parameters, detecting error frames, and logging live diagnostics.',
        tags: ['STM32', 'CAN-Bus', 'Embedded C']
      },
      {
        title: 'FreeRTOS-Based Wearable Patient Health Monitor',
        desc: 'Multitasking embedded firmware sampling pulse oximeter and temperature sensors with audio alarm task prioritization.',
        tags: ['FreeRTOS', 'ARM Cortex', 'Biomedical']
      },
      {
        title: 'Smart Industrial Brushless DC Motor Speed Controller',
        desc: 'Closed-loop PID controller generating complementary PWM signals with hall-effect sensor feedback for precise velocity control.',
        tags: ['PWM', 'Motor Control', 'Keil']
      },
      {
        title: 'Ultra-Low-Power Environmental Sensor Pod with Flash Storage',
        desc: 'Battery-powered node running deep-sleep cycles, waking periodically to log microclimate data to SPI NOR flash.',
        tags: ['Low-Power', 'SPI', 'AVR']
      }
    ],

    facilities: [
      '60 specialized hardware prototyping benches with integrated tool racks',
      'Dedicated benchtop instrumentation for every dual-student team',
      'Anti-static wrist strap grounding ports at every workbench station',
      'Component locker containing a wide catalog of sensors, drivers, and ICs',
      'Clean power distribution and emergency shutoff safety systems'
    ],

    applications: [
      'Automotive Electronic Control Units (ECUs) and Infotainment Systems',
      'Medical Instrumentation and Diagnostic Patient Monitors',
      'Consumer Electronics, Wearable Devices, and Smart Appliances',
      'Industrial Automation, PLC Modules, and Motor Drive Controllers',
      'Aerospace Avionics and Unmanned Aerial Vehicle (UAV) Flight Controllers'
    ],

    mentorship: {
      title: 'Laboratory Mentorship & Academic Coordination',
      desc: 'Guided by experienced faculty members from the Department of Electronics and Communication Engineering with practical backgrounds in microcontroller architectures, firmware engineering, and industrial electronics.',
      roles: [
        'Faculty Lab Coordinator: Oversees hands-on lab curricula, project evaluations, and hardware procurement.',
        'Hardware Lab Instructor: Assists students during circuit wiring, oscilloscope operation, and sensor interfacing.',
        'Embedded Project Mentors: Provides one-on-one technical direction for capstone projects and competitive design contests.'
      ]
    },

    gallery: [
      { img: '/brand/special-labs/lab-embedded-hd.jpg', title: 'Main Embedded Hardware Suite', caption: 'Microcontroller development boards, oscilloscopes, and circuit bring-up benches.' },
      { img: '/brand/special-labs/lab-pcb-hd.jpg', title: 'PCB Design & Assembly Suite', caption: 'Custom board fabrication and soldering facilities supporting embedded prototypes.' },
      { img: '/brand/special-labs/lab-iot-hd.jpg', title: 'Connected Systems & Sensor Sandbox', caption: 'Wireless sensor testbeds connecting embedded controllers to IoT cloud telemetry.' }
    ]
  },

  {
    id: '05',
    slug: 'iot-lab',
    name: 'IoT Lab',
    title: 'IoT Lab',
    tagline: 'Internet of Things, Connected Sensors & Smart Telemetry',
    shortDesc: 'Connect ideas to a smarter world.',
    category: 'Connected Systems & IoT',
    categoryKey: 'emerging',
    categoryBadgeClass: 'badge-mint-wifi',
    accentColor: '#10b981',
    accentClass: 'bar-emerald',
    image: '/brand/special-labs/lab-iot-hd.jpg',
    department: 'Department of Computer Science & Engineering / ECE / Agri Tech',
    deptSlug: 'computer-science-and-engineering',
    establishedYear: '2019',
    capacity: '50 IoT Prototyping Workstations & Wireless Testbeds',
    timing: '8:30 AM - 6:30 PM (Campus IoT testbed accessible for field experiments)',
    metaSummary: 'Interdisciplinary IoT innovation hub featuring multi-sensor testbeds, LoRaWAN and wireless gateways, edge compute boards, and telemetry dashboards.',

    overview: `
      <p>The <strong>Internet of Things (IoT) Lab</strong> at Sri Shakthi Institute of Engineering and Technology serves as an end-to-end prototyping hub where physical hardware meets cloud connectivity. By bridging embedded sensors with internet communications, the laboratory empowers students to build intelligent systems that monitor, analyze, and automate real-world environments.</p>
      <p>From smart agriculture telemetry and environmental monitoring to campus energy grids and industrial asset tracking, the IoT Lab provides students with both the physical testbeds and the cloud software infrastructure required to build production-grade connected solutions.</p>
    `,

    about: `
      <p>Equipped with a rich ecosystem of Wi-Fi, BLE, Zigbee, and long-range LoRaWAN transceivers alongside single-board computers like Raspberry Pi and ESP32 microcontrollers, the lab enables learners to master both constrained edge programming and scalable cloud data pipelines.</p>
      <p>Students learn lightweight communication protocols like MQTT and CoAP, configure edge gateways, parse real-time sensor streams with time-series databases, and construct visual monitoring dashboards. Interdisciplinary teams collaborate on smart campus solutions that directly interface with college infrastructure.</p>
    `,

    objectives: [
      'Understand the four-tier architectural model of IoT: sensors, edge gateways, cloud platforms, and application layers.',
      'Gain hands-on proficiency in sensor data acquisition, signal conditioning, and analog-to-digital calibration.',
      'Master low-power wireless networking protocols including LoRaWAN, BLE, Zigbee, and Wi-Fi mesh.',
      'Implement lightweight publish/subscribe communication architectures utilizing MQTT and RESTful APIs.',
      'Build end-to-end telemetry solutions integrating time-series databases, automated alert triggers, and interactive dashboards.'
    ],

    specializations: [
      {
        title: 'Sensor Interfacing & Signal Acquisition',
        desc: 'Integration of environmental, gas, soil, ultrasonic, optical, and biometric sensors with microcontrollers.'
      },
      {
        title: 'Wireless Sensor Networks & Mesh Protocols',
        desc: 'Zigbee 802.15.4 mesh networks, Bluetooth Low Energy (BLE) beacons, and self-healing multi-hop routing.'
      },
      {
        title: 'Long-Range Telemetry (LoRa & LoRaWAN)',
        desc: 'Sub-gigahertz long-range radio transmissions, gateway forwarding, The Things Network (TTN) servers, and low power.'
      },
      {
        title: 'Edge Computing & Gateways',
        desc: 'Raspberry Pi edge gateways running protocol converters, local SQLite caching, and edge machine learning models.'
      },
      {
        title: 'Cloud IoT Platforms & Dashboards',
        desc: 'MQTT message brokers, AWS IoT Core, Node-RED visual flows, InfluxDB time-series storage, and Grafana visualization.'
      },
      {
        title: 'Smart Agriculture & Environmental Monitoring',
        desc: 'Soil NPK analyzers, microclimate weather stations, automated drip irrigation valves, and solar power integration.'
      }
    ],

    technologies: [
      { name: 'ESP32 & ESP8266', category: 'SoC Modules', desc: 'Wi-Fi and Bluetooth-enabled microcontrollers ideal for rapid connected prototype creation.' },
      { name: 'Raspberry Pi 4 / 5', category: 'Single Board Computer', desc: 'Quad-core Linux platforms functioning as local IoT edge servers and multi-protocol gateways.' },
      { name: 'Arduino IDE & MicroPython', category: 'Programming Stack', desc: 'Versatile firmware environments enabling high-speed iterative sensor coding.' },
      { name: 'MQTT & Mosquitto', category: 'Messaging Protocol', desc: 'Lightweight publish-subscribe message broker optimized for low-bandwidth networks.' },
      { name: 'Node-RED', category: 'Flow-Based Programming', desc: 'Visual wiring tool for connecting hardware devices, APIs, and cloud services.' },
      { name: 'InfluxDB & Grafana', category: 'Time-Series & UI', desc: 'High-performance time-series data storage coupled with interactive visual telemetry dashboards.' },
      { name: 'LoRaWAN Stacks', category: 'Long-Range Wireless', desc: 'Radio protocol stacks for sub-GHz communications over several kilometers.' },
      { name: 'AWS IoT / Firebase', category: 'Cloud Infrastructure', desc: 'Enterprise cloud endpoints handling device shadow states, authentication, and database sync.' }
    ],

    equipment: [
      {
        name: 'Multi-Channel LoRaWAN Gateway & Nodes',
        desc: 'Industrial 8-channel indoor/outdoor LoRaWAN gateway providing kilometers of wireless coverage across campus buildings.'
      },
      {
        name: 'Comprehensive Sensor Experimentation Kits',
        desc: 'Calibrated sensor modules including soil moisture/NPK, temperature, humidity (DHT/BME), air quality (MQ/PM2.5), and ultrasonic units.'
      },
      {
        name: 'Single Board Computers (Raspberry Pi Clusters)',
        desc: 'Dedicated Raspberry Pi units running local Linux distributions for edge gateway experimentation and protocol conversion.'
      },
      {
        name: 'Wireless Mesh & Zigbee Development Modules',
        desc: 'XBee and nRF24L01 transceivers for building localized wireless mesh networks and low-latency point-to-point links.'
      },
      {
        name: 'Benchtop Multimeters & Portable Logic Analyzers',
        desc: 'Precision test gear for checking sensor supply voltages, current draw in sleep modes, and I2C/SPI waveform integrity.'
      }
    ],

    researchAreas: [
      'Self-Powered Solar Energy Harvesting for Autonomous Agricultural Nodes',
      'AI-Enabled Edge Anomaly Detection for Industrial Machine Vibration',
      'Optimized LoRaWAN Spreading Factor Allocation in Dense Campus Topographies',
      'Smart Water Distribution Grid Monitoring with Leakage Localization',
      'Indoor Air Quality Telemetry with Predictive HVAC Control'
    ],

    studentProjects: [
      {
        title: 'Smart Campus Automated Water Level & Quality Grid',
        desc: 'Network of ultrasonic and turbidity sensors across college reservoirs reporting live capacities via MQTT to a central dashboard.',
        tags: ['ESP32', 'MQTT', 'Node-RED']
      },
      {
        title: 'LoRa-Connected Precision Farm Irrigation Controller',
        desc: 'Long-range soil sensor telemetry station automatically triggering solenoid valves based on soil moisture and ambient temperature.',
        tags: ['LoRaWAN', 'AgriTech', 'Solar']
      },
      {
        title: 'Campus Indoor Air Quality & Comfort Dashboard',
        desc: 'Multi-sensor pod measuring CO2, VOCs, temperature, and humidity with color-coded e-ink display and web reporting.',
        tags: ['Raspberry Pi', 'InfluxDB', 'Grafana']
      },
      {
        title: 'Cold-Chain Medication Logistics Tracker with Geofencing',
        desc: 'Portable battery-backed node logging temperature and GPS coordinates during transport with alert triggers on threshold breach.',
        tags: ['GPS', 'Cellular', 'Cloud']
      }
    ],

    facilities: [
      '50 interactive workstations with dedicated DC power and wireless test racks',
      'Campus-wide LoRaWAN gateway coverage enabling outdoor fieldwork across institutional grounds',
      'Component repository with hundreds of sensors, actuators, and communication transceivers',
      'Soldering and breadboard prototyping tables with safety ventilation',
      'High-speed dedicated Wi-Fi access points configured for IoT subnet isolation'
    ],

    applications: [
      'Precision Agriculture & Automated Greenhouse Management',
      'Smart City Infrastructure (Street Lighting, Waste Management, Traffic)',
      'Industrial IoT (IIoT) & Predictive Equipment Maintenance',
      'Remote Patient Vital Telemetry & Assisted Living Technologies',
      'Environmental Conservation & River/Air Pollution Monitoring'
    ],

    mentorship: {
      title: 'Laboratory Mentorship & Academic Coordination',
      desc: 'Directed by interdisciplinary faculty members from the Department of Computer Science & Engineering, ECE, and Agricultural Engineering with specializations in wireless communication, cloud telemetry, and embedded hardware.',
      roles: [
        'Faculty Lab Coordinator: Guides course-integrated laboratory exercises and research publications in wireless sensing.',
        'Technical Lab Assistant: Manages sensor kit inventory, battery charging stations, and gateway uptime.',
        'Project Mentors: Assists student teams in scaling prototypes into campus-wide and regional deployments.'
      ]
    },

    gallery: [
      { img: '/brand/special-labs/lab-iot-hd.jpg', title: 'IoT Prototyping & Sensor Testbed', caption: 'Connected hardware modules, live telemetry dashboards, and wireless experimentation stations.' },
      { img: '/brand/special-labs/lab-ai-hd.jpg', title: 'Edge AI & Analytical Compute Suite', caption: 'High-performance computing workstations running neural networks fed by live IoT sensor telemetry.' },
      { img: '/brand/special-labs/lab-embedded-hd.jpg', title: 'Embedded Microcontroller Bench', caption: 'Low-level hardware interfacing stations for firmware development and sensor board bring-up.' }
    ]
  },

  {
    id: '06',
    slug: 'ar-vr-lab',
    name: 'AR & VR Lab',
    title: 'AR & VR Lab',
    tagline: 'Augmented & Virtual Reality, Spatial Computing & Immersive XR',
    shortDesc: 'Experience. Create. Go Beyond.',
    category: 'Spatial Computing & XR',
    categoryKey: 'design',
    categoryBadgeClass: 'badge-purple-vr',
    accentColor: '#a855f7',
    accentClass: 'bar-purple',
    image: '/brand/special-labs/lab-ar-vr-hd.jpg',
    department: 'Department of Computer Science & Engineering / Information Technology / Design',
    deptSlug: 'computer-science-and-engineering',
    establishedYear: '2022',
    capacity: '40 High-GPU Spatial Computing Stations & Room-Scale XR Bays',
    timing: '8:30 AM - 6:30 PM (Special reservation for XR testing sessions)',
    metaSummary: 'Dedicated immersive spatial computing laboratory equipped with high-fidelity VR headsets, AR markerless tracking platforms, 3D game engines, and haptic devices.',

    overview: `
      <p>The <strong>AR &amp; VR Lab</strong> at Sri Shakthi Institute of Engineering and Technology is a cutting-edge creative and spatial computing studio. As human-computer interaction moves beyond flat two-dimensional screens into immersive three-dimensional space, this laboratory prepares students to pioneer the next generation of extended reality (XR) applications.</p>
      <p>Combining high-end ray-tracing graphics workstations with room-scale tracking bays and stereoscopic headsets, the lab empowers students to design, develop, and test immersive environments for industrial training, medical simulations, architectural digital twins, and interactive entertainment.</p>
    `,

    about: `
      <p>Students work with industry-standard 3D engines including Unity and Unreal Engine 5, developing skills in real-time 3D modeling, spatial audio engineering, inverse kinematics, physics simulations, and shader scripting.</p>
      <p>The laboratory bridges artistic visualization with rigorous computer science, teaching learners how to optimize frame rates, minimize latency to prevent simulation sickness, and implement intuitive 6-DOF hand-tracking interactions. Collaborative XR projects let students deploy applications across both standalone headsets and mobile AR devices.</p>
    `,

    objectives: [
      'Master the core technical foundations of computer graphics: transformations, rendering pipelines, shaders, and lighting.',
      'Develop interactive Virtual Reality (VR) simulations utilizing room-scale 6-DOF tracking and spatial audio.',
      'Construct Augmented Reality (AR) applications featuring surface detection, image targets, and markerless tracking.',
      'Gain proficiency in industry-leading 3D game engines (Unity and Unreal Engine 5) using C# and visual scripting.',
      'Apply XR technologies to high-impact domains including medical anatomy, industrial safety, and digital twin virtualization.'
    ],

    specializations: [
      {
        title: 'Virtual Reality (VR) Simulation Development',
        desc: 'Fully immersive 3D virtual worlds, room-scale navigation, telepresence, and physics-driven object interactions.'
      },
      {
        title: 'Augmented Reality (AR) & Spatial Computing',
        desc: 'Plane tracking, environmental understanding, digital asset anchoring on real-world geometry, and mobile AR.'
      },
      {
        title: 'Real-Time 3D Engine Architecture (Unity / Unreal)',
        desc: 'Scene graphs, asset optimization, material shaders, particle systems, and high-fidelity lighting models.'
      },
      {
        title: 'Human-Computer Interaction (HCI) in XR',
        desc: 'Natural hand-tracking gestures, haptic feedback design, spatial UI menus, and gaze-based interaction paradigms.'
      },
      {
        title: '3D Modeling & Digital Asset Optimization',
        desc: 'Polygon reduction, UV unwrapping, level of detail (LOD) generation, and realistic PBR texture mapping.'
      },
      {
        title: 'Industrial Digital Twins & Virtual Training',
        desc: 'Interactive virtual models of factory assembly lines, automotive engines, and medical surgical procedures.'
      }
    ],

    technologies: [
      { name: 'Unity 3D', category: 'Game & XR Engine', desc: 'Versatile real-time development platform with extensive XR Interaction Toolkits and C# scripting.' },
      { name: 'Unreal Engine 5', category: 'High-Fidelity Engine', desc: 'Photorealistic real-time engine featuring Nanite virtualized geometry and Lumen dynamic lighting.' },
      { name: 'Blender', category: '3D Content Creation', desc: 'Open-source 3D modeling, rigging, animation, and UV texturing pipeline.' },
      { name: 'ARKit & ARCore', category: 'Mobile AR SDKs', desc: 'Apple and Google frameworks for surface detection, light estimation, and motion tracking.' },
      { name: 'OpenXR & WebXR', category: 'XR Standards', desc: 'Cross-platform royalty-free standards for interoperable AR and VR applications across devices.' },
      { name: 'C# & Blueprints', category: 'Logic Scripting', desc: 'Object-oriented programming and node-based visual scripting for interactive game logic.' },
      { name: 'HLSL / Shader Graph', category: 'Shaders & Graphics', desc: 'Visual and code-based shader programming for custom surface materials and visual FX.' },
      { name: 'Spatial Audio SDKs', category: 'Acoustic Simulation', desc: 'Binaural 3D audio processing delivering directional acoustic cues matching user head rotation.' }
    ],

    equipment: [
      {
        name: 'High-Fidelity Virtual Reality Headsets (6-DOF)',
        desc: 'Head-mounted displays equipped with high-resolution panels, inside-out tracking, and ergonomic wireless 6-DOF hand controllers.'
      },
      {
        name: 'Dedicated Ray-Tracing GPU Graphics Workstations',
        desc: 'High-compute workstations powered by NVIDIA RTX graphics cards providing steady 90+ FPS stereoscopic rendering.'
      },
      {
        name: 'Room-Scale XR Play Area & Calibration Boundaries',
        desc: 'Dedicated physical clearance zones with impact-dampening flooring and boundary guardians for unrestricted user movement.'
      },
      {
        name: 'Spatial Computing Mobile Testing Tablets',
        desc: 'High-performance tablets and mobile test devices equipped with LiDAR sensors and high-framerate depth cameras for AR.'
      },
      {
        name: 'Haptic Feedback Controllers & Accessories',
        desc: 'Specialized input controllers and vibration triggers simulating texture resistance and physical contact in virtual space.'
      }
    ],

    researchAreas: [
      'Low-Latency Foveated Rendering Architectures for Standalone VR Headsets',
      'Haptic Feedback Fidelity and Muscle Memory Retention in Virtual Surgical Drills',
      'Markerless AR Tracking Stability in Dynamic Industrial Assembly Environments',
      'Collaborative Multi-User Spatial Telepresence in WebXR Education Spaces',
      'Perceptual Ergonomics and Mitigation of Motion Sickness in VR Navigation'
    ],

    studentProjects: [
      {
        title: 'Virtual 3D Anatomy Dissection Suite for Medical Training',
        desc: 'Interactive VR simulation allowing biomedical students to manipulate and dissect organs in high-fidelity 3D with spatial labels.',
        tags: ['Unity', 'VR', 'Biomedical']
      },
      {
        title: 'Interactive Campus Digital Twin Virtual Tour',
        desc: 'Photorealistic 3D model of the Sri Shakthi campus enabling prospective students to explore buildings, classrooms, and labs virtually.',
        tags: ['Unreal Engine', '3D Modeling', 'Digital Twin']
      },
      {
        title: 'AR Assembly Guide for Industrial Robotic Workcells',
        desc: 'Mobile AR application projecting step-by-step 3D assembly guides and torque specifications directly onto physical machine parts.',
        tags: ['ARCore', 'Industrial AR', 'Mobile']
      },
      {
        title: 'Immersive Fire Evacuation & Emergency Response Drill',
        desc: 'Gamified VR training scenario testing student emergency response times and exit route choices under simulated hazardous conditions.',
        tags: ['Unity', 'HCI', 'Safety Training']
      }
    ],

    facilities: [
      '40 high-performance workstations with dedicated GPU hardware acceleration',
      'Dedicated room-scale VR interaction bays with protective safety matting',
      'Anti-glare lighting and ceiling-suspended cable management systems',
      'Sanitization stations with UV-C headset cleaning enclosures',
      'Dual large viewing screens for audience observation during live XR demonstrations'
    ],

    applications: [
      'Medical & Healthcare Training (Virtual Surgery, Patient Rehabilitation)',
      'Industrial Safety & Dangerous Hazard Simulation Drills',
      'Architecture, Real Estate & Civil Engineering Digital Twins',
      'Interactive Education, Historical Recreations & Science Visualizations',
      'Next-Generation Gaming, Entertainment & Spatial Computing Platforms'
    ],

    mentorship: {
      title: 'Laboratory Mentorship & Academic Coordination',
      desc: 'Mentored by faculty from the Department of Computer Science & Engineering and Information Technology with technical expertise in computer graphics, human-computer interaction, and game development.',
      roles: [
        'Faculty Lab Coordinator: Directs curriculum integration, research projects in immersive media, and equipment scheduling.',
        'XR Systems Specialist: Manages workstation GPU drivers, VR headset firmware updates, and tracking zone calibration.',
        'Creative Design Mentors: Guides student projects in 3D asset modeling, shader aesthetics, and spatial user experience (UX).'
      ]
    },

    gallery: [
      { img: '/brand/special-labs/lab-ar-vr-hd.jpg', title: 'Immersive Extended Reality Studio', caption: 'Virtual reality testing bays, spatial tracking sensors, and 3D graphics rendering workstations.' },
      { img: '/brand/special-labs/lab-ai-hd.jpg', title: 'High-Compute Graphics Studio', caption: 'High-performance computing workstations running real-time 3D simulation engines and neural rendering.' },
      { img: '/brand/techpark-hd.jpg', title: 'Technology Park Research Hub', caption: 'State-of-the-art campus infrastructure supporting specialized innovation labs and research suites.' }
    ]
  },

  {
    id: '07',
    slug: 'pcb-design-assembly-lab',
    name: 'PCB Design & Assembly Lab',
    title: 'PCB Design & Assembly Lab',
    tagline: 'Circuit Design, Schematic Engineering & Hardware Prototyping',
    shortDesc: 'From design to real-world prototypes.',
    category: 'Prototyping & Fabrication',
    categoryKey: 'core',
    categoryBadgeClass: 'badge-pink-tool',
    accentColor: '#ec4899',
    accentClass: 'bar-pink',
    image: '/brand/special-labs/lab-pcb-hd.jpg',
    department: 'Department of Electronics and Communication Engineering / EEE',
    deptSlug: 'electronics-and-communication-engineering',
    establishedYear: '2017',
    capacity: '50 CAD Workstations & Hardware Fabrication Benches',
    timing: '8:30 AM - 6:30 PM (Evening prototyping access till 8:00 PM with permission)',
    metaSummary: 'Hands-on electronic hardware fabrication suite equipped for schematic capture, multi-layer PCB layout, chemical etching, SMD soldering, and board-level bring-up.',

    overview: `
      <p>The <strong>PCB Design &amp; Assembly Lab</strong> at Sri Shakthi Institute of Engineering and Technology is a complete electronic hardware fabrication facility. Transforming theoretical schematics into rugged, reliable physical printed circuit boards is one of the most critical core engineering skills.</p>
      <p>This laboratory takes students through the entire hardware engineering continuum: from schematic capture and component footprint creation in Electronic Design Automation (EDA) software to manual and semi-automated etching, drilling, surface-mount soldering, and hardware test verification.</p>
    `,

    about: `
      <p>Equipped with industry-standard CAD design tools, precision temperature-controlled soldering stations, hot air SMD rework stations, digital inspection microscopes, and chemical etching tanks, the lab enables rapid turnaround of custom hardware prototypes.</p>
      <p>Students learn essential Design for Manufacturing (DFM) and Design for Testing (DFT) principles, signal integrity management, ground plane isolation, thermal relief, and IPC soldering standards. From simple single-sided sensor boards to complex multi-layer IoT carrier boards, students build their own hardware from scratch.</p>
    `,

    objectives: [
      'Master electronic schematic design, netlist generation, and library symbol management in professional EDA tools.',
      'Learn multi-layer printed circuit board layout principles: trace width calculation, impedance matching, and ground planes.',
      'Understand Design for Manufacturing (DFM) rules and generate standardized Gerber and drill fabrication files.',
      'Develop hands-on dexterity in through-hole and Surface Mount Technology (SMT) soldering and desoldering.',
      'Perform board-level bring-up, continuity checks, power-rail validation, and signal integrity troubleshooting.'
    ],

    specializations: [
      {
        title: 'Schematic Capture & Electronic Symbol Design',
        desc: 'Component selection, schematic hierarchy, pin mapping, design rule checks (ERC), and BOM generation.'
      },
      {
        title: 'Multi-Layer PCB Layout & Routing',
        desc: 'Layer stackup, differential pair routing, star ground topology, decoupling capacitor placement, and thermal relief.'
      },
      {
        title: 'Rapid PCB Fabrication & Etching',
        desc: 'UV photo-resist exposure, chemical etching, CNC milling, precision hole drilling, and solder mask application.'
      },
      {
        title: 'Surface Mount Technology (SMT) Soldering',
        desc: 'Fine-pitch IC soldering (QFP, SOIC, 0805/0603 passives), solder paste application, and hot-air reflow rework.'
      },
      {
        title: 'Hardware Testing & Signal Integrity',
        desc: 'In-circuit testing, ground loop debugging, impedance measurements, and power distribution network (PDN) checks.'
      },
      {
        title: 'Design for Manufacturing (DFM & DFT)',
        desc: 'Gerber RS-274X file verification, drill tables, fiducial marker placement, and pick-and-place coordinate generation.'
      }
    ],

    technologies: [
      { name: 'KiCAD EDA', category: 'Open-Source EDA', desc: 'Powerful cross-platform schematic capture and multi-layer PCB layout suite.' },
      { name: 'Altium Designer', category: 'Professional EDA', desc: 'Industry-standard electronic product development tool with 3D PCB visualization.' },
      { name: 'Autodesk EAGLE', category: 'Circuit Layout', desc: 'Popular tool for schematic design, autorouting, and mechanical CAD integration.' },
      { name: 'EasyEDA', category: 'Web-Based EDA', desc: 'Cloud-connected design suite with seamless component library access and fabrication links.' },
      { name: 'Gerber Viewer (Gerbv)', category: 'CAM Verification', desc: 'Photoplotter inspection tool verifying photolithography artwork before fabrication.' },
      { name: 'SPICE Simulators', category: 'Circuit Verification', desc: 'Analog and mixed-signal simulation checking circuit operation prior to physical layout.' },
      { name: 'IPC Standards (IPC-A-610)', category: 'Quality Standards', desc: 'International acceptability benchmarks for soldered electrical and electronic assemblies.' },
      { name: 'CAM350', category: 'Post-Processing', desc: 'Comprehensive CAM verification software identifying manufacturability defects.' }
    ],

    equipment: [
      {
        name: 'Temperature-Controlled Soldering Stations',
        desc: 'Microprocessor-regulated ESD-safe soldering irons with quick-change tips for precision leaded and lead-free soldering.'
      },
      {
        name: 'Hot Air SMD Rework Stations',
        desc: 'Adjustable temperature and airflow rework stations designed for safe mounting and desoldering of multi-pin surface mount chips.'
      },
      {
        name: 'Digital Optical Inspection Microscopes',
        desc: 'High-magnification digital video microscopes with ring lighting for inspecting micro-solder bridges and cracked joints.'
      },
      {
        name: 'PCB UV Exposure & Chemical Etching Tanks',
        desc: 'Controlled photolithography exposure unit and bubble-agitated etching tanks for rapid in-house single and double-sided boards.'
      },
      {
        name: 'High-Precision Benchtop LCR Meters & Multimeters',
        desc: 'Test meters for validating component values, ESR, diode drops, and isolation resistance across copper tracks.'
      }
    ],

    researchAreas: [
      'Thermal Dissipation Optimization in High-Power LED and Motor Driver PCBs',
      'Electromagnetic Interference (EMI) Shielding and Cross-Talk Reduction in High-Speed Boards',
      'Bio-Compatible Flexible Substrate Circuit Design for Wearable Sensors',
      'Lead-Free Solder Joint Reliability Under Repeated Thermal Cycling',
      'Automated Optical Inspection (AOI) Algorithms for Detecting Solder Defects'
    ],

    studentProjects: [
      {
        title: 'Custom 4-Layer IoT Gateway Controller Motherboard',
        desc: 'Compact custom-designed PCB integrating an ESP32 module, onboard switching regulator, and LoRa transceiver with matched antenna trace.',
        tags: ['KiCAD', 'Multi-Layer', 'IoT']
      },
      {
        title: 'High-Current Brushless DC Motor Driver Board with Copper Pours',
        desc: 'Heavy-copper power PCB featuring thermal relief vias, MOSFET H-bridge layout, and current-sensing shunt resistors.',
        tags: ['Altium', 'Power Electronics', 'Thermal']
      },
      {
        title: 'Wearable ECG Analog Front-End Signal Conditioning Board',
        desc: 'Miniaturized double-sided circuit board designed with low-noise ground guard rings and active instrumentation amplifier stages.',
        tags: ['Biomedical', 'Analog PCB', 'SMT']
      },
      {
        title: 'Solar MPPT Battery Management System Carrier Board',
        desc: 'Fabricated charging management board with integrated reverse-polarity protection and digital I2C fuel gauge telemetry.',
        tags: ['Solar', 'Power Supply', 'DFM']
      }
    ],

    facilities: [
      '50 dedicated CAD design workstations with dual-monitor layout setups',
      'Dedicated wet fabrication area with chemical fume extraction hoods and safety showers',
      'ESD-safe workbench tops with grounded antistatic wristband cords',
      'Extensive stockroom of SMD/through-hole resistors, capacitors, ICs, and connectors',
      'Safety equipment including safety goggles, heat-resistant gloves, and fume extractors'
    ],

    applications: [
      'Rapid Hardware Prototyping for Tech Startups and Makers',
      'Automotive Electronics & High-Reliability Wire Harness Modules',
      'Industrial Power Supplies, Inverters & Motor Drive Controllers',
      'Consumer Electronics & Handheld Smart Gadget Manufacturing',
      'Aerospace & Defense Electronics Assembly and Quality Assurance'
    ],

    mentorship: {
      title: 'Laboratory Mentorship & Academic Coordination',
      desc: 'Supervised by faculty members and technical fabrication experts from the Department of Electronics and Communication Engineering and EEE with certifications in IPC soldering standards and hardware fabrication.',
      roles: [
        'Faculty Lab In-Charge: Curricular scheduling, procurement of hardware materials, and fabrication safety oversight.',
        'Fabrication Technician: Oversees chemical etching processes, CNC drill maintenance, and chemical waste disposal.',
        'Hardware Design Mentors: Provides peer-review and DFM feedback on student schematic designs prior to fabrication.'
      ]
    },

    gallery: [
      { img: '/brand/special-labs/lab-pcb-hd.jpg', title: 'Precision PCB Prototyping Suite', caption: 'Soldering stations, digital microscopes, and surface-mount assembly benches.' },
      { img: '/brand/special-labs/lab-embedded-hd.jpg', title: 'Embedded Systems Hardware Integration', caption: 'Hardware test benches where custom fabricated PCBs are populated with microcontrollers.' },
      { img: '/brand/special-labs/lab-vlsi-hd.jpg', title: 'Silicon & Microelectronics Design Center', caption: 'Advanced chip design suites complementing board-level PCB integration and verification.' }
    ]
  },

  {
    id: '08',
    slug: 'robotics-automation-lab',
    name: 'Robotics & Automation Lab',
    title: 'Robotics & Automation Lab',
    tagline: 'Industrial Mechatronics, Robotic Manipulators & Autonomous Systems',
    shortDesc: 'Ideate. Build. Automate.',
    category: 'Mechatronics & Automation',
    categoryKey: 'design',
    categoryBadgeClass: 'badge-green-bot',
    accentColor: '#059669',
    accentClass: 'bar-emerald',
    image: '/brand/special-labs/lab-robotics-hd.jpg',
    department: 'Department of Mechanical Engineering / Mechatronics / ECE',
    deptSlug: 'mechanical-engineering',
    establishedYear: '2018',
    capacity: '45 Industrial Robotics & Automation Workcells',
    timing: '8:30 AM - 6:30 PM (Evening competition & project work till 8:00 PM)',
    metaSummary: 'State-of-the-art robotics engineering facility featuring 6-axis industrial articulated arms, PLC automation benches, autonomous mobile robots (AMRs), and machine vision.',

    overview: `
      <p>The <strong>Robotics &amp; Automation Lab</strong> at Sri Shakthi Institute of Engineering and Technology represents the frontier of modern industrial manufacturing and autonomous intelligence. As factories adopt Industry 4.0 standards and autonomous robots revolutionize warehouses, logistics, and service sectors, this laboratory prepares students to build, program, and operate complex robotic systems.</p>
      <p>The laboratory brings together mechanical kinematics, electrical actuators, pneumatic power, and intelligent computer vision. Students gain hands-on access to industrial-grade 6-axis articulated robot arms, Programmable Logic Controllers (PLCs), electro-pneumatic training benches, and autonomous ground vehicles (AGVs).</p>
    `,

    about: `
      <p>Through hands-on projects, students master forward and inverse kinematics, path planning algorithms, machine vision guidance, programmable logic programming (Ladder Logic / FBD), and Robot Operating System (ROS2) middleware.</p>
      <p>The lab fosters a culture of competitive innovation: student teams build robots for national and international contests including BAJA, REEV, and robotics hackathons. Graduates are thoroughly equipped for high-impact careers in industrial robotics integration, automated manufacturing, and autonomous vehicle engineering.</p>
    `,

    objectives: [
      'Master the mathematical foundations of robotics: spatial transformations, Denavit-Hartenberg (D-H) parameters, and kinematics.',
      'Operate and program industrial 6-axis articulated robotic arms for pick-and-place, welding, and machine tending tasks.',
      'Learn industrial automation logic programming using Siemens and Allen-Bradley PLCs, HMIs, and SCADA.',
      'Design, simulate, and deploy Autonomous Mobile Robots (AMR) using Robot Operating System (ROS2) and SLAM.',
      'Integrate machine vision cameras with robotic manipulators for real-time visual sorting and quality inspection.'
    ],

    specializations: [
      {
        title: 'Industrial Robotic Arms & Manipulator Kinematics',
        desc: '6-DOF articulated arms, coordinate systems (Joint, World, Tool), payload calculations, and trajectory smoothing.'
      },
      {
        title: 'PLC Automation & Industrial SCADA',
        desc: 'Programmable Logic Controllers, Ladder Logic, Structured Text, Human-Machine Interface (HMI) screens, and industrial fieldbuses.'
      },
      {
        title: 'Autonomous Mobile Robots (AMR) & AGVs',
        desc: 'Wheeled robot kinematics, LiDAR sensing, Simultaneous Localization and Mapping (SLAM), and obstacle avoidance.'
      },
      {
        title: 'Robot Operating System (ROS / ROS2)',
        desc: 'ROS computation graph, publishers, subscribers, action servers, Gazebo physics simulation, and URDF robot descriptions.'
      },
      {
        title: 'Pneumatics & Electro-Pneumatic Actuation',
        desc: 'Pneumatic cylinders, 5/2 directional control valves, relay circuits, vacuum suction cups, and air compressor manifolds.'
      },
      {
        title: 'Machine Vision Guidance & Sorting',
        desc: 'Industrial cameras, OpenCV template matching, color segmentation, and camera-to-robot coordinate calibration.'
      }
    ],

    technologies: [
      { name: 'ROS2 (Robot Operating System)', category: 'Robotics Middleware', desc: 'Standard open-source robotics platform providing hardware abstraction and inter-process communication.' },
      { name: 'Gazebo Simulation Suite', category: 'Physics Simulation', desc: 'High-fidelity 3D multi-robot simulation environment with realistic gravity, collision, and sensor physics.' },
      { name: 'Siemens TIA Portal', category: 'PLC Automation', desc: 'Integrated engineering framework for programming Siemens S7-1200 PLCs and HMI panels.' },
      { name: 'MATLAB & Simulink', category: 'Control Systems', desc: 'Mathematical modeling of robotic kinematics, dynamics, and closed-loop feedback controllers.' },
      { name: 'SolidWorks CAD', category: 'Mechanical Design', desc: '3D mechanical modeling, stress analysis, and export of URDF geometry for robot simulation.' },
      { name: 'OpenCV Vision', category: 'Machine Vision', desc: 'Visual recognition algorithms enabling robots to identify, locate, and orient target workpieces.' },
      { name: 'Python Robotics & C++', category: 'Core Languages', desc: 'High-performance programming languages for path planning and real-time motor controller commands.' },
      { name: 'CoppeliaSim / Webots', category: 'Robot Simulators', desc: 'Fast robotics prototyping simulators supporting multi-agent mobile robots and manipulators.' }
    ],

    equipment: [
      {
        name: 'Industrial 6-Axis Articulated Robotic Arm',
        desc: 'Multi-degree-of-freedom robotic arm with precision servo drives, interchangeable vacuum and pneumatic grippers, and teaching pendant.'
      },
      {
        name: 'Siemens Industrial PLC & HMI Training Benches',
        desc: 'Modular automation test stations equipped with Siemens S7-1200 PLCs, color touchscreen HMIs, and digital/analog sensors.'
      },
      {
        name: 'Electro-Pneumatic Automation Training Modules',
        desc: 'Festo-standard modular pneumatic racks with directional valves, air cylinders, pressure regulators, and optical proximity sensors.'
      },
      {
        name: 'Autonomous Ground Vehicles (AGV) with LiDAR',
        desc: 'Differential-drive and omnidirectional mobile robots equipped with 360-degree laser LiDAR, IMU, and onboard ROS computing boards.'
      },
      {
        name: 'Industrial Machine Vision Inspection Stations',
        desc: 'High-resolution industrial digital cameras with adjustable LED ring lighting and conveyor belt sorting setups.'
      }
    ],

    researchAreas: [
      'Visual Servoing Control for Real-Time Moving Target Interception by Robotic Arms',
      'Reinforcement Learning for Quadruped Legged Robot Locomotion on Uneven Terrain',
      'Collaborative Robot (Cobot) Safety Protocols and Human-Robot Shared Workspaces',
      'Multi-Robot Swarm Coordination for Autonomous Warehouse Parcel Sorting',
      'Energy-Efficient Trajectory Planning for Heavy-Payload Industrial Manipulators'
    ],

    studentProjects: [
      {
        title: 'LiDAR-Guided Autonomous Warehouse Mobile Robot',
        desc: 'Differential mobile robot utilizing 2D LiDAR SLAM to build maps of indoor warehouse layouts and autonomously deliver payloads.',
        tags: ['ROS2', 'LiDAR', 'SLAM']
      },
      {
        title: 'Vision-Guided Robotic Sorter for Industrial Conveyors',
        desc: 'Articulated robotic arm using overhead machine vision to detect shape, color, and orientation of moving parts and sort them into bins.',
        tags: ['Computer Vision', '6-Axis Arm', 'Python']
      },
      {
        title: 'Automated Electro-Pneumatic Stamping & Stacking Cell',
        desc: 'Industrial PLC-controlled automated workcell combining pneumatic clamping, stamping cylinders, and part ejection logic.',
        tags: ['PLC', 'Pneumatics', 'Siemens']
      },
      {
        title: 'Gesture-Controlled Tele-Operated Bomb Disposal Robot Arm',
        desc: 'Mobile robotic chassis carrying a 4-DOF manipulator arm mirroring the arm movements of a remote operator wearing a sensory glove.',
        tags: ['Mechatronics', 'Teleoperation', 'Wireless']
      }
    ],

    facilities: [
      '45 high-end industrial automation and CAD simulation workstations',
      'Dedicated safety enclosure barriers around high-speed articulated robot arms',
      'Centralized regulated compressed air distribution manifold for pneumatic benches',
      'Smooth floor testing arena for autonomous ground mobile robot navigation',
      'Workshop tool cabinet with precision torque tools, calibration gauges, and safety gear'
    ],

    applications: [
      'Automotive Factory Welding, Painting & Assembly Automation',
      'Warehouse Logistics, Automated Guided Vehicles & Parcel Sorting',
      'High-Speed Packaging, Bottling & Pharmaceutical Inspection',
      'Hazardous Material Handling, Defense EOD & Space Exploration',
      'Agricultural Harvesting Robots & Autonomous Farm Machinery'
    ],

    mentorship: {
      title: 'Laboratory Mentorship & Academic Coordination',
      desc: 'Steered by faculty members from the Department of Mechanical Engineering and Mechatronics with specialized doctoral and industrial experience in robotics, PLC automation, and control systems.',
      roles: [
        'Faculty Lab Coordinator: Oversees curriculum alignment, laboratory safety compliance, and industrial training partnerships.',
        'Robotics Systems Engineer: Maintains robot arm calibration, air compressor systems, and safety light curtains.',
        'Mechatronics Project Mentors: Guides student participation in national design challenges, hackathons, and capstones.'
      ]
    },

    gallery: [
      { img: '/brand/special-labs/lab-robotics-hd.jpg', title: 'Industrial Robotics Automation Suite', caption: '6-axis articulated robotic arms, industrial control teach pendants, and mechatronics workcells.' },
      { img: '/brand/special-labs/lab-embedded-hd.jpg', title: 'Microcontroller & Firmware Integration', caption: 'Hardware development benches where embedded motor drivers and sensors are programmed.' },
      { img: '/brand/techpark-hd.jpg', title: 'Sri Shakthi Technology Park', caption: 'High-tech academic and research facilities supporting multi-disciplinary engineering student projects.' }
    ]
  }
];

// Helper maps & lookup functions
export const labsBySlug = labsList.reduce((acc, lab) => {
  acc[lab.slug] = lab;
  return acc;
}, {});

export function getLabBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.trim().toLowerCase();
  return labsBySlug[normalized] || labsList.find(l => l.slug.includes(normalized) || normalized.includes(l.slug)) || null;
}

export function getNextLab(slug) {
  const currentIndex = labsList.findIndex(l => l.slug === slug);
  if (currentIndex === -1) return labsList[0];
  return labsList[(currentIndex + 1) % labsList.length];
}

export function getPrevLab(slug) {
  const currentIndex = labsList.findIndex(l => l.slug === slug);
  if (currentIndex === -1) return labsList[labsList.length - 1];
  return labsList[(currentIndex - 1 + labsList.length) % labsList.length];
}
