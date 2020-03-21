let USE_LOCAL = false
let BASE_URL = USE_LOCAL ? "" : "https://jayakrishnan-cn.firebaseio.com"


let PROJECT_LIST   =  BASE_URL + '/projects.json';
let BLOG_POSTS  =  BASE_URL + '/blogposts.json';
let PROJECT     =  BASE_URL + '/project.json';
let BLOG_ARTICLE=  BASE_URL + '/article.json';


const endpoints ={
    PROJECT_LIST,
    BLOG_POSTS,
    PROJECT,
    BLOG_ARTICLE,
    getEndpoint(type,id){
        if(type === 'BLOG'){
            return BASE_URL + '/article/' + id + '.json';
        }
        else if (type === 'PROJECT'){
            return BASE_URL + '/project/' + id + '.json';
        }
        return this[type]
    }
}



export default endpoints;