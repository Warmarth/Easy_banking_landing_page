import React from "react";

const SignUp = () => {
  return (
    <section>
      <div className="bg-zinc-600 text-zinc-800">
        <h1 className="text-center text-4xl p-2 pt-8">Sign Up</h1>
        <p className="text-center text-2xl pb-4">Welcome to Easybank</p>
        <div className="">
          <form action="" method="post">
            <fieldset className="p-12 border rounded-2xl m-auto block mb-8 w-4/6">
              <legend className="font-bold text-lg capitalize ">
                Your personal information
              </legend>
              <div className="form-group py-2 space-x-2 font-bold">
                <label htmlFor="firstname">First Name</label>
                <div className="form-field">
                  <span>
                    <input
                      type="text"
                      name="firstname"
                      id="your-first-name"
                      placeholder="your-first-name"
                      pattern="[A-Za-zÀ-ž\s]{3,}"
                      maxLength="35"
                      className="w-3/4 outline-offset-0 p-2 transparent"
                      autoComplete="on"
                      required
                    />
                  </span>
                  <p className="form-help text-sm italic">
                    First name should be at least 3 characters and only contains
                    letters
                  </p>
                </div>
              </div>
              <div className="form-group py-2 space-x-2 font-bold">
                <label htmlFor="lastname ">Last Name</label>
                <div className="form-field">
                  <span className="form-field-container">
                    <input
                      type="text"
                      name="your-last-name"
                      id="your-last-name"
                      placeholder="your-last-name"
                      pattern="[A-Za-zÀ-ž\s]{3,}"
                      maxLength="40"
                      autoComplete="on"
                      className="w-3/4 outline-offset-0 p-2 transparent"
                      required
                    />
                  </span>
                  <p className="form-help text-sm italic">
                    Last name should be at least 3 characters and only contains
                    letters
                  </p>
                </div>
              </div>
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
            {/* comments */}
            <fieldset className="p-12 border m-auto block mb-8 w-4/6">
              <legend className="font-bold text-lg">Your comment</legend>
              <div className="form-group py-2 space-x-2 font-bold">
                <label htmlFor="your-title">Title</label>
                <div className="form-field">
                  <span className="form-field-container">
                    <input
                      type="text"
                      name="your-title"
                      id="your-title"
                      placeholder="your-title"
                      pattern="[A-Za-zÀ-ž\s]{4,}"
                      maxLength="75"
                      autoComplete="on"
                      className="w-3/4 outline-offset-0 p-2 transparent"
                      required
                    />
                  </span>
                  <p className="form-help text-sm italic">
                    Title should be at least 4 characters and only contains
                    letters
                  </p>
                </div>
              </div>
              <div className="form-group py-2 space-x-2 font-bold">
                <label htmlFor="your-comment">Comment</label>
                <div className="form-field">
                  <span className="form-field-container">
                    <textarea
                      name="your-comment"
                      id="your-comment"
                      placeholder="Write your comment here"
                      minLength="10"
                      required
                      cols="30"
                      rows="6"
                      className="w-3/4 outline-offset-0 p-2 transparent"
                    ></textarea>
                  </span>
                  <p className="form-help  text-sm italic">
                    Comment should be at least 10 characters
                  </p>
                </div>
              </div>
              <div className="form-group text-center p-2 font-bold">
                <button className="">Post my comment</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
