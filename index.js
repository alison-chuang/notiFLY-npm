import axios from "axios";

const pushMember = async (body, apiKey) => {
    try {
        const url = "https://gotolive.online/api/1.0/members/";
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey,
            },
        };
        const response = await axios.post(url, body, config);
        return response.data;
    } catch (e) {
        console.error(e.message, e.response.data);
        return { message: e.message, responseData: e.response.data };
    }
};

const updateMember = async (body, apiKey) => {
    try {
        const url = "https://gotolive.online/api/1.0/members/";
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey,
            },
        };
        const response = await axios.put(url, body, config);
        return response.data;
    } catch (e) {
        console.error(e.message, e.response.data);
        return { message: e.message, responseData: e.response.data };
    }
};

const deleteMember = async (body, apiKey) => {
    try {
        const url = "https://gotolive.online/api/1.0/members/";
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey,
            },
        };
        const response = await axios.delete(url, body, config);
        return response.data;
    } catch (e) {
        console.error(e.message, e.response.data);
        return { message: e.message, responseData: e.response.data };
    }
};

const pushOrder = async (body, apiKey) => {
    try {
        const url = "https://gotolive.online/api/1.0/members/";
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey,
            },
        };
        await axios.post(url, body, config);
        return response.data;
    } catch (e) {
        console.error(e.message, e.response.data);
        return { message: e.message, responseData: e.response.data };
    }
};

const deleteOrder = async (body, apiKey) => {
    try {
        const url = "https://gotolive.online/api/1.0/members/";
        const config = {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey,
            },
        };
        await axios.put(url, body, config);
        return response.data;
    } catch (e) {
        console.error(e.message, e.response.data);
        return { message: e.message, responseData: e.response.data };
    }
};

export { pushMember, updateMember, deleteMember, pushOrder, deleteOrder };
