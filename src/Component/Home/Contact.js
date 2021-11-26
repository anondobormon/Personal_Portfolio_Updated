import { EmojiSadIcon } from "@heroicons/react/solid";
import React from "react";

const Contact = () => {
  return (
    <div className="mt-5 md:mt-5 section-border  px-4 py-16 md:px-0">
      <div className="pb-20">
        {" "}
        <p className="text-3xl mt-4 font-bold primary-color">CONTACT ME</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          <div className="rounded text-gray-300 ">
            <h1 className="text-gray-300 my-5 font-bold text-4xl">
              Anondo Bormon
            </h1>
            <p className="my-2 text-xl font-bold">Full Stack Web Developer</p>
            <p className="my-8 text-xl">
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>
            <p className="text-xl">Phone: +880 1790 841023</p>
            <p className="text-xl mb-8">Email: anondonhth27@gmail.com</p>
            <p className="my-4">FIND WITH ME</p>

            <div className="flex">
              <div className="w-12 h-12 mr-4 flex justify-center items-center border rounded">
                <EmojiSadIcon className="w-8" />
              </div>
              <div className="w-12 h-12 mr-4 flex justify-center items-center border rounded">
                <EmojiSadIcon className="w-8" />
              </div>
              <div className="w-12 h-12 mr-4 flex justify-center items-center border rounded">
                <EmojiSadIcon className="w-8" />
              </div>
            </div>
          </div>
          <div className="col-span-2 black-bg rounded">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p className="text-gray-300 font-bold text-lg">YOUR NAME</p>
                  <input
                    type="text"
                    placeholder="ENTER YOUR NAME"
                    className="w-full text-sm my-3 bg-bg font-bold rounded outline-none p-4"
                  />
                </div>
                <div>
                  <p className="text-gray-300 font-bold text-lg">YOUR EMAIL</p>
                  <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    className="w-full text-sm my-3 bg-bg font-bold rounded outline-none p-4"
                  />
                </div>
              </div>
              <div className="my-4">
                <p className="text-gray-300 font-bold text-lg">SUBJECT</p>
                <input
                  type="text"
                  placeholder="SUBJECT"
                  className="w-full text-sm my-3 bg-bg font-bold rounded outline-none p-4"
                />
              </div>
              <div className="my-4">
                <p className="text-gray-300 font-bold text-lg">SUBJECT</p>
                <textarea
                  placeholder="MESSAGE"
                  className="w-full h-40 text-sm my-3 bg-bg font-bold rounded outline-none p-4"
                ></textarea>
              </div>
              <button
                className={`px-5  py-3 font-semibold my-2 mr-6 primary-bg text-base text-gray-300 rounded flex items-center justify-center`}
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
