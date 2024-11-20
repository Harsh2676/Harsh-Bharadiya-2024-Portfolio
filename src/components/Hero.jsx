import { Icon } from "@iconify/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import SocialBtns from "./SocialBtns";
import "./Css/Hero.css";

export default function Hero({ data, socialData }) {
  const { imgUrl, name, heading, typingText, description, btnText, btnUrl } =
    data;

  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <section className="home-section" id="home" data-scroll-index={0}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hs-text-box">
              <h6 data-aos="fade-up" data-aos-duration="1200">
                {/* <span>Harsh</span> */}
                <span>{name}</span>
              </h6>

              <h1
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                {heading}
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <TypeAnimation
                  sequence={typingText}
                  speed={0}
                  repeat={Infinity}
                />
              </h2>
              <p
                className="text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                {description}
              </p>
              <div
                className="btn-bar d-flex align-items-sm-center flex-column flex-sm-row"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <a
                  href={btnUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="px-btn"
                >
                  <span>{btnText}</span>{" "}
                  <i className="d-flex">
                    <Icon icon="bi:arrow-right" />
                  </i>
                </a>
                <SocialBtns
                  socialBtns={socialData}
                  variant="ps-sm-4 pt-4 pt-sm-0 d-flex justify-content-center justify-content-sm-start"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hs-banner">
              <img src={imgUrl} title alt="Admin" />
            </div>
          </div>
        </div>
      </div>
      {/* <div class="scroller" data-speed="slow">
        <ul class="tag-list scroller__inner">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>React JS</li>
          <li>MongoDB</li>
          <li>C / C++</li>
          <li>Python</li>
          <li>Node Js</li>
          <li>API's</li>
          <li>Express JS</li>
        </ul>
      </div> */}
    </section>
  );
}
