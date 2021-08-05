import './App.css';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Center,
  Button, ButtonGroup, Field
} from "@chakra-ui/react"
import axios from "axios"
import {useState} from "react"
function App() {

  const [data, setData] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("DATA: ", data)
    axios({
      cors: {
        origin: "http://localhost:3000",
        methods: ["POST"]
      },
      method : "POST",
      url: "http://localhost:3001/api",
      headers: {
        "Content-type" : "application/json",
      },
      data : JSON.stringify({ email : data})
    })
  }

  const handleEmail = (event) => {
    setData(event.target.value)
  }
  
  return (
    <Center>
      <Box style={{width: "80%"}} >
        <Box >
            <Center>
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="test@test.com" value={data} onChange={handleEmail}/>
                  </FormControl>
                  <Button width="full" mt={4} type="submit">
                    Subscribe
                  </Button>
                </form>
            </Center>
        </Box>
      </Box>
    </Center>
  );
}

export default App;
