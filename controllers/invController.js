const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

/* ***************************
 *  Build inventory by item view
 * ************************** */
invCont.buildDetail = async function (req, res, next) {
    const inventory_id = req.params.id;
    const vehicleData = await invModel.getInventoryByDetail(inventory_id)
    console.log(vehicleData)
    const itemDetails = await utilities.buildItemDetails(vehicleData)
    console.log(vehicleDetails)
    let nav = await utilities.getNav()
    const itemName = itemDetails.item_name
    res.render("./inventory/item", {
      title: itemName,
      nav,
      itemDetails,
    })
}


module.exports = invCont

