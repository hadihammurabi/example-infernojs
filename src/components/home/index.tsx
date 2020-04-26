import { Component } from 'inferno';
import { inject, observer } from 'inferno-mobx';

@inject('store')
@observer
class Home extends Component {

  render({ store }): any {
    return (
      <div>
        <h1>{store.count}</h1>
  
        <button onclick={() => store.count++}>+</button>
        <button onclick={() => store.count--}>-</button>
      </div>
    );
  };

}


export default Home;
