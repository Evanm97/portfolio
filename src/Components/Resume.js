import React from "react";

const Resume = ({ data }) => {
  if (data) {
    // var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
          <br/><br/>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    // var skills = data.skills.map(function (skills) {
    //   var skillImage = "images/icons/" + skills.image;
    //   return (
    //     <div key={skills.name} className="p-2 mb-4 group cursor-pointer">
    //       <div className="">

    //         <img className="" alt={skills.name} src={skillImage} height="50px" width="50px" />
    //         {/* <p className="pl-2">{skills.name}</p> */}

    //       </div>
    //     </div>
    //   );
    // });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work Exp</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      {/* <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="px-5 my-10 grid grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
          {skills}
        </div>
      </div> */}
    </section>
  );
};

export default Resume;