import options from "./data/layoutOptions.js";

import {
  hideSearch,
  printNavBar,
  printFooter,
  printIcons,
} from "./modules/printLayout.js";
import removeProduct from "./modules/removeProduct.js";
import printCartCards from "./modules/printCartCards.js";
import printCartTotal from "./modules/printCartTotal.js";

hideSearch();
printIcons();
printNavBar(options, "navbar");
printFooter(options, "footer");

printCartCards("productscart","66392505663e1866d398177a");
//printCartTotal(cartproducts, "total");
