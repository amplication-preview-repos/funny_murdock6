import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { URL_TITLE_FIELD } from "../url/UrlTitle";

export const RequestLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RequestLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Response" source="response" />
        <TextField label="Status" source="status" />
        <TextField label="Timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Url" source="url.id" reference="Url">
          <TextField source={URL_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
