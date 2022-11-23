
import React from 'react';
import { render } from '@testing-library/react';
import Tag from './Tag';

test('renders component', () => {
    render(<Tag key={"Browser"} type={"Browser"} />);
})