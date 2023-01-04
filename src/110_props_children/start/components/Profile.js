import "./Profile.css";

const Profile = ({ name, age, country, color }) => {
  return (
    <div className={`profile ${color}`}>
      <h3>Name: {name}</h3>
      <p>Age: {age} </p>
      <p>From: {country}</p>
    </div>
  );
};

export default Profile;
