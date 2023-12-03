import { IProduct, IProductManager } from './interfaces';

class ProductList implements IProductManager {
  private productList: IProduct[] = [];
  private id: number = 1;

  createProduct(data: { name: string; price: number }): IProduct {
    const { name, price } = data;
    const currentDate = new Date();
    const newProduct: IProduct = {
      id: this.id,
      name,
      price,
      createdAt: currentDate,
      updatedAt: currentDate,
    };
    this.productList.push(newProduct);
    this.id++;
    return newProduct;
  }

  getProducts(): IProduct[] {
    return this.productList;
  }

  getOneProduct(id: number): IProduct | undefined {
    return this.productList.find(product => product.id === id);
  }

  updateProduct(id: number, data: { name?: string; price?: number }): IProduct | undefined {
    const index = this.productList.findIndex(product => product.id === id);
    if (index !== -1) {
      const currentDate = new Date();
      const updatedProduct = {
        ...this.productList[index],
        updatedAt: currentDate,
        ...data,
      };
      this.productList.splice(index, 1, updatedProduct);
      return updatedProduct;
    }
    return undefined;
  }

  deleteProduct(id: number): { message: string } {
    const index = this.productList.findIndex(product => product.id === id);
    if (index !== -1) {
      this.productList.splice(index, 1);
      return { message: "Produto deletado." };
    }
    return { message: "Produto não encontrado." };
  }
}

export const productList = new ProductList();

