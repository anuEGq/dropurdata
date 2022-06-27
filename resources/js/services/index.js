const axios = require("axios");

async function getUser() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        return response;
    } catch (error) {
        throw error;
    }
}
async function getSettings() {
  try {
      const response = await axios.get(
          "http://127.0.0.1:8000/api/getsettings"
      );
      return response;
  } catch (error) {
      throw error;
  }
}
async function getAllFileCounts() {
    try {
        const response = await axios.get(
            "http://127.0.0.1:8000/api/getAllFileCounts"
        );
        return response;
    } catch (error) {
        throw error;
    }
  }

  async function getAllFiles() {
    try {
        const response = await axios.get(
            "http://127.0.0.1:8000/api/getAllFileCounts"
        );
        return response;
    } catch (error) {
        throw error;
    }
  }

async function uploadFile(data) {
    try {
        await axios({
            url: "http://127.0.0.1:8000/api/uploadfile",
            method: "POST",
            data: data,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    } catch (error) {
        throw error;
    }
}
async function setSettings(data) {
    try {
        await axios({
            url: "http://127.0.0.1:8000/api/setSettings",
            method: "POST",
            data: data,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    } catch (error) {
        throw error;
    }
}
async function setUser() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        return response;
    } catch (error) {
        throw error;
    }
}

export { getUser,getAllFiles, getAllFileCounts,setUser, uploadFile, setSettings, getSettings };
