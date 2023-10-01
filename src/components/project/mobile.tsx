import React, { useState } from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import DetailProject from "../modals/detailproject";

const Mobile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <div className="grid grid-cols-12 gap-5 pt-5 lg:pt-5">
        {siteConfig.project.mobile.map((item: any, key: React.Key) => {
          return (
            <div className="col-span-12 lg:col-span-4" key={key}>
              <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-7"
              >
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src={`static/img/project/${item.img}`}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-primary text-tiny"></p>
                  </div>
                  <Button
                    className="text-tiny text-white"
                    color="primary"
                    radius="full"
                    size="sm"
                    onClick={handleShow}
                  >
                    More Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
      <DetailProject show={show} close={handleClose} />
    </>
  );
};

export default Mobile;
