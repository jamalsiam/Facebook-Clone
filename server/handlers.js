


module.exports.handleData = {
	getData:function(req,res){
		res.json({name:"heeeey there"})
		},
	addData:function(req,res){
		console.log(req.body)
		res.json({name:"heeeey there"})
		}
}

