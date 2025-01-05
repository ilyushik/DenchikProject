import instance from './axios.js'

class RESTClient {
    async create(url, value) {
        try {
            await instance.post(url, JSON.stringify(value))
        } catch(err) {
            console.log(err)
        }
    }

    async getByValue(url, value) {
        try {
            const res = await instance.post(url, JSON.stringify(value))
            return res.data
        } catch(err) {
            console.log(err)
        }
    }
}

const client = new RESTClient()

const order = {
    firstName: "Billy",
    lastName: "Herington",
    phone: "88005553535",
    email: "dungeon@gmail.com",
    cart: [
        {
            productId: 2,
            amount: 4,
            size: "XL"
        }
    ],
    courierDelivery: {
        city: "Kiev",
        adress: "qwertyugvhbjktrtcgvhfufhy"
    }
}

const mark = {
    productId: 2,
    mark: 8
}

const comment = {
    productId: 1,
    text: "Сыграем в гвинт?"
}

const idObj = {
    productId: 1
}

const filters = {
    brands: [
        "Adidas"
    ],
    minPrice: -1,
    maxPrice: -1
}

//client.create("/Order", order)
//client.create("/Product/CreateMark", mark)
//client.create("/Product/CreateComment", comment)

console.log(await client.getByValue("/Product/GetElementById", idObj))
console.log(await client.getByValue("/Product/GetProductsByFilters", filters))