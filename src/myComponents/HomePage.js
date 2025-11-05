import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../skmlogo.png"; // ensure correct logo path


export default function HomePage() {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f9f9f9", // light grey background
        color: "#333", // dark grey text
        overflowX: "hidden",
      }}
    >
      {/* 🌐 Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light py-1 shadow-sm"
        style={{
          backgroundColor: "#ffffff", // white navbar
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={logo}
              alt="FramesBySuraj Logo"
              className="me-2"
              style={{
                height: "100px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              {["Home", "Portfolio", "Contact"].map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    className="nav-link px-3 text-secondary"
                    href={`#${item.toLowerCase()}`}
                    style={{
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* 🌅 Hero Section */}
      <header
        id="home"
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: "80vh",
          backgroundColor: "#f9f9f9",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            animation: "fadeIn 1.8s ease-in-out",
          }}
        >
          <h1 className="fw-bold display-4 mb-3 text-dark">
            Capturing Frames
          </h1>
          <p
            className="lead text-secondary mb-4"
            style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
          >
            Every frame tells a story — a whisper of time that can’t be relived
            but can be remembered forever. Through my lens, I capture emotion,
            not just imagery — the laughter, the silence, and the magic between
            moments. Photography, for me, is about feeling, not seeing. From
            golden sunsets to fleeting glances, I preserve the beauty that
            exists in simplicity. Welcome to my world — where every click is a
            story untold.
          </p>

          <a
            href="#portfolio"
            className="btn fw-semibold px-5 py-2 rounded-pill shadow-sm"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#333";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#000";
            }}
          >
            Explore My Work
          </a>
        </div>
      </header>

      {/* 🎞️ Portfolio Section */}
      <section id="portfolio" className="container py-5">
        <h2 className="text-center fw-bold mb-4 text-dark display-5">
          Our Work
        </h2>
        <p className="text-center text-secondary mb-5">
          A blend of cinematic reels and landscape captures every frame tells a story
        </p>

        <div className="row g-5 justify-content-center">
          {/* 🌄 Landscape Videos */}
          {[
            "https://drive.google.com/file/d/17tvxWuaYpkHxJP4ftpejy3moodATEnih/preview",
            "https://drive.google.com/file/d/1oB_O05Mcj6qfSxih8R9gLkzoSPaAGt3z/preview",
            "https://drive.google.com/file/d/1A-W8rTFuRUW_EFtHrpprAl1J1bu58VS7/preview",
            "https://drive.google.com/file/d/1RxR26eDH4HeUbIg5EggeaMfwwEa9gD5b/preview",
          ].map((src, index) => (
            <div className="col-md-6 col-sm-12" key={`landscape-${index}`}>
              <div
                className="card bg-white border-0 shadow-lg"
                style={{
                  aspectRatio: "16/9",
                  overflow: "hidden",
                  borderRadius: "1rem",
                  transition: "transform 0.3s ease",
                }}
              >


                <iframe
                  src={src}
                  allow="autoplay"
                  className="w-100 h-100 rounded-4"
                  style={{ border: "none", objectFit: "cover" }}
                ></iframe>
              </div>
            </div>
          ))}
          
                    {/* 🎥 Reels */}
          {[
            "https://drive.google.com/file/d/14Myx0ycIHWaZeMqkZf19MZUqTas8aecV/preview",
            "https://drive.google.com/file/d/1gfImg9CGgBNqUnkZUny6IEME8OmQem6j/preview",
            "https://drive.google.com/file/d/1Pqy3sVBUJDPcaEHH6gTR9lcFGlVEJwFU/preview",
          ].map((src, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div
                className="card bg-white border-0 shadow-lg"
                style={{
                  aspectRatio: "9/16",
                  overflow: "hidden",
                  borderRadius: "1rem",
                  transition: "transform 0.3s ease",
                }}
              >
                <iframe
                  src={src}
                  allow="autoplay"
                  className="w-100 h-100 rounded-4"
                  style={{ border: "none", objectFit: "cover" }}
                ></iframe>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ✉️ Contact Section */}
      <section
        id="contact"
        className="py-5 text-center"
        style={{
          background: "#f1f1f1",
          borderTop: "1px solid #ddd",
        }}
      >
        <h2 className="fw-bold mb-3 text-dark">Let’s Connect</h2>
        <p className="text-secondary mb-4">
          Want to collaborate or book a shoot? Reach out to me anytime
        </p>
        <a
          href="https://www.instagram.com/framesbysuraj"
          className="btn btn-dark px-4 py-2 rounded-pill fw-semibold"
        >
          Say Hello
        </a>
      </section>

      {/* 🦶 Footer */}
      <footer
        className="text-center py-4 border-top"
        style={{
          background: "#fff",
        }}
      >
        <p className="mb-0 text-secondary">
          © {new Date().getFullYear()}{" "}
          <span className="fw-semibold text-dark">framesbysuraj</span> — All Rights Reserved
        </p>
      </footer>

      {/* ✨ Simple Fade Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .card:hover {
            transform: scale(1.03);
          }
        `}
      </style>
    </div>
  );
}
