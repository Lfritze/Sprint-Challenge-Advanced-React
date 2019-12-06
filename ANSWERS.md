- [ ] Why would you use class component over function components (removing hooks from the question)?

When working on older (legacy) code that can't be updated to functional components. Also....

I would use class components when more manual logic needs implementation. This would give me slightly more control and verastility.

Class-based components are more useful when there is a need to manipulate state, or to utilize component lifecycle methods like componendDidMount/Update/Unmount. With the current state of react, functional components can do most of this too using useState and useEffect hooks. Functional components would be preferable to class-based components if the component is simply using and rendering props that have been passed down.

- [ ] Name three lifecycle methods and their purposes.

1. ComponentDidMount() = Birth

---

This is a life cycle method allowing for specific logic to be implemented right when a component has been mounted. This method runs after the first render of the component. This runs statements that require that the component has successfully rendered, such as making fetch requests and setting state.

2. ComponentDidUpdate() = Growth

---

An update can be caused by changes to props or state.

This life cycle method allows a user to implement logic for a specific action (e.g. like clicking in a particular component to do specific logic). This method runs in response to changes to state or props. It is similar in use to the useEffect hook, in that it 'watches' specified props or state, and runs every time there is a change to props/state.

3. ComponentWillUnmount() = Death

---

This method is called when a component is being removed from the DOM:

This is a life cycle method allowing for specific logic to be implemented right before a component is being unmounted. ComponentWillUnmount() is called and can be used for any clean up you may need to do.

- [ ] What is the purpose of a custom hook?

The purpose of a custom hook, is reusability for reducing repetitive implementation. This also keeps the code clean.
Custom hooks are used to bundle logic that is used repeatedly across components. Custom hooks avoid the issue of code repetition/non-DRY code, by extracting the repeated logic into an accessible/reusable function. For example, lumping change-handler logic that would be repeated across a number of different inputs. A custom hook can construct local state for each input by using universal logic and input-specific parameters.

- [ ] Why is it important to test our apps?

Testing is important because it prevents potential bugs that may surface in production when the app is used with different edge-cases. It also serves as a form of documentation for the code,aids in future refactoring, encourages code clarity, readability, and allows for a trusted code base.
