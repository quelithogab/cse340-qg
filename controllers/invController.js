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
invCont.buildDetail = async (req, res, next) {
    const inventory_id = req.params.inventoryId;
    const vehicleData = await invModel.getInventoryByDetail(inventory_id)
    const itemDetails = await utilities.buildItemDetails(vehicleData)
    let nav = await utilities.getNav()
    const itemName = data[0].item_name
    res.render("./inventory/item", {
      title: itemName,
      nav,
      itemDetails,
    })
}


module.exports = invCont

