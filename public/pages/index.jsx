import { useEffect } from "react";

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;
    script.crossOrigin = "anonymous";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default function Home() {
  useScript("https://kit.fontawesome.com/09a12c3116.js");
  useScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js");
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sou's Portfolio</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Comfortaa"
        crossOrigin="anonymous"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t#projpins {\n\t\t\tdisplay: block;\n\t\t}\n\n\t\t#moreprojmobile {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t@media screen and (max-width: 768px) {\n\t\t\t#projpins {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t}\n\n\t\t/* Styles the scroll bar */\n\t\tbody::-webkit-scrollbar {\n\t\t\twidth: 0.7em;\n\t\t}\n\n\t\tbody::-webkit-scrollbar-track {\n\t\t\tbox-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n\t\t}\n\n\t\tbody::-webkit-scrollbar-thumb {\n\t\t\tbackground-color: #686161;\n\t\t\toutline: 1px solid slategrey;\n\t\t}\n\n\t\t/* Style the links inside the navigation bar */\n\t\t.nav-itemcss a {\n\t\t\tfloat: left;\n\t\t\tcolor: #f2f2f2;\n\t\t\ttext-align: center;\n\t\t\tpadding: 14px 16px;\n\t\t\ttext-decoration: none;\n\t\t\tfont-size: 17px;\n\t\t\tborder-radius: 15px;\n\t\t}\n\n\t\t/* Change the color of links on hover */\n\t\t.nav-itemcss a:hover {\n\t\t\tcolor: black;\n\t\t}\n\n\t\t/* Changes font */\n\t\tbody {\n\t\t\tbackground-image: url(bg.jpg);\n\t\t\tfont-family: Comfortaa;\n\t\t}\n\n\t\t/* Changes text color */\n\t\t.text-title {\n\t\t\tcolor: #686161;\n\t\t}\n\n\t\t.text-par {\n\t\t\tcolor: black;\n\t\t}\n\n\t\t.center {\n\t\t\tdisplay: grid;\n\t\t\tplace-items: center;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t#goals {\n\t\t\ttext-align: left;\n\t\t}\n\t",
        }}
      />
      <div>
        <nav
          className="topnav navbar navbar-dark fixed-top"
          style={{ backgroundColor: "#333" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="icon.svg"
                alt=""
                width={30}
                height={24}
                className="d-inline-block align-text-top"
              />
              Sou's Portfolio
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item nav-itemcss">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i className="fas fa-home" />
                    Home
                  </a>
                </li>
                <li className="nav-item nav-itemcss">
                  <a className="nav-link" href="#projects">
                    <i className="fas fa-code" />
                    Projects
                  </a>
                </li>
                <li className="nav-item nav-itemcss">
                  <a className="nav-link" href="#goals">
                    <i className="fas fa-bullseye" />
                    Goals
                  </a>
                </li>
                {/* <li class="nav-item nav-itemcss">
            <a class="nav-link" href="#contact">Contact</a>
            </li> */}
                <li className="nav-item nav-itemcss">
                  <a className="nav-link" href="#about">
                    <i className="fas fa-question-circle" />
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="pastnav">
          <div className="center">
            <br />
            <br />
            <i className="fas fa-home fa-10x" />
            <h1 className="text-center text-title">Home</h1>
            <p className="text-center text-par">
              Welcome to 
              <a
                className="text-decoration-none"
                href="https://github.com/soupCodez"
              >
                @soupCodez on Github
              </a>
              's portfolio
            </p>
          </div>
          <div id="projects" className="center">
            <i className="fas fa-code fa-10x" />
            <h1 className="text-center text-title">Projects</h1>
            <p id="projpins">
              <a href="https://github.com/soupCodez/generator-discord.js_ts">
                <img
                  src="https://github-readme-stats.vercel.app/api/pin/?username=soupCodez&repo=generator-discord.js_ts"
                  alt="generator-discord.js_ts"
                />
              </a>
              <a href="https://github.com/soupCodez/soupcodez.github.io">
                <img
                  src="https://github-readme-stats.vercel.app/api/pin/?username=soupCodez&repo=soupcodez.github.io"
                  alt="My Porfolio"
                />
              </a>
            </p>
            <p id="moreprojmobile">
              View all projects at my
              <a
                className="text-decoration-none"
                href="https://github.com/soupCodez?tab=repositories"
              >
                Github
              </a>
            </p>
            <p id="moreproj">
              View all projects at my
              <a
                className="text-decoration-none"
                href="https://github.com/soupCodez?tab=repositories"
              >
                Github
              </a>
            </p>
          </div>
          <div id="goals" className="center">
            <i className="fas fa-bullseye fa-10x" />
            <h1 className="text-title">Goals</h1>
            <p className="text-par">In 2021 I want too...</p>
            <ul>
              <li>
                <a className="text-decoration-none" href="https://reactjs.org/">
                  React
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none"
                  href="https://reactnative.dev/"
                >
                  React Native
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="https://deno.land/">
                  Deno
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none"
                  href="https://www.typescriptlang.org/"
                >
                  TypeScript
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none"
                  href="https://www.mysql.com/"
                >
                  MySQL
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none"
                  href="https://www.mongodb.com/"
                >
                  MongoDB
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none"
                  href="https://flask.palletsprojects.com/"
                >
                  Flask (Python)
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none"
                  href="https://expressjs.com/"
                >
                  ExpressJS
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none"
                  href="https://kotlinlang.org/"
                >
                  Kotlin
                </a>
              </li>
              <li>
                <a className="text-decoration-none">SVG</a>
              </li>
              <li>
                <a
                  className="text-decoration-none"
                  href="https://github.com/features/actions"
                >
                  GitHub Actions
                </a>
              </li>
            </ul>
            <p />
          </div>
          <div id="about" className="center">
            <i className="fas fa-question-circle fa-10x" />
            <h1 className="text-title">About</h1>
            <p className="text-par text-decoration-none">
              I'm a person that programs in their free time
              <br />
              <br />
              Background image by 
              <a
                className="text-decoration-none"
                href="https://unsplash.com/@christianperner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >
                Christian Perner 
              </a>
              on 
              <a
                className="text-decoration-none"
                href="https://unsplash.com/s/photos/white-wallpaper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >
                Unsplash 
              </a>
            </p>
          </div>
          {/* <div id="contact" class="center"></div> */}
        </div>
      </div>
    </div>
  );
}
