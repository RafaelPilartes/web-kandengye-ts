import axios from 'axios'
import { BaseURL } from '../utils/urlApi'

// export function saveNewsInformations(data: any): Promise<string> {
//     return new Promise((resolve, reject) => {

//         const url = `${BaseURL}/save_get_articles.php`;
//         axios.post(url, data)
//             .then((resData) => {
//                 //console.log(resData)
//                 resolve("save");
//             })
//             .catch((error) => {
//                 console.log(error);

//                 reject("news not save");
//             });
//     });
// }

export function getAllUsers(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const url = `${BaseURL}/getUsers.php`
    axios
      .get(url)
      .then(resData => {
        resolve(resData.data as any[])
      })
      .catch(error => {
        console.log(error)

        reject('news not save')
      })
  })
}
