import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '김기대',
    'birthday': '960713',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍길동',
    'birthday': '962133',
    'gender': '남자',
    'job': '코'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '박기대',
    'birthday': '9123713',
    'gender': '여자',
    'job': '발'
  }, 
]

class App extends Component {
  render() {
    return (
      <div>
        { customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> )})
        }
      </div>
    );
  }
}

export default App;