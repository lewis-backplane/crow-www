import React from "react";

const Testimonial = ({ quote, name, role }) => {
  return (
    <section className=" dark:bg-crow-dark  mb-10">
      <div className="max-w-screen-xl px-4 mx-auto text-center lg:py-8 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <blockquote>
            <p className="text-2xl font-medium text-gray-900 dark:text-white">
              {quote}
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-12 h-12 rounded-full"
              src="img/avatars/rob.jpg"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                {name}
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                {role}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonial;
