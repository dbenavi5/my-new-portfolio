import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { PageInfo } from '../typings';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

type Props = {
  pageInfo: PageInfo,
}

const Contact = ({pageInfo}: Props) => {

    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
      window.location.href =`mailto:dbenavides@mail.sfsu.edu?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  };
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
            <p className="text-lg md:text-xl xl:text-2xl">{ pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-amber-500 h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl xl:text-2xl">{ pageInfo.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-amber-500 h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl xl:text-2xl">{ pageInfo.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="customInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="customInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="customInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="customInput"
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
}

export default Contact