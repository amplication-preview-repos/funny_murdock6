import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UrlTitle } from "../url/UrlTitle";

export const RequestLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Response" multiline source="response" />
        <TextInput label="Status" source="status" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <ReferenceInput source="url.id" reference="Url" label="Url">
          <SelectInput optionText={UrlTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
