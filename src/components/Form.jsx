import { useState } from "react";

const Form = () => {
    const [inputValue, setInputValue] = useState({
        user: "",
        email: "",
    });

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            user: inputValue.user,
            email: inputValue.email,
        };

        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            });

            const data = await res.json();
            console.log("Data Posted:", data);
        } catch (error) {
            console.log("Error posting data:", error);
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="User"
                    name="user"
                    value={inputValue.user}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={inputValue.email}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Form;
