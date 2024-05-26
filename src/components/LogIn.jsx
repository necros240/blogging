
import React from 'react';
import PropTypes from 'prop-types';


const LogIn = ({ onLogIn }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isVisible , setIsVisible] = React.useState(true);

  const handleClick = () => {
    setIsVisible(false);
  }

  const handleLogIn = (e) => {
    e.preventDefault();
    onLogIn({ email, password });
  };

  return (
    <div>{ isVisible && (
        <form onSubmit={handleLogIn} >
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
        />
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
        />
        <button type="submit" style={{display:isVisible?'block':'none'}} onClick={handleClick}>Log In</button>
        </form>
       )};
    </div>
  );
};

LogIn.propTypes = {
    onLogIn: PropTypes.func.isRequired,
  };

export default LogIn;
