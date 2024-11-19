import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/bg-image.png";
import image2 from "../../assets/images/know-us.png";
import image3 from "../../assets/images/mail-picture.png";
import image4 from "../../assets/images/radio-picture.png";
import image5 from "../../assets/images/social-media-picture.png";
import image6 from "../../assets/images/podcast-picture.png";
import image7 from "../../assets/images/video.png";
import image8 from "../../assets/images/yellow-blog.png";
import image9 from "../../assets/images/person1.png";
import image10 from "../../assets/images/person2.png";
import icon1 from "../../assets/images/yellow-icon1.png";
import icon2 from "../../assets/images/yellow-icon2.png";
import icon3 from "../../assets/images/checkmark.png";
import Footer from "../../components/Footer/Footer";
import { FaPlay } from "react-icons/fa";
import radio from "../../assets/images/radio.png";
import podcast from "../../assets/images/podcast.png";
import tv from "../../assets/images/tv.png";
import vector from "../../assets/images/Vector.png";
import email from "../../assets/images/email.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Modal from "react-modal";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Home.css";

export default function Home() {
  //Youtube modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <div className="home-container">
        <div className="background">
          <div className="background-left">
            <div className="left-content">
              <h2 data-aos="fade-right" data-aos-duration="1000">
                We promote gospel contents
              </h2>
              <p data-aos="fade-right" data-aos-duration="1500">
                We are here to promote your Christian contents through any
                social media of your choice
              </p>
              <button data-aos="fade-right" data-aos-duration="2000">
                <Link className="bg-btn" to="/featured">
                  Get Featured
                </Link>
              </button>
            </div>
          </div>
          <div className="background-right">
            <img src={image} alt="background image" />
          </div>
        </div>
        <div className="background-bottom">
          <div className="express">
            <p>Our Expressions</p>
            <Link
              className="express-link"
              to="https://the-jesus-talks-radio.mixlr.com/"
            >
              <img src={radio} alt="" /> The Jesus Radio
            </Link>
            <Link
              to="http://www.youtube.com/@thejesustalkstv"
              className="express-link"
            >
              <img src={tv} alt="" /> Our Youtube
            </Link>
            <Link className="express-link">
              <img src={podcast} alt="" /> Life Podcast
            </Link>
            <Link
              to='mailto:thejesustalksradio@gmail.com?subject=Your Subject&body=Your message body"'
              className="express-link"
            >
              <img src={email} alt="" /> The Yellow Mail
            </Link>
            <Link
              to="https://theyellowblog.medium.com/"
              className="express-link"
            >
              <img src={vector} alt="" /> The Yellow Blog
            </Link>
          </div>
        </div>
        <div className="know-us">
          <div
            className="know-us-left"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img src={image2} alt="image" />
          </div>
          <div className="know-us-right">
            <h3 data-aos="fade-left" data-aos-duration="1000">
              Get to know us
            </h3>
            <p data-aos="fade-left" data-aos-duration="1500">
              We are a Christian Media Company driven by a profound vision: to
              anchor individuals deeply in their faith through the
              transformative power of media; and our different expressions which
              include: Jesus talks radio, Jesus talks Tv, The yellow blog and
              The yellow email
            </p>
            <p data-aos="fade-left" data-aos-duration="2000">
              We are a Christian Media Company driven by a profound vision: to
              anchor individuals deeply in their faith through the
              transformative power of media; and our different expressions which
              include: Jesus talks radio, Jesus talks Tv, The yellow blog and
              The yellow email
            </p>
            <button data-aos="fade-left" data-aos-duration="2500">
              <Link className="bg-btn" to="https://theyellowblog.medium.com/">
                Read more
              </Link>
            </button>
          </div>
        </div>
        <section className="yellow-mail">
          <div className="yellow-mail-content">
            <div
              className="yellow-mail-right"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img src={image3} alt="image" />
            </div>
            <div className="yellow-mail-left">
              <h3 data-aos="fade-right" data-aos-duration="1000">
                The Yellow Mail
              </h3>
              <p data-aos="fade-right" data-aos-duration="1500">
                The Yellow Mail is our weekly newsletter that provides
                Christians with edifying written content and brings
                representation to all aspects of their lives.{" "}
              </p>
              <button data-aos="fade-right" data-aos-duration="2000">
                <Link className="bg-btn" to="">
                  Subscribe
                </Link>
              </button>
            </div>
          </div>
          <div className="yello-mail-bottom">
            <div
              className="yellow-mail-bottom-card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="yellow-mail-icon">
                <img src={icon2} alt="icon" />
              </div>
              <div className="yellow-mail-text">
                <p>
                  Get the most recent information about our shows, including
                  when they air and how they are planned
                </p>
              </div>
            </div>

            <div
              className="yellow-mail-bottom-card"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="yellow-mail-icon">
                <img src={icon1} alt="icon" />
              </div>
              <div className="yellow-mail-text">
                <p>
                  Discover the juicy "behind the scenes" details from our
                  conversations with the creatives you love
                </p>
              </div>
            </div>

            <div
              className="yellow-mail-bottom-card"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="yellow-mail-icon">
                <img src={icon1} alt="icon" />
              </div>
              <div className="yellow-mail-text">
                <p>
                  Discover the juicy "behind the scenes" details from our
                  conversations with the creatives you love
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="radio">
          <div
            className="radio-right"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src={image4} alt="image" />
          </div>
          <div className="radio-left">
            <h3 data-aos="fade-right" data-aos-duration="1000">
              The Jesus Talks Radio+
            </h3>
            <p data-aos="fade-right" data-aos-duration="1500">
              We spread the gospel of spirit-filled and edifying Jesus music
              through our radio broadcasts.
            </p>
            <p data-aos="fade-right" data-aos-duration="2000">
              Listen to and engage in insightful conversations about
              Christianity, music, and everyday life on our radio shows
            </p>
            <button data-aos="fade-right" data-aos-duration="2500">
              <Link
                className="bg-btn"
                to="https://the-jesus-talks-radio.mixlr.com/"
                target="_blank"
              >
                Listen now
              </Link>
            </button>
          </div>
        </section>
        <section className="social-media">
          <div className="social-media-left">
            <h3 data-aos="fade-right" data-aos-duration="1000">
              We match faith with modern media
            </h3>
            <div className="social-lists">
              <p data-aos="fade-right" data-aos-duration="1500">
                <img src={icon3} alt="checkmark" />
                Interviews
              </p>
              <p data-aos="fade-right" data-aos-duration="2000">
                <img src={icon3} alt="checkmark" />
                Music promotions
              </p>
              <p data-aos="fade-right" data-aos-duration="2500">
                <img src={icon3} alt="checkmark" />
                Press release
              </p>

              <p data-aos="fade-right" data-aos-duration="3000">
                <img src={icon3} alt="checkmark" />
                Social media promotions
              </p>
            </div>
            <button data-aos="fade-right" data-aos-duration="3500">
              <Link className="bg-btn" to="/featured">
                Get featured
              </Link>
            </button>
          </div>
          <div
            className="social-media-right"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src={image5} alt="image5" />
          </div>
        </section>
        <section className="youtube">
          <div className="youtube-up">
            <h3 data-aos="fade-up" data-aos-duration="1000">
              Our Youtube
            </h3>
            <p data-aos="fade-rught" data-aos-duration="1500">
              We are here to see all men rooted deeply in the love and knowledge
              of Christ Jesus by experiencing the message of Christ Jesus
              through our captivatving visual content
            </p>
            <div className="youtube-btn">
              <button
                className="btn1"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <Link
                  to="https://youtu.be/Aaa8POkhn34?si=XchPEAWsX29pWQn3"
                  target="_blank"
                  className="link-btn1"
                >
                  Watch now
                </Link>
              </button>
              <button
                className="btn2"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <Link
                  to="http://www.youtube.com/@thejesustalkstv"
                  target="_blank"
                  className="link-btn2"
                >
                  See all
                </Link>
              </button>
            </div>
          </div>
          <div className="youtube-down">
            <img
              src={image7}
              alt="image"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="play" onClick={openModal}>
              <span className="play-icon">
                <FaPlay />
              </span>
            </div>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Video Modal"
              style={{
                content: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0,
                  border: "none",
                },
              }}
            >
              <button
                onClick={closeModal}
                style={{ position: "absolute", top: "10px", right: "10px" }}
              >
                Close
              </button>
              <iframe
                width="50%"
                height="100%"
                src="https://www.youtube.com/embed/Aaa8POkhn34?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ aspectRatio: "16/9", width: "80%", height: "80%" }}
              ></iframe>
            </Modal>
          </div>
        </section>
        <section className="social-media podcast2">
          <div className="social-media-left">
            <h3 data-aos="fade-right" data-aos-duration="1000">
              Faith, God, Life Pod{" "}
            </h3>
            <p data-aos="fade-right" data-aos-duration="1000">
              Dive into the intersection of Faith,God, and everyday life through
              our enriching podcast.
            </p>
            <div className="social-lists">
              <p data-aos="fade-right" data-aos-duration="1500">
                <img src={icon3} alt="checkmark" />
                Faith Struggles
              </p>
              <p data-aos="fade-right" data-aos-duration="2000">
                <img src={icon3} alt="checkmark" />
                Christian events & highlights
              </p>
              <p data-aos="fade-right" data-aos-duration="2500">
                <img src={icon3} alt="checkmark" />
                Christian songs & playlists
              </p>
            </div>
            <button data-aos="fade-right" data-aos-duration="3000">
              <Link
                className="bg-btn"
                to="https://the-jesus-talks-radio.mixlr.com/"
              >
                Take a listen
              </Link>
            </button>
          </div>
          <div
            className="social-media-right"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src={image6} alt="image5" />
          </div>
        </section>
        <section className="yellow-blog">
          <h3 data-aos="fade-right" data-aos-duration="1000">
            The Yellow Blog
          </h3>
          <p
            className="blog-intro"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Subscribe to our blog where we provide Christians with edifying
            written Christian content that brings representation to all aspects
            of their lives.
          </p>
          <div className="yellow-blog-content">
            <div className="yellow-blog-left">
              <img
                src={image8}
                alt="image"
                data-aos="fade-right"
                data-aos-duration="2000"
              />
              <h3 data-aos="fade-right" data-aos-duration="2000">
                Thriving in a new work place
              </h3>
              <p data-aos="fade-right" data-aos-duration="2500">
                The Jesus Talks Radio is a Christian radio station that
                broadcasts with the goal of bringing men to a deeper
                understanding of Christ Jesus and envisioning all mankind as
                being firmly anchored in Him.
              </p>
            </div>
            <div className="yellow-blog-right">
              <div className="right1">
                <img
                  src={image8}
                  alt="image"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                />
                <div
                  className="right1-text"
                  
                >
                  <h3>The Effect of Christian Music on New Converts</h3>
                  <p data-aos="fade-left" data-aos-duration="1500">
                    The Jesus Talks Radio is a Christian radio station that
                    broadcasts with the goal of bringing men to a deeper
                    understanding of Christ Jesus and envisioning all mankind as
                    being firmly
                  </p>
                  <Link
                    className="blog-link"
                    to="/blog-posts"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    Read more
                  </Link>
                </div>
              </div>
              <div className="right2">
                <img src={image8} alt="image" data-aos="fade-right" />
                <div className="right2-text">
                  <h3 data-aos="fade-left" data-aos-duration="1500">
                    Exploring the Evolution of Contemporary and Alternative
                    Gospel Music
                  </h3>
                  <p data-aos="fade-left" data-aos-duration="1500">
                    The Jesus Talks Radio is a Christian radio station that
                    broadcasts with the goal of bringing men to a deeper
                    understanding of Christ Jesus and envisioning all mankind as
                    being firmly
                  </p>
                  <Link
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    className="blog-link"
                    to="/blog-posts"
                  >
                    Read more
                  </Link>
                </div>
              </div>
              <div className="right3">
                <img src={image8} alt="image" data-aos="fade-right" data-aos-duration="1000" />
                <div className="right3-text">
                  <h3 data-aos="fade-left" data-aos-duration="1500">
                    Aigbeh Dgong’s Upcoming Single ‘Sandalili’{" "}
                  </h3>
                  <p data-aos="fade-left" data-aos-duration="1500">
                    {" "}
                    A Joyful Fusion of Childhood Memories and Divine Love The
                    Jesus Talks Radio is a Christian radio station that
                    broadcasts with the goal of bringing men to a deeper
                    understanding of Christ Jesus and envisioning all mankind as
                    being firmly
                  </p>
                  <Link
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    className="blog-link"
                    to="/blog-posts"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link to="/blog-posts" className="blog-link see-more">
            See all
          </Link>
        </section>
        <section className="wots">
          <h3>Word on the street</h3>
          <div className="wots-content">
            <Splide>
              <SplideSlide>
                <div className="splide1">
                  <div className="wots-left">
                    <img src={image9} alt="person" />
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to{" "}
                    </p>
                  </div>
                  <div className="wots-right">
                    <img src={image10} alt="" />
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="splide1">
                  <div className="wots-left">
                    <img src={image9} alt="person" />
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to{" "}
                    </p>
                  </div>
                  <div className="wots-right">
                    <img src={image10} alt="" />
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="splide1">
                  <div className="wots-left">
                    <img src={image9} alt="person" />
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to{" "}
                    </p>
                  </div>
                  <div className="wots-right">
                    <img src={image10} alt="" />
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to
                    </p>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
