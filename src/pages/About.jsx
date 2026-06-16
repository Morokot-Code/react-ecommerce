import React from "react";

const About = () => {
  return (
    <div className="font-display max-w-[90%] lg:max-w-5xl mx-auto my-20 lg:my-50 ">
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-4">
        <div className="">
          <img className="w-full rounded-lg" src="./about.jpg" alt="about us" />
        </div>
        <div className="">
          <h1 className="text-3xl font-bold mb-2">Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ex accusantium praesentium dicta facilis! Temporibus est vitae fuga
            minima omnis, quibusdam, esse quod officiis non rem sunt sed
            pariatur iste dicta, rerum totam debitis tenetur optio. Modi atque
            illum obcaecati, necessitatibus, ex animi vitae placeat, qui commodi
            saepe cupiditate consectetur quos! Beatae neque aut, atque,
            repellendus placeat veniam blanditiis fugiat sunt corporis ab
            necessitatibus esse ratione molestiae? Eaque laboriosam ratione
            iusto at recusandae temporibus, delectus sint fugiat! Molestias,
            voluptates ratione debitis laboriosam repudiandae hic perspiciatis?
            Vero ullam ducimus saepe vitae, doloremque explicabo officiis,
            nulla, sunt nihil voluptatibus quasi. Nesciunt, exercitationem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
