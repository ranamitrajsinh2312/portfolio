export interface Education {
  id: string;
  degree: string;
  institution: string;
  detail: string;
  score: string;
  scoreStyle?: string;
}

export interface Certification {
  id: string;
  icon: string;
  name: string;
  year: string;
}

export const educationData: Education[] = [
  {
    id: "btech",
    degree: "B.Tech — Computer Science Engineering",
    institution: "Darshan University, Rajkot",
    detail: "Currently in 6th Semester",
    score: "CPI: 7.53",
    scoreStyle: "green",
  },
  {
    id: "diploma",
    degree: "Diploma in Computer Engineering",
    institution: "A.V. Parekh Technical Institute, Rajkot",
    detail: "Completed",
    score: "CPI: 7.89",
    scoreStyle: "green",
  },
  {
    id: "ssc",
    degree: "SSC — 10th Standard",
    institution: "G.K. Dholakiya School",
    detail: "Secondary Education",
    score: "88 Percentile",
    scoreStyle: "accent2",
  },
];

export const certificationsData: Certification[] = [
  {
    id: "ds-ml",
    icon: "📊", // 
    name: "Data Science & Machine Learning Internship",
    year: "2024 · Certified",
  },
  {
    id: "design",
    icon: "",
    name: "Graphic Designing — Adobe Photoshop",
    year: "3 Years Experience",
  },
];
