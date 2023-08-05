import { React } from "react";

const signIn = () => {
  return (
    <section className="m-auto w-full md:w-3/5">
      <h1 className="text-center text-4xl p-2 pt-8 capitalize">Sign up</h1>
      <p className="text-center text-2xl pb-4">Welcome to Easybank</p>
      <form action="" method="post">
        <fieldset className="p-12 border rounded-2xl mx-auto block mb-8 w-4/6">
          <legend className="font-bold text-lg capitalize ">
            Your personal information
          </legend>
          <div className="form-group py-2 space-x-2 font-bold">
            <label htmlFor="your-email">Email</label>
            <div className="form-field">
              <span className="form-field">
                <input
                  type="email"
                  name="your-email"
                  id="your-email"
                  placeholder="e.g. youremail@gmail.com"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  maxLength="55"
                  className="w-3/4 outline-offset-0 p-2 transparent"
                  autoComplete="on"
                  required
                />
              </span>
            </div>
          </div>
          <div className="form-group py-2 space-x-2 font-bold">
            <label htmlFor="your-password"> Password</label>
            <div className="form-field">
              <span className="form-field">
                <input
                  type="password"
                  name="your-password"
                  id="your-email"
                  placeholder="*******"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  minLength="8"
                  className="w-3/4 outline-offset-2 p-2 border-0"
                  autoComplete="on"
                  required
                />
              </span>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default signIn;
