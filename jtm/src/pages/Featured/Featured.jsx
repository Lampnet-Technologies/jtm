import React, { useState, useEffect } from "react";
import "./Featured.css";
import banner from "../../../public/assets/images/feature-img1.png";
import advertImage from "../../../public/assets/images/feature-img2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Featured() {
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const servicesOptions = [
    "Advertising and Sponsorship",
    "Consulting and Training",
    "Digital Media Services",
    "Educational Resources",
    "Event Management",
    "International Outreach",
    "Merchandise and Product Development",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!email) {
      toast.error("Email is required!");
      return;
    }
    if (!service) {
      toast.error("Please select a service!");
      return;
    }
    if (!message) {
      toast.error("Message cannot be empty!");
      return;
    }

    // If validation passes
    toast.success("Message sent successfully!");

    // Reset form
    setEmail("");
    setService("");
    setMessage("");
  };

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
        "We offer a range of services, including:\n- **Interviews**: We conduct interviews with Christian artists and creatives to share their stories and insights with our audience.\n- **Press Releases**: We create and distribute press releases to help promote your music, events, or announcements.\n- **Music Promotions**: We promote Christian music through our radio shows, playlists, and social media channels to help artists reach a wider audience.\n- **Social Media Promotions**: We provide targeted social media campaigns to increase your visibility and engage with your audience effectively.",
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
      <div className="featured">
        <div className="banner">
          <img src={banner} alt="banner" />
        </div>
        <div className="featured-content">
          <section>
            <h2 className="brand-text">Adverts and Promotions</h2>
            <div className="advert">
              <div className="advert-left">
                <p data-aos="fade-right" data-aos-duration="1000">
                Effective advertising and promotional strategies are essential
                  for capturing your audience’s attention and driving
                  engagement. 
                </p>
                <p data-aos="fade-right" data-aos-duration="1500">
                 We exist to amplify Christian content in
                  mainstream media by bridging the gap between creatives and
                  their audience through our platforms, also known as our
                  expressions. Let’s give your brand the visibility it truly
                  deserves through our diverse expressions. Reach out to us to
                  get started!
                </p>
                <p data-aos="fade-right" data-aos-duration="2000">
                  Reach out to us to give your brand the visibility it truly
                  deserves through our expressions such as - The Jesus talks
                  radio, our youtube, yellow blog, yellow mail and life podcast
                </p>
              </div>
              <div
                className="advert-right"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <img src={advertImage} alt="advert image" />
              </div>
            </div>
          </section>

          <section>
            <div className="message-form">
              <div className="brand-text">Get Featured</div>
              <form className="form" onSubmit={handleSubmit}>
                <div>
                  <label>
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>
                    Services <span>*</span>
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                  >
                    <option value="">Select a service</option>
                    {servicesOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>
                    Message <span>*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
              <ToastContainer />
            </div>
          </section>

          <section>
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
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
