import * as supertest from "supertest";
import { upload } from "../data/helpers";
const request = supertest("https://practice-react.sdetunicorns.com/api/test");

describe("UPLOAD", () => {
  it("upload single document", async () => {
    await request
      .post("/upload/single")
      .attach("single", "data/image/chebu.jpeg")
      .then((el) => {
        expect(el.body.filename).toBe("chebu.jpeg");
      });
  });
  it("upload multiple documents", async () => {
    const files: string[] = ["data/image/chebu.jpeg", "data/image/rom.webp"];
    const res = await upload(files);
    console.log(res.body);
    expect(res.status).toBe(200);
  });
  it("upload multiple documents", async () => {
    const files: string[] = ["data/image/chebu.jpeg", "data/image/rom.webp"];
    const req = request.post('/upload/multiple')

    for(const file of files) {
        req.attach('multiple',file)
    }
    return new Promise((resolve, reject) =>{
       req.end((err, res)=>{
        if(err){
            console.error(err)            
            reject(err)
        }else{
            console.log('Upload successful:', res.body)
            expect(res.status).toBe(200)
            resolve(res)            
        }
       }) 
    })
});
})
