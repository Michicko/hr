import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Section from "./components/Section/Section";
import { brands, features, services } from "./data";
import ArrowUp from "./assets/arrow-up-right.svg?react";

function App() {
  return (
    <>
      <Nav />
      <header className="header" id="home">
        <Section
          heading={
            <h1>
              Streamline your HR processes <span>with Hr.</span>
            </h1>
          }
          text={
            <p>
              A comprehensive solution to manage your workforce, support rapid
              hiring and enhance interview experiences.
            </p>
          }
          button={<Button text="Get started" />}
          src="dashboard.png"
          alt="hr dashboard"
        />
        <p className="lead">
          Trusted by some of the biggest companies in the world.
        </p>
        <div className="brands">
          {brands.map((brand, i) => {
            return (
              <img
                src={brand.image}
                alt={brand.name}
                key={(i + 1) * 2 + i}
                className="brand-img"
              />
            );
          })}
        </div>
      </header>
      <Section
        id="features"
        padded={true}
        heading={<h2 className="secondary-heading">Features</h2>}
        text={
          <p>
            Discover our innovative features crafted to elevate your user
            journey and exceed your expectations.
          </p>
        }
      >
        <div className="features">
          {features.map((feature, i) => {
            return (
              <Card
                // bordered={true}
                bg={"slate"}
                icon={feature.icon}
                title={feature.title}
                text={feature.text}
                key={i * 4 + i * 1}
              />
            );
          })}
        </div>
      </Section>
      <Section
        id="about"
        padded={true}
        topNotPadded={true}
        roundImg={true}
        heading={
          <h2 className="secondary-heading mb-2">
            Empowering your Recruitment journey with
            <span>innovation and integrity</span>
          </h2>
        }
        text={
          <p>
            Redefining industry standards through consultation, our innovative
            approach integrates cutting-edge technology with expert insights,
            driving transformative change and setting new benchmarks for
            excellence.
          </p>
        }
        src="hr.jpg"
        alt="hr discussing"
      />
      <Section
        id={"services"}
        padded={true}
        topNotPadded={true}
        heading={<h1>Services</h1>}
        text={
          <p>
            Discover our innovative features crafted to elevate your user
            journey and exceed your expectations.
          </p>
        }
      >
        <div className="features">
          {services.map((service, i) => {
            return (
              <Card
                bg="white"
                title={service.title}
                text={service.text}
                key={i * 4 + i * 1}
              />
            );
          })}
        </div>
      </Section>
      <section className="section">
        <div className="ca">
          <h2 className="secondary-heading light">Schedule a demo</h2>
          <p>Our friendly team will be in touch right away!</p>
          <form className="ca-form">
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
              <button type="submit" className="ca-btn">
                <ArrowUp className="icon icon lg white" />
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
