//database related services
//blog related service


import conf from "../conf/conf";
import {Client, ID,Databases,Storage,Query, Account} from "appwrite";

export class Service{
    client = new Client();
    databases;//variable to use
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);//from documentation of appwrite

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
        //this.databases = new Databases(this.client); creates a new Databases instance using the client, 
        //allowing you to interact with Appwrite's database services (CRUD operations on collections/documents).
    }

    //to create new post by user
    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(//cretaedocument is from documentation
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }

            )
        }catch(error){
            console.log("Appwrite service :: createPost :: error",error);
        }
    }

    async updatepost(slug, {title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(     //from appwrite documentation
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
            
        } catch (error) {
            console.log("appwrite services updatepost ",error);
        }

    }

    async deletepost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
            
        } catch (error) {
            console.log("appwrite service delete post error",error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("appwrite service getpost error",error);
            return false
        }
    }

    async getPosts(quaries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                quaries,


            )
        } catch (error) {
            console.log("appwrite services, getposts , error",error);
            
        }
    }

    //file upload services
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("appwrite service :: upload file :: error",error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("appwrite :: deletefile :: error",error);

            return false;
            
        }
    }
    
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()   //created objects of service class
export default service