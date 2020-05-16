import axios from "axios";

export async function upload(name, cytokine_data, patients_data) {
    const data = new FormData()
    data.append('name_data', name)
    data.append('cytokines', cytokine_data)
    if (patients_data != null) {
        data.append('patients', patients_data)
    }
    return await axios.post("/upload",data)      
}