import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let target = event.target;
    let inputType = target.name;
    let inputValue = target.value;

    if (inputType === "name") {
      this.setState({ name: inputValue });
    } else if (inputType === "email") {
      this.setState({ email: inputValue });
    } else {
      this.setState({ message: inputValue });
    }
  }
  handleSubmit(event) {
    alert("Thanks! I'll be in touch soon");
    event.preventDefault();
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <form className="form">
        <div className="field">
          <label className="label">Name:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <label className="label">Email:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <label className="label"> Let's chat</label>
        <div className="control">
          <textarea
            className="textarea"
            value={this.state.message}
            onChange={this.handleChange}
          ></textarea>
          <button className="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}
export default Contact;

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleInputChange = (event) => {
//     let target = event.target;
//     let inputType = target.name;
//     let inputValue = target.value;

//     if (inputType === "name") {
//       this.setState({ name: inputValue });
//     } else if (inputType === "email") {
//       this.setState({ email: inputValue });
//     } else {
//       this.setState({ message: inputValue });
//     }
//   };

//   const handleFormSubmit = (event) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();

//     // Clear the inputs
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <div>
//       <h1>Get in touch</h1>
//       <div className="field">
//         <label className="label">Name</label>
//         <div className="control">
//           <input
//             className="input"
//             type="text"
//             value={name}
//             name="name"
//             placeholder="Name"
//             onChange={handleInputChange}
//           ></input>
//         </div>
//       </div>
//       <div className="field">
//         <label className="label">Email</label>
//         <div className="control">
//           <input
//             className="input"
//             type="text"
//             value={email}
//             name="email"
//             placeholder="email"
//             onChange={handleInputChange}
//           ></input>
//         </div>
//       </div>

//       <div className="field">
//         <label className="label">Let's chat</label>
//         <div className="control">
//           <textarea
//             value={message}
//             name="message"
//             className="textarea"
//             placeholder="Message"
//             onChange={handleInputChange}
//           ></textarea>
//         </div>
//       </div>

//       <button className="button" onClick={handleFormSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// }
