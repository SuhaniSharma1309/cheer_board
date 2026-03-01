import CardDemo from "@/components/ui/cards-demo-1";
import React from "react";

const StressRelief = () => {
  return (
    <div className="px-10">
      <h1 className="text-3xl">Stress Relief</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolores
        sit tenetur facere, praesentium adipisci eaque blanditiis hic totam
        voluptatem animi, quas quis accusamus. Ducimus nam aperiam numquam quo
        voluptas!
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <CardDemo />
        {/* https://youtu.be/j88aViUeHew?si=Jd0z6-mrPyrXVm50 */}
        <CardDemo />
        <CardDemo />
        <CardDemo />
      </div>
    </div>
  );
};

export default StressRelief;
