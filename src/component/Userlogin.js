import LOGO from '../LOGO.png';
export default function Userlogin(props) {
    return (

      <div className="user_login_container">
        <form className="login">

          <div className="user_login_content">
            <img src={LOGO} alt="logo" style={{height:"100px",width:"200px",marginLeft:"80px",marginBottom:"50px"}}></img>

            <h3 className="login_title">Log in</h3>

            <div className="form-group mt-3">
              <label>Email address</label>
              <input type="email" className="form-control mt-1" placeholder="Enter email"/>
            </div>

            <div className="form-group mt-3">
              <label>Password</label>
              <input type="password" className="form-control mt-1" placeholder="Enter password"/>
            </div>

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>

            <p style={{margin:"10px",color:"white"}}>Forgot <a href="#" style={{color:"yellow"}}>password?</a></p>

          </div>

        </form>
      </div>

    )
  }