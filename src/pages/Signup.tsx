import { useContext, useState, FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../Context/Context";

interface FormData {
  email: string;
  password: string;
  username: string; // optional
}

function Signup() {
  const { swLogo, setIsLoggedIn } = useContext(Context);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    username: "",
  });
  const navigate = useNavigate();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          setIsLoggedIn(true);

          alert(`Bienvenid@ ${data.user.username}`);
        } else {
          alert("Registration failed, please try again");
          navigate("/register");
        }
      })
      .catch((error) => console.error("Error:", error));
    setIsLoggedIn(true);
    navigate("/starships");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form
        className="grid grid-rows gap-2 justify-items-center top-0 right-0 left-0 z-50 bg-zinc-900"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <Link to="/starships">
            <img className="py-10 h-30 w-60" src={swLogo} alt="" />
          </Link>
        </div>

        <div className=" p-4 w-full max-w-lg max-h-full">
          <div className=" bg-white rounded-lg shadow">
            <div className="flex-row items-center justify-between p-4 md:p-5">
              <h3 className="text-xl font-bold text-gray-900 mb-5 pt-5">
                Create your account
              </h3>
              <div>
                <small>
                 <p className="mt-5">
                    Enter your name, email and a password to log into your
                    account
                  </p>
                </small>
              </div>
            </div>

            <div className="p-4 md:p-5">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="username"
                    id="userName"
                    className="bg-gray-200 border text-black text-sm block w-full p-4 my-5"
                    placeholder="Name"
                    value={formData.username}
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-200 border text-black text-sm block w-full p-4 my-5"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <input
                    type="text"
                    className="bg-gray-200 border text-black text-sm block w-full p-4"
                    placeholder="Password"
                    value={formData.password}
                    name="password"
                    onChange={(e) => handleChange(e)}
                  ></input>
                </div>

                <button
                  type="submit"
                  className="w-full text-black font-bold bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none rounded-2xl px-5 py-2.5 text-center"
                >
                  Create Account
                </button>
                <div className="text-sm font-medium text-gray-500">
                  <hr />
                  <h4 className="font-bold my-5">
                    Star Wars is part of The Walt Disney Family of Companies.
                  </h4>
                  <div>
                    <small>
                      By creating an account, you agree to our Terms of Use, and
                      acknowledge that you have read our Privacy Policy, Cookies
                      Policy and UK & EU Privacy Rights. More... This email and
                      password lets you seamlessly log into services and
                      experiences across The Walt Disney Family of Companies,
                      such as ESPN, Walt Disney World, Marvel, and more.
                    </small>
                  </div>
                  <div className="my-5">
                    <small>
                      If you’ve used your email with one of our services, please
                      use it here too.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;