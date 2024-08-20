import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UrlTitle } from "../url/UrlTitle";

export const RequestParameterCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceInput source="url.id" reference="Url" label="Url">
          <SelectInput optionText={UrlTitle} />
        </ReferenceInput>
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
