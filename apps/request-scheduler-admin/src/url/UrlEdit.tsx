import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RequestLogTitle } from "../requestLog/RequestLogTitle";
import { RequestParameterTitle } from "../requestParameter/RequestParameterTitle";

export const UrlEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <NumberInput step={1} label="Interval" source="interval" />
        <ReferenceArrayInput
          source="requestLogs"
          reference="RequestLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestLogTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="requestParameters"
          reference="RequestParameter"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestParameterTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
