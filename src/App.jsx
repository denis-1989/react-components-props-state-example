import './App.css';
import ExampleComponents from './ExampleComponents';
import ExampleProps from './ExampleProps';

export default function App() {
  return (
    <div className="App">
      <h1>Example import and export</h1>
      <ExampleComponents />
      <h1>Example Props</h1>
      <ExampleProps
        name="Denis"
        age={36}
        address={{ street: 'abc', zipcode: '1234' }}
      />
      <ExampleProps
        name="Eranda"
        age={25}
        address={{ street: 'bcd', zipcode: '4321' }}
      />
    </div>
  );
}
