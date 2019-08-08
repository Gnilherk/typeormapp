// import { Accounts } from 'meteor/accounts-base'
import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { App } from "/imports/ui/App";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "/graphql"
  // request: (operation) =>
  //   operation.setContext(() => ({
  //     headers: {
  //       authorization: Accounts._storedLoginToken(),
  //     },
  //   })),
});

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById("react-target")
  );
});
