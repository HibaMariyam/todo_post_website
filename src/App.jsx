import {Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Todo from './pages/todo/Todo'
import Post from './pages/posts/Post'

function App() {

  return (
    <>
     <Navbar/>
     
     
     <Routes>
       <Route path='/' element={<Todo/>}/>
       <Route path='/post' element={<Post/>}/>
     </Routes>

    </>
  )
}

export default App
