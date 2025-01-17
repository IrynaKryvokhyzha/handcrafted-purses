import Product from "./Product.mjs";
import MongooseCRUDManager from "../MongooseCRUDManager.mjs";

class ProductsDBService extends MongooseCRUDManager {
  /**
   * Конфігурація полів для фільтрації та пошуку (які будемо опрацьовувати).
   */
  static fieldsConfigurations = [
    {
      fieldName: "title",
      filterCategory: "search",
    },
    {
      fieldName: "price",
      filterCategory: "range",
    },
    // {
    //   fieldName: 'seller',
    //   filterCategory: 'list',
    // },
  ];

  /**
   * Отримує список продуктів з урахуванням запиту користувача.
   *
   * @param {Object} reqQuery - Об'єкт з параметрами запиту, включаючи фільтри, сортування та пагінацію.
   * @returns {Promise<Product[]>} - Promise, який вирішується масивом знайдених продуктів.
   */

  //   async getList(filters) {
  //     try {
  //       const res = await super.getList(filters);
  //       return res;
  //     } catch (error) {
  //       return [];
  //     }
  //   }
  async getList(reqQuery) {
    try {
      const res = await this.findManyWithSearchOptions(
        reqQuery,
        ProductsDBService.fieldsConfigurations,
        null
        //   [
        //     {
        //       fieldForPopulation: {
        //         path: "seller",
        //         populate: {
        //           path: "type",
        //         },
        //       },
        //     },
        //   ]
      );

      return res;
    } catch (error) {
      return [];
    }
  }
}

export default new ProductsDBService(Product);
