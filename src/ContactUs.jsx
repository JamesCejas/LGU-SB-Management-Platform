
const ProgrammerInfo = () => {
  const members = [
    {
      name: 'Jecel Carrillo',
      Role: 'Hacker',
      contact: '09953944239',
      email: 'jecelcarrillo@gmail.com',
      image: 'jecel.jpg',
    },
    {
      name: 'Steven De Los Reyes',
      Role: 'Hacker',
      contact: '09212078349',
      email: 'stevendelosreyes123@gmail.com',
      image: 'steven.jpg',
    },
    {
      name: 'Jorge Nerosa II',
      Role: 'Hipster',
      contact: '09123475843',
      email: 'jorgenerosa@gmail.com',
      image: 'jorge.jpg',
    },
    {
      name: 'John Myca Arrieza',
      Role: 'Hustler',
      contact: '09123475843',
      email: 'arrezajohnmyca@gmail.com',
      image: 'myca.jpg',
    },
    {
      name: 'James Ryan Cejas',
      Role: 'Hipster',
      contact: '09123475843',
      email: 'jamesrayncejas@gmail.com<',
      image: 'james.jpg',
    },
  ];

  return (
    <div style={styles.body}>
      <h1 style={styles.title}>SparkTech</h1>
      <div style={styles.memberContainer}>
        {members.map((member, index) => (
          <div key={index} style={styles.member}>
            <img
              src={member.image}  
              alt={`Member ${index + 1}`}
              style={styles.memberImage}
            />
            <h2 style={styles.memberName}>{member.name}</h2>
            <p style={styles.memberDetails}>Contact: {member.contact}</p>
            <p style={styles.memberDetails}>Email Address: {member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: 'rgb(56, 56, 219)',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    margin: 0,
    height: '100vh',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '20px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  memberContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '20px',
  },
  member: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  memberImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  memberName: {
    margin: '10px 0 5px',
    fontSize: '20px',
  },
  memberDetails: {
    margin: '5px 0',
  },
};

export default ProgrammerInfo;
