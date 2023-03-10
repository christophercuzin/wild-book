import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Input from "../components/Input"
import { wildersService } from "../service/wildersService/wildersService";

const AddWilder = (props) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
  return (
    <div className="form-container">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await wildersService.createWilder(name, email, city)
          navigate("/")
        }}
        className="form"
      >
        <Input
          value={name}
          inputName="name"
          label="Name"
          type="text"
          state={setName}
        />
        <Input
          value={email}
          inputName="email"
          label="Email"
          type="email"
          state={setEmail}
        />
        <Input
          value={city}
          inputName="city"
          label="City"
          type="text"
          state={setCity}
        />
        <div className="input-container">
          <button type="submit">Add Wilder</button>
        </div>
      </form>
    </div>
  )
}

export default AddWilder