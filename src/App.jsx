import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StudentsList from './components/StudentList/index';
import StudentFormFind from './components/StudentFormFind';
import './App.css';
import SignIn from './components/SignIn';
import Register from './components/Register'; // Import the new Register component
import ItemList from './components/ItemList';
import ItemFormFind from './components/ItemFormFind';
import SubjectFormFind from './components/SubjectFormFind';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <h3>My Project</h3>
        <nav>
          <Link to="/">หน้าหลัก</Link>
          
          <Link to="/register">สมัครสมาชิก</Link> {/* New link for registration */}
          <hr />
          {!isLoggedIn && (
            <Link to="/signin">เข้าสู่ระบบ</Link>
          )}
        </nav>

        <Routes>
          <Route path="/signin" element={<SignIn onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/register" element={<Register onRegisterSuccess={handleLoginSuccess} />} />
          <Route path="/" element={
            <>
              <div className="card">
                {isLoggedIn ? (
                  <>
                    <p>ยินดีต้อนรับ</p>
                    <p><ItemList/></p>
                    <hr />
                    <p><ItemFormFind/></p>
                  </>
                ) : (
                  <p>กรุณา Login </p>
                )}
              </div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
