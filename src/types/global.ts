 type TError ={
    data:{
        message:string,
        stack:string,
        sucess:boolean
    }
    status:number
 }
 export type Tresponse = {
 data?:any;
  error?: TError 
}