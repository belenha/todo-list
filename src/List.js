import React from 'react';
import firebase from 'firebase';

class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div class="m-2">
          <h3>TODO</h3>
          <TaskList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label class="m-2" htmlFor="new-todo">
              What needs to be done?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button class="btn btn-primary m-2">
              Add #{this.state.items.length + 1}
            </button>
            <button type="button" class="btn btn-primary" onClick={() => firebase.auth().signOut()}>Logout</button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }
  

// function List(props){
//     const tasks = [
//         {id: "1", text: "Example task 1"},
//         {id: "2", text: "Example task 2"},
//         {id: "3", text: "Example task 3"},
//     ];

//     return (<section> 
//                 <h1>{props.user.email}</h1>
//                 <button type="button" class="btn btn-primary" onClick={() => firebase.auth().signOut()}>Logout</button>
//                 <section className="list">
//                     <Addform />
//                     <TaskList tasks={tasks}/>
//                 </section>
//             </section> );
// }

// function Addform(){
//     return ( <div className="addForm">
//                 <div class="row m-1">
//                     <input type="text" class="form-control col-sm-3 col-md-3 col-lg-3 m-1" value ="" />
//                     <button type="button" class="btn btn-primary m-1">Add</button>
//                 </div>
//             </div> );
// }

function TaskList(props) {
    return ( <ul> 
                {props.items.map(item => (
                    <Task key={item.id} text={item.text} />
                ))}
            </ul> );
}

function Task(props) {
    return (
        <div>
            <input type="checkbox" class="form-check-input"/>
            <li key={props.id}>{props.text}</li>
        </div>
    );
}

export default List;