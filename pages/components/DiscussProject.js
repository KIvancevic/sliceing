 
 const DiscussProject = () => {
  return (
 
      
  <section
    className="yourProject"
  >
      <div>
        <h1>Interested in discussing a project?</h1>
        <div 
          style={{
            display:'flex',
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          <p>
            Do you have a creative challenge for us? Get in touch 
            with a member of the team.
          </p>
        </div>
        <button
          style={{
            width: '220px',
            height: '60px',
            fontFamily: 'Swansea',
            fontSize: '18px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Get in touch
        </button>
      </div>
  </section>
  )
}

export default DiscussProject;