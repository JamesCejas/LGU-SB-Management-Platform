
const ProgrammerInfo = () => {
  return (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h1>SparkTech</h1>

      <div className="member-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
        <div className="member" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <img src="jecel.jpg" alt="Member 1" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
          <h2>Jecel Carrillo</h2>
          <p>Role: Hacker</p>
          <p>Contact: 09953944239</p>
          <p>Email Address: jecelcarrillo@gmail.com</p>
        </div>
        <div className="member" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <img src="steven.jpg" alt="Member 2" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
          <h2>Steven De Los Reyes</h2>
          <p>Role: Hacker</p>
          <p>Contact: 09212078349</p>
          <p>Email Address: stevendelosreyes123@gmail.com</p>
        </div>
        <div className="member" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <img src="jorge.jpg" alt="Member 3" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
          <h2>Jorge Nerosa II</h2>
          <p>Role: Hipster</p>
          <p>Contact: 09454609079</p>
          <p>Email Address: jorgenerosa@gmail.com</p>
        </div>
        <div className="member" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <img src="myca.jpg" alt="Member 4" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
          <h2>John Myca Arrieza</h2>
          <p>Role: Hustler</p>
          <p>Contact: 09123475843</p>
          <p>Email Address: arrezajohnmyca@gmail.com</p>
        </div>
        <div className="member" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
          <img src="james.jpg" alt="Member 5" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
          <h2>James Ryan Cejas</h2>
          <p>Role: Hipster</p>
          <p>Contact: 09123475843</p>
          <p>Email Address: jamesrayncejas@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ProgrammerInfo;
