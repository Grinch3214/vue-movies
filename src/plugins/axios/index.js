import axios from 'axios'
import intercepors from './intercepors';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
	params: {
		apikey: process.env.VUE_APP_API_KEY,
		plot: 'full'
	}
});
intercepors(instance);

export default instance;