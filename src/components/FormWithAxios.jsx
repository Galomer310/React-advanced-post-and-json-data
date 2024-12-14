import { useState } from "react";

const FormWithAxios = () => {

    const [inputValue, setInputValue] = useState({
        userId: "",
        title: "",
        body: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prevState) => ({...prevState,[name]: value,}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            userId: inputValue.userId,
            title: inputValue.title,
            body: inputValue.body,
        };

        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/posts" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
          });
          
          const data = await res.json();
          console.log("Data Posted:", data);
        } catch (error) {
            console.log("Error posting data", error)
        }
    };


    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="userId"
            placeholder="User Id"
            value={inputValue.userId}
            onChange={handleChange}
            />
            <input 
            type="text"
            name="title"
            placeholder="title"
            value={inputValue.title}
            onChange={handleChange}
            />            
            <input 
            type="text"
            name="body"
            placeholder="body"
            value={inputValue.body}
            onChange={handleChange}
            />
            <button type="submit">Submit Button</button>
        </form>
        </>
    );
};
export default FormWithAxios;