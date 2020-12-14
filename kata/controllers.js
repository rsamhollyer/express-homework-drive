const layouts = {
    partials: {
        head:"/partials/headers",
        foot:"/partials/footers"
    }
}

const home = (req, res) => {
    res.render("index", {
        ...layouts,
        locals:{
            greeting:"Hello World"
        }
    })
}


module.exports= {
    home,
}