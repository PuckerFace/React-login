import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<SignUpPage />} />
        <Route index element={<SignUpPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
