import React, { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/react";

const DesignTools = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex gap-4 pt-5 xl:pt-10">
          <CircularProgress color="primary" aria-label="Loading..." />
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col space-y-2 max-w-sm p-6 bg-[url('/static/img/background/header-card.jpg')] bg-cover bg-center bg-no-repeat border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <img
              src="/static/img/technology/photoshop.png"
              alt="mobileapps"
              className="mb-2"
              width={40}
              height={40}
            />
            <h5 className="text-xl text-slate-800">Adobe Photoshop</h5>
            <p className="font-normal text-gray-400 text-sm">
              Adobe Photoshop we use for specialize in photo/image editing and
              effects creation.
            </p>
          </div>
          <div className="flex flex-col space-y-2 max-w-sm p-6 bg-[url('/static/img/background/header-card.jpg')] bg-cover bg-center bg-no-repeat border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <img
              src="/static/img/technology/ilustrator.png"
              alt="mobileapps"
              className="mb-2"
              width={40}
              height={40}
            />
            <h5 className="text-xl text-slate-800">Adobe Illustrator</h5>
            <p className="font-normal text-gray-400 text-sm">
              to create various kinds of works of art, images, illustrations,
              and even social media content
            </p>
          </div>
          <div className="flex flex-col space-y-2 max-w-sm p-6 bg-[url('/static/img/background/header-card.jpg')] bg-cover bg-center bg-no-repeat border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <img
              src="/static/img/technology/figma.png"
              alt="mobileapps"
              className="mb-2"
              width={40}
              height={40}
            />
            <h5 className="text-xl text-slate-800">Figma</h5>
            <p className="font-normal text-gray-400 text-sm">
              Figma we use for create beautiful UI/UX and then prototyping any
              apps before we development.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default DesignTools;
