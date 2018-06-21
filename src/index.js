/**
 * Created by Vincent on 2018/3/28.
 */
import React from 'react';

class AsyncRender extends React.PureComponent{
  constructor(props){
    super(props);

    state = {
      children: null
    };
  }
  componentDidMount(){
    let { children } = this.props;
    this.idleCallbackId = requestIdleCallback(()=>this.setState({ children }));
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    let { children } = this.props;
    if(children !== prevProps.children){
      this.cancelIdleCallback();
      this.idleCallbackId = requestIdleCallback(()=>this.setState({ children }));
    }
  }
  cancelIdleCallback(){
    if(this.idleCallbackId){
      cancelIdleCallback(this.idleCallbackId);
      this.idleCallbackId = null;
    }
  }
  componentWillUnmount(){
    this.cancelIdleCallback();
  }
  render(){
    let { children } = this.state;
    return children;
  }
}
export default AsyncRender;
