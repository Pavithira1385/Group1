import React from 'react';
import axios from 'axios';

function PasswordReset() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/password-reset', { email });
      alert('Password reset instructions have been sent to your email.');
      setEmail('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="card text-center" style={{ width: '300px' }}>
      <div className="card-header h5 text-white bg-primary">Password Reset</div>
      <div className="card-body px-5">
        <p className="card-text py-2">
          Enter your email address and we'll send you an email with instructions
          to reset your password.
        </p>
        <div className="form-outline">
          <input
            type="email"
            id="typeEmail"
            className="form-control my-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="typeEmail">
            Email input
          </label>
        </div>
        <button
          className="btn btn-primary w-100"
          onClick={handleSubmit}
          disabled={!email}
        >
          Reset password
        </button>
        <div className="d-flex justify-content-between mt-4">
          <a className="" href="#">
            Login
          </a>
          <a className="" href="#">
            Register
          </a>
        </div>
        {error && <p className="text-danger">{error}</p>}
      </div>
    </div>
  );
}

export default PasswordReset;
