import '../assest/css/ViewServ.css';

function ViewServ() {
  return (
    <div className="background">
      <div className='overlay8'></div>

      <div className="booking-form">
        <h2>VIEW SERVICE FORM</h2>
        <div className="table-container">
          <div className="table-row form-title">
            <div className="header-cell">Service Name</div>
            <div className="header-cell">Service Provider</div>
            <div className="header-cell">Description</div>
            <div className="header-cell">Charges</div>
            <div className="header-cell">Timing</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ViewServ;