import DataverseInsights from "../assets/DataverseInsights.gif";
import { FaLink } from "react-icons/fa6";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export const WorkExperience = () => {
  return (
    <>
        <p className="mt-2 text-base md:text-lg text-center" data-aos="fade-up">
            Remote Internship👇🏻
        </p>
        <div className="grid md:grid-cols-1 md:gap-x-14 gap-y-10 mx-14 md:mx-80 py-10 text-[#0C0C0C]">
            <div className="works-container " data-aos="fade-up">
                <img
                    src={DataverseInsights}
                    alt="CodeWhisper-img"
                    className="mb-4 rounded-md rounded-b-none w-full object-center object-cover"
                />
                <div>
                    <div className="flex justify-between items-center px-2 mb-1 pl-6">
                        <h1 className="text-base md:text-lg font-extrabold">
                            Dataverse Insights
                        </h1>
                        <p className="text-base italic pr-6">
                            Full Stack Developer Intern
                        </p>
                    </div>
                    <p className="mb-3 px-2 text-sm md:text-base">
                        <p className="list-disc pl-4">
                            <p className="text-justify pr-6">
                                Designed APIs to integrate PayPal payment gateway. Also, worked on creating a dynamic and intuitive user 
                                interface for the same with React.
                            </p>
                            <p className="text-justify pr-6">
                                Developed multiple APIs to handle 20,000 user records in the admin panel and handle 2,000 monthly active users 
                                efficiently.
                            </p>
                            <p className="text-justify pr-6">
                                Managed website production environments and updates on Hostinger VPS using Ubuntu Linux.
                            </p>
                        </p>
                    </p>
                    <span className="flex flex-wrap gap-2 px-6">
                    <p className="works-pill">React</p>
                    <p className="works-pill">JavaScript</p>
                    <p className="works-pill">MongoDB</p>
                    <p className="works-pill">NodeJs</p>
                    <p className="works-pill">ExpressJs</p>
                    <p className="works-pill">Ubuntu</p>
                    <p className="works-pill">Hostinger VPS</p>
                    </span>
                </div>
                <span className="mt-3 mx-2 pt-2 border-t border-[#0C0C0C] flex items-center justify-between">
                    <Link to="https://dataverseinsights.com/">
                    <FaLink className="text-lg" />
                    </Link>
                </span>
            </div>
        </div>
    </>
  );
};