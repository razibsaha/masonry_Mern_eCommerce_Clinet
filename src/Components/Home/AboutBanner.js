import React from "react";
import AboutUsImage from "../../Assets/Images/aboutUs.jpg";

const AboutBanner = () => {
  return (
    <section className="container mx-auto lg:px-12 mt-12 mb-12">
      <div className="card bg-yellow-50 lg:card-side shadow-xl">
        
          <img className="w-full h-auto" src={AboutUsImage} alt="" />
       
        <div className="card-body">
          <h2 className="card-title text-5xl text-yellow-400">About Us</h2>
          <article className="text-slate-900">
            Masonry work is one of those home improvement skills that few
            homeowners attempt to master. Drywall, electrical, plumbing, and
            painting get most of the do-it-yourself attention, while masonry is
            often hired out to skilled masons.
             <br />
            Yet do-it-yourself masonry work can be highly satisfying and
            creative. And aside from the pleasure of seeing a job well done, one
            of the great things about doing masonry work is that its tools and
            materials are basic, inexpensive, and easy to comprehend. 
            <br />
            As befits a trade that has been in existence since the days of
            ancient Egypt, masonry work uses common items like crushed stone and
            limestone from the earth and simple metal shaping tools. Suppose you
            are interested in do-it-yourself masonry for fireplaces, walls,
            planters, or just about anything that uses brick or stone. In that
            case, you’ll want to invest in a basic set of masonry tools and
            materials.
          </article>
        </div>
      </div>
    </section>
  );
};
export default AboutBanner;
