// If you were creating a component that required you to present data from an external source either static JSON file or a request to an API,
// where in a react component(class or functional) would you place that logic? You could write sample code or just explain in natural language if you would prefer.

// Answer:
<>
  Below is an example of a simple request wrap in the useEffect hook with no
  dependencies so it will trigger only when the component first renders. We can
  add any dependency we need if we want to trigger it again when we add a new
  item for example
</>;

import React, { useState, useEffect } from "react";

const Four = () => {
  const [data, setData] = useState();

  useEffect(async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const content = data.map((todo) => todo.title);

  return <p>{content}</p>;
};

export default Four;
