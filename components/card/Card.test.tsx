import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('renders component', () => {
    render(<Card id={1} title={"Lightbox loading issue on Safari"} />);
})