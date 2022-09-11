exports.getName = async(req, res)=>{

    res.status(200).json({
        "data":"this is product name"
    })
}

exports.getPrice= async(req, res)=>{

    res.status(200).json({
        "data":"this is product price"
    })
}