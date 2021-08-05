// Given the two React components below, could you explain any key differences in the two and when and why you might use one over the other?

class TestComponent extends Component {
    render() {
        return();
    }
}

export default TestComponent;

const TestComponent = () => ();

export default TestComponent;


// Anwser
<>
The first one is a class component and the second one is a functional component. The main differences is that classes components cannot use Hooks and functional components cannot take advantage of Error Boundaries for better debugging.
I personally only used functional components, they are easier to read, easier to manage state and easier to write in my opinion
Hooks and functional components were introduced later so it's important to understand class components in case we run into an app that was build before Hooks
</>
