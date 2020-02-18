import React, { FC } from 'react';

import { MainLayout } from 'src/components/MainLayout/MainLayout';
import { emptyCart } from 'src/constants/textConstants';

export const EmptyCart: FC = () => (
  <MainLayout>
    <div className="col-md-9 mx-auto jumbotron">
      <h4 className="text-info text-center">{emptyCart}</h4>
    </div>
  </MainLayout>
)