import "./Profile.css";

const Profile = ({name = "John Doe", age = "??", country = "Japan"}) => {
  console.log(name, age, country);
  return (
    <div className="profile">
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Country: {country}</h3>
    </div>
  );
};

export default Profile;
