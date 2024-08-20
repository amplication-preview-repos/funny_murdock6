import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { URL_TITLE_FIELD } from "../url/UrlTitle";

export const RequestParameterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Url" source="url.id" reference="Url">
          <TextField source={URL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
