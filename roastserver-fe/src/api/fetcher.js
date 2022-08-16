const axios = require("axios");

const fetcher = (url) => axios.get(url).then((result) => result.data);

export default fetcher;
