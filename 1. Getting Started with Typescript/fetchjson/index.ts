import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';
interface Data  {
  id: number; title: string; body: string;}
axios.get(url).then((usr)=>{
  const posts = usr.data as Data ;

  const id = posts.id;
  const title = posts.title;
  const body = posts.body;
  logPosts(id,title,body)});

const logPosts = (id:number,title: string,body:string) => {
  console.log(id,title,body)
}
