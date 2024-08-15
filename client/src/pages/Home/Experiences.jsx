import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  return (
    <div>
      <SectionTitle title="Experiences" />
      {console.log(portfolioData)}
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-5 border-l-2 border-[#135e4c] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                    : "text-white"
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-2xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-2xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            itaque temporibus nobis aliquid unde nisi quas recusandae, maiores
            assumenda aperiam cupiditate a quod voluptatibus eum. Suscipit
            consequatur ut tenetur harum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
