import React from "react";
import Image from "next/image";
import Link from "next/link";


const BlogCard = ({title, content, image_src}) => {
  return (
    <article className="mx-auto max-w-[350px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm ">
      <Image
        alt="blog_image"
        src={image_src}
        width={56}
        height={56}
        className="h-56 w-full object-cover"
      />
      <div className="p-4 sm:p-6">
        <Link href="#">
          <h3 className="text-lg font-semibold text-[#4A4C70] hover:text-[#fdbe33] duration-150 tracking-wide">
           {title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {content}
        </p>
        <Link
          href="#"
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Find out more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
