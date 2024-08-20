import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RequestParameterServiceBase } from "./base/requestParameter.service.base";

@Injectable()
export class RequestParameterService extends RequestParameterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
