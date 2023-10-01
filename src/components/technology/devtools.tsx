import React, { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/react";
import { siteConfig } from "@/config/site";

const DevelopmentTools = () => {
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
          {siteConfig.developmenttools.map((item: any, key: React.Key) => {
            return (
              <div
                key={key}
                className="flex flex-col space-y-2 max-w-sm p-6 bg-[url('/static/img/background/header-card.jpg')] bg-cover bg-center bg-no-repeat border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  src={`/static/img/technology/${item.img}`}
                  alt="mobileapps"
                  className="mb-2"
                  width={40}
                  height={40}
                />
                <h5 className="text-xl text-slate-800">{item.name}</h5>
                <p className="font-normal text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default DevelopmentTools;
