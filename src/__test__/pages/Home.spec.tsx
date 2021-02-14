import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/Home';

jest.mock('react-router-dom', () => ({
    Link: 'Link',
    Route: ({ children, path }) => children({ match: path === '/somewhere' }),
    useRouteMatch: () => ({ path: '/' }),
}))

describe('Home Page', () => {
    it('should be able to Home', () => {
        const products = [
            {
                quantity: 1,
                product: {
                    id: 1,
                    name: 'Teste',
                    price: 10,
                    score: 10,
                    image: 'imagem.jpg',
                    banner: 'banner.jpg',
                    developer_name: 'Cd projeto vermehlo',
                    categories: 'Ação',
                    ParentalRating: '16',
                    Description: 'Description',
                },
            }
        ]

        const { debug } = render(<Home />)
        debug()
    })
})