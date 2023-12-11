import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { Pesquisar } from '@/components/Pages/Pesquisar';

jest.mock('axios');

describe('Testes para Pesquisar.tsx', () => {
  test('Pesquisa correta após o clique no botão de pesquisa', async () => {
    const mockedData = {
      total_gazettes: 2,
      gazettes: [
        {
          date: '2023-11-22',
          edition: '96',
          url: 'https://querido-diario.nyc3.cdn.digitaloceanspaces.com/2305233/2023-11-22/f5447aa9602ac6ea6a97afcc3547b937cedc8bdf',
          txt_url: 'https://querido-diario.nyc3.cdn.digitaloceanspaces.com/2305233/2023-11-22/f5447aa9602ac6ea6a97afcc3547b937cedc8bdf.txt',
        },
        {
          date: '2023-11-20',
          edition: '94',
          url: 'https://querido-diario.nyc3.cdn.digitaloceanspaces.com/2305233/2023-11-20/922daee11e118a0e93133ebfbe34564d58c3eb69',
          txt_url: 'https://querido-diario.nyc3.cdn.digitaloceanspaces.com/2305233/2023-11-20/922daee11e118a0e93133ebfbe34564d58c3eb69.txt',
        },
      ],
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ status: 200, data: mockedData });

    render(<Pesquisar />);
    fireEvent.change(screen.getByPlaceholderText('Sobre o que você quer saber?'), { target: { value: 'Licitação' } });
    fireEvent.change(screen.getByRole(''), { target: { value: '2305233' } });
    fireEvent.change(screen.getByLabelText('Data Inicial:'), { target: { value: '2023-11-07' } });
    fireEvent.change(screen.getByLabelText('Data Final:'), { target: { value: '2023-12-01' } });

    fireEvent.click(screen.getByText('Pesquisar'));

    await waitFor(() => {
      expect(screen.getByText('O assunto "teste" foi citado 20 vezes no período:')).toBeInTheDocument();
      expect(screen.getAllByRole('button', { name: /\d+/ })).toHaveLength(2); // Teste para a paginacao
    });
  });
});