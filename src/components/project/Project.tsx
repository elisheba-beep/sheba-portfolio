import React from "react";
import "./Project.css";

interface ProjectProps{
    imageOne:string | undefined
    imageTwo:string | undefined
    imageThree:string | undefined
    projectName: string
    developmentTool: "FLUTTER" | "REACT NATIVE"
    projectDescription: string
}


export default function Project({imageOne, imageTwo, imageThree, projectName, developmentTool, projectDescription}:ProjectProps) {
  return (
    <div className="projectContainer">
      <div className="projectLeft">
        <h1 className="projectTitle">{projectName}</h1>
        <p>{developmentTool}</p>
        <p className="projectDescription">
          {projectDescription}
        </p>
      </div>
      <div className="projectRight">
<div>
<img src={imageOne} className="projectImage" alt="project image" />
<img src={imageTwo} className="projectImageAbsolute" alt="project image" />

</div>
<div>
<img src={imageThree} className="projectImage" alt="project image" />

</div>
      </div>
    </div>
  );
}
