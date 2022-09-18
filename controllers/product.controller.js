const test = require("../models/test.model");

exports.getName = async(req, res)=>{

    res.status(200).json({
        "data":"this is product name"
    })
}

exports.getArray= async(req, res)=>{

    
    res.status(200).json({
        "data":test
    })
}

exports.addElement = async(req, res)=>{

    const ele = req.body.element;

    test.push(ele);

    res.status(201).json({
        "data":"element added"
    })

}