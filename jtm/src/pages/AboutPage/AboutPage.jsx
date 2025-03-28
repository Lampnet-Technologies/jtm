import React, { useState, useEffect } from "react";
import "./AboutPage.css";
import team3 from "../../../public/assets/images/team3.png";
import icon from "../../../public/assets/images/Linkedin.png";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import hrImg from "../../../public/assets/images/hr.svg";
import haddy from "../../../public/assets/images/haddy.svg";
import "aos/dist/aos.css";
import AOS from "aos";

export default function AboutPage() {
  //Table
  const renderTable = () => {
    const rows = 8;
    const columns = 5;

    return (
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "white", color: "black" }}>
            <th style={{ padding: "10px" }}>Shows</th>
            <th style={{ padding: "10px" }}>Description</th>
            <th style={{ padding: "10px" }}>Day</th>
            <th style={{ padding: "10px" }}>Time</th>
            <th style={{ padding: "10px" }}>Host</th>
          </tr>
        </thead>
        <tbody>
          {showsData.map((show, index) => (
            <tr key={index}>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  backgroundColor: "#FABC52",
                  color: "black",
                }}
              >
                {show.title}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {show.description}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {show.day}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {show.time}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {show.host}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  //Table Data
  const showsData = [
    {
      title: "Artist Focus",
      description:
        "Gives insights into Christian artists' lives, crafts, and journeys as Christian creatives. Saturdays",
      day: "Saturdays",
      time: "4pm",
      host: "-",
    },
    {
      title: "Faith Struggles",
      description:
        "Open and transparent conversations about the struggles Christians face in our faith walk.",
      day: "Sundays",
      time: "7pm",
      host: "-",
    },
    {
      title: "Gospel Buzz",
      description:
        "Discusses Christian events, highlights, and happenings within God’s kingdom and among His people",
      day: "Mondays",
      time: "7pm",
      host: "-",
    },
    {
      title: "Gospel Chill",
      description:
        "Interviews/conversations with creatives, ministers, and Christians, showcasing their crafts and bits of their lives",
      day: "Tuesdays",
      time: "6pm",
      host: "-",
    },
    {
      title: "Gospel Countdown",
      description:
        "Countdown to the top charting gospel tunes around the globe",
      day: "Fridays",
      time: "6pm",
      host: "-",
    },
    {
      title: "Gospel Request",
      description:
        "Listeners can request and listen to songs from their faves and give shout-outs to loved ones.",
      day: "Wednesdays",
      time: "6pm",
      host: "-",
    },
    {
      title: "Intimacy on TJTR",
      description:
        "Enjoy a quiet time with songs that stir you to pray and worship. Providing a consciousness of Fellowship with God.",
      day: "Thursdays",
      time: "10pm",
      host: "-",
    },
    {
      title: "Playlist Saturday",
      description:
        "Select and play Christian songs from playlists curated and sent in by the listeners.",
      day: "Saturdays",
      time: "9PM",
      host: "-",
    },
  ];

  // FAQ
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who is The Jesus Talks Media?",
      answer:
        "The Jesus Talks Media is a Christian Media Company driven by a profound vision: to anchor individuals deeply in their faith through the transformative power of media. Founded during the pandemic, our mission is to provide a platform for believers to immerse themselves in uplifting, inspiring, and clean Christian media content anytime.",
    },
    {
      question: "What services does The Jesus Talks Media offer?",
      answer:
        "We offer a range of services, including:\n- Interviews: We conduct interviews with Christian artists and creatives to share their stories and insights with our audience.\n- Press Releases: We create and distribute press releases to help promote your music, events, or announcements.\n- Music Promotions: We promote Christian music through our radio shows, playlists, and social media channels to help artists reach a wider audience.\n- Social Media Promotions: We provide targeted social media campaigns to increase your visibility and engage with your audience effectively.",
    },
    {
      question: "How can I get my project featured on The Jesus Talks Media? ",
      answer: "To have your work featured, you can reach out to us through our contact form or email. Please include a brief introduction, links to your project, and any relevant information. Our team will review your submission and get back to you with the next steps."
    },
    {
      question: " Can I request an interview on The Jesus Talks Media?",
      answer:
        "Absolutely! If you're a Christian artist, creative, or leader interested in sharing your story, you can request an interview by contacting us. We love to feature inspiring stories and insights that align with our mission.",
    },
    {
      question: "  What is included in your music promotion services?",
      answer:
        "Our music promotion services include radio play, inclusion in our curated playlists, social media promotion, and press releases. We tailor our approach to fit your needs and help you reach your target audience effectively.",
    },
    {
      question: " How can I promote my event through The Jesus Talks Radio?",
      answer:
        "You can promote your event through our press release and social media promotion services. We’ll help you craft a compelling press release and distribute it across our platforms, ensuring your event reaches the right audience.",
    },
    {
      question: " How do your social media promotion services work?",
      answer:
        "Our social media promotion services involve creating and executing targeted campaigns across platforms like Instagram, Facebook, X (formerly Twitter), and more. We help increase your visibility, engage with your audience, and drive results that matter to your goals.",
    },
    {
      question: " What is the “Faith-God-Life Podcast”?",
      answer:
        "The “Faith-God-Life Podcast” is an evolution of our original radio show, TJTRSeries. It offers listeners Bible study conversations, discussions on faith, and insights into living a God-centered life. The podcast is one of the many ways we connect with our audience and provide valuable content.",
    },
    {
      question: " How can I stay updated with The Jesus Talks Media?",
      answer:
        "You can stay updated by following us on our social media channels, subscribing to our newsletter, YouTube channel, and tuning into our radio shows and podcasts. We regularly share new content, updates, and promotions to keep you connected with our community.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  //AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <div className="about">
        <div className="about-banner">
          <img
            src="https://res.cloudinary.com/dn4hkronr/image/upload/v1737252515/about_zgyh6d.png"
            alt="banner"
          />
          <div className="banner-overlay">
            <div className="banner-header">
              <h2 data-aos="zoom-in" data-aos-duration="1000">
                About Us
              </h2>
              <p data-aos="zoom-in" data-aos-duration="1500">
                We exist to bridge the gap between Christian content and broader
                audiences, fostering creativity and faith in every project we
                undertake.
              </p>
            </div>
          </div>
        </div>
        <div className="about-sections">
          <div className="about-section1">
            <div className="section-left">
              <h3 data-aos="fade-right" data-aos-duration="1000">
                About Us
              </h3>
              <p data-aos="fade-right" data-aos-duration="1500">
                We are a Christian Media Company driven by a profound vision: to
                anchor individuals deeply in their faith through the
                transformative power of media. At the core of our mission lies
                our unwavering commitment to people.
              </p>
              <p data-aos="fade-right" data-aos-duration="2000">
                {" "}
                We aspire to make a meaningful impact on lives by delivering
                edifying Christian content. Join us on this faith-filled journey
                as we use the power of media to deepen connections with Christ
                and positively impact lives.
              </p>
            </div>
            <div
              className="section-right"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img
                src="https://res.cloudinary.com/dn4hkronr/image/upload/v1737252513/about1_vicoma.png"
                alt=""
              />
            </div>
          </div>

          <div className="about-section1">
            <div
              className="section-left"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 data-aos="fade-right" data-aos-duration="1000">
                Our Mission
              </h3>
              <p data-aos="fade-right" data-aos-duration="1500">
                To impact people’s lives by delivering edifying Christian
                content - through media. 
              </p>
            </div>
            <div
              className="section-right"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img
                src="https://res.cloudinary.com/dn4hkronr/image/upload/v1737252514/about2_ks8pq1.png"
                alt=""
              />
            </div>
          </div>
          <div className="about-section1">
            <div
              className="section-left"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 data-aos="fade-right" data-aos-duration="1000">
                Our Vision
              </h3>
              <p data-aos="fade-right" data-aos-duration="1500">
                To see all men come to know Christ Jesus by using media to share
                the Gospel
              </p>
            </div>
            <div
              className="section-right"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img
                src="https://res.cloudinary.com/dn4hkronr/image/upload/v1737252517/about3_xml1xx.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="programs">
          <h2>Our shows and programmes</h2>
          <div className="programs-table">{renderTable()}</div>
        </div>
        <div className="team">
          <h3 data-aos="fade-down" data-aos-duration="1000">
            Meet the team unlocking new possibilities for the promotion of
            gospel contents
          </h3>
          <div className="team-card">
            <div
              className="card1"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <div className="team-img-container">
                <img className="team-img" src={hrImg} alt="" />
              </div>
              <div className="card1-content">
                <div className="card1-text">
                  <p>OMOLADE ADEKANLE</p>
                  <p>HR</p>
                  <p className="positions">hr@thejtm.com.ng</p>
                </div>
                <div className="card1-icon">
                  <Link to="">
                    {" "}
                    <img src={icon} alt="" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="card1" data-aos="fade-up" data-aos-duration="3000">
              <div className="team-img-container">
                <img className="team-img" src={haddy} alt="" />
              </div>
              <div className="card1-content">
                <div className="card1-text">
                  <p>Haddy Onyemaka </p>
                  <p>Creative Director</p>
                  <p className="positions">
                  @thejtm.com.ng
                  </p>
                </div>
                <div className="card1-icon">
                  <Link to="">
                    <img src={icon} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="faq">
          <div className="faq-container">
            <p className="brand-text">Frequently Asked Questions</p>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div
                  className="faq-question"
                  onClick={() => toggleAnswer(index)}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <FaChevronUp className="chevron-icon" />
                  ) : (
                    <FaChevronDown className="chevron-icon" />
                  )}
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <hr />
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
