exports.getName = async(req, res)=>{

    res.status(200).json({
        "data": "this is user data"
    })
}


exports.getCity = async(req, res)=>{

    res.status(200).json({
        "data": "this is user city"
    })
}