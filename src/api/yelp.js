import axios from 'axios'

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers:{
    Authorization: 'Bearer 4c5-9nvQjWGY3FjcEm9IxG2BGnA0u9aCbH6E71pbRU5ZBJ8yucD4pTXIu6SmhzODivuc2OaSIPPmRI3d07khx4DQx_nqSWdR4-5n3KOv5i9NbH2CcFqix5axRSqPXnYx'
  }
});