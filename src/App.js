import React from 'react';
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import HomeTodo from './HomeTodo';

function App() {
  return (
 <>

<BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeTodo/>}></Route>
        <Route path='/create' element={<AddTodo/>}></Route>
        <Route path='/update/:id' element={<EditTodo/>}></Route>
      </Routes>
      </BrowserRouter>
 </>
  );
}

export default App;
