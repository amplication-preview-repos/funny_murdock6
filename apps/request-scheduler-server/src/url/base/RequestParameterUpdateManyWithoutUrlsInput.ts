/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RequestParameterWhereUniqueInput } from "../../requestParameter/base/RequestParameterWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RequestParameterUpdateManyWithoutUrlsInput {
  @Field(() => [RequestParameterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RequestParameterWhereUniqueInput],
  })
  connect?: Array<RequestParameterWhereUniqueInput>;

  @Field(() => [RequestParameterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RequestParameterWhereUniqueInput],
  })
  disconnect?: Array<RequestParameterWhereUniqueInput>;

  @Field(() => [RequestParameterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RequestParameterWhereUniqueInput],
  })
  set?: Array<RequestParameterWhereUniqueInput>;
}

export { RequestParameterUpdateManyWithoutUrlsInput as RequestParameterUpdateManyWithoutUrlsInput };
