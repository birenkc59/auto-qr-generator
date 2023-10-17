import { render, screen } from '@testing-library/react';
import AutoQRGenerator from './AutoQRGenerator';

test('renders QR code component successfully', () => {
  render(<AutoQRGenerator />);
  const linkElement = screen.getByText(/AUTO QR GENERATOR/i);
  expect(linkElement).toBeInTheDocument();
});
