import './App.css';
import { BrowserRouter as Router, Link, Route, NavLink, Routes } from 'react-router-dom'


import Insert from './rotas/Insert';
import Drop from './rotas/Drop';
import Read from './rotas/Read';
import Update from './rotas/Update';



function App() {
  return (
    <Router>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <div className='App'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand">CRUD</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/Insert">Create</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Read">Read</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Update">Update</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Drop">Delete</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
            <Routes>
                <Route path="/insert" element={<Insert />} />
                <Route path="/read" element={<Read />} />
                <Route path="/update" element={<Update />} />
                <Route path="/drop" element={<Drop />} />
            </Routes>
      </div>
    </Router>
  );
}

export default App;
