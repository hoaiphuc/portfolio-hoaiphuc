import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]">
      <div className="flex gap-5 text-6xl font-semibold sm:text-3xl">
        <h1 className="text-secondary k">P</h1>
        <h1 className="text-white s">H</h1>
        <h1 className="text-tertiary r">N</h1>
      </div>
    </div>
  );
};

export default Loader;
