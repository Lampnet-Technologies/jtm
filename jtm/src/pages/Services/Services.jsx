import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import FormOverlay from "../../components/formOverlay/FormOverlay";
import "./services.css";
import "aos/dist/aos.css";
import AOS from "aos";
import merchandise from "../../../public/assets/images/merchandise.svg";
import digital from "../../../public/assets/images/digital.svg";
import logo from '../../../public/assets/images/jtm-logo.png'
import img from '../../../public/assets/images/team3.png'
const Services = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

const [isFormOpen, setIsFormOpen] = useState(false);

useEffect(() => {
  if (isFormOpen) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
  return () => document.body.classList.remove("no-scroll");
}, [isFormOpen]);

const handleOpenForm = () => {
  setIsFormOpen(true);
};

const handleCloseForm = () => {
  setIsFormOpen(false);
};

  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728616768/Frame_147_wttcv9.png";
  const AdvertImage =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598022/olgfq6epfbn5j82pdyie.png";
  const consultingImage =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598037/h7lwxwvfhbb3xq2mtako.png";
  const educationImage =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598031/gux3ww8gvq1jhrrz25k2.png";
  const internationalImage =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598041/crmamyichi4cyzbzkmpu.png";
  const eventImage =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728608335/Frame_828_bmfvuw.png";

  return (
    <div className="services">
      {/* Pass the handler to open and close the form */}
      <FormOverlay closeForm={handleCloseForm} isOpen={isFormOpen} />
      <section className="services-container">
        <img src={image} alt="" className="services-img" />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Our services</h1>
            <p>
              We help exist to amplify your message by offering tailored media
              solutions, including promotions, marketing, and storytelling.
            </p>
          </div>
        </div>

        <div className="advertise all-content">
          <img
            src={AdvertImage}
            alt=""
            className="img"
            data-aos="fade-right"
            data-aos-duration="1500"
          />
          <div className="advert-content">
            <h3 data-aos="fade-left" data-aos-duration="1000">
              Advertising and Sponsorship
            </h3>
            <p data-aos="fade-left" data-aos-duration="2000">
              Grow your brand's visibility and reach your target audience
              through our diverse advertising mediums such as our radio, TV,
              podcasts, blogs, newsletters and sponsorship of our shows,
              segments and events{" "}
            </p>
            <div className="buttons">
              <button
                className="service-btn"
                data-aos="fade-left"
                data-aos-duration="2500"
                onClick={handleOpenForm}
              >
                Request service
              </button>
              <div
                className="list-btn-content"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <button className="list-btn">Radio&TV</button>
                <button className="list-btn">Podcast</button>
                <button className="list-btn">Blogs</button>
                <button className="list-btn">Newsletters</button>
                <button className="list-btn">Sponsorships</button>
              </div>
            </div>
          </div>
        </div>

        <div className="consulting  all-content">
          <img
            src={consultingImage}
            alt=""
            className="img"
            data-aos="fade-right"
            data-aos-duration="1500"
          />
          <div className="advert-content">
            <h3 data-aos="fade-left" data-aos-duration="1000">
              Consulting and Training
            </h3>
            <p data-aos="fade-left" data-aos-duration="2000">
              Our consulting and training services are designed for creatives
              and Christian organizations, helping you to elevate your digital
              presence, master content creation, and effectively engage your
              audience.{" "}
            </p>
            <div className="buttons">
              <button
                className="service-btn"
                data-aos="fade-left"
                data-aos-duration="2500"
                onClick={handleOpenForm}
              >
                Request service
              </button>
              <div
                className="list-btn-content"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <button className="list-btn">Social media management</button>
                <button className="list-btn">Content creation</button>
                <button className="list-btn">Audience engagement</button>
              </div>
            </div>
          </div>
        </div>

        <div className="digital grid-2 all-content">
          <img
            src={digital}
            alt=""
            className="img"
            data-aos="fade-left"
            data-aos-duration="1500"
          />
          <div className="advert-content">
            <h3 data-aos="fade-right" data-aos-duration="1000">
              Digital media services
            </h3>
            <p data-aos="fade-right" data-aos-duration="2000">
              Increase your online presence and reach more souls with our
              comprehensive digital media services. We specialize in empowering
              Christian organizations and ministries with cutting-edge digital
              solutions such as SEO optimization, website development, and
              digital marketing campaigns tailored for Christian organizations
              and ministries.{" "}
            </p>
            <div className="buttons">
              <button
                className="service-btn"
                data-aos="fade-right"
                data-aos-duration="2500"
                onClick={handleOpenForm}
              >
                Request service
              </button>
              <div
                className="list-btn-content"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <button className="list-btn">SEO Optimization</button>
                <button className="list-btn">Website development</button>
                <button className="list-btn">Digital marketing campaign</button>
                <button className="list-btn">Interviews</button>
                <button className="list-btn">Social media promotions</button>
              </div>
            </div>
          </div>
        </div>

        <div className="educational grid-2 all-content">
          <img
            src={educationImage}
            alt="image"
            className="img"
            data-aos="fade-left"
            data-aos-duration="1500"
          />
          <div className="advert-content">
            <h3 data-aos="fade-right" data-aos-duration="1000">
              Educational Resources
            </h3>
            <p data-aos="fade-right" data-aos-duration="2000">
              Nurture your faith and foster your spiritual growth with our
              comprehensive collection of Christian educational materials. We
              offer a range of resources designed to deepen understanding,
              encourage devotion, and support spiritual development for
              individuals, groupsright, and churches.{" "}
            </p>
            <div className="buttons">
              <button
                className="service-btn"
                data-aos="fade-right"
                data-aos-duration="2500"
                onClick={handleOpenForm}
              >
                Request service
              </button>
              <div
                className="list-btn-content"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <button className="list-btn">Spiritual events</button>
                <button className="list-btn">Christain resources</button>
              </div>
            </div>
          </div>
        </div>

        <div className="consulting  all-content">
          <img
            src={eventImage}
            alt=""
            className="img"
            data-aos="fade-right"
            data-aos-duration="1500"
          />
          <div className="advert-content">
            <h3 data-aos="fade-left" data-aos-duration="1000">
              Event Coverage
            </h3>
            <p data-aos="fade-left" data-aos-duration="2000">
              Capture the spirit and impact of your Christian events with our
              professional coverage services. From intimate church gatherings to
              large-scale conferences, we bring your events to life for both
              attendees and those unable to be there in person.{" "}
            </p>
            <div className="buttons">
              <button
                className="service-btn"
                data-aos="fade-left"
                data-aos-duration="2500"
                onClick={handleOpenForm}
              >
                Request service
              </button>
              <div
                className="list-btn-content"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <button className="list-btn">Christain events</button>
                <button className="list-btn">Conferences</button>
                <button className="list-btn">Audience engagement</button>
              </div>
            </div>
          </div>
        </div>

        <div className="international  all-content">
          <img
            src={internationalImage}
            alt=""
            className="img"
            data-aos="fade-right"
            data-aos-duration="1500"
          />
          <div className="advert-content">
            <h3 data-aos="fade-left" data-aos-duration="1000">
              International Outreach
            </h3>
            <p data-aos="fade-left" data-aos-duration="2000">
              Expand your ministry's impact across borders and cultures with our
              comprehensive international outreach services. We're dedicated to
              connecting global Christian communities and spreading the Gospel
              worldwide
            </p>
            <div className="buttons">
              <button
                className="service-btn"
                data-aos="fade-left"
                data-aos-duration="2500"
                onClick={handleOpenForm}
              >
                Request service
              </button>
            </div>
          </div>
        </div>

        <div className="merchandise grid-2  all-content">
          <img
            src={merchandise}
            alt=""
            className="img"
            data-aos="fade-left"
            data-aos-duration="1500"
          />
          <div className="advert-content">
            <h3 data-aos="fade-right" data-aos-duration="1000">
              Merchandise and Product Development
            </h3>
            <p data-aos="fade-right" data-aos-duration="2000">
              Spread the message beyond media with our faith-inspired
              merchandise and products. We create high-quality, meaningful items
              that allow believers to express their faith in everyday life and
              support their favorite Christian content creators and artists.
            </p>
            <div className="buttons">
              <button
                className="service-btn"
                data-aos="fade-right"
                data-aos-duration="2500"
                onClick={handleOpenForm}
              >
                Request service
              </button>
            </div>
          </div>
        </div>

        <div className="clients">
          <main className="clients-container">
            <div className='client-header'>
            <h1>We can be trusted, we are sure to deliver</h1>
            <p>Companies and artists we have worked with</p>
            </div>
            <div className="clients-contents">
              <div className="partner">
                <img src={logo} alt="" />
                <h1>Partners</h1>
                <div className="partners-content">
                  <div className="partner-image">
                    <img src={img} alt="" />
                    <h4>Believers Bond</h4>
                  </div>
                  <div className="partner-image">
                    <img src={img} alt="" />
                    <h4>The Baton</h4>
                  </div>
                </div>
              </div>
              <div className="artists">
                <img src={logo} alt="" />
                <h1>Artists</h1>
                <div className="artists-content">
                  <div className="artist-image">
                    <img src={img} alt="" />
                    <h4>Ademola Makinde</h4>
                  </div>
                  <div className="artist-image">
                    <img src={img} alt="" />
                    <h4>Aigbeh D'gang</h4>
                  </div>
                  <div className="artist-image">
                    <img src={img} alt="" />
                    <h4>Angeloh</h4>
                  </div>
                  <div className="artist-image">
                    <img src={img} alt="" />
                    <h4>Tianney</h4>
                  </div>
                  <div className="artist-image">
                    <img src={img} alt="" />
                    <h4>Defayo</h4>
                  </div>
                  <div className="artist-image">
                    <img src={img} alt="" />
                    <h4>B-Praiz</h4>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;




