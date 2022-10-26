import React, { useRef, useState } from "react";
// import { useForm } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "../typings";
import emailjs from "@emailjs/browser";

// type Inputs = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

type Props = {
  pageInfo: PageInfo;
};

const Contact = ({ pageInfo }: Props) => {
  const [name, setName]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [subject, setSubject]: any = useState("");
  const [message, setMessage]: any = useState("");

  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const { register } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (formData) => {
  //   window.location.href = `mailto:dbenavides@mail.sfsu.edu?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  // };
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center px-10">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-amber-400 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-center">
          I{"'"}ve got what you need.{" "}
          <span className=" decoration-amber-100/50 underline">
            Let{"'"}s talk
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-amber-500 h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl xl:text-2xl">
              {pageInfo.phoneNumber}
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-amber-500 h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl xl:text-2xl">{pageInfo.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-amber-500 h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl xl:text-2xl">{pageInfo.address}</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="customInput"
              type="text"
              id="name"
              name="name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="customInput"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="customInput"
            type="text"
            id="subject"
            name="subject"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="customInput"
            id="message"
            name="message"
          />
          <button
            type="submit"
            className="bg-amber-500 py-5 px-10 rounded-md font-bold text-black hover:text-white text-xl uppercase"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
