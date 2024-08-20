/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RequestLogService } from "../requestLog.service";
import { RequestLogCreateInput } from "./RequestLogCreateInput";
import { RequestLog } from "./RequestLog";
import { RequestLogFindManyArgs } from "./RequestLogFindManyArgs";
import { RequestLogWhereUniqueInput } from "./RequestLogWhereUniqueInput";
import { RequestLogUpdateInput } from "./RequestLogUpdateInput";

export class RequestLogControllerBase {
  constructor(protected readonly service: RequestLogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RequestLog })
  async createRequestLog(
    @common.Body() data: RequestLogCreateInput
  ): Promise<RequestLog> {
    return await this.service.createRequestLog({
      data: {
        ...data,

        url: data.url
          ? {
              connect: data.url,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        response: true,
        status: true,
        timestamp: true,
        updatedAt: true,

        url: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [RequestLog] })
  @ApiNestedQuery(RequestLogFindManyArgs)
  async requestLogs(@common.Req() request: Request): Promise<RequestLog[]> {
    const args = plainToClass(RequestLogFindManyArgs, request.query);
    return this.service.requestLogs({
      ...args,
      select: {
        createdAt: true,
        id: true,
        response: true,
        status: true,
        timestamp: true,
        updatedAt: true,

        url: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RequestLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async requestLog(
    @common.Param() params: RequestLogWhereUniqueInput
  ): Promise<RequestLog | null> {
    const result = await this.service.requestLog({
      where: params,
      select: {
        createdAt: true,
        id: true,
        response: true,
        status: true,
        timestamp: true,
        updatedAt: true,

        url: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: RequestLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRequestLog(
    @common.Param() params: RequestLogWhereUniqueInput,
    @common.Body() data: RequestLogUpdateInput
  ): Promise<RequestLog | null> {
    try {
      return await this.service.updateRequestLog({
        where: params,
        data: {
          ...data,

          url: data.url
            ? {
                connect: data.url,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          response: true,
          status: true,
          timestamp: true,
          updatedAt: true,

          url: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: RequestLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRequestLog(
    @common.Param() params: RequestLogWhereUniqueInput
  ): Promise<RequestLog | null> {
    try {
      return await this.service.deleteRequestLog({
        where: params,
        select: {
          createdAt: true,
          id: true,
          response: true,
          status: true,
          timestamp: true,
          updatedAt: true,

          url: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
