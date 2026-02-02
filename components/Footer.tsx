"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer">

      {/* Background */}
      <div
        className="footer_bg-image"
        style={{ backgroundImage: "url('/images/background/footer-bg.jpg')" }}
      />

      <div className="auto-container">
        <div className="inner-container">
          <div className="widgets-section">
            <div className="row clearfix footer-row">

              {/* LEFT COLUMN */}
              <div className="big-column col-lg-5 col-md-12 col-sm-12">
                <div className="row clearfix">

                  {/* LOGO + ADDRESS */}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget logo-widget">
                      <div className="footer-logo">
                        <img src="/images/footer-logo.svg" alt="Footer Logo" />
                      </div>

                      <ul className="footer_list">
                        <li>58 Howard Street #2 cairo.<br />CA 941</li>
                        <li>(+88)311-2121101</li>
                      </ul>

                      <div className="footer_socials">
                        {[1, 2, 3, 4].map((i) => (
                          <a key={i} href="#">
                            <span />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* LINKS */}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4 className="footer-title">Links</h4>
                      <ul className="footer-list">
                        <li><Link href="/about">About us</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/courses">Courses</Link></li>
                        <li><Link href="/blog">Latest News</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="big-column col-lg-7 col-md-12 col-sm-12">
                <div className="row clearfix">

                  {/* OTHER LINKS */}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4 className="footer-title">Other Link</h4>
                      <ul className="footer-list">
                        <li><a href="#">Online Courses</a></li>
                        <li><a href="#">Audio Listening</a></li>
                        <li><a href="#">Sehri & Iftar</a></li>
                        <li><a href="#">Our Events</a></li>
                        <li><a href="#">Quran Hifz Classes</a></li>
                      </ul>
                    </div>
                  </div>

                  {/* NEWSLETTER */}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget newsletter-widget">
                      <h4 className="footer-title">Newsletter</h4>
                      <div className="footer-text">
                        Waiting for your message is not your important time
                      </div>

                      <div className="newsletter-box">
                        <form>
                          <div className="newsletter-line">
                            <input type="email" placeholder="Email Address" />
                            <button type="submit">
                              <span className="square-icon" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div
          className="footer_bottom-bg"
          style={{ backgroundImage: "url('/images/background/footer-bg_2.jpg')" }}
        />

        <div className="auto-container">
          <div className="footer-bottom-inner">
            <div className="copyright">
              All rights reserved 2025 © template_mr
            </div>

            <ul className="footer-nav">
              <li><Link href="/terms">Terms of use</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
}
