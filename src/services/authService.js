// Mock authentication service that simulates backend communication
// This will be replaced with actual API calls when the backend is ready

const MOCK_USERS = [
  {
    id: 1,
    email: "admin@perkin.com",
    password: "admin123",
    name: "Admin User",
    role: "admin",
    avatar:
      "https://lh3.googleusercontent.com/d/1raXi7RhP_cvER6DqhQwemZ9iM91YecBo",
  },
  {
    id: 2,
    email: "user@perkin.com",
    password: "user123",
    name: "Regular User",
    role: "user",
    avatar:
      "https://lh3.googleusercontent.com/d/1raXi7RhP_cvER6DqhQwemZ9iM91YecBo",
  },
];

// Simulate network delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class AuthService {
  constructor() {
    this.currentUser = null;
    this.token = null;
  }

  // Simulate login API call
  async login(email, password) {
    await delay(1000); // Simulate network delay

    const user = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Generate mock JWT token
    const token = this.generateMockToken(user);

    this.currentUser = user;
    this.token = token;

    // Store in localStorage to persist session
    localStorage.setItem("auth_token", token);
    localStorage.setItem("current_user", JSON.stringify(user));

    return {
      user: {...user, password: undefined}, // Remove password from response
      token,
    };
  }

  // Simulate register API call
  async register(userData) {
    await delay(1000); // Simulate network delay

    const {email, password, name} = userData;

    // Check if user already exists
    const existingUser = MOCK_USERS.find((u) => u.email === email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    // Create new user
    const newUser = {
      id: MOCK_USERS.length + 1,
      email,
      password,
      name,
      role: "user",
      avatar:
        "https://lh3.googleusercontent.com/d/1raXi7RhP_cvER6DqhQwemZ9iM91YecBo",
    };

    MOCK_USERS.push(newUser);

    const token = this.generateMockToken(newUser);
    this.currentUser = newUser;
    this.token = token;

    // Store in localStorage
    localStorage.setItem("auth_token", token);
    localStorage.setItem("current_user", JSON.stringify(newUser));

    return {
      user: {...newUser, password: undefined},
      token,
    };
  }

  // Simulate logout
  async logout() {
    await delay(500);

    this.currentUser = null;
    this.token = null;

    localStorage.removeItem("auth_token");
    localStorage.removeItem("current_user");
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.token && !!this.currentUser;
  }

  // Get current user
  getCurrentUser() {
    return this.currentUser;
  }

  // Get token
  getToken() {
    return this.token;
  }

  // Initialize auth state from localStorage
  initializeAuth() {
    const token = localStorage.getItem("auth_token");
    const user = localStorage.getItem("current_user");

    if (token && user) {
      this.token = token;
      this.currentUser = JSON.parse(user);
    }
  }

  // Generate mock JWT token
  generateMockToken(user) {
    const header = btoa(JSON.stringify({alg: "HS256", typ: "JWT"}));
    const payload = btoa(
      JSON.stringify({
        sub: user.id,
        email: user.email,
        role: user.role,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24 hours
      })
    );
    const signature = btoa("mock-signature");

    return `${header}.${payload}.${signature}`;
  }

  // Verify token (mock implementation)
  verifyToken(token) {
    try {
      const parts = token.split(".");
      if (parts.length !== 3) return false;

      const payload = JSON.parse(atob(parts[1]));
      const now = Math.floor(Date.now() / 1000);

      return payload.exp > now;
    } catch {
      return false;
    }
  }

  // Simulate password reset request
  async requestPasswordReset(email) {
    await delay(1000);

    const user = MOCK_USERS.find((u) => u.email === email);
    if (!user) {
      throw new Error("User not found");
    }

    // In real app, this would send an email
    console.log(`Password reset link sent to ${email}`);
    return {message: "Password reset link sent to your email"};
  }
}

// Create singleton instance
const authService = new AuthService();

export default authService;
