import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' element={<div>home page</div>} />
      <Route
        path='testing'
        element={<div>
          <h2>testing</h2>
        </div>}
      >
      </Route>
    </BrowserRouter >

  )
}

export default App;
