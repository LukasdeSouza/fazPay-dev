/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardEmpty from '../../components/CardEmpty';


test('Renderiza corretamente com o título fornecido', () => {
  const title = 'Título do Componente';
  const content = 'Conteúdo do componente';

  render(<CardEmpty title={title}>{content}</CardEmpty>);

  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(content)).toBeInTheDocument();
});