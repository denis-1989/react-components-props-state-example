export default function ExampleProps(props) {
  console.log('props', props);
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Street: {props.address.street}</p>
      <p>Zip Code: {props.address.zipcode}</p>
    </div>
  );
}
