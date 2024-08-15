import React from "react";

const LeftSider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.facebook.com/nguyenphuc1235/">
            <i class="ri-facebook-circle-line text-gray-400"></i>
          </a>
          <a href="mailto:nguyenhoaiphuc3122001@gmail.com">
            <i class="ri-mail-line text-gray-400 "></i>
          </a>
          <a href="https://www.instagram.com/nguyenhoaiphuc31/">
            <i class="ri-instagram-line text-gray-400 "></i>
          </a>
          <a href="https://www.linkedin.com/in/hoaiphuc/">
            <i class="ri-linkedin-box-line text-gray-400 "></i>
          </a>
          <a href="https://github.com/hoaiphuc">
            <i class="ri-github-line text-gray-400 "></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
};

export default LeftSider;
