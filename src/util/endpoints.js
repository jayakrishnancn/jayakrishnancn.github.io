let USE_LOCAL = true
let BASE_URL = USE_LOCAL ? "" : "https://jayakrishnan-cn.firebaseio.com"


const PROJECT_LIST   =  BASE_URL + '/project_list.json';
const BLOG_POSTS  =  BASE_URL + '/blogposts.json';
const PROJECT     =  BASE_URL + '/project.json';
const BLOG_ARTICLE=  BASE_URL + '/article.json';

const endpoints ={
    PROJECT_LIST,
    BLOG_POSTS,
    PROJECT,
    BLOG_ARTICLE,
}

console.log(endpoints)


export default endpoints;