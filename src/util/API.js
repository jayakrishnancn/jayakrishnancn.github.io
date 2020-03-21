// in milli-seconds
const CACHE_TIME = 5*60*1000
const CACHE_ENABLED = true
// get 
const get = (url, fn,error) => {
    // setTimeout(() => {
        
        if(!error){
            error = function (){}
        }

        let cachedData = getValidCache(url); // returns data part of LcoalStorage / cache
        
        if(!cachedData){
        console.log(`fetching data for ${url} from server`)
            fetch(url)
            .then(result=>result.json())
            .then(({data})=>{
                    // console.log(`saving to localStorge ${url}`)
                setValidCache(url,data);
                return data
            })
            .then(fn)
            .catch(error)
        }else{
            console.log(`serving ${url} from localCache data`)
            fn(cachedData)
        }
    // },0);
}


// set valid cache
const setValidCache = (key,data) => {

    if(!CACHE_ENABLED || window.localStorage === undefined){
        // console.error('localStorage is not supported')
        return false;
    }

    try{
        let time = Date.now();
        localStorage.setItem(key,JSON.stringify({data,time}));
        // console.log(`${key} saved to localStorage with data ${localStorage.getItem(key)}`)
        return true
    }catch(e){
        return false;
    }
}

const getValidCache = key => {

    if(!CACHE_ENABLED || window.localStorage === undefined){
        return false;
    }

    try{
        let {data,time} = JSON.parse(localStorage.getItem(key));
        if(!time) {
            return false;
        }
        
        let current_time = Date.now()
        if( current_time < time + CACHE_TIME  ){
            // cache is valid
            return data
        }
    }catch(e){
        return false
    }

    return false
}

export default {
    getValidCache,
    setValidCache,
    get
}