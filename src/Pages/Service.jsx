import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { links } from "../components/Navbar/Mylinks";

const Service = () => {
  const { serviceId } = useParams();
  const serviceLinks = links.find((link) => link.name === "Services");
  const subLinks = serviceLinks.sublinks
    .map((heading) => heading.sublink)
    .flat();
  const service = subLinks.find((link) => link.link === `service/${serviceId}`);
  if (!service) {
    // Page not found
    return null;
  }
  const { name: title, desc: description, image } = service;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="container mx-auto my-10 px-4 py-12"
      style={{ marginBottom: 300 }}
    >
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-w-xl max-h-72 rounded-lg object-cover mb-6"
          style={{ margin: "", borderRadius: 100 }}
        />
        <div className="text-left mt-8 mb-5 ml-3">
          <h1 className="text-3xl underline font-bold mb-10">{title}</h1>
          <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2">
            {description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
