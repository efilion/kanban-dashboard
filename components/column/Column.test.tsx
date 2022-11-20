import React from 'react';
import { render } from '@testing-library/react';
import Column from './Column';

test('renders component', () => {
    render(<Column id={1} title={"Incoming Bugs"} cards={[]} />);
})