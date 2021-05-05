import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="p-4 group">
          <div className="">
            <img className="" alt={projects.title} src={projectImage} />
          </div>
          <div className="portfolio-buttons">
            <a className="smoothscroll" href={projects.demo} target="_blank" rel="noreferrer">
              <i className="fa fa-laptop hover:text-white"></i>
            </a>
            <h5 className="text-gray-400 group-hover:text-white">{projects.title}</h5>
            <a className="smoothscroll" href={projects.source} target="_blank" rel="noreferrer">
              <i className="fa fa-github-square hover:text-white"></i>
            </a>
          </div>
        </div>
      );
    });
    var tech = data.skills.map(function (skills) {
      // var className = "bar-expand " + skills.name.toLowerCase();
      var skillImage = "images/icons/" + skills.image;
      return (
        <div key={skills.name} className="p-2 mb-4 group cursor-pointer flex justify-center items-center">
          <div className="bg-gray-300 hover:bg-white rounded-full h-40 w-40 flex justify-center items-center" >
            <a href={skills.url} target="_blank" rel="noreferrer">
              <img className="" alt={skills.name} src={skillImage} height="50px" width="50px" />
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio" className="bg-gray-200">
      <div className="pt-20 ">
        <h1>Projects</h1>
        <div
          className="p-5 my-20 mx-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"
        >
          {/* Images should be (1915 x 965) */}
          {projects}
        </div>
      </div>


      <div className="bg-gray-900">
        <div className="pt-10">
          <h1>Project Technologies</h1>
        </div>
        <div className="p-5 pb-8 my-10 grid grid-cols-4 justify-center">
          {tech}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
