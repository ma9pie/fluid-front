import { render, screen } from '@testing-library/react';

import Footer from '@/components/layout/Footer';

jest.mock('next/router', () => require('next-router-mock'));

test('', async () => {
  render(<Footer></Footer>);
  await screen.findAllByText(/All Rights Reserved/);
});
