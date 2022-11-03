import { gql } from "@apollo/client";
import { useQuery,useMutation } from "@apollo/client";

export const All_Store = gql`
query{
    allStore{
        id,
      storeName,
      storeLogo,
      adminMail,
      storeUrl,
    }
  }
`;
export const  Store_ByID  =  gql`
  query($id:String){
    storeById(id:$id){
        id
        storeName
        storeUrl
        storeLogo
        adminMail
      }
  }
  `;

export const Add_Store = gql`
 mutation($adminMail:String,$storeName:String,$storeLogo:String,$storeUrl:String){
    createStore(adminMail:$adminMail,storeName:$storeName,storeLogo:$storeLogo,storeUrl:$storeUrl){
          store{
        id,
      storeName,
      storeLogo,
      adminMail,
      storeUrl,
          }
    }
  }
`;

export const Delete_Store =gql`
mutation($id:ID){
    deleteStore(id:$id){
        store{
          storeName,
           storeLogo,
           adminMail
         }
      }  
  }

`;
export const Update_Store =gql`
mutation($id:ID,$storeName:String,$storeUrl:String,$adminMail:String,$storeLogo:String,){
  updateStore(id:$id
    ,adminMail:$adminMail
    ,storeLogo:$storeLogo
    ,storeName:$storeName
    ,storeUrl:$storeUrl){
    store{
      storeName,
      storeLogo,
      adminMail
    }
  }
}
`;
