/**
 * Created by Vincent on 2018/3/28.
 */
import React from 'react';

class AsyncRender extends React.PureComponent{
  constructor(props){
    super(props);

    this.state = {
      children: null
    };
  }
  componentDidMount(){
    this.requestIdleCallback();
  }
  componentDidUpdate(prevProps, prevState){
    let { children } = this.props;
    if(children !== prevProps.children){
      this.cancelIdleCallback();
      this.requestIdleCallback();
    }
  }
  requestIdleCallback(){
    let { children } = this.props;
    this.idleCallbackId = requestIdleCallback(()=>this.setState({ children }));
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
    return children || false;
  }
}
export default AsyncRender;
