const fs = require('fs');
const data = require('./data.json');

exports.post = function(req, res) {
    if(req.body.name == "") {
        const keys = Object.keys(req.body);

        for(key of keys) {
            if(req.body[key] == "") {
                return res.send("Por favor, preencha todos os campos!")
            }
        }
    }
    let { avatar_url, name, birth, gender, service} = req.body;

    const created_at = Date.now();
    const id = Number(data.instructors.length +1);

    birth = Date.parse(birth);

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        service,
        created_at
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) 
        return res.send("write file error!");
        return res.redirect("/instructors");
    });

};