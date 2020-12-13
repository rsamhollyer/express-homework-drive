const e = require("express")
const models = require("./models")

const layouts = {
    partials: {
        head: "/partials/header",
        foot: "/partials/footer"
    }

}

const home = (req, res) => {
    res.render("index", {
        ...layouts,
        locals: {
            title: "Home",
            greet: "Hello BIRB"
        }
    })
}

const products = (req, res) => {
    res.render("products", {
        ...layouts,
        locals: {
            title: "Products",
            products: models.displayProduct(),
        }
    })
}

const productDetails = (req, res) => {
    const {
        unique
    } = req.params;
    res.render("singleproduct", {
        ...layouts,
        locals: {
            title: models.singleProductDisplay(unique).name,
            price: models.singleProductDisplay(unique).price,
            color: models.singleProductDisplay(unique).color,
            description: models.singleProductDisplay(unique).description,
        }
    })
}



const employeeRender = (req, res) => {
    res.render("employees", {
        ...layouts,
        locals: {
            title: "Employees",
            employeeDate: models.employeeListing(),
            // employeeID:
        }
    })
}

const anEmployee = (req, res) => {
    const {
        id
    } = req.params;

    const employee = models.singleEmployee(id)
    const fullName = `${employee.firstName} ${employee.lastName}`

    res.render("an-employee", {
        ...layouts,
        locals: {
            title: fullName,
            employeeDetail: employee,
        }
    })
}
module.exports = {
    home,
    products,
    productDetails,
    employeeRender,
    anEmployee,
}