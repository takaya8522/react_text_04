import "./Profile.css";

const Profile = ({ name = "John Doe", age = "??", country = "Japan"}) => {
  return (
    <div className="profile">
      <h3>Name: {name}</h3>
      <p>Age: {age} </p>
      <p>From: {country}</p>
    </div>
  );
};

export default Profile;
