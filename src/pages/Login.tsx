import { FormEvent, useState, useContext } from "react";
import Context from "../Context/Context";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { swLogo, setIsLoggedIn } = useContext(Context);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          console.error("Authentication failed. HTTP status:", res.status);
          throw new Error("Authentication failed");
        }

        return res.json();
      })
      .then((data) => {
        if (data.user) {
          setIsLoggedIn(true);
          navigate("/starships");
          alert(`Bienvenid@ ${data.user.username}`);
        } else {
          alert("Authentication failed, please sign up");
          navigate("/register");
        }
      })
      .catch((error) => console.error("Error during authentication:", error));

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

  return (
    <div className="">
      <form
        className="grid grid-rows gap-2 justify-items-center top-0 right-0 left-0 z-50 bg-zinc-900"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <Link to="/">
            <img className="py-10 h-30 w-60" src={swLogo} alt="" />
          </Link>
        </div>

        <div className=" p-4 w-full max-w-lg max-h-full">
          <div className=" bg-white rounded-lg shadow">
            <div className="flex-row items-center justify-between p-4 md:p-5">
              <h3 className="text-xl font-bold text-gray-900 mb-5">
                Enter your email
              </h3>
              <p>
                <small>

                  <p className="mt-5">
                    Enter your email and a password to log into your account
                  </p>
                </small>
              </p>
            </div>

            <div className="p-4 md:p-5">
              <div className="space-y-4">
                
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-black text-white text-sm block w-full p-4"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="text"
                    className="bg-black text-white text-sm block w-full p-4 mt-5"
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
                  Continue
                </button>
                <div className="text-sm font-medium text-gray-500">
                  <hr />
                  <h4 className="font-bold my-5">
                    Star Wars is part of The Walt Disney Family of Companies.
                  </h4>
                  <div>
                    <small>
                      This email and password lets you seamlessly log into
                      services and experiences across The Walt Disney Family of
                      Companies, such as ESPN, Walt Disney World, Marvel, and
                      more.
                    </small>
                  </div>
                  <div className="my-5">
                    <small>
                      If you've used your email with one of our services, please
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

export default Login;