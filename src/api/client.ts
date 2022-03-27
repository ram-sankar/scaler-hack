import { ApiResponse, create } from 'apisauce';
import authStorage from '../auth/storage'

const apiClient = create({
  baseURL: 'https://fin-fam.herokuapp.com'
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
})

const { get } = apiClient;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig) as ApiResponse<any, any>;
  return response;
};

export default apiClient;