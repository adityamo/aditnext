import React, { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/react";

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
          <div className="flex flex-col space-y-2 max-w-sm p-6 bg-[url('/static/img/background/header-card.jpg')] bg-cover bg-center bg-no-repeat border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <img
              src="/static/img/technology/nextjs2.png"
              alt="mobileapps"
              className="mb-2"
              width={40}
              height={40}
            />
            <h5 className="text-xl text-slate-800">Next Js</h5>
            <p className="font-normal text-gray-400 text-sm">
              Next Js is support me to create beautiful frontend, this frontend
              framework with react is the base project
            </p>
          </div>
          <div className="flex flex-col space-y-2 max-w-sm p-6 bg-[url('/static/img/background/header-card.jpg')] bg-cover bg-center bg-no-repeat border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <img
              src="/static/img/technology/laravel.png"
              alt="mobileapps"
              className="mb-2"
              width={40}
              height={40}
            />
            <h5 className="text-xl text-slate-800">Laravel</h5>
            <p className="font-normal text-gray-400 text-sm">
              To support our project in backend side we use laravel, why we
              choose laravel cause we expert in php on backend
            </p>
          </div>
          <div className="flex flex-col space-y-2 max-w-sm p-6 bg-[url('/static/img/background/header-card.jpg')] bg-cover bg-center bg-no-repeat border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <img
              src="/static/img/technology/git.png"
              alt="mobileapps"
              className="mb-2"
              width={40}
              height={40}
            />
            <h5 className="text-xl text-slate-800">Git</h5>
            <p className="font-normal text-gray-400 text-sm">
              in Source Control we use git to provide my project, git many help
              me to version control my project
            </p>
          </div>
          <div className="flex flex-col space-y-2 max-w-sm p-6 bg-[url('/static/img/background/header-card.jpg')] bg-cover bg-center bg-no-repeat border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <img
              src="/static/img/technology/sql-server.png"
              alt="mobileapps"
              className="mb-2"
              width={40}
              height={40}
            />
            <h5 className="text-xl text-slate-800">Sql Server</h5>
            <p className="font-normal text-gray-400 text-sm">
              Database section we choose sql server cause in my carrier sql help
              me to support database
            </p>
          </div>
          <div className="flex flex-col space-y-2 max-w-sm p-6 bg-[url('/static/img/background/header-card.jpg')] bg-cover bg-center bg-no-repeat border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <img
              src="/static/img/technology/php.png"
              alt="mobileapps"
              className="mb-2"
              width={40}
              height={40}
            />
            <h5 className="text-xl text-slate-800">PHP</h5>
            <p className="font-normal text-gray-400 text-sm">
              Programing language PHP is so powerfull to help me in backend
              process
            </p>
          </div>
          <div className="flex flex-col space-y-2 max-w-sm p-6 bg-[url('/static/img/background/header-card.jpg')] bg-cover bg-center bg-no-repeat border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <img
              src="/static/img/technology/csharp.png"
              alt="mobileapps"
              className="mb-2"
              width={40}
              height={40}
            />
            <h5 className="text-xl text-slate-800">C-Sharp</h5>
            <p className="font-normal text-gray-400 text-sm">
              Programing language C# help me to create web service
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default DevelopmentTools;
