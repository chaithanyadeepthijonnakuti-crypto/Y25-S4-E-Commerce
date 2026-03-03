import React, { useState } from 'react'

function Cart() { 

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleChange(event) {
    const { name, value } = event.target

    if (name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    }
  }

  function handleSubmit() {
    console.log("Email:", email)
    console.log("Password:", password)
  }

  return (
    <div className="main-content common flex justify-center items-center">
      <table className="bg-white text-black border border-gray-300 shadow-xl rounded-lg">
        <tbody>

          <tr>
            <td className="p-[2vw] text-center" colSpan={2}>
              <h1 className="underline text-2xl font-semibold">
                Signin Here
              </h1>
            </td>
          </tr>

          <tr>
            <td className="p-[2vw]">
              <label htmlFor="email">Email:</label>
            </td>
            <td className="p-[2vw] text-left">
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="border border-gray-500 rounded-md px-4 py-2 bg-white text-black focus:outline-none focus:border-yellow-600 focus:ring-1 shadow-lg"
              />
            </td>
          </tr>

          <tr>
            <td className="p-[2vw]">
              <label htmlFor="password">Password:</label>
            </td>
            <td className="p-[2vw] text-left">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="border border-gray-500 rounded-md px-4 py-2 bg-white text-black focus:outline-none focus:border-yellow-600 focus:ring-1 shadow-lg"
              />
            </td>
          </tr>

          <tr>
            <td className="p-[2vw] text-center" colSpan={2}>
              <button
                onClick={handleSubmit}
                className="bg-indigo-400 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
              >
                Pay Now
              </button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Cart