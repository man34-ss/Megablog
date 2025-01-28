import conf from '../conf/conf.js';
import {Client,Account, ID} from "appwrite";
//services declared here 
//required services like log in, logout ,creation of acc
//user related services
export class AuthService{
        client = new Client();
        account;

        constructor() {
            this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client);
        }

        async createAccount({email,password,name}){
            try{
              const userAccount =  await this.account.create(ID.unique(),email,password,name);  //appwrite documentation given function
              if(userAccount){
                //if account create call another method like login successful
                return this.login({email,password});//if usern account is created log in hime directly
              }else{
                return userAccount;
              }
            }catch(error){
                throw error;

            }
        }

        async login(email,password){
            try{
                return await this.account.createEmailPasswordSession(email,password);
            }catch(error){
                throw error;
            }
        }

        async getCurrentuser(){
            try{
               return await this.account.get();
            }catch(error){
                console.log("appwrite service");
            }
            return null;
        }

        async logout(){
            try {
              await this.account.deleteSessions();  
            } catch (error) {
                console.log("appwrite service - logout");
            }
        }

}

const authService = new AuthService();//created object of auth service and exported it

export default authService