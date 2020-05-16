import axios from "axios";

export async function getResults(id) {
    const data = new FormData()
    data.append('id', id)
    return await axios.post("/results", data)      
}

