interface Billboard {
    id: string,
    label:string,
    imageUrl: string
}

interface Category {
    id: string,
    name: string,
    billboard: Billboard
}