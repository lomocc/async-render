# async-render

React Component with *requestIdleCallback*.

```js
import AsyncRender from 'async-render';

class App extends React.Component {
  render() {
    return (
      <AsyncRender>
        <Component/>
      </AsyncRender>
    );
  }
}
```
