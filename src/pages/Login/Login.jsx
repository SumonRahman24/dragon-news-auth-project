import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLoginSubmit = (e) => {
    // auto submit stop
    e.preventDefault();

    // get inputField value
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // create user
    loginUser(email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <div>
        <Navbar />

        <div className=" min-h-screen flex flex-col">
          <div className="container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
              <h1 className=" text-3xl font-medium text-center py-5">
                Register your account
              </h1>
              <div className="px-5">
                <div className="divider"></div>
              </div>

              <form
                onSubmit={handleLoginSubmit}
                className="px-5 mt-10 space-y-5"
              >
                <div className="space-y-1">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="block border bg-gray-200 border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Enter your Email"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label>Password</label>
                  <input
                    type="password"
                    className="block border bg-gray-200 border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded  bg-gray-700 text-white btn-outline  focus:outline-none my-1"
                >
                  Login
                </button>
                <p className="mt-1 font-medium  text-gray-500">
                  {" "}
                  Dont’t Have An Account ?{" "}
                  <Link className="text-red-400 underline" to={"/register"}>
                    Register
                  </Link>
                </p>
              </form>
            </div>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
