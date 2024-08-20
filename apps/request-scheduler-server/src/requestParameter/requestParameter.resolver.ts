import * as graphql from "@nestjs/graphql";
import { RequestParameterResolverBase } from "./base/requestParameter.resolver.base";
import { RequestParameter } from "./base/RequestParameter";
import { RequestParameterService } from "./requestParameter.service";

@graphql.Resolver(() => RequestParameter)
export class RequestParameterResolver extends RequestParameterResolverBase {
  constructor(protected readonly service: RequestParameterService) {
    super(service);
  }
}
