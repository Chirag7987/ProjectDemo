import { Feature } from "@/types/feature";
import { CardBody, CardContainer, CardItem } from "@/ui/3d-card";

import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            {icon}
          </CardItem>
          <CardItem
            translateZ="60"
            as="h3"
            className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="40"
            className="pr-[10px] text-base font-medium leading-relaxed text-body-color"
          >
            {paragraph}
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default SingleFeature;
