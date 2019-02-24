export interface IProductResponse {
    ownerId: String,
    brand: {
        id: number,
        name: string
    },
    lastUpdated: Date,
    createdAt: Date,
    name: string,
    feedbackEmail: string,
    description: string,
    category: string,
    desc: [{
        lang: string,
        value: string
    }],
    shipping: {
        dimensions: {
            height: number,
            width: number,
            length: number
        },
        weight: number
    },
    attrs: [{
        name: string,
        value: string
    }]
}