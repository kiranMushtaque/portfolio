


"use client";

import { useReducer, FormEvent, ChangeEvent, useEffect } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialState = {
  values: { name: "", email: "", message: "" },
  errors: {} as FormErrors,
  status: "idle" as FormStatus,
};

type FormAction =
  | { type: "UPDATE_FIELD"; field: keyof FormState; value: string }
  | { type: "SET_ERRORS"; errors: FormErrors }
  | { type: "SET_STATUS"; status: FormStatus }
  | { type: "RESET_FORM" };

const formReducer = (state: typeof initialState, action: FormAction) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "SET_STATUS":
      return { ...state, status: action.status };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

export default function Contact() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { values, errors, status } = state;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!values.name.trim()) newErrors.name = "Name is required.";
    if (!values.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!values.message.trim()) newErrors.message = "Message is required.";
    dispatch({ type: "SET_ERRORS", errors: newErrors });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch({ type: "SET_STATUS", status: "submitting" });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    dispatch({
      type: "SET_STATUS",
      status: Math.random() > 0.1 ? "success" : "error",
    });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name as keyof FormState, value });
    if (errors[name as keyof FormErrors]) {
      dispatch({
        type: "SET_ERRORS",
        errors: { ...errors, [name]: undefined },
      });
    }
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        if (status === "success") dispatch({ type: "RESET_FORM" });
        else dispatch({ type: "SET_STATUS", status: "idle" });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div
      id="contact"
      className="contact-container min-h-screen bg-slate-900 flex justify-center items-center p-6"
    >
      <div className="max-w-lg w-full bg-slate-800/60 backdrop-blur-lg p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">Contact</h2>
        <p className="text-slate-400 mb-4">Feel free to contact me</p>
        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={values.name}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-slate-600 rounded-md p-3 text-slate-100 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={values.email}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-slate-600 rounded-md p-3 text-slate-100 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          {/* Message */}
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={values.message}
              onChange={handleInputChange}
              rows={5}
              className="w-full bg-transparent border border-slate-600 rounded-md p-3 text-slate-100 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          {/* Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold py-3 rounded-lg transition disabled:bg-slate-600 disabled:text-slate-400"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
          {/* Status */}
          {status === "success" && (
            <p className="text-green-500 font-medium mt-3">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 font-medium mt-3">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
