const AboutUs = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1>About Us</h1>
          <p>
          <p>We are a group of dedicated individuals who came together with a shared vision. Our journey began with a simple idea, but over time, we have grown into a team passionate about creating meaningful solutions. Our expertise spans multiple fields, and our combined experience allows us to approach challenges with creativity and innovation.</p>
        <p>We believe in collaboration, innovation, and integrity. Every project we undertake is driven by our core values and the desire to make a difference. We take pride in the relationships we build with our clients and the impact we make through our work.</p>
        <p>As we continue to grow, our commitment to excellence and community remains stronger than ever. Thank you for being a part of our journey!</p>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: 'rgb(189, 189, 44)',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    height: '100vh',
    margin: 0,
  },
  nav: {
    display: 'flex',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '20px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '4rem',
    fontSize: '1.5rem',
  },
  content: {
    color: 'white',
  },
};

export default AboutUs;
