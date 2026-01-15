function Container(props) {
  return <div classNameName="container">{props.children}</div>;
}

export default Container;

/* Children passing is a special prop that allows you to pass components as data to other components. In this example, the Container component wraps its children (the content passed between its opening and closing tags) inside a div with a className of "container" {in App.jsx file}. This is useful for creating reusable layout components that can encapsulate styling or structure while allowing dynamic content to be inserted. */