// interfaces.ts
export interface IProduct {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface IProductManager {
    createProduct(data: { name: string; price: number }): IProduct;
    getProducts(): IProduct[];
    getOneProduct(id: number): IProduct | undefined;
    updateProduct(id: number, data: { name?: string; price?: number }): IProduct | undefined;
    deleteProduct(id: number): { message: string };
  }
  