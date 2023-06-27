import React from "react";
import about from "../assets/about.jpg";

const AboutUsPage = () => {
  return (
    <div className="mt-10 mb-12" style={{ marginBottom: 150 }}>
      <div
        className="container mx-auto px-4 py-12"
        style={{ paddingTop: "10%" }}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src={about}
              alt="Company"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8">
            <h2 className="text-2xl font-bold mb-4">
              Creating Solutions for a Better Tomorrow.
            </h2>

            <p className="text-lg mt-4">
              NanoSolute Services is a dedicated consultancy that specializes in
              delivering innovative solutions for businesses. With our
              experienced team of professionals, we are committed to helping our
              clients thrive and achieve excellence. From process optimization
              and quality control to regulatory compliance and product
              development, we offer tailored expertise across the chemical value
              chain. At NanoSolute Services, we stay ahead of industry trends
              and leverage cutting-edge technologies. Our goal is to identify
              opportunities and provide strategic guidance to drive efficiency
              and maximize growth. With a focus on innovation, we aim to
              overcome challenges and deliver tangible results for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
