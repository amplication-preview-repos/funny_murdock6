import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UrlTitle } from "../url/UrlTitle";

export const RequestLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Response" multiline source="response" />
        <TextInput label="Status" source="status" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <ReferenceInput source="url.id" reference="Url" label="Url">
          <SelectInput optionText={UrlTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
