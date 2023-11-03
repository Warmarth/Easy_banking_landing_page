import React, { Component } from "react";
import Input from "./input";

class SignUp extends Component {
  state = {
    account: {
      firstname: " ",
      lastname: " ",
      email: " ",
      password: " ",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <section>
        <div className="bg-zinc-600 text-zinc-800">
          <h1 className="text-center text-4xl p-2 pt-8">Sign Up</h1>
          <p className="text-center text-2xl pb-4">Welcome to Easybank</p>
          <div className="">
            <form onSubmit={this.handleSubmit}>
              <fieldset className="p-12 border rounded-2xl mx-auto block mb-8 w-4/6">
                <legend className="font-bold text-lg capitalize ">
                  Your personal information
                </legend>
                <div className="form-group py-2 space-x-2 font-bold">
                  <div className="form-field">
                    <Input
                      name="full name"
                      value={account.userame}
                      label=" Name"
                      onChange={this.handleChange}
                      autoFocus
                      type="text"
                      id="firstname"
                      pattern="[A-Za-zÀ-ž\s]{3,}"
                      maxLength="35"
                      className="w-3/4 outline-offset-0 p-2 transparent"
                      autoComplete="on"
                      required
                    />
                    <p className="form-help text-sm italic">
                      First name should be at least 3 characters and only
                      contains letters
                    </p>
                  </div>
                </div>
                <div className="form-group py-2 space-x-2 font-bold">
                  <Input
                    name="Last Name"
                    value={account.userame}
                    label="Last Name"
                    onChange={this.handleChange}
                    autoFocus
                    type="text"
                    id="lastname"
                    pattern="[A-Za-zÀ-ž\s]{3,}"
                    maxLength="35"
                    className="w-3/4 outline-offset-0 p-2 transparent"
                    autoComplete="on"
                    required
                  />
                  <p className="form-help text-sm italic">
                    Last name should be at least 3 characters and only contains
                    letters
                  </p>
                </div>
                <div className="form-group py-2 space-x-2 font-bold">
                  <label htmlFor="email">Email</label>
                  <div className="form-field">
                    <span className="form-field">
                      <input
                        value={account.email}
                        onChange={this.handleChange}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="e.g. youremail@gmail.com"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        className="w-3/4 outline-offset-0 p-2 transparent"
                        autoComplete="on"
                        required
                      />
                    </span>
                  </div>
                </div>
                <div className="form-group py-2 space-x-2 font-bold">
                  <label htmlFor="password"> Password</label>
                  <div className="form-field">
                    <span className="form-field">
                      <input
                        type="password"
                        value={account.password}
                        onChange={this.handleChange}
                        name="password"
                        id="password"
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
              <fieldset className="p-12 border rounded-2xl mx-auto block w-4/6">
                <legend className="font-bold text-lg capitalize">
                  Your comment
                </legend>
                <div className="form-group py-2 space-x-2 font-bold">
                  <label htmlFor="your-title">Title</label>
                  <div className="form-field">
                    <span className="form-field-container">
                      <input
                        type="text"
                        name="title"
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
                        name="comment"
                        id="comment"
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
  }
}

export default SignUp;
