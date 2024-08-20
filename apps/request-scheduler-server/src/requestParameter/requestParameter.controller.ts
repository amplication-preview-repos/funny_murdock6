import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RequestParameterService } from "./requestParameter.service";
import { RequestParameterControllerBase } from "./base/requestParameter.controller.base";

@swagger.ApiTags("requestParameters")
@common.Controller("requestParameters")
export class RequestParameterController extends RequestParameterControllerBase {
  constructor(protected readonly service: RequestParameterService) {
    super(service);
  }
}
