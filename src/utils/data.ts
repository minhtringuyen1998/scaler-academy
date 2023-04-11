export interface ILession {
  titleLession: string; listUnit: string[]
}

export interface IModule{
  nameModule: string;
  process: string;
  lessions: ILession[];
}
export interface ICourse {
  name: string;
  month: string;
  modules: IModule[];
}
export interface IMentor {
  name: string,
  linkedin?: string,
  college?: string,
  quora_blog?: string,
  linkedin_blog?:string,
  video_blog?: string,
  experience? : number,
  batch?: string,
  pre_academy_company?: string,
  pre_academy_segment?: string,
  post_academy_company?: string
  post_academy_segment?: string
  growth?: string
  branch?: string
  tier?: string
  role?: string
  user_slug?: string
  order?: number
  eligible_for_qna?: string
  user_id?: number
  pre_scaler_role?: string
  region?: string
  program_label?: string
  image_url?: string
  email?: string
  status?: string
  thumbnail_url?: string
  company_logo_url?: string
  whatsapp_consent?: string
  email_consent?: string
  program?: string
  about? : string
}
export const listCourse: ICourse[] = [
  {
    name: "Beginner",
    month: "11",
    modules: [
      {
        nameModule: "Programming Language Fundamentals",
        process: "2",
        lessions: [
          {
            titleLession: " Beginner Programming Language Fundamentals",
            listUnit: [
              "Java",
              "Data Types and Operators",
              "Loops and Conditional Statements",
              "Functions",
              "Strings",
            ],
          },
        ],
      },
      {
        nameModule: "Data Structures and Algorithms",
        process: "4.5",
        lessions: [
          {
            titleLession: "Data Structures and Algorithms",
            listUnit: [
              "Introduction to Maths for Programming",
              "1D and 2D Arrays  ",
              "Introduction to Time complexity",
              "Bit Manipulation",
              "Introduction to Sorting & Hashing",
              "Introduction to Recursion ",
              "Stacks, Linked List, Trees, Tries and Heaps",
            ],
          },
        ],
      },
      {
        nameModule: "SQL",
        process: "0.5",
        lessions: [
          {
            titleLession: "SQL",
            listUnit: [
              "CRUD ",
              "Joins",
              "Aggregation",
              "Indexing",
              "Transaction",
              "Advanced SQL",
            ],
          },
        ],
      },
      {
        nameModule: "Specializations",
        process: "3",
        lessions: [
          {
            titleLession: "Fullstack Engineering",
            listUnit: [
              "HTML + CSS",
              "JS",
              "Simple Projects",
              "API Design, CRUD",
              "React + Redux",
              "Project",
              "Express + Mongo",
            ],
          },
          {
            titleLession: "Backend Engineering",
            listUnit: [
              "Advanced Language Fundamentals",
              "Concurrency",
              "SOLID, Design Patterns",
              "Schema Design, API Design",
              "Spring Boot + Projects",
              "Postman, Monitoring, Logging",
              "Testing",
            ],
          },
        ],
      },
      {
        nameModule: "System Design Essentials",
        process: "3",
        lessions: [
          {
            titleLession: "System Design Essentials",
            listUnit: [
              "CDN ",
              "SQL",
              "NoSQL",
              "Caches",
              "Queues",
              "Scalability case studies (LLD + HLD)",
            ],
          },
        ],
      },
      {
        nameModule: "Electives",
        process: " 1-3",
        lessions: [
          {
            titleLession: "Advanced Software & System Design - 1.5 months",
            listUnit: [
              "Zookeeper + Kafka",
              "Location Based Services (S3, Quad Trees)",
              "Microservices & Containerisation (Docker)",
              "Case Studies",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Intermediate",
    month: "11",
    modules: [
      {
        nameModule: "Programming Constructs",
        process: "2",
        lessions: [
          {
            titleLession: "Programming Constructs",
            listUnit: [
              "Introduction to Time Complexity Analysis",
              "Introduction to Arrays",
              "Introduction to Number System, Bit Manipulation",
              "Introduction to Maths for Programming",
              "Introduction to Sorting and Hashing",
              "Introduction to Recursion",
              "Introduction to Data Structures Fundamentals (Stacks, Linked Lists, Trees)",
            ],
          },
        ],
      },
      {
        nameModule: "Advanced DSA and CS Fundamentals",
        process: "4.5",
        lessions: [
          {
            titleLession: "Problem Solving Techniques",
            listUnit: [
              "Time Complexity Analysis",
              "Arrays",
              "Bit Manipulation",
              "Maths",
              "Recursion & Sorting",
              "Binary Search & 2 Pointers",
              "Hashing",
              "Pattern Matching Algorithms",
            ],
          },
          {
            titleLession: "Data Structures",
            listUnit: [
              "Linked Lists",
              "Stacks & Queues",
              "Trees",
              "Tries & Heaps",
            ],
          },
          {
            titleLession: "Advanced Problem Solving Techniques",
            listUnit: [
              "Greedy Algorithms",
              "Backtracking",
              "Dynamic Programming",
              "Graphs",
            ],
          },
          {
            titleLession: "Programming Language Internals**",
            listUnit: [
              "Data Types and Syntax",
              "Programming Paradigms for the Language",
              "Collections framework/ standard library",
              "Concurrency",
              "Advanced Concepts and Common Pitfalls",
            ],
          },
        ],
      },
      {
        nameModule: "Software and System Design",
        process: "3",
        lessions: [
          {
            titleLession: "Object Oriented Design (LLD)",
            listUnit: [
              "OOP",
              "Design Principles - SOLID",
              "Design Patterns",
              "UML Diagrams & Schema Design",
              "Best Programming Practices (API Design and Project Structure)",
              "Concurrency and Multithreading",
              "Case Studies and Machine Coding (How to build real systems)",
            ],
          },
          {
            titleLession: "System Design (HLD)",
            listUnit: [
              "Consistent Hashing",
              "Caching",
              "CAP Theorem",
              "Distributed Systems & Databases",
              "SQL and NoSQL",
              "Scalability",
              "Zookeeper + Kafka",
              "Location Based Services (S3, Quad Trees)",
              "Microservices & Containerisation (Docker)",
              "Case Studies",
            ],
          },
        ],
      },
      {
        nameModule: "Specializations",
        process: "2",
        lessions: [
          {
            titleLession: "FullStack Specialisation (Backend and Fullstack)",
            listUnit: [
              "MVC",
              "REST APIs",
              "ORM",
              "SpringBoot (or Django)",
              "Views",
              "Building a server",
              "Web architecture",
              "HTML, CSS, Javascript in depth, Node.js",
              "Backend architecture, MongoDB, React / Redux",
              "Github, Version Control",
              "Capstone project",
            ],
          },
          {
            titleLession: "Data Engineering Specialisation",
            listUnit: [
              "Building efficient Data Processing Systems",
              "Advanced SQL",
              "Cloud Services - AWS, or GCP",
              "Developing ETL pipelines",
              "Map-Reduce Framework",
              "Big Data",
              "Data Warehousing & Modelling",
              "OLAP, Dashboarding",
              "Workflow Orchestration",
              "Logging, and Monitoring",
              "MapReduce, HiveQL, Presto",
              "3 Projects",
            ],
          },
        ],
      },
      {
        nameModule: "Advanced Electives",
        process: "1",
        lessions: [
          {
            titleLession: "DSA for Competitive Programming",
            listUnit: [
              "Combinatorics and Probability",
              "Matrix exponentiation",
              "Advanced Trees: Segment Tree, k-D Tree",
              "Disjoint Set Union",
              "Advanced Dynamic Programming",
              "Advanced Graphs: Bridges, Articulation point, Network Flow",
            ],
          },
          {
            titleLession: "Product Management for Engineers",
            listUnit: [
              "Introduction to Product Management",
              "Product Thinking & Product Discovery",
              "Product Roadmap & Prioritization",
              "Mental Models for Product Managers",
              "Product Analytics",
              "Hands-on case study & Mixpanel session",
              "Delivery & Project Management",
              "Practical ways to apply PM lessons as an Engineer",
            ],
          },
        ],
      },
      {
        nameModule: "System Design (HLD)",
        process: "1.5",
        lessions: [
          {
            titleLession: "System Design (HLD)",
            listUnit: [
              "Consistent Hashing",
              "Caching",
              "CAP Theorem",
              "Distributed Systems & Databases",
              "SQL and NoSQL",
              "Scalability",
              "Zookeeper + Kafka",
              "Location Based Services (S3, Quad Trees)",
              "Microservices & Containerisation (Docker)",
              "Case Studies",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Advanced",
    month: "10",
    modules: [
      {
        nameModule: "Data Structures and Algorithms",
        process: "2",
        lessions: [
          {
            titleLession: "Data Structures and Algorithms",
            listUnit: [
              "Time Complexity Analysis",
              "Array Problem Solving Techniques",
              "Bit Manipulation",
              "Maths for Problem Solving",
              "Recursion",
              "Backtracking",
              "Sorting",
              "Searching(Binary Search)",
              "Two Pointers",
              "Hashing",
              "Strings and Pattern Matching",
            ],
          },
          {
            titleLession: "Data Structures",
            listUnit: [
              "Linked Lists",
              "Stacks",
              "Queues and Deques",
              "Trees and BST",
              "Tries",
              "Heaps",
            ],
          },
          {
            titleLession: "Advanced Problem Solving Techniques",
            listUnit: ["Greedy", "Dynamic Programming", "Graphs"],
          },
        ],
      },
      {
        nameModule: "Advanced Language Concepts",
        process: "4.5",
        lessions: [
          {
            titleLession: "Advanced Language Concepts - 1 Week*",
            listUnit: [
              "Programming Langauge Specific Interview Questions",
              "Advanced Language Concepts (Standard Library, Popular Pitfalls)",
            ],
          },
        ],
      },
      {
        nameModule: "Computer Science Fundamentals",
        process: "1",
        lessions: [
          {
            titleLession: "Computer Science Fundamentals",
            listUnit: [
              "DBMS and SQL",
              "OS, Multithreading, and Concurrency",
              "Computer Networks Fundamentals (TCP, UDP, HTTP, DNS, Layering Architecture)",
            ],
          },
        ],
      },
      {
        nameModule: "Object Oriented Design (LLD)",
        process: "1.5",
        lessions: [
          {
            titleLession: "Object Oriented Design (LLD)",
            listUnit: [
              "Object Oriented Programming",
              "SOLID Design Principles",
              "Design Patterns",
              "UML Diagrams & Schema Design",
              "Backend LLD and Machine Coding Case Studies",
            ],
          },
        ],
      },
      {
        nameModule: "System Design (HLD)",
        process: "1.5",
        lessions: [
          {
            titleLession: "System Design (HLD)",
            listUnit: [
              "Consistent Hashing",
              "Caching",
              "CAP Theorem",
              "Distributed Systems & Databases",
              "SQL and NoSQL",
              "Scalability",
              "Zookeeper + Kafka",
              "Location Based Services (S3, Quad Trees)",
              "Microservices & Containerisation (Docker)",
              "Case Studies",
            ],
          },
        ],
      },
      {
        nameModule: "Advanced Electives",
        process: "1",
        lessions: [
          {
            titleLession: "DSA for Competitive Programming",
            listUnit: [
              "Combinatorics and Probability",
              "Matrix exponentiation",
              "Advanced Trees: Segment Tree, k-D Tree",
              "Disjoint Set Union",
              "Advanced Dynamic Programming",
              "Advanced Graphs: Bridges, Articulation point, Network Flow",
            ],
          },
          {
            titleLession: "Product Management for Engineers",
            listUnit: [
              "Introduction to Product Management",
              "Product Thinking & Product Discovery",
              "Product Roadmap & Prioritization",
              "Mental Models for Product Managers",
              "Product Analytics",
              "Hands-on case study & Mixpanel session",
              "Delivery & Project Management",
              "Practical ways to apply PM lessons as an Engineer",
            ],
          },
        ],
      },
    ],
  },
];
 export const listTerm : string[] = [
  "Tech Giants",
  "Service To Product",
  "Service To Tech Giants",
  "Service to Unicorn Startups",
  "0 To 3 Years Experience",
  "4 To 7 Years Experience",
]
export const aboutPerson : string[] = [
  "Scaler exceeded my expectations in a way I had never even thought possible. I expected a single mentor from Scaler, but I ended up getting several people who guided me throughout.",
  "Scaler lived up to all the expectations and hype I'd heard about it. The mentorship was a standout aspect to me, and the instructors and TAs were helpful and excellent at what they did.",
  "Scaler played a pivotal role in my journey, as the constant guidance I received and the encouragement that was showered on me helped me learn better. The peer community is constructive, and the mentorship arrangement makes it all a fantastic experience.","Tarun Malhotra's System Design classes stood out to me in particular, his way of teaching has made me remember him even after nearly 6 months of completing the course.","The instructors were at the top of their game, and taught us everything on the topic starting from the basics. Both the DSA and System Design classes were top notch!","The mentorship arrangement and the peer culture has helped me evolve as a coder, and I am genuinely grateful for my association with Scaler.",
  "What I like best about the Scaler program is that I can find help very quickly. We have to merely raise a help request, and within ten minutes, we receive assistance. Right from my teaching instructors to my peers at Scaler, I found everyone helpful and approachable.",
  "I wanted some guidance from industry stalwarts, and Scaler's mentorship aspect really surpassed my expectations. Scaler really shines in the field of System Design, which is a must for product companies.",
  "The instructors made us understand tha it's all about learning. The quality of teaching was something I’d never experienced before. Tarun sir’s teaching and methodology has been the most impactful for me.",
  "I had joined Scaler mainly for learning. And the one thing that kept me motivated throughout was seeing the hard work all teachers put, taking classes everyday tirelessly late into the night.",
  "Whether it is for upskilling or for a better opportunity,if you commit to this course, the learnings that you take away are worth a lifetime.",
  "Thank you Scaler Instructors for teaching DS Algo to a front-end guy. When I solved a backtracking question in 10-12 minutes, I had them (interviewers) there.",
  "Even though I only had 6 months experience,Media.net considered me on par with someone with at least 1.5 years. I was able to build this kind of knowledge and understanding with help from Scaler Academy.",
  "Hi Tarun (Scaler instructor) - This is Nikhil from September ‘19 batch. I just wanted to thank you. Your DP, Graph and HLD classes were really helpful, and with all the guidance from Scaler and you, I was able to get offers from Walmart / Groupon / PayTM for SE-3/SDE-2 role. I really wanted to thank you personally, all this was really helpful!",
  "Scaler Academy was an excellent opportunity for me to gain the skills that I needed to make it big in the coding world.",
  "I was expecting mostly DSA, but apart from that, they taught a lot of math, a ton of problem solving, and a lot of other topics. I was really happy to see, since those are often the ones to be overlooked, but are essential parts of a well rounded approach to tech upskilling.",
  "Every aspect of the course was well structured, and gave just what I needed. The instructors taught extremely well, the mentors were helpful and the course was designed keeping every need in mind.",
  "With Scaler Academy, I found the guide that I needed. Their classes helped restore my faith in my passion and made me feel confident about my abilities. The regularity of the classes made me more responsible and sincere in my learning approach.",
  "My experience at Scaler Academy gave me a newfound confidence. Scaler was my guide in this journey, and the data-backed methodology helped me achieve my set goal in the given time. The structure was such that I continually received a push to do better.",
  "The way they taught was the aspect that stood out most to me. Each student was invited to give solutions, and every answer was dissected. No doubt was small enough, and every approach was thought about.",
  "Getting insights from these industry insiders helps you unlock the secret codes to the game, which are guaranteed to make you a winner. Scaler Academy fulfilled my every expectation, and to anyone looking to upskill, I'd definitely recommend it!",
  "The course is structured in a way so that people who have a good grasp of the fundamentals of programming can better themselves in higher level topics, which are commonly asked in tech interviews.",
  "The feedback that we gave in each class was taken seriously, and the instructors improved dynamically in each session. My expectations from Scaler was x, and they delivered 2x. Whatever I thought I would get, Scaler ended up giving me so much more!",
  "Scaler helped me channel my energy properly, revise things I had learned in college, and learn new things too! Their reputation for being educators and enthusiastic supporters of aspirants who dream big made me join the academy."
]