import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardDefaultSection1 from '../../example-components/DashboardDefault/DashboardDefaultSection1';

export default function DashboardDefault() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Default"
        titleDescription="This is a dashboard page example built using this template."
      />

      <DashboardDefaultSection1 />
      {/* <DashboardDefaultSection2 />
      <DashboardDefaultSection3 />
      <DashboardDefaultSection4 /> */}
    </Fragment>
  );
}
