import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@nextui-org/react";

interface Props {
  show: any;
  close: any;
  data: any;
}

const DetailProject = ({ show, close, data }: Props) => {
  return (
    <Modal
      isOpen={show}
      onClose={close}
      placement="bottom"
      className="max-w-fit"
      backdrop="blur"
      size="5xl"
      scrollBehavior="inside"
    >
      <ModalContent>
        <ModalBody>
          <div className="flex flex-col space-y-2 p-2 md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <Image
                isBlurred
                width={700}
                alt="Relaxing app background"
                className="h-auto max-w-full rounded-lg"
                src={`static/img/project/${data.img}`}
              />
            </div>
            <div className="md:flex-1 px-4">
              <div className="p-5">
                <h2 className="mb-2 text-2xl xl:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.projectname}
                </h2>
                <p className="text-medium text-gray-500 mb-2">{data.type}</p>
                <p className="text-primary text-xs font-bold">
                  <span className="text-gray-900 font-normal">
                    Designed By{" "}
                  </span>
                  Aditya Septama
                </p>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex flex-col space-y-3">
                  <h5 className="text-medium font-bold text-gray-900">
                    Project Description
                  </h5>
                  <p className="text-xs text-gray-500">{data.description}</p>
                  <h5 className="text-medium font-bold text-gray-900">
                    Develope With
                  </h5>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {data.develope.map((devitem: any, key: React.Key) => {
                      return (
                        <div
                          key={key}
                          className="flex items-center p-3 text-base font-medium text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                        >
                          <img
                            src={`/static/img/technology/${devitem.img}`}
                            alt="mobileapps"
                            className="mb-2"
                            width={30}
                            height={30}
                          />
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            {devitem.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" variant="light" onPress={close}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DetailProject;
