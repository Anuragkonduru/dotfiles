import { connect, db } from "./db";
import { products } from "./schema";

const insert_data = [
  {
    product_id: 1000001,
    productname: "Arc stride Casual",
    description: "Breathable mesh keeps your feet cool and comfy all day.",
    category_id: 1,
    inventory_id: "Stock_001",
    price: 1000,
    discount_id: "discount_001",
    review_id: "review_001",
    created_at: new Date(),
    modified_at: new Date(),
  },
{product_id:1000001,product_name:”Arc stride Casual“,description:”Breathable mesh keeps your feet cool and comfy all day.“,category_id:1,inventory_id:”Stock_001“,price:1000,discount_id:”discount_001“,review_id:”review_001“,created_at:new Date(),modified_at:new Date(),},
{product_id:1000002,product_name:”Arc stride Fun“,description:”Lightweight comfort for your everyday adventures.“,category_id:1,inventory_id:”Stock_002“,price:1000,discount_id:”discount_002“,review_id:”review_002“,created_at:new Date(),modified_at:new Date(),},
{product_id:1000003,product_name:”Arc stride Float“,description:”Effortless style meets plush cushioning.“,category_id:1,inventory_id:”Stock_003“,price:1500,discount_id:”discount_003“,review_id:”review_003“,created_at:new Date(),modified_at:new Date(),},
{product_id:1000004,product_name:”Arc stride funck“,description:”Crafted with a breathable mesh upper that allows air to circulate, keeping your feet cool and dry during everyday wear. “,category_id:1,inventory_id:”Stock_004“,price:1600,discount_id:”discount_004“,review_id:”review_004“,created_at:new Date(),modified_at:new Date(),},
{product_id:1000005,product_name:”Arc stride flat“,description:”Featuring a cushioned heel, such as a memory foam insole, for superior comfort on your feet.“,category_id:2,inventory_id:”Stock_005“,price:1799,discount_id:”discount_005“,review_id:”review_005“,created_at:new Date(),modified_at:new Date(),},
{product_id:1000006,product_name:”Arc stride point“,description:”Stay cool and comfortable all day long with our breathable mesh design.“,category_id:2,inventory_id:”Stock_006“,price:1599,discount_id:”discount_006“,review_id:”review_006“,created_at:new Date(),modified_at:new Date(),},
{product_id:1000007,product_name:”Arc stride jump“,description:”Experience ultimate comfort with our plush cushioning and supportive fit.“,category_id:2,inventory_id:”Stock_007“,price:1299,discount_id:”discount_007“,review_id:”review_007“,created_at:new Date(),modified_at:new Date(),},
{product_id:1000008,product_name:”Arc stride style“,description:”Conquer your daily routine with ease thanks to the lightweight and flexible construction.“,category_id:3,inventory_id:”Stock_008“,price:1999,discount_id:”discount_008“,review_id:”review_008“,created_at:new Date(),modified_at:new Date(),},
{product_id:1000009,product_name:”Arc Groove“,description:”Perfect for the on-the-go individual who needs comfortable shoes for all-day wear.“,category_id:3,inventory_id:”Stock_014“,price:1899,discount_id:”discount_009“,review_id:”review_009“,created_at:new Date(),modified_at:new Date(),},
{product_id:1000010,product_name:”Arc Cruise“,description:”Ideal for casual outings and everyday adventures.“,category_id:4,inventory_id:”Stock_015“,price:2500,discount_id:”discount_010“,review_id:”review_010“,created_at:new Date(),modified_at:new Date(),},
{product_id:1000011,product_name:”Arc Glide“,description:”A must-have for those who prioritize comfort and breathability in their footwear.“,category_id:4,inventory_id:”Stock_016“,price:2599,discount_id:”discount_011“,review_id:”review_011“,created_at:new Date(),modified_at:new Date(),},
{product_id:1000012,product_name:”Arc Bliss“,description:”Add a call to action: "Walk in comfort, order yours today!"“,category_id:4,inventory_id:”Stock_017“,price:2899,discount_id:”discount_012“,review_id:”review_012“,created_at:new Date(),modified_at:new Date(),},
{product_id:1000013,product_name:”Arc Flow“,description:”Stepping out the door on a warm day, your feet feeling cool and fresh thanks to the breathable mesh upper.“,category_id:5,inventory_id:”Stock_018“,price:2669,discount_id:”discount_013“,review_id:”review_013“,created_at:new Date(),modified_at:new Date(),},
{product_id:1000014,product_name:”Arc Chill“,description:”The feeling of walking on clouds with our plush memory foam insoles.“,category_id:5,inventory_id:”Stock_019“,price:2559,discount_id:”discount_014“,review_id:”review_014“,created_at:new Date(),modified_at:new Date(),},
{product_id:1000015,product_name:”Arc Blood“,description:”: Your daily grind in comfort and style with these lightweight and flexible shoes.“,category_id:5,inventory_id:”Stock_020“,price:2500,discount_id:”discount_015“,review_id:”review_015“,created_at:new Date(),modified_at:new Date(),},

];

export async function reinit() {
  const connection = await connect;
  const database = await db;
  await database.delete(products);
  await database.insert(products).values();
  connection.end();
  return true;
}
