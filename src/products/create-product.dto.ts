import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
  @ApiProperty()
  productName: string;
  @ApiProperty()
  productDescription: string;
  @ApiProperty()
  productCost: number;
  @ApiProperty({
    type: [String],
  })
  productPicture: string[];
}