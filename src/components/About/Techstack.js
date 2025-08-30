import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiFirebase,
  SiTypescript,
  SiRedux,
  SiJest,
} from "react-icons/si";
import {
  FaBrain,
  FaTools,
} from "react-icons/fa";

function Techstack() {
  const skills = [
    { icon: <DiReact />, name: "React" },
    { 
      icon: (
        <img 
          src="https://reactnative.dev/img/header_logo.svg" 
          alt="React Native" 
          width={50} 
          height={50} 
        />
      ), 
      name: "ReactNative" 
    },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiHtml5 />, name: "HTML5" },
    { icon: <DiCss3 />, name: "CSS3" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiJest />, name: "Jest" },
    { icon: <FaTools />, name: "CI/CD" },
    { icon: <FaBrain />, name: "Problem Solving" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col xs={6} md={3} lg={2} className="tech-icons" key={index} style={{ textAlign: "center", marginBottom: "30px" }}>
          {skill.icon}
          <div style={{ fontSize: "0.5em", fontWeight: "500", color: "#c770f0" }}>
            {skill.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
