import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import {AuthProvider} from "./contexts/AuthContextProvider";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import {UsersPage} from "./pages/UserPage";
import {AnalyticsPage} from "./pages/AnalyticPage";
import {AuditPage} from "./pages/AuditPage";
import {LawPage} from "./pages/LawPage";
import {SettingsPage} from "./pages/SettingPage";
import {ProfilePage} from "./pages/ProfilePage";
import {NotificationsPage} from "./pages/NotificationsPage";
import {OCRPage} from "./pages/OCRPage";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/auth" element={<AuthPage />} />

              {/* Protected Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/users"
                element={
                  <ProtectedRoute>
                    <UsersPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/users/add"
                element={
                  <ProtectedRoute>
                    <UsersPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/analytics"
                element={
                  <ProtectedRoute>
                    <AnalyticsPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/analytics/trends"
                element={
                  <ProtectedRoute>
                    <AnalyticsPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/analytics/reports"
                element={
                  <ProtectedRoute>
                    <AnalyticsPage />
                  </ProtectedRoute>
                }
              />

              {/* <Route
                path="/projects"
                element={
                  <ProtectedRoute>
                    <ProjectsPage />
                  </ProtectedRoute>
                }
              /> */}

              <Route
                path="/audit"
                element={
                  <ProtectedRoute>
                    <AuditPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/ocr"
                element={
                  <ProtectedRoute>
                    <OCRPage />
                  </ProtectedRoute>
                }
              />

              {/* <Route
                path="/security"
                element={
                  <ProtectedRoute>
                    <SettingsPage />
                  </ProtectedRoute>
                }
              /> */}

              <Route
                path="/law"
                element={
                  <ProtectedRoute>
                    <LawPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/notifications"
                element={
                  <ProtectedRoute>
                    <NotificationsPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/settings/*"
                element={
                  <ProtectedRoute>
                    <SettingsPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/support"
                element={
                  <ProtectedRoute>
                    <SettingsPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />

              {/* Default redirect */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />

              {/* Catch all route */}
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
