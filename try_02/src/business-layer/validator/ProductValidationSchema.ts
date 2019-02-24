import { Length, MinLength, MaxLength, IsEmail, ValidateNested, IsNotEmpty } from "class-validator";

export class ProductValidationSchema {
    // sample validations
    @Length(4, 40)
    name: string;

    @MinLength(2, { message: 'This is too short' })
    @MaxLength(400, { message: 'This is too long' })
    description: string;

    @Length(3, 20)
    category: string;

    @IsEmail()
    feedbackEmail: string;

    @MinLength(3, { message: 'Invalid ownerId' })
    @MaxLength(15, { message: 'Invalid ownerId' })
    ownerId: string;

    createdAt: Date;
    modifiedAt: Date;

    @ValidateNested()
    desc: Description[];
    brand: Brand;
    shipping: Shipping;
    attrs: Attrs[];

    constructor(product: any) {
        this.name = product.name;
        this.description = product.description;
        this.category = product.category;
        this.feedbackEmail = product.feedbackEmail;
        this.ownerId = product.ownerId;
        this.desc = product.desc;
        this.brand = product.brand;
        this.shipping = product.shipping;
        this.attrs = product.attrs;
    }
}

export class Description {
    @IsNotEmpty()
    @Length(3, 20)
    lang: string;

    @MinLength(3, { message: 'Entry is too short' })
    @MaxLength(400, { message: 'Entry is too long' })
    val: string
}

export class Brand {
    id: number;
    name: string;
}

export class Shipping {
    dimensions: {
        height: number,
        length: number,
        width: number
    };
    weight: number
}

export class Attrs {
    name: string;
    value: string
}