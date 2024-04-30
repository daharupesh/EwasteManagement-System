const path = require("path")
const fileUpload = (req, res, next)=>{
    const file = req.files;
    if(!file){
        res.status(404).json("file is missing")
    }
    if(!file.image) res.status(400).json("file name must start with image")
    let filename = file.image.name;
    const fileToUpload = path.join(__dirname, "..", "uploads");
    const filePath = path.join(fileToUpload, filename)
    file.image.mv(filePath, err=>{
        if(err) res.status(500).json(err)
        req.filename = filePath;
        next()
    })
}

module.exports = fileUpload