import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../../../public/assets/images/bg-image.png";
import image2 from "../../../public/assets/images/know-us.png";
import image3 from "../../../public/assets/images/email.gif";
import image4 from "../../../public/assets/images/radio-picture.png";
import image5 from "../../../public/assets/images/social-media-picture.png";
import connect from "../../../public/assets/images/connect.gif";
import facebookIcon from "../../../public/assets/images/facebook-icon.png";
import tiktoIcon from "../../../public/assets/images/tiktok-icon.png";
import instagramIcon from "../../../public/assets/images/instagram-icon.png";
import xIcon from "../../../public/assets/images/x.png";
import youtubeIcon from "../../../public/assets/images/youtube-icon.png";
import image6 from "../../../public/assets/images/podcast-picture.png";
import image7 from "../../../public/assets/images/video.png";
import image8 from "../../../public/assets/images/yellow-blog.png";
import image9 from "../../../public/assets/images/person1.jpg";
import image10 from "../../../public/assets/images/person2.jpg";
import icon1 from "../../../public/assets/images/compass.png";
import icon2 from "../../../public/assets/images/bulb.png";
import icon3 from "../../../public/assets/images/checkmark.png";
import icon4 from "../../../public/assets/images/infinity.png";
import Footer from "../../components/Footer/Footer";
import { FaPlay } from "react-icons/fa";
import radio from "../../../public/assets/images/radio.png";
import podcast from "../../../public/assets/images/podcast.png";
import tv from "../../../public/assets/images/tv.png";
import emailIcon from "../../../public/assets/images/email.png";
import vector from "../../../public/assets/images/Vector.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Modal from "react-modal";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Home.css";
import Typed from "typed.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import client from "../../client";
import { PortableText } from "@portabletext/react";

export default function Home() {
  //Blogs
  const [posts, setPosts] = useState([]);

  //Youtube modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //Blogs

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(datePublished desc)[0..3] {
          title,
          slug,
          body,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          },
          datePublished
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  //AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  //Type js
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Get to know us"],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  const al = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(al.current, {
      strings: ["The Yellow Mail"],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const cl = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(cl.current, {
      strings: ["The Jesus Talks Radio"],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const dl = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(dl.current, {
      strings: ["We match faith with modern media"],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  const fl = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(fl.current, {
      strings: ["Faith, God, Life Podcast"],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const pl = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(pl.current, {
      strings: ["The Yellow Blog"],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  //Email
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);

  function closeOverlay() {
    setModal((prev) => !prev);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address!", {
        pauseOnHover: false,
      });
      return;
    }

    // If validation passes
    setEmail("");
    toast.success("We're in your Email. Thank you for subscribing!", {
      pauseOnHover: false,
    });
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div>
      <div className="home-container">
        <div className="background">
          <div className="background-left">
            <div className="left-content">
              <h2 data-aos="fade-right" data-aos-duration="1000">
                We transform how you connect with your audiences.
              </h2>
              <p data-aos="fade-right" data-aos-duration="1500">
                Through our platforms, we provide promotion, marketing, and
                spotlight opportunities for Christian artists, creatives, and
                organizations, helping them share their stories and messages in
                the most impactful and uplifting way.
              </p>
              <button data-aos="fade-right" data-aos-duration="2000">
                <Link className="bg-btn" to="/featured">
                  Get Featured
                </Link>
              </button>
            </div>
          </div>
          <div className="background-right">
            <img
              src="https://res.cloudinary.com/dn4hkronr/image/upload/v1737252487/bg-image_tk7mdu.png"
              alt="background image"
            />
            <div className="right-overlay">
              <div className="right-overlay-content">
                <h2 data-aos="fade-right" data-aos-duration="1000">
                  We transform how you connect with your audiences.
                </h2>
                <p data-aos="fade-right" data-aos-duration="1500">
                  Through our platforms, we provide promotion, marketing, and
                  spotlight opportunities for Christian artists, creatives, and
                  organizations, helping them share their stories and messages
                  in the most impactful and uplifting way.
                </p>
                <button data-aos="fade-right" data-aos-duration="2000">
                  <Link className="bg-btn" to="/featured">
                    Get Featured
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="background-bottom">
          <div className="express">
            <p className="expression-header">Our Expressions</p>
            <Link
              className="express-link"
              to="https://the-jesus-talks-radio.mixlr.com/"
              target="_blank"
            >
              <img src={radio} alt="" />
            </Link>
            <Link
              to="https://youtube.com/@thejesustalksmedia?si=rnmuozJ1pFo3Fszj"
              target="_blank"
              className="express-link"
            >
              <img src={tv} alt="" />
            </Link>
            <Link
              to="https://open.spotify.com/show/7k1np91Bo6cmAjxdDTJwtg?si=9iBm3wdCRn21jy3RsCRGog"
              target="_blank"
              className="express-link"
            >
              <img src={podcast} alt="" />
            </Link>
            <Link
              to='mailto:thejesustalksradio@gmail.com?subject=Your Subject&body=Your message body"'
              className="express-link"
              target="_blank"
            >
              <img src={emailIcon} alt="" />
            </Link>
            <Link
              to="https://theyellowblog.medium.com/"
              target="_blank"
              className="express-link"
            >
              <img src={vector} alt="" />
            </Link>
          </div>
        </div>
        <div className="know-us">
          <div className="know-us-left">
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src="https://res.cloudinary.com/dn4hkronr/image/upload/v1738503276/get-to-know_o4qa74.png"
              alt="image"
            />
          </div>
          <div className="know-us-right">
            <h3>
              <span ref={el} />
            </h3>
            <p data-aos="fade-left" data-aos-duration="1000">
              We are a Christian Media Company driven by a profound vision: to
              anchor individuals deeply in their faith through the
              transformative power of media; and our different expressions.
              
            </p>
            <p data-aos="fade-left" data-aos-duration="2000">
              Through our platform, we offer meaningful media and create a
              community where believers and creatives can explore and express
              their faith in diverse, impactful ways.
            </p>
            <button data-aos="fade-left" data-aos-duration="2500">
              <Link className="bg-btn" to="/about">
                Read more
              </Link>
            </button>
          </div>
        </div>
        <section className="yellow-mail">
          {modal && (
            <div className="overlay-email-input">
              <div className="subscribe">
                {modal && <h3 onClick={closeOverlay}>X</h3>}
                <form onSubmit={handleSubmit}>
                  <div>
                    <label>Subscribe to our Newsletter</label>
                    <br />
                    <input
                      type="email"
                      value={email}
                      placeholder="your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          )}
          <div className="yellow-mail-angel"></div>
          <div className="yellow-mail-content">
            <div
              className="yellow-mail-right"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img
                src="https://res.cloudinary.com/dn4hkronr/image/upload/v1737252487/email_bxuvth.gif"
                alt=""
              />
            </div>
            <div className="yellow-mail-left">
              <h3 data-aos="fade-right" data-aos-duration="1000">
                <span ref={al} />
              </h3>
              <p data-aos="fade-right" data-aos-duration="1500">
                The Yellow Mail is our weekly newsletter that provides
                Christians with edifying written content and brings
                representation to all aspects of their lives.{" "}
              </p>
              <button data-aos="fade-right" data-aos-duration="2000">
                <Link onClick={closeOverlay} className="bg-btn">
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
                  Get exclusive updates about us--from behind-the-scenes
                  insights into our projects to updates on what we’re currently
                  working on and how we bring our ideas to life.
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
                  Explore inspiring conversations and playlists--featuring
                  exclusive interviews with creatives, access to their stories,
                  and curated playlists that reflect their journey.
                </p>
              </div>
            </div>

            <div
              className="yellow-mail-bottom-card"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="yellow-mail-icon">
                <img src={icon4} alt="icon" />
              </div>
              <div className="yellow-mail-text">
                <p>
                  Stay in the loop with Buzz your go to source for first-hand
                  information about events, concerts, new music releases, book
                  launches, Christian films, and all things happening in the
                  Christian creative space.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="radio">
          <div
            className="radio-right"
            data-aos="fade-left"
            data-aos-duration="2500"
          >
            <img
              src="https://res.cloudinary.com/dn4hkronr/image/upload/v1737252504/radio-picture_q8vsef.png"
              alt="image"
            />
          </div>
          <div className="radio-left">
            <h3 data-aos="fade-right" data-aos-duration="1000">
              <span ref={cl} />
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
              <span ref={dl} />
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
            <img src={image5} className="profile-pic" alt="image5" />
          </div>
        </section>

        <section className="youtube">
          <div className="youtube-up">
            <h3 data-aos="fade-up" data-aos-duration="1000">
              Our Youtube
            </h3>
            <p data-aos="fade-right" data-aos-duration="1500">
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
                  to="https://youtube.com/@thejesustalksmedia?si=rnmuozJ1pFo3Fszj"
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
              src="https://res.cloudinary.com/dn4hkronr/image/upload/v1737252511/video_vbtkio.png"
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
                overlay: {
                  width: "80%",
                  height: "90%",
                  margin: " auto",

                  backgroundColor: "white", // Make overlay background transparent
                },
                content: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0,
                  border: "none",
                  width: "80%",
                  height: "80%", // Set height for proper centering
                  margin: "auto", // Center horizontally and vertically
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional shadow for aesthetics
                  borderRadius: "8px", // Optional rounded corners
                },
              }}
            >
              <button
                onClick={closeModal}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "4px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                X
              </button>
              <iframe
                src="https://www.youtube.com/embed/Aaa8POkhn34?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                }}
              ></iframe>
            </Modal>
          </div>
        </section>

        <section className="social-media podcast2">
          <div className="social-media-left">
            <h3 data-aos="fade-right" data-aos-duration="1000">
              <span ref={fl} />
            </h3>
            <p data-aos="fade-right" data-aos-duration="1000">
              Dive into the intersection of Faith,God, and everyday life through
              our enriching podcast.
            </p>
            <div className="social-lists">
              <p data-aos="fade-right" data-aos-duration="1500">
                <img src={icon3} alt="checkmark" />
                Faith-God-life podcast{" "}
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
                target="_blank"
                to="https://open.spotify.com/show/7k1np91Bo6cmAjxdDTJwtg?si=9iBm3wdCRn21jy3RsCRGog"
              >
                Take a listen
              </Link>
            </button>
          </div>
          <div
            className="social-media-right"
            data-aos="fade-left"
            data-aos-duration="2500"
          >
            <img src={image6} alt="image5" />
          </div>
        </section>

        <section className="yellow-blog">
          <h3 data-aos="fade-right" data-aos-duration="1000">
            <span ref={pl} />
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
                src={posts[0]?.mainImage?.asset?.url}
                alt={posts[0]?.title}
                data-aos="fade-right"
                data-aos-duration="2000"
              />
              <h3 data-aos="fade-right" data-aos-duration="2000">
                {posts[0]?.title}
              </h3>
              <PortableText value={[posts[0]?.body?.[0]]} />
              <Link
                className="blog-link"
                to={`/blogs/${posts[0]?.slug?.current}`}
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                Read more
              </Link>
            </div>
            <div className="yellow-blog-right">
              {posts.slice(1, 4).map((post) => (
                <div
                  className="yellow-blog-left right-flex"
                  key={post.slug.current}
                >
                  <img
                    src={post.mainImage?.asset?.url}
                    alt={post.title}
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  />
                  <div>
                    <h3 data-aos="fade-right" data-aos-duration="2000">
                      {post.title}
                    </h3>
                    <PortableText value={post.body?.[0] || []} />
                    <Link
                      className="blog-link"
                      to={`/blogs/${post.slug.current}`}
                      data-aos="fade-left"
                      data-aos-duration="1500"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link to="/blog-posts" className="blog-link see-more">
            See all
          </Link>
        </section>

        <div className="social-platform">
          <img src={connect} alt="" className="connect-bg" />
          <div className="social-platform-icons">
            <Link className="social-icon-link" to="#">
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                src={facebookIcon}
                alt="facebook"
              />
            </Link>
            <Link className="social-icon-link" to="#">
              <img
                data-aos="fade-down"
                data-aos-duration="2000"
                src={tiktoIcon}
                alt="tiktok"
              />
            </Link>
            <Link className="social-icon-link" to="#">
              <img
                data-aos="fade-up"
                data-aos-duration="3000"
                src={instagramIcon}
                alt="instagram"
              />
            </Link>
            <Link className="social-icon-link" to="#">
              <img
                data-aos="fade-down"
                data-aos-duration="4000"
                src={xIcon}
                alt="x"
              />
            </Link>
            <Link
              className="social-icon-link"
              to="https://www.youtube.com/@thejesustalksmedia"
              target="_blank"
            >
              <img
                data-aos="fade-up"
                data-aos-duration="5000"
                src={youtubeIcon}
                alt="youtube"
              />
            </Link>
          </div>
        </div>

        <section className="wots">
          <h3>Word on the street</h3>
          <div className="wots-content">
            <Splide>
              <SplideSlide>
                <div className="splide1">
                  <div className="wots-left">
                    <img
                      src={image9}
                      alt="Tianney"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="wot-text">
                      <p>
                        I loved that the team was proactive I didn’t have to
                        think on their behalf. I simply shared my vision, and
                        they ran with it from start to finish. I was
                        particularly impressed by how much they accomplished
                        with so little.
                      </p>
                      <div className="wot-name">Tianney</div>
                    </div>
                  </div>
                  <div className="wots-right">
                    <img
                      src={image10}
                      alt="Ademola"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="wot-text">
                      <p>
                        The Jesus Talks Media feels like family to me. I’ve
                        admired their passion from day one, and it hasn’t
                        diminished in the slightest—if anything, it’s grown even
                        stronger! Working with them was such a seamless and
                        inspiring experience.
                      </p>
                      <div className="wot-name">Ademola</div>
                    </div>
                  </div>
                </div>
              </SplideSlide>

              {/* <SplideSlide>
                <div className="splide1">
                  <div className="wots-left">
                    <img src={image9} alt="person" />
                    <div className="wot-text">
                      <p>
                        I loved that the team was proactive I didn’t have to
                        think on their behalf. I simply shared my vision, and
                        they ran with it from start to finish. I was
                        particularly impressed by how much they accomplished
                        with so little.
                      </p>
                      <div className="wot-name">Tianney</div>
                    </div>
                  </div>
                  <div className="wots-right">
                    <img src={image10} alt="" />
                    <div className="wot-text">
                      <p>
                        The Jesus Talks Media feels like family to me. I’ve
                        admired their passion from day one, and it hasn’t
                        diminished in the slightest if anything, it’s grown even
                        stronger! Working with them was such a seamless and
                        inspiring experience. I didn’t even have to lay out a
                        vision because they took so much initiative and
                        approached everything with brilliance it left me in awe!
                        I truly love what they’re doing and wholeheartedly
                        believe in it. If you’re not already on board, now’s the
                        time to join the movement. They’re onto something big!
                      </p>
                      <div className="wot-name">Ademola</div>
                    </div>
                  </div>
                </div>
              </SplideSlide> */}

              <SplideSlide>
                <div className="splide1">
                  <div className="wots-left">
                    <img
                      src="https://res.cloudinary.com/dn4hkronr/image/upload/v1738499883/BELIEVERS_BOND_ixoyi3.jpg"
                      alt="person"
                    />
                    <div className="wot-text">
                      <p>
                        Jesus Talks Media excelled in social media and content
                        creation for Believers Bond 2024, effectively engaging
                        the audience and capturing the event's spirit. We look
                        forward to future collaborations.
                      </p>
                      <div className="wot-name">Believers Bond</div>
                    </div>
                  </div>
                  <div className="wots-right">
                    <img
                      src="https://res.cloudinary.com/dn4hkronr/image/upload/v1738499883/THE_BATON_wriovv.jpg"
                      alt=""
                    />
                    <div className="wot-text">
                      <p>
                        The Jesus Talks Media excelled in event media
                        management, providing high-quality videos and engaging
                        content. Their creativity and attention to detail
                        exceeded expectations. Highly recommended for
                        outstanding results.
                      </p>
                      <div className="wot-name">The Baton</div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </section>
        <ToastContainer />
        <Footer />
      </div>
    </div>
  );
}
