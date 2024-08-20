import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RequestLogList } from "./requestLog/RequestLogList";
import { RequestLogCreate } from "./requestLog/RequestLogCreate";
import { RequestLogEdit } from "./requestLog/RequestLogEdit";
import { RequestLogShow } from "./requestLog/RequestLogShow";
import { UrlList } from "./url/UrlList";
import { UrlCreate } from "./url/UrlCreate";
import { UrlEdit } from "./url/UrlEdit";
import { UrlShow } from "./url/UrlShow";
import { RequestParameterList } from "./requestParameter/RequestParameterList";
import { RequestParameterCreate } from "./requestParameter/RequestParameterCreate";
import { RequestParameterEdit } from "./requestParameter/RequestParameterEdit";
import { RequestParameterShow } from "./requestParameter/RequestParameterShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"RequestScheduler"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="RequestLog"
          list={RequestLogList}
          edit={RequestLogEdit}
          create={RequestLogCreate}
          show={RequestLogShow}
        />
        <Resource
          name="Url"
          list={UrlList}
          edit={UrlEdit}
          create={UrlCreate}
          show={UrlShow}
        />
        <Resource
          name="RequestParameter"
          list={RequestParameterList}
          edit={RequestParameterEdit}
          create={RequestParameterCreate}
          show={RequestParameterShow}
        />
      </Admin>
    </div>
  );
};

export default App;
