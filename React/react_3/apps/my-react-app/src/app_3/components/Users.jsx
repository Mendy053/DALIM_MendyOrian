function User(props) {
  return <div>
    <span>Hellp {props.name}</span>
    <p>your phone number is {props.phone}</p>
    <p>your email address is {props.email}</p>
  </div>;
}

export default function Users(props) {
  return props.users.map((user) => {
    return <User key={user.id} name={user.name} phone={user.phone} email={user.email}></User>;
  });
}
