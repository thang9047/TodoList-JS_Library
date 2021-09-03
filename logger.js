export default function logger(reducer) {
  return (state, action, args) => {
    console.group(action)
    console.log("State: ", state);
    console.log("Action argurment: ", args);
    const nextState = reducer(state, action, args)
    console.log("Next State: ", nextState);
    console.groupEnd()
    return nextState
  }
}