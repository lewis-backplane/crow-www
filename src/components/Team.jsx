import React from "react";
import Avatar from "./Avatar";

const Team = () => {
  const team = [
    {
      name: "Robert Erenberg-Andersen",
      role: "CEO & Founder",
      photo: "img/avatars/rob.jpg",
      bio: "Award-winning, globally-recognized cybersecurity expert with extensive experience guiding F500 companies through cyber transformations",
    },
    {
      name: "Jerry Becker",
      role: "Chief Operating Officer",
      photo: "img/avatars/jerry.jpg",
      bio: "Red Hat and Booz Allen alumnus specializing in business development, customer engagement, innovation, and transformation",
    },
    {
      name: "Andy Block",
      role: "Chief Technical Officer",
      photo: "img/avatars/andy.jpg",
      bio: "World-renowned cloud technologist and open source maintainer specialising in holistic system design as Red Hat’s Distinguished Architect",
    },

    {
      name: "Kris Kearton",
      role: "Chief Security Officer",
      photo: "img/avatars/kris.jpg",
      bio: "Veteran CIO/CISO with 30+ years of experience, and the former US Navy OIC for Global Cyber Risk",
    },
    {
      name: "Bríd Mackay",
      role: "Chief Experience Officer",
      photo: "img/avatars/brid.jpg",
      bio: "Red Hat’s UX and agile lead, designing and fostering lasting, bespoke enterprise user experiences, brands, and relationships",
    },
  ];
  return (
    <section className="dark:bg-crow-dark w-4/5 mx-auto">
      <div className=" px-4 mx-auto  text-center  lg:px-6">
        <div className="mx-auto mb-8  lg:mb-16">
          <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Built by Leaders in Cybersecurity
          </h2>
          <p className="mt-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            CrowsNest is powered by a team of seasoned cybersecurity
            experts—former CISOs, security architects, and compliance leaders
            from world-class technology companies and global enterprises. With
            decades of hands-on experience, we’ve turned deep industry knowledge
            into a platform designed for clarity, control, and confidence.
          </p>
        </div>
        <div>
          <h2 className="mb-8 text-4xl tracking-tight  text-gray-900 dark:text-white">
            Founders
          </h2>
        </div>
        <div className="mb-16 flex flex-row flex-wrap justify-center mx-auto gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {team.map((member) => (
            <Avatar
              name={member.name}
              role={member.role}
              photo={member.photo}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
