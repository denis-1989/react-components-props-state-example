import './App.css';
import ExampleComponents from './ExampleComponents';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleMappingOverArrays from './ExampleMappingOverArrays';
import ExampleProps from './ExampleProps';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';

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
      <h1>Example: useState</h1>
      <ExampleStateCounter />
      <h1>Example: useState with email</h1>
      <ExampleStateEmail />
      <h1>Example: Mapping Over Arrays</h1>
      <ExampleMappingOverArrays />
      <h1>Example: Conditional Rendering</h1>
      <ExampleConditionalRendering />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
