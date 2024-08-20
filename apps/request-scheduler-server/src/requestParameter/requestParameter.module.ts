import { Module } from "@nestjs/common";
import { RequestParameterModuleBase } from "./base/requestParameter.module.base";
import { RequestParameterService } from "./requestParameter.service";
import { RequestParameterController } from "./requestParameter.controller";
import { RequestParameterResolver } from "./requestParameter.resolver";

@Module({
  imports: [RequestParameterModuleBase],
  controllers: [RequestParameterController],
  providers: [RequestParameterService, RequestParameterResolver],
  exports: [RequestParameterService],
})
export class RequestParameterModule {}
