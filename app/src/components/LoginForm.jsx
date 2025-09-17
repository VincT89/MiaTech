import React from "react";
import { useState } from "react";

export const LoginForm = () => {
	const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handlerSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  }

	return (
		<form onSubmit={handlerSubmit} className="flex flex-col gap-4 items-center justify-center mt-100">
			<input
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Username"
				className="mt-4 p-2 border"
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
        className="mt-4 p-2 border"
      />
      <button type="submit" className="rounded mt-5 w-">Submit</button>
		</form>
	);
};
