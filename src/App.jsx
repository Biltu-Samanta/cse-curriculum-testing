import React, { useState } from 'react';
import { Book, Code, Cpu, Database, Globe, Layers, Layout, Terminal, Zap, ChevronRight, ChevronDown, GraduationCap, Award, Clock, Beaker, Menu, X, FileText, List, CheckCircle, BookOpen, AlertCircle, User } from 'lucide-react';

// --- Data extracted from CSE.pdf ---
const curriculumData = {
  year1: {
    title: "First Year",
    description: "Foundation of Engineering & Computing",
    semesters: {
      sem1: {
        title: "Semester 1",
        totalCredits: 18,
        stats: { theory: 14, practical: 4 },
        subjects: [
          { 
            code: "CS101", 
            name: "Intro to Programming & Problem Solving", 
            type: "Theory", 
            credits: 3, 
            hours: "3-0-0",
            details: {
              objectives: [
                "Describe architecture, memory systems, and evolution of computers.",
                "Convert between number systems and analyze binary arithmetic.",
                "Construct algorithms and flowcharts.",
                "Implement control structures, arrays, pointers, and functions in C.",
                "Demonstrate structured data types and file I/O."
              ],
              outcomes: [
                "CO1: Describe architecture, memory hierarchy, and components.",
                "CO2: Convert number systems and analyze IEEE754 representation.",
                "CO3: Construct flowcharts and algorithms for problem solving.",
                "CO4: Implement C programs using control structures, arrays, pointers.",
                "CO5: Demonstrate structured data types and file handling."
              ],
              modules: [
                { title: "Module 1: Basics of Computing & Number Representation", hours: "7L", content: "History and generations of computers. Classification: Digital, Analog, Hybrid, Micro, Mini, Mainframe. Architecture: I/O units, Memory (Primary & Secondary), CPU. Number systems: Binary, Octal, Decimal, Hexadecimal. Signed number representations (1's, 2's complement). Floating point: IEEE 754. ASCII codes. Compiler, interpreter, assembler." },
                { title: "Module 2: Problem Solving & Introduction to C", hours: "7L", content: "Algorithm, flowchart, pseudocode. Procedural vs Structured programming. C basics: keywords, identifiers, variable naming. Data types, constants, storage size, endianness. Operators: Arithmetic, Logical, Relational, Bitwise. I/O: scanf(), printf()." },
                { title: "Module 3: Control Structures & Program Design", hours: "7L", content: "Control structures: if, if-else, switch, nested conditions. Loops: while, for, do-while, break, continue. goto and labels. Functions: declaration, definition, prototypes, Parameter passing, return types, recursion. Storage classes: auto, static, extern, register." },
                { title: "Module 4: Arrays, Pointers and Strings", hours: "8L", content: "Arrays: 1D & 2D, array to function passing. Pointers: basics, pointer arithmetic, pointer to arrays. Strings: character arrays, string library functions. Dynamic memory allocation: malloc(), calloc(), realloc(), free()." },
                { title: "Module 5: Structured Data Types & File Handling", hours: "7L", content: "Structures: definition, initialization, array of structures. Unions, enum, typedef, bit fields. File I/O: fopen(), fclose(), fprintf(), fscanf(), fgetc(). Command line arguments." }
              ],
              books: {
                text: [
                  "Schaum's Outline of Programming with C by Byron S. Gottfried",
                  "Let Us C by Yashavant Kanetkar",
                  "Computer Fundamentals by P.K. Sinha"
                ],
                refs: [
                  "The C Programming Language by Brian W. Kernighan & Dennis M. Ritchie",
                  "Fundamentals of Computers by V. Rajaraman"
                ]
              }
            }
          },
          { 
            code: "PH101", 
            name: "Engineering Physics", 
            type: "Theory", 
            credits: 3, 
            hours: "3-0-0",
            details: {
              objectives: [
                "Provide exposure to basic principles of physical sciences.",
                "Develop insight into lasers, fibre optics, and holography.",
                "Understand crystal structures and semiconductor physics.",
                "Learn principles of quantum and statistical mechanics.",
                "Explore nanomaterials and storage/display devices."
              ],
              outcomes: [
                "CO1: Explain principles of lasers, fibre optics, and holography.",
                "CO2: Identify crystal structures and distinguish between materials using band theory.",
                "CO3: Utilize quantum theory principles (Schrödinger equation) to interpret phenomena.",
                "CO4: Illustrate basic concepts of statistical mechanics.",
                "CO5: Describe properties of nanomaterials and display/storage devices."
              ],
              modules: [
                { title: "Module 1: Modern Optics", hours: "11L", content: "Laser: Einstein A/B coefficients, population inversion, Ruby laser, He-Ne laser, Semiconductor laser. Fibre Optics: Step index, Graded index, NA, Acceptance angle, losses. Holography: Theory and applications." },
                { title: "Module 2: Solid State Physics", hours: "5L", content: "Crystal Structure: Amorphous vs crystalline, Bravais lattice, Miller indices, packing factor, Bragg's equation. Semiconductors: Intrinsic/Extrinsic, p-n junction." },
                { title: "Module 3: Quantum and Statistical Mechanics", hours: "14L", content: "Quantum Theory: Black body radiation, Photoelectric/Compton Effect, Wave-particle duality, de Broglie hypothesis. Quantum Mechanics: Wave function, Uncertainty principle, Schrödinger equation. Statistical Mechanics: MB, BE, FD statistics, Fermi distribution." },
                { title: "Module 4: Physics of Nanomaterials", hours: "4L", content: "Quantum wells (2D), wires (1D), dots (0D). Quantum confinement. Carbon allotropes. Applications: CNT, graphene, electronic, medical." },
                { title: "Module 5: Storage and Display Devices", hours: "2L", content: "Magnetic storage materials. Operation of CRT, CRO, LED, and OLED." }
              ],
              books: {
                text: [
                  "Concepts of Modern Engineering Physics - A. S. Vasudeva",
                  "Engineering Physics - Rakesh Dogra",
                  "Introduction to Nanoscience and Nanotechnology - Charles P. Poole"
                ],
                refs: [
                  "Optics - Ajay Ghatak",
                  "Solid state Physics - S. O. Pillai",
                  "Quantum mechanics - A.K. Ghatak"
                ]
              }
            }
          },
          { 
            code: "M101", 
            name: "Engineering Mathematics-I", 
            type: "Theory", 
            credits: 3, 
            hours: "3-0-0",
            details: {
              objectives: ["Familiarize with matrix algebra and calculus techniques."],
              outcomes: ["CO1: Apply linear algebra methods.", "CO2: Apply differential and integral calculus.", "CO3: Analyze eigenvalues/vectors.", "CO4: Analyze multivariable functions."],
              modules: [
                { title: "Module 1: Linear Algebra", hours: "11L", content: "Echelon form, Normal form. Inverse and rank. Consistency of linear equations. Eigenvalues and eigenvectors. Diagonalization, Cayley-Hamilton theorem." },
                { title: "Module 2: Single Variable Calculus", hours: "5L", content: "Rolle's Theorem, Mean value theorems, Taylor's and Maclaurin theorems with remainders; Taylor's series." },
                { title: "Module 3: Multivariable Calculus (Diff)", hours: "13L", content: "Limit, continuity, partial derivatives, Total derivative. Chain rules, Implicit functions. Euler's theorem (homogeneous). Jacobian. Maxima and minima (two variables)." },
                { title: "Module 4: Multivariable Calculus (Int)", hours: "7L", content: "Double Integral, Triple Integral. Change of order. Line Integral, Surface Integral, Volume Integral. Change of variables." }
              ],
              books: {
                text: ["Higher Engineering Mathematics - B.S. Grewal", "Advanced Engineering Mathematics - E. Kreyszig"],
                refs: ["Higher Engineering Mathematics - B.V. Ramana"]
              }
            }
          },
          { 
            code: "HU101", 
            name: "Environmental Science", 
            type: "Theory", 
            credits: 2, 
            hours: "2-0-0", 
            details: { 
              objectives: ["Realize importance of environment.", "Assess environmental risk.", "Know environmental laws.", "Solve pollution problems."],
              outcomes: ["CO1: Understand natural environment relationships.", "CO2: Assess environmental/health risk.", "CO3: Understand laws and regulations.", "CO4: Solve pollution problems."],
              modules: [
                { title: "Module 1: Resources and Ecosystem", hours: "6L", content: "Resources: Human resource, Population Growth (Exponential/Logistic), Max Sustainable Yield. Alternative Energy: Solar, tidal, geothermal, biomass. Ecosystem: Components, Food chain/web. Forest, Grassland, Desert, Pond ecosystems." }, 
                { title: "Module 2: Environmental Degradation", hours: "10L", content: "Air Pollution: Smog (Photochemical/London), Greenhouse effect, Global Warming, Acid rain, Ozone Depletion. Water Pollution: BOD, COD, Eutrophication, Heavy metals (As, Hg, Pb). Land Pollution: Solid wastes, Biomedical/E-wastes. Noise Pollution: dB levels, Threshold limits." }, 
                { title: "Module 3: Environmental Management", hours: "6L", content: "EIA, Environmental Auditing, Protection Acts, Carbon footprint, Green building (GRIHA). Pollution Control: Catalytic Converter, ESP. Water Treatment: Activated sludge, Permutit process. Waste Management: Land filling, incineration, composting." },
                { title: "Module 4: Disaster Management", hours: "2L", content: "Natural/Man-made disasters: earthquakes, floods, drought, cyclones, tsunami. Disaster Management cycle and policy." }
              ],
              books: {
                text: ["Basic Environmental Engineering - Gourkrishna Dasmohapatra", "Textbook of Environmental Studies - Erach Barucha"],
                refs: ["A Text Book of Environmental Studies - Dr. D.K. Asthana"]
              }
            } 
          },
          { 
            code: "HU102", 
            name: "Indian Knowledge System", 
            type: "Theory", 
            credits: 1, 
            hours: "1-0-0", 
            details: { 
              objectives: ["Identify heritage of ancient India.", "Compare developments in science/math.", "Analyze ancient technology.", "Assess traditional knowledge in health/arch/agri."],
              outcomes: ["CO1: Classify philosophical/literary heritage.", "CO2: Categorize pioneering science/math.", "CO3: Describe ancient technology.", "CO4: Describe traditional knowledge systems."],
              modules: [
                { title: "Module 1: Overview of IKS", hours: "3L", content: "Definition, Classification, Unique aspects. Vedic corpus: Vedas, Vedangas. Indian philosophical systems: Orthodox and Unorthodox schools." }, 
                { title: "Module 2: Indian Numeral System & Astronomy", hours: "3L", content: "Decimals, Zero, Unique approaches to numbers. Ancient Indian mathematicians. Historical development of astronomy." },
                { title: "Module 3: Science & Technology Heritage", hours: "3L", content: "Metals and metalworking. Mining and ore extraction. Structural engineering and architecture (planning, materials). Dyes, painting, Shipbuilding." },
                { title: "Module 4: Traditional Knowledge Sectors", hours: "3L", content: "Traditional Agriculture (resources, methods). Traditional Medicine and Surgery. History of traditional Art forms and Culture." }
              ],
              books: {
                text: ["Traditional Knowledge System in India - Amit Jha", "Introduction to Indian Knowledge System - B. Mahadevan"],
                refs: ["The Wonder that was India - A.L. Basham"]
              }
            } 
          },
          { 
            code: "CS191", 
            name: "Introduction to Programming Lab", 
            type: "Practical", 
            credits: 1.5, 
            hours: "0-0-3",
            details: {
              objectives: ["Understand programming logic.", "Implement/debug C programs.", "Apply memory management."],
              outcomes: ["CO1: Identify fundamental constructs.", "CO2: Design modular programs.", "CO3: Use pointers/dynamic memory.", "CO4: File-based applications.", "CO5: Mini-project integration."],
              modules: [
                { title: "Exp 1: Intro to C", content: "Basic Input/Output, Data Types, and Operators. Precedence and expressions." },
                { title: "Exp 2: Conditionals", content: "if, if-else, nested if, switch-case constructs." },
                { title: "Exp 3: Loops", content: "Iterative problem solving using for, while, do-while." },
                { title: "Exp 4: Nested Loops", content: "Pattern Printing, Series Problems." },
                { title: "Exp 5: Functions", content: "Call by value, return types, recursion." },
                { title: "Exp 6-7: Arrays & Strings", content: "1D/2D array manipulation. String functions, array of strings." },
                { title: "Exp 8: Pointers", content: "Pointer arithmetic, pointers with arrays and functions." },
                { title: "Exp 9: Dynamic Memory", content: "Allocation using malloc(), calloc(), free()." },
                { title: "Exp 10: Structures", content: "Defining, accessing, array of structures, pointer to structure." },
                { title: "Exp 11: File I/O", content: "fopen, fprintf, fscanf, fgetc, fputc operations." },
                { title: "Exp 12: Mini Project", content: "Combining structures, functions, and file I/O for a real-world scenario." }
              ],
              books: { text: ["Schaum's Outline of Programming with C", "Let Us C"] }
            }
          },
          { 
            code: "PH191", 
            name: "Engineering Physics Lab", 
            type: "Practical", 
            credits: 1.5, 
            hours: "0-0-3",
            details: {
              objectives: ["Exposure to principles of physical sciences.", "Learn tools/techniques."],
              modules: [
                { title: "Measurements & Errors (Mandatory)", content: "Error estimation using Slide callipers/ Screw-gauge/ travelling microscope." },
                { title: "Classical Physics (Any 4)", content: "Torsional pendulum, Young's modulus, Rigidity modulus, Newton's ring, Laser diffraction, Optical Fibre NA & power loss." },
                { title: "Quantum Physics (Any 2)", content: "Planck's constant (photoelectric cell), Frank-Hertz experiment, Stefan's Constant, Solar cell characteristics." },
                { title: "Electronics/Semiconductor (Min 1)", content: "LCR Circuit Q-factor, I-V of LED/LDR, Band gap of semiconductor." },
                { title: "Innovative Experiments", content: "e/m by Thomson method, Hall effect, Thermal conductivity, Polarimeter." }
              ],
              books: { text: ["Practical Physics by Chatterjee & Rakshit", "Practical Physics by K.G. Mazumder"] }
            }
          },
          { 
            code: "ME194", 
            name: "Engg Graphics & CAD Lab", 
            type: "Practical", 
            credits: 1.5, 
            hours: "0-0-3",
            details: {
              objectives: ["Use drafting tools.", "Understand scales/projections.", "Apply CAD techniques.", "Produce part models."],
              outcomes: ["CO1: Use drafting tools.", "CO3: Understand scales/projections.", "CO4: Apply CAD.", "CO5: Produce part models."],
              modules: [
                { title: "Module 1: Intro to Engg Drawing", hours: "6P", content: "Usage of Drawing instruments, Lettering. Conic sections (Rectangular Hyperbola). Cycloid, Epicycloid, Involute. Scales: Plain, Diagonal, Vernier." },
                { title: "Module 2: Orthographic & Isometric", hours: "6P", content: "Orthographic Projections: Points, lines, planes. Auxiliary Planes. Projection of Solids. Isometric Scale, Isometric Views of lines/planes/solids. Conversion to Orthographic." },
                { title: "Module 3: Sections of Solids", hours: "6P", content: "Sectional views (Prism, Cylinder, Pyramid, Cone). True shape. Development of surfaces. Sectional orthographic views of dwellings." },
                { title: "Module 4: Overview of Comp Graphics", hours: "3P", content: "CAD software demo: Menu, Toolbars, Drawing Area, Dialog boxes. Zooming, Select/Erase." },
                { title: "Module 5: CAD Drawing", hours: "6P", content: "Scale settings, Layers, Line types. Drawing straight lines, circles. Annotations. 2D blueprint form." },
                { title: "Module 6: Design Project", hours: "3P", content: "Simple team design project. 3D wire-frame and shaded solids using solid-modeling software." }
              ],
              books: { text: ["Engineering Drawing - Bhatt N.D.", "Engineering Drawing + AutoCAD - K. Venugopal"] }
            }
          },
          { 
            code: "HU191", 
            name: "Communication & Presentation Skill", 
            type: "Practical", 
            credits: 1.5, 
            hours: "0-0-3",
            details: {
              objectives: ["Train in interpersonal communication.", "Focus on language skill acquisition."],
              outcomes: ["CO1: Recognize technical communication skills.", "CO2: Understand LSRW skills.", "CO3: Adapt to global business environments.", "CO4: Critique professional documents.", "CO5: Collaborative presentations."],
              modules: [
                { title: "Module 1: Intro to Comm & Soft Skills", content: "Cyclic Process of Communication. Workplace Communication Principles. Non-Verbal communication. Soft Skills vs Hard Skills." },
                { title: "Module 2: Active Listening", content: "Sub-skills (Predicting, Clarifying, Inferencing). Differences between Listening and Hearing. Barriers. Business Telephony." },
                { title: "Module 3: Speaking Skills", content: "Public Speaking (Audience, Style, Voice). Pronunciation (Stress/Intonation). Fluency (JAM, Role Plays). Group Discussion (Do's and Don'ts)." },
                { title: "Module 4: Writing & Reading", content: "Book Review, Film Review. Reading Strategies (Note-taking, Summarizing). Verbal Aptitude (Synonyms, RC Passages)." },
                { title: "Module 5: Presentation Skills", content: "Structure: Preparation, Evidence, Delivery. Handling questions. Visual aids. Video Resume. Micro presentation." }
              ],
              books: { text: ["A Handbook of Group Discussions - Pushp Lata", "Giving Presentations - Jo Billingham", "Telephoning in English - B. Jean Naterop"] }
            }
          },
          { code: "MC181", name: "Induction Program", type: "Mandatory", credits: 0, hours: "0-0-0" },
        ]
      },
      sem2: {
        title: "Semester 2",
        totalCredits: 22,
        stats: { theory: 15, practical: 7 },
        subjects: [
          { 
            code: "CS201", 
            name: "Data Structures & Algorithms", 
            type: "Theory", 
            credits: 3, 
            hours: "3-0-0",
            details: {
              objectives: ["Understand structured data organization.", "Analyze algorithms (Big O).", "Implement linear/non-linear structures.", "Compare sorting/searching methods."],
              outcomes: ["CO1: Analyze memory/time constraints.", "CO2: Design linear structures (arrays, lists, stacks).", "CO3: Develop recursive algorithms.", "CO4: Evaluate non-linear structures (Trees, Graphs).", "CO5: Optimize algorithms."],
              modules: [
                { title: "Module 1: Introduction", hours: "4L", content: "ADT, Data Types. Asymptotic notations: Big O, Theta, Omega. Time and space analysis." },
                { title: "Module 2: Non-Restricted Linear Data Structure", hours: "9L", content: "List ADT. Sequential vs Linked Representation. Arrays: Linearization, Polynomials, Sparse matrix. Linked List: Singly, Doubly, Circular." },
                { title: "Module 3: Restricted Linear Data Structure", hours: "6L", content: "Stack: Implementation, Infix to Postfix, Recursion (Tower of Hanoi). Queue: Linear, Circular, Dequeue." },
                { title: "Module 4: Nonlinear Data structures", hours: "9L", content: "Trees: Binary Trees, Traversals (Pre, In, Post). Threaded Binary Tree. BST. AVL Tree. B-Tree, B+ Tree. Heaps (Min/Max). Graphs: Adjacency matrix/list, DFS, BFS." },
                { title: "Module 5: Sorting and Searching", hours: "8L", content: "Sorting: Bubble, Insertion, Selection, Quick, Merge, Radix. Searching: Sequential, Binary, Interpolation. Hashing: Hash functions, Collision resolution." }
              ],
              books: {
                text: ["Data Structures Through 'C' - Samiran Chattopadhyay", "Fundamentals of Data Structures of C - Ellis Horowitz"],
                refs: ["Data Structures - S. Lipschutz", "Data Structures using C - Reema Thareja"]
              }
            } 
          },
          { 
            code: "CS202", 
            name: "Intro to Artificial Intelligence", 
            type: "Theory", 
            credits: 2, 
            hours: "2-0-0",
            details: {
              objectives: ["Comprehend Knowledge Representation.", "Formulate problems as State-Space.", "Use Heuristics.", "Design AI-Frameworks."],
              outcomes: ["CO1: Understand Knowledge Representation.", "CO2: Formulate State-Space problems.", "CO3: Apply Heuristic Techniques.", "CO4: Develop Inferencing Models.", "CO5: Implement AI models."],
              modules: [
                { title: "Module 1: Introduction to AI", hours: "3L", content: "Definitions, Goals, History. Narrow vs General AI. Applications. AI for social good." },
                { title: "Module 2: Intelligent Agents & Logic", hours: "8L", content: "Agents and environments. Propositional Logic: Representation and Inference. Predicate Logic: Answer Extraction." },
                { title: "Module 3: Overview of AI Branches", hours: "8L", content: "Machine Learning, Deep Learning, NLP, Computer Vision, Expert Systems, Fuzzy Logic, Evolutionary algorithms, Planning." },
                { title: "Module 4: Basics of Machine Learning", hours: "6L", content: "Supervised vs Unsupervised. Datasets, features, labels. Decision trees (concept). ML pipeline." },
                { title: "Module 5: Applications & Ethics", hours: "5L", content: "Robotics, Industry 4.0. Ethics: Bias, Fairness, Privacy. Future scopes." }
              ],
              books: { text: ["Beginner's Handbook for AI - Saptarsi Goswami", "Artificial Intelligence - Rich & Knight"] }
            }
          },
          { 
            code: "CS203", 
            name: "Digital Logic & Computer Org", 
            type: "Theory", 
            credits: 3, 
            hours: "3-0-0",
            details: {
              objectives: ["Number systems, logic gates.", "Micro-operations.", "CPU, memory, I/O organization."],
              outcomes: ["CO1: Apply Boolean algebra/K-Maps.", "CO2: Design combinational/sequential circuits.", "CO3: Analyze data path units.", "CO4: Demonstrate arithmetic operations.", "CO5: Compare memory hierarchies."],
              modules: [
                { title: "Module 1: Number Systems & Boolean Algebra", hours: "6L", content: "Binary, BCD, ASCII, Gray Codes. Boolean Laws. K-Map (up to 4 vars), Algebraic Simplification." },
                { title: "Module 2: Combinational Circuits", hours: "6L", content: "Half & Full Adder/Subtractor. Serial/Parallel Adders. MUX, DEMUX, Encoder, Decoder, Comparator, Code Converters." },
                { title: "Module 3: Sequential Circuits", hours: "6L", content: "Flip-Flops (SR, JK, D, T, Master-Slave). Counters (Ring, Johnson, Mod-N). Registers (SISO, SIPO, etc)." },
                { title: "Module 4: Data Rep & Arithmetic", hours: "5L", content: "Integer Arithmetic, Booth's Algorithm. Addressing Modes. Instruction Formats." },
                { title: "Module 5: CPU & Control Unit", hours: "6L", content: "RTL, Bus Architecture. ALU Design. Hardwired vs Microprogrammed Control. Instruction Cycle." },
                { title: "Module 6: Memory & I/O", hours: "7L", content: "RAM, ROM. Memory Hierarchy: Cache (Mapping techniques), Virtual Memory (Paging). I/O Transfer: DMA, Interrupts." }
              ],
              books: { text: ["Digital Logic and Computer Design - M. Morris Mano", "Computer Organization - William Stallings"] }
            }
          },
          { 
            code: "CH201", 
            name: "Engineering Chemistry", 
            type: "Theory", 
            credits: 2, 
            hours: "2-0-0",
            details: {
              objectives: ["Atomic structures.", "Free energy/semiconductors.", "Corrosion/fuel.", "Spectroscopy."],
              outcomes: ["CO1: Principles of atomic structures.", "CO2: Energy storage/semiconductors.", "CO3: Corrosion and fuel.", "CO4: Organic reactions/spectroscopy."],
              modules: [
                { title: "Module 1: Atomic Structure & Materials", hours: "6L", content: "Schrodinger Wave Equation, Quantum Numbers, Slater's rule. Semiconductors (Si & Ge): Properties and role." },
                { title: "Module 2: Thermodynamics & Electrochemistry", hours: "7L", content: "Entropy, Gibbs Free Energy, Nernst Equation. Li-ion batteries: Working principle and applications." },
                { title: "Module 3: Polymers & Industrial Chem", hours: "6L", content: "Polymers: Bakelite, Nylon 6,6. Conducting polymers. Corrosion: Mechanisms, Control. Fuels: LPG, CNG, Calorific value." },
                { title: "Module 4: Organic Reactions & Spectroscopy", hours: "5L", content: "Nucleophilic/Electrophilic reactions. Drug synthesis (Paracetamol, Aspirin). UV-VIS (Lambert-Beer Law), IR Spectroscopy." }
              ],
              books: { text: ["Chemistry-I - Gourkrishna Das Mohapatro", "Engineering Chemistry - Jain & Jain"] }
            }
          },
          { 
            code: "M201", 
            name: "Engineering Mathematics-II", 
            type: "Theory", 
            credits: 3, 
            hours: "3-0-0",
            details: {
              objectives: ["ODEs, Laplace transform, Numerical methods."],
              modules: [
                { title: "Module 1: First Order ODE", hours: "9L", content: "Exact ODE, Integrating factors. Linear ODE, Bernoulli's equation. Clairaut's equation." },
                { title: "Module 2: Second Order ODE", hours: "8L", content: "Constant coefficients: Complementary Function, Particular Integral. Variation of parameters. Cauchy-Euler." },
                { title: "Module 3: Laplace Transform", hours: "12L", content: "Definition, Shifting properties, Inverse LT, Convolution theorem. Solution of ODE using LT." },
                { title: "Module 4: Numerical Methods", hours: "7L", content: "Interpolation (Newton forward/backward, Lagrange). Integration (Trapezoidal, Simpson's 1/3). ODE Solution: Euler, Runge-Kutta." }
              ],
              books: { text: ["Higher Engineering Mathematics - B.S. Grewal"] }
            }
          },
          { 
            code: "HU202", 
            name: "Constitution of India & Ethics", 
            type: "Theory", 
            credits: 1, 
            hours: "1-0-0",
            details: {
              modules: [
                { title: "Module 1: Constitution", hours: "2L", content: "Preamble, Fundamental Rights/Duties, Directive Principles. Parliament, President, Governor." },
                { title: "Module 2: Ethical Thinking", hours: "3L", content: "Work ethics, Values (Negative/Positive). Ethical values for Professional success." },
                { title: "Module 3: Engineering Ethics", hours: "4L", content: "Utilitarianism, Deontology. Codes of Ethics. Whistle blowing. Case studies: Bhopal Gas Tragedy, Chernobyl." },
                { title: "Module 4: Business Ethics", hours: "3L", content: "Ethical leadership. IPR, Plagiarism. Gender-based issues." }
              ],
              books: { text: ["Introduction to Constitution of India - D.D. Basu"] }
            }
          },
          { 
            code: "HU203", 
            name: "Design Thinking & Innovation", 
            type: "Theory", 
            credits: 1, 
            hours: "1-0-0",
            details: {
              modules: [
                { title: "Module 1: Basics", hours: "3L", content: "Definition, History, Brainstorming. 2x2 Matrix, NABC method." },
                { title: "Module 2: Process", hours: "6L", content: "Empathize (5 Why), Define (Storytelling), Ideate (6-3-5), Prototype (MVP), Test (A/B testing)." },
                { title: "Module 3-5: Tools & Strategy", hours: "8L", content: "Design Thinking in IT. Business Process modelling. Strategic innovations. Business Model." },
                { title: "Module 6-7: Prob Solving & SDG", hours: "3L", content: "TRIZ, SCAMPER, UI/UX. 17 Sustainable Development Goals (SDG)." }
              ],
              books: { text: ["Karmin Design Thinking - Dr. Bala Ramadurai"] }
            }
          },
          { 
            code: "CS291", 
            name: "Data Structures Lab", 
            type: "Practical", 
            credits: 1.5, 
            hours: "0-0-3",
            details: {
              modules: [
                { title: "Exp 1-2: Arrays", content: "1D/2D arrays manipulation. Polynomial representation using arrays." },
                { title: "Exp 3-4: Linked Lists", content: "Singly Linked List (Insert, Delete). Doubly and Circular Linked Lists." },
                { title: "Exp 5-6: Stacks", content: "Stack using array/list. Infix to Postfix conversion, Postfix evaluation." },
                { title: "Exp 7: Queues", content: "Linear and Circular Queue. Queue using Linked List." },
                { title: "Exp 8: Recursion", content: "Factorial, Fibonacci, Tower of Hanoi." },
                { title: "Exp 9: Trees", content: "Binary Search Tree (Insertion, deletion, searching)." },
                { title: "Exp 10-11: Sorting", content: "Bubble, Insertion, Selection, Quick, Merge, Radix Sort." },
                { title: "Exp 12: Searching", content: "Linear, Binary, Interpolation Search." }
              ]
            }
          },
          { 
            code: "CS292", 
            name: "Artificial Intelligence Lab", 
            type: "Practical", 
            credits: 1.5, 
            hours: "0-0-3",
            details: {
              modules: [
                { title: "Module 1: PROLOG Basics", content: "Understanding facts, rules, queries, and syntax." },
                { title: "Module 2: Recursive definitions", content: "Fibonacci, Factorial, List length." },
                { title: "Module 3-4: Knowledge Base", content: "Family relationships. Rules and inference." },
                { title: "Module 5: List operations", content: "Membership, concatenation, reverse." },
                { title: "Module 7: Expert System", content: "Mini project (e.g., Animal Classification, Medical diagnosis)." }
              ]
            }
          },
          { 
            code: "CS293", 
            name: "Digital Logic Lab", 
            type: "Practical", 
            credits: 1.5, 
            hours: "0-0-3",
            details: {
              modules: [
                { title: "Exp 1: Logic Gates", content: "Truth tables of Basic, Universal (NAND/NOR), XOR/XNOR gates." },
                { title: "Exp 2: Boolean Simplification", content: "Design logic circuits from Boolean expressions (K-Maps)." },
                { title: "Exp 3: Adders/Subtractors", content: "Half/Full Adder, Half/Full Subtractor." },
                { title: "Exp 4-6: MUX/DEMUX/Encoders", content: "Code Converters, Multiplexers, Decoders." },
                { title: "Exp 7-9: Sequential Circuits", content: "Flip-Flops (SR, JK, D, T). Counters (Binary, Ring). Shift Registers." },
                { title: "Exp 10-12: HDL", content: "Simulate arithmetic circuits using Verilog/VHDL. CPU Datapath." }
              ]
            }
          },
          { 
            code: "CH291", 
            name: "Chemistry Lab", 
            type: "Practical", 
            credits: 1, 
            hours: "0-0-2",
            details: {
              modules: [
                { title: "Titration", content: "Strength of NaOH (vs Oxalic acid). Fe2+ estimation (Permanganometry)." },
                { title: "Physical Properties", content: "Surface tension (Stalagmometer), Viscosity (Ostwald)." },
                { title: "Water Analysis", content: "Hardness (Complexometric), Chloride (Argentometric), Alkalinity, DO." },
                { title: "Instrumental", content: "pH-metric titration. Conductometric titration." },
                { title: "Synthesis", content: "Polymer (Bakelite), Silver Nanoparticles. Drug design." }
              ]
            }
          },
          { 
            code: "ME293", 
            name: "IDEA LAB Workshop", 
            type: "Practical", 
            credits: 1.5, 
            hours: "0-0-3",
            details: {
              modules: [
                { title: "Electronics", content: "Schematic/PCB design (EagleCAD). Soldering. Sensors." },
                { title: "Tools", content: "Hand tools, Power tools (Saws, Grinders). Welding." },
                { title: "Machining & 3D Printing", content: "CNC routing, Laser cutting. 3D printing (FDM/SLA)." },
                { title: "Embedded Systems", content: "Arduino/Raspberry Pi programming. IoT." },
                { title: "Project", content: "Mini project with enclosure and documentation." }
              ]
            }
          },
          { code: "MC281", name: "NSS/Physical Activities", type: "Mandatory", credits: 0, hours: "0-0-0" },
        ]
      }
    }
  },
  year2: {
    title: "Second Year",
    description: "Core Systems & Algorithmic Thinking",
    semesters: {
      sem3: {
        title: "Semester 3",
        totalCredits: 23.5,
        stats: { theory: 15, practical: 8.5 },
        subjects: [
          { code: "CS301", name: "Computer Architecture", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS302", name: "Design & Analysis of Algorithms", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS303", name: "Operating Systems", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "EC(CS)301", name: "Internet of Things", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "M(CS)301", name: "Discrete Mathematics", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS391", name: "Computer Architecture Lab", type: "Practical", credits: 1.5, hours: "0-0-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS392", name: "Design & Analysis of Algorithms Lab", type: "Practical", credits: 1.5, hours: "0-0-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS393", name: "Operating Systems Lab", type: "Practical", credits: 1.5, hours: "0-0-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS394", name: "Python Programming Lab", type: "Practical", credits: 2.5, hours: "0-1-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "EC(CS)391", name: "Internet of Things Lab", type: "Practical", credits: 1.5, hours: "0-0-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
        ]
      },
      sem4: {
        title: "Semester 4",
        totalCredits: 25,
        stats: { theory: 18, practical: 7 },
        subjects: [
          { code: "CS401", name: "Database Management Systems", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS402", name: "Computer Networks", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS403", name: "Machine Learning", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS404", name: "Formal Language & Automata Theory", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "M(CS)401", name: "Probability and Statistics", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "HU(CS)401", name: "Principles of Management", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS491", name: "Database Management Systems Lab", type: "Practical", credits: 1.5, hours: "0-0-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS492", name: "Computer Networks Lab", type: "Practical", credits: 1.5, hours: "0-0-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS493", name: "Machine Learning Lab", type: "Practical", credits: 1.5, hours: "0-0-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "M(CS)491", name: "Introduction to R Programming", type: "Practical", credits: 1, hours: "2-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "HU(CS)491", name: "Soft Skill & Aptitude", type: "Practical", credits: 1.5, hours: "0-0-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
        ]
      }
    }
  },
  year3: {
    title: "Third Year",
    description: "Advanced Computing & Specializations",
    semesters: {
      sem5: {
        title: "Semester 5",
        totalCredits: 23,
        stats: { theory: 15, practical: 8 },
        subjects: [
          { code: "CS501", name: "Software Engineering", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS502", name: "Object Oriented Programming using Java", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS503A-D", name: "Compiler Design / Cryptography / Computer Graphics", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS504", name: "Soft Computing", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "HU(CS)501", name: "Economics for Engineers", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS591", name: "Software Engineering Lab", type: "Practical", credits: 1.5, hours: "0-0-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS592", name: "Object Oriented Programming using Java Lab", type: "Practical", credits: 1.5, hours: "0-0-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS593A-D", name: "Elective Lab", type: "Practical", credits: 1.5, hours: "0-0-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS594", name: "Soft Computing Lab", type: "Practical", credits: 1.5, hours: "0-0-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS582", name: "Project-I", type: "Project", credits: 2, hours: "4-4-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
        ]
      },
      sem6: {
        title: "Semester 6",
        totalCredits: 23.5,
        stats: { theory: 15, practical: 8.5 },
        subjects: [
          { code: "CS601", name: "Web and Internet Technology", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS602", name: "Deep Learning", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS603A-D", name: "Image Processing / Cloud / Big Data / NLP", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS604A-C", name: "Mobile Computing / HCI / E-Commerce", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS605", name: "Quantum Computing / Cyber Law", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS691", name: "Web and Internet Technology Lab", type: "Practical", credits: 1.5, hours: "0-0-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS692", name: "Deep Learning Lab", type: "Practical", credits: 1.5, hours: "0-0-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS693A-D", name: "Elective Lab", type: "Practical", credits: 1.5, hours: "0-0-3", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS681", name: "Project-II", type: "Project", credits: 4, hours: "0-0-8", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
        ]
      }
    }
  },
  year4: {
    title: "Fourth Year",
    description: "Industry Readiness & Research",
    semesters: {
      sem7: {
        title: "Semester 7",
        totalCredits: 17,
        stats: { theory: 7, practical: 10 },
        subjects: [
          { code: "CS701A-D", name: "Blockchain / Optimization / Bio-informatics / Robotics", type: "Theory", credits: 3, hours: "3-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "HU(CS)701A", name: "HR Development and Org Behavior", type: "Theory", credits: 2, hours: "2-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "HU702", name: "Research Methodology", type: "Theory", credits: 2, hours: "2-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS793", name: "Project-III", type: "Project", credits: 6, hours: "0-0-12", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS781", name: "Internship (Minimum 1 Month)", type: "Project", credits: 2, hours: "0-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "PR792", name: "Rapid Prototyping Lab", type: "Practical", credits: 2, hours: "0-0-4", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
        ]
      },
      sem8: {
        title: "Semester 8",
        totalCredits: 8,
        stats: { theory: 0, practical: 8 },
        subjects: [
          { code: "CS881", name: "Internship / Entrepreneurship", type: "Project", credits: 6, hours: "0-0-12", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
          { code: "CS882", name: "Grand Viva", type: "Project", credits: 2, hours: "0-0-0", details: { modules: [{ title: "Source Content Missing", content: "" }] } },
        ]
      }
    }
  }
};

const StatBar = ({ label, value, max, colorClass }) => (
  <div className="mb-2">
    <div className="flex justify-between text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
      <span>{label}</span>
      <span>{value} Credits</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className={`h-2.5 rounded-full ${colorClass} transition-all duration-1000 ease-out`} 
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  </div>
);

const SubjectCard = ({ subject, onClick }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'Theory': return <Book size={18} className="text-blue-500" />;
      case 'Practical': return <Code size={18} className="text-green-500" />;
      case 'Project': return <Cpu size={18} className="text-purple-500" />;
      case 'Mandatory': return <Award size={18} className="text-yellow-500" />;
      default: return <Layers size={18} className="text-gray-500" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Theory': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'Practical': return 'bg-green-50 border-green-200 text-green-800';
      case 'Project': return 'bg-purple-50 border-purple-200 text-purple-800';
      case 'Mandatory': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <button 
      onClick={() => onClick(subject)}
      className="w-full text-left group bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-200 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-transparent -mr-8 -mt-8 rounded-full"></div>
      
      <div className="flex items-start justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${getTypeColor(subject.type).split(' ')[0]}`}>
            {getIcon(subject.type)}
          </div>
          <div>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${getTypeColor(subject.type)}`}>
              {subject.type}
            </span>
            <h4 className="font-bold text-gray-800 mt-1">{subject.name}</h4>
            <p className="text-xs text-gray-500 font-mono mt-0.5">{subject.code}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-indigo-600">{subject.credits}</div>
          <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Credits</div>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-gray-500 text-xs">
         <span className="flex items-center"><Clock size={12} className="mr-1" /> (L-T-P): <span className="font-mono font-medium text-gray-700 ml-1">{subject.hours}</span></span>
         {subject.details && (
           <span className="flex items-center text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
             View Syllabus <ChevronRight size={12} className="ml-1"/>
           </span>
         )}
      </div>
    </button>
  );
};

const SubjectDetails = ({ subject, onBack }) => {
  if (!subject) return null;

  const hasDetails = subject.details && (subject.details.modules || subject.details.outcomes);

  return (
    <div className="absolute inset-0 z-50 bg-white flex flex-col animate-in slide-in-from-right duration-300">
      <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
        <div className="flex items-center space-x-4">
           <button onClick={onBack} className="p-2 rounded-full hover:bg-white hover:shadow-sm text-gray-500 transition-all">
             <ChevronRight className="rotate-180" size={20} />
           </button>
           <div>
             <h2 className="text-xl font-bold text-gray-900">{subject.name}</h2>
             <span className="text-sm font-mono text-gray-500 bg-gray-200 px-2 py-0.5 rounded mr-2">{subject.code}</span>
             <span className="text-sm text-gray-500">{subject.type} • {subject.credits} Credits</span>
           </div>
        </div>
        <button onClick={onBack} className="p-2 text-gray-400 hover:text-red-500"><X size={24}/></button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
        {!hasDetails ? (
           <div className="text-center py-20">
             <div className="bg-gray-100 p-6 rounded-full inline-block mb-4">
               <FileText size={48} className="text-gray-400" />
             </div>
             <h3 className="text-lg font-medium text-gray-600">Syllabus details coming soon...</h3>
             <p className="text-gray-400 max-w-md mx-auto mt-2">Detailed syllabus for this subject has not been digitized yet. Please refer to the official PDF.</p>
           </div>
        ) : (
          <>
            {/* Outcomes & Objectives */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {subject.details.objectives && (
                 <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                   <h3 className="flex items-center text-blue-800 font-bold mb-4">
                     <CheckCircle size={18} className="mr-2"/> Course Objectives
                   </h3>
                   <ul className="space-y-2">
                     {subject.details.objectives.map((obj, i) => (
                       <li key={i} className="text-sm text-gray-700 flex items-start">
                         <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                         {obj}
                       </li>
                     ))}
                   </ul>
                 </div>
               )}
               
               {subject.details.outcomes && (
                 <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                   <h3 className="flex items-center text-green-800 font-bold mb-4">
                     <Award size={18} className="mr-2"/> Course Outcomes (COs)
                   </h3>
                   <ul className="space-y-2">
                     {subject.details.outcomes.map((out, i) => (
                       <li key={i} className="text-sm text-gray-700 flex items-start">
                         <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></span>
                         {out}
                       </li>
                     ))}
                   </ul>
                 </div>
               )}
            </div>

            {/* Modules */}
            {subject.details.modules && (
              <div>
                <h3 className="flex items-center text-gray-800 font-bold mb-4 text-lg border-b pb-2">
                  <List size={20} className="mr-2 text-indigo-600"/> Detailed Syllabus
                </h3>
                <div className="space-y-4">
                  {subject.details.modules.map((mod, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-indigo-100 hover:shadow-sm transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className={`font-bold ${mod.title === "Source Content Missing" ? "text-red-600 flex items-center" : "text-gray-900"}`}>
                           {mod.title === "Source Content Missing" && <AlertCircle size={16} className="mr-2"/>}
                           {mod.title}
                        </h4>
                        {mod.hours && <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">{mod.hours}</span>}
                      </div>
                      {/* Only render content paragraph if content is not empty */}
                      {mod.content && (
                        <p className={`text-sm leading-relaxed ${mod.title === "Source Content Missing" ? "text-red-500 italic" : "text-gray-600"}`}>
                          {mod.content}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Books */}
            {subject.details.books && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {subject.details.books.text && (
                    <div>
                      <h3 className="flex items-center text-gray-800 font-bold mb-4 text-lg border-b pb-2">
                        <BookOpen size={20} className="mr-2 text-indigo-600"/> Textbooks
                      </h3>
                      <ul className="space-y-3">
                        {subject.details.books.text.map((book, i) => (
                          <li key={i} className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                            {book}
                          </li>
                        ))}
                      </ul>
                    </div>
                 )}
                 {subject.details.books.refs && (
                    <div>
                      <h3 className="flex items-center text-gray-800 font-bold mb-4 text-lg border-b pb-2">
                        <Book size={20} className="mr-2 text-indigo-600"/> Reference Books
                      </h3>
                      <ul className="space-y-3">
                        {subject.details.books.refs.map((book, i) => (
                          <li key={i} className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                            {book}
                          </li>
                        ))}
                      </ul>
                    </div>
                 )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const SemesterView = ({ data, onClose }) => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-5xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 relative">
        
        {selectedSubject ? (
          <SubjectDetails subject={selectedSubject} onBack={() => setSelectedSubject(null)} />
        ) : (
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 sm:p-8 text-white relative flex-shrink-0">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-md"
              >
                <X size={20} />
              </button>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{data.title}</h2>
              <div className="flex flex-wrap gap-4 text-indigo-100 text-sm font-medium">
                <span className="flex items-center bg-white/10 px-3 py-1 rounded-full"><Award size={14} className="mr-2"/> Total Credits: {data.totalCredits}</span>
                <span className="flex items-center bg-white/10 px-3 py-1 rounded-full"><Book size={14} className="mr-2"/> Total Subjects: {data.subjects.length}</span>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto bg-gray-50/50 p-6 sm:p-8">
              
              {/* Stats Section */}
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-gray-800 font-bold mb-4 flex items-center">
                    <Layout size={18} className="mr-2 text-indigo-600"/> Credit Distribution
                  </h3>
                  <StatBar label="Theory" value={data.stats.theory} max={data.totalCredits} colorClass="bg-blue-500" />
                  <StatBar label="Practical / Sessional" value={data.stats.practical} max={data.totalCredits} colorClass="bg-green-500" />
                </div>
                <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-indigo-900 font-medium mb-2">Focus Area</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      This semester balances <strong className="text-blue-700">Theory ({data.stats.theory} cr)</strong> foundations with hands-on <strong className="text-green-700">Practical ({data.stats.practical} cr)</strong> experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Subjects Grid */}
              <h3 className="text-gray-800 font-bold mb-4 flex items-center text-lg">
                <Database size={20} className="mr-2 text-purple-600"/> Detailed Syllabus <span className="ml-2 text-xs font-normal text-gray-500 bg-gray-200 px-2 py-0.5 rounded">Click cards for details</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8">
                {data.subjects.map((subject, idx) => (
                  <SubjectCard key={idx} subject={subject} onClick={setSelectedSubject} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const YearNode = ({ yearKey, data, activeYear, setActiveYear, setActiveSemester }) => {
  const isActive = activeYear === yearKey;
  
  return (
    <div className={`relative flex flex-col items-center transition-all duration-500 ${isActive ? 'flex-grow' : 'flex-shrink'}`}>
      
      {/* Connector Line (Vertical) */}
      {!isActive && <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-8 w-8 h-1 bg-gray-200"></div>}

      {/* Main Year Circle/Card */}
      <button 
        onClick={() => setActiveYear(isActive ? null : yearKey)}
        className={`
          relative z-10 w-full md:w-64 p-6 rounded-2xl transition-all duration-300 border-2
          flex flex-col items-center text-center group
          ${isActive 
            ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl scale-105' 
            : 'bg-white border-gray-200 text-gray-600 hover:border-indigo-300 hover:shadow-lg'
          }
        `}
      >
        <div className={`
          mb-4 p-4 rounded-full transition-colors duration-300
          ${isActive ? 'bg-white/20 text-white' : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100'}
        `}>
           <GraduationCap size={32} />
        </div>
        <h2 className="text-2xl font-bold mb-1">{data.title}</h2>
        <p className={`text-sm ${isActive ? 'text-indigo-100' : 'text-gray-400'}`}>{data.description}</p>
        
        <ChevronDown 
          className={`mt-4 transition-transform duration-300 ${isActive ? 'rotate-180 opacity-100' : 'opacity-0 group-hover:opacity-50'}`} 
        />
      </button>

      {/* Semesters Expansion Area */}
      <div className={`
        w-full overflow-hidden transition-all duration-500 ease-in-out
        ${isActive ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}
      `}>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch p-2">
          {Object.entries(data.semesters).map(([semKey, semData]) => (
            <button
              key={semKey}
              onClick={() => setActiveSemester(semData)}
              className="flex-1 bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 group text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-50 rounded-bl-full -mr-8 -mt-8 group-hover:bg-purple-100 transition-colors"></div>
              
              <div className="relative z-10">
                <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold uppercase rounded mb-2">
                  {semData.subjects.length} Subjects
                </span>
                <h3 className="text-lg font-bold text-gray-800 flex items-center">
                  {semData.title}
                  <ChevronRight size={16} className="ml-auto text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                </h3>
                <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                  <span className="flex items-center"><Zap size={12} className="mr-1"/> {semData.totalCredits} Credits</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

const App = () => {
  const [activeYear, setActiveYear] = useState(null);
  const [activeSemester, setActiveSemester] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Code className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              CSE Curriculum
            </span>
          </div>
          <div className="hidden md:flex text-sm font-medium text-gray-500">
             R25 Regulation • 2025-26 Batch
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Your Engineering <span className="text-indigo-600">Journey</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-8">
            Interactive syllabus breakdown for Computer Science & Engineering. 
            Explore 8 semesters of rigorous academic structure.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
              <Terminal size={16} className="mr-2" /> 160+ Credits
            </div>
            <div className="flex items-center text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
              <Beaker size={16} className="mr-2" /> 40+ Labs
            </div>
          </div>
        </div>
      </div>

      {/* Timeline/Infographic Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 items-start relative">
          
          {/* Connecting Line (Horizontal for Desktop) */}
          <div className="hidden lg:block absolute top-[110px] left-32 right-32 h-1 bg-gray-100 -z-10"></div>

          {Object.entries(curriculumData).map(([yearKey, data]) => (
            <YearNode 
              key={yearKey} 
              yearKey={yearKey} 
              data={data} 
              activeYear={activeYear} 
              setActiveYear={setActiveYear}
              setActiveSemester={setActiveSemester}
            />
          ))}

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 CSE Department. All rights reserved.</p>
          <div className="flex flex-col md:items-end mt-2 md:mt-0">
             <p>Based on R25 (B. Tech CSE) Syllabus</p>
             <p className="text-indigo-400 font-medium mt-1">Made by Biltu Samanta, CSE Student</p>
          </div>
        </div>
      </footer>

      {/* Modal for Semester Details */}
      {activeSemester && (
        <SemesterView data={activeSemester} onClose={() => setActiveSemester(null)} />
      )}

    </div>
  );
};

export default App;