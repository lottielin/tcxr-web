import { Button } from "bootstrap";

const Pillar = (props) => {
  const pillars = [
    {
      pillarName: "Creating Bias-Free Classrooms",
      pillarValue: [
        { identity: "teacher", value: "teacher1" },
        { identity: "student", value: "student1" },
        { identity: "admin", value: "admin1" },
        { identity: "parent", value: "parent1" },
      ],
    },
    {
      pillarName: "Virtual Reality Education Platform",
      pillarValue: [
        { identity: "teacher", value: "teacher2" },
        { identity: "student", value: "student2" },
        { identity: "admin", value: "admin2" },
        { identity: "parent", value: "parent2" },
      ],
    },
    {
      pillarName: "Real-Time Class Analytics",
      pillarValue: [
        { identity: "teacher", value: "teacher3" },
        { identity: "student", value: "student3" },
        { identity: "admin", value: "admin3" },
        { identity: "parent", value: "parent3" },
      ],
    },
    {
      pillarName: "Student-Instructor Communication",
      pillarValue: [
        { identity: "teacher", value: "teacher4" },
        { identity: "student", value: "student4" },
        { identity: "admin", value: "admin4" },
        { identity: "parent", value: "parent4" },
      ],
    },
  ];

  return <div>Pillars</div>;
};

export default Pillar;
