import productService from '../services/product-service.js'
import { handleError } from '../utils/handleError.js'
import { productSchema } from '../validations/product-validation.js'
const productController = {
  getAllProducts: async (req, res) => {
    try {
      const { search } = req.query
      const products = await productService.getAllProducts(search)
      res.status(200).json(products)
    } catch (err) {
      handleError(res, err)
    }
  },

  getProductById: async (req, res) => {
    try {
      const { id } = req.params
      const product = await productService.getProductById(id)
      res.status(200).json(product)
    } catch (err) {
      handleError(res, err)
    }
  },

  editProductPage: async (req, res) => {
    try {
      const { productId } = req.params
      const product = await productService.getProductById(productId)
      res.status(200).json(product)
    } catch (err) {
      handleError(res, err)
    }
  },

  editProduct: async (req, res) => {
    try {
      const { id } = req.params
      const productData = req.body
      const { error, value } = productSchema.validate(productData)
      if (error) {
        return res.status(400).json({ message: error.details[0].message })
      }
      const editProductResult = await productService.editProduct(id, value)
      res.status(200).json(editProductResult)
    } catch (err) {
      handleError(res, err)
    }
  },

  createProductPage: async (req, res) => {
    try {
      res.status(200).json({ message: '這是創建商品頁面的json' })
    } catch (err) {
      handleError(res, err)
    }
  },

  createProduct: async (req, res, next) => {
      try {
        const productData = req.body
        const files = req.files || []

        if (!files || files.length === 0) {
          return res.status(400).json({ message: '請至少上傳一張圖片' })
        }

        // 建立商品
        const product = await productService.createProduct(productData, files)

        res.status(201).json({ message: '商品已創建', product })
      } catch (err) {
        next(err)
      }
    },

  deleteProduct: async (req, res) => {
    try {
      const productId = Number(req.params.id)
      if (isNaN(productId)) {
        return res.status(400).json({ message: '商品ID不存在' })
      }

      const deleteProductResult = await productService.deleteProduct(productId)
      res.status(200).json(deleteProductResult)
    } catch (err) {
      handleError(res, err)
    }
  },

  getPaginatedProducts: async (req, res) => {
    try {
      const { page, limit } = req.query
      const products = await productService.getPaginatedProducts(page, limit)
      res.status(200).json(products)
    } catch (err) {
      handleError(res, err)
    }
  },
}

export default productController
