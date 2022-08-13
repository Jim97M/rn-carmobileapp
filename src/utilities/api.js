import Axios from 'axios';

const apiUrl = 'http://192.168.100.254/image/';

export const singleFileUpload = async(data) => {
    try{
       await Axios.post(apiUrl + 'singleFile', data);
    }catch(error){
        throw error;
    }
}

export const getSingleFiles = async () => {
    try {
        const {data} = await Axios.get(apiUrl + 'getSingleFile');
        return data;
    } catch (error) {
        throw error;
    }
}