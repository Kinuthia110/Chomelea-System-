import { useState } from "react";
import { gql } from "@apollo/client";
import { useMutation, useApolloClient } from "@apollo/client/react";
import { useNavigate } from "react-router-dom";

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        fullName
        email
        role
      }
    }
  }
`;

function Login() {
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await login({
      variables: {
        email: form.email,
        password: form.password
      }
    });

    const token = result.data.login.token;
    const user = result.data.login.user;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    await apolloClient.resetStore();

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#0D1117] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#161B22] w-full max-w-md p-8 rounded-2xl border border-gray-800"
      >
        <h1 className="text-4xl font-bold text-orange-500 text-center">
          CHOMELEA
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Welding Management Login
        </p>

        {error && (
          <p className="bg-red-500/10 text-red-400 p-3 rounded-lg mt-6">
            {error.message}
          </p>
        )}

        <div className="mt-6">
          <label className="text-gray-300">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-lg bg-[#0D1117] border border-gray-700 text-white outline-none focus:border-orange-500"
            placeholder="admin@chomelea.com"
            required
          />
        </div>

        <div className="mt-4">
          <label className="text-gray-300">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-lg bg-[#0D1117] border border-gray-700 text-white outline-none focus:border-orange-500"
            placeholder="Enter password"
            required
          />
        </div>

        <button
          disabled={loading}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;