import { Button } from "bootstrap";

const Pillar = (props) => {
  const pillars = [
    {
      pillarName: "Creating Bias-Free Classrooms",
      pillarValue: [
        { identity: "teacher", value: "teacher1" },
        { identity: "student", value: "student1" },
        { identity: "administrator", value: "admin1" },
        { identity: "parent", value: "parent1" },
      ],
    },
    {
      pillarName: "Virtual Reality Education Platform",
      pillarValue: [
        { identity: "teacher", value: "teacher2" },
        { identity: "student", value: "student2" },
        { identity: "administrator", value: "admin2" },
        { identity: "parent", value: "parent2" },
      ],
    },
    {
      pillarName: "Real-Time Class Analytics",
      pillarValue: [
        { identity: "teacher", value: "teacher3" },
        { identity: "student", value: "student3" },
        { identity: "administrator", value: "admin3" },
        { identity: "parent", value: "parent3" },
      ],
    },
    {
      pillarName: "Student-Instructor Communication",
      pillarValue: [
        { identity: "teacher", value: "teacher4" },
        { identity: "student", value: "student4" },
        { identity: "administrator", value: "admin4" },
        { identity: "parent", value: "parent4" },
      ],
    },
  ];

  return (
    <div>
      {pillars.map((pillar, idx) => {
        return (
          <div className="pillar-container">
            <div className="pillar-title">{pillar.pillarName}</div>
            {pillar.pillarValue.map((val) => {
              return (
                <div className="pillar-info">
                  {val.identity === props.identity ? val.value : ""}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Pillar;
