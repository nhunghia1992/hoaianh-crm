import { useNavigate } from "react-router";
import { useAuth } from "./contexts/Auth";
import { useEffect } from "react";

function App() {
  const { state, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (state.adminToken) return
    navigate('/admin-login')
  })

  const handleLogout = () => {
    logout()
  }

  return (
    state.adminToken &&
    <>
      Hello {state.admin.email}!
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default App;
