export interface Product {
  id: string,
  title: string,
  condition: string,
  thumbnail_id: string,
  initial_quantity: number,
  catalog_product_id: string,
  listing_type_id: string,
  permalink: string,
  buying_mode: string,
  site_id: string,
  category_id: string,
  domain_id: string,
  thumbnail: string,
  currency_id: string,
  order_backend: number,
  price: number,
  original_price: any,
  sale_price: any,
  available_quantity: number,
  official_store_id: number,
  official_store_name: string,
  use_thumbnail_id: boolean,
  accepts_mercadopago: boolean,
  shipping: {},
  stop_time: string,
  seller: {},
  attributes: [],
  installments: {},
  winner_item_id: any,
  catalog_listing: boolean,
  discounts: any,
  promotions: [],
  pictures: [
    {
      id: string,
      url: string,
    }
  ],
  inventory_id: string
}

export interface CartProduct extends Product {
  order_quantity: string,
}
