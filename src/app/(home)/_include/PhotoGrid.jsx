import Image from "next/image";
import clsx from "clsx";

import image1 from "@/images/image-1.jpg";
import image2 from "@/images/image-2.jpg";
import image3 from "@/images/image-3.jpg";
import image4 from "@/images/image-4.jpg";
import image5 from "@/images/image-5.jpg";

const IMAGES = [image1, image2, image3, image4, image5];
const ROTATIONS = [
  "rotate-2",
  "-rotate-2",
  "rotate-2",
  "rotate-2",
  "-rotate-2",
];

export function PhotoGrid() {
  return (
    <div className="mt-16 overflow-x-clip sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 py-4 sm:gap-8">
        {IMAGES.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden bg-zinc-100 sm:w-72",
              "transition duration-300 hover:-translate-y-2",
              "rounded-xl shadow-md ring-1 ring-zinc-900/5 sm:rounded-2xl",
              ROTATIONS[imageIndex % ROTATIONS.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
