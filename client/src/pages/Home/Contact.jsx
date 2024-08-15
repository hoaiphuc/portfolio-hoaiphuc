import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Contact = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;

  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-tertiary">{"{"}</h1>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <h1 className="ml-5">
                  <span className="text-tertiary">{key}: </span>
                  <span className="text-tertiary">{contact[key]}</span>
                </h1>
              )
          )}
          <h1 className="text-tertiary">{"}"}</h1>
        </div>
        <div className="h-[400px]">
          <lottie-player
            src="https://lottie.host/6a792c22-d541-40e8-aae0-a7c4059e1f3e/o1FCM1FI8e.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
